"use client";

import { useEffect, useRef, useState } from "react";
import { ColorPickerGroup } from "@/components/color-picker-group";
import { DownloadActions } from "@/components/download-actions";
import { LogoUploader } from "@/components/logo-uploader";
import { QrPreviewCard } from "@/components/qr-preview-card";
import { QrTextField } from "@/components/qr-text-field";
import { TransparencyToggle } from "@/components/transparency-toggle";
import { downloadDataUrl, downloadTextFile } from "@/lib/download";
import { makeQrFilename } from "@/lib/filename";
import { trackGtmEvent } from "@/lib/gtm";
import { renderQrPngDataUrl, renderQrSvgMarkup } from "@/lib/qr";
import { validateLogoFile, validateText } from "@/lib/validation";

type StudioCopy = {
  inputPanelTitle: string;
  previewPanelTitle: string;
  textLabel: string;
  textPlaceholder: string;
  textRule: string;
  foregroundColor: string;
  backgroundColor: string;
  transparentBackground: string;
  logoLabel: string;
  logoHint: string;
  removeLogo: string;
  pngButton: string;
  svgButton: string;
  fileNameLabel: string;
  emptyPreview: string;
  generating: string;
  invalidText: string;
  invalidLogoType: string;
  invalidLogoSize: string;
  renderError: string;
  contrastWarning: string;
};

type QrStudioProps = {
  copy: StudioCopy;
};

export function QrStudio({ copy }: QrStudioProps) {
  const [text, setText] = useState("");
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [transparentBackground, setTransparentBackground] = useState(true);
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [previewPng, setPreviewPng] = useState("");
  const [previewSvg, setPreviewSvg] = useState("");
  const [isRendering, setIsRendering] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [logoErrorText, setLogoErrorText] = useState<string | null>(null);
  const lastTrackedTextRef = useRef("");

  useEffect(() => {
    let cancelled = false;

    async function renderQr() {
      const valid = validateText(text);
      if (!valid) {
        setPreviewPng("");
        setPreviewSvg("");
        lastTrackedTextRef.current = "";
        if (text.length > 0) {
          setErrorText(copy.invalidText);
        } else {
          setErrorText(null);
        }
        return;
      }

      setErrorText(null);
      setIsRendering(true);

      try {
        const [png, svg] = await Promise.all([
          renderQrPngDataUrl({
            text,
            foregroundColor,
            backgroundColor,
            transparentBackground,
            logoDataUrl
          }),
          renderQrSvgMarkup({
            text,
            foregroundColor,
            backgroundColor,
            transparentBackground,
            logoDataUrl,
            size: 300
          })
        ]);

        if (!cancelled) {
          setPreviewPng(png);
          setPreviewSvg(svg);

          const normalizedText = text.trim();
          if (normalizedText && lastTrackedTextRef.current !== normalizedText) {
            trackGtmEvent("qr_generate", {
              text_length: normalizedText.length,
              has_logo: Boolean(logoDataUrl),
              transparent_background: transparentBackground
            });
            lastTrackedTextRef.current = normalizedText;
          }
        }
      } catch (error) {
        if (!cancelled) {
          setPreviewPng("");
          setPreviewSvg("");
          setErrorText(copy.renderError);
        }
        console.error(error);
      } finally {
        if (!cancelled) {
          setIsRendering(false);
        }
      }
    }

    void renderQr();
    return () => {
      cancelled = true;
    };
  }, [text, foregroundColor, backgroundColor, transparentBackground, logoDataUrl, copy]);

  const fileNamePng = makeQrFilename(text || "sample", "png");
  const fileNameSvg = makeQrFilename(text || "sample", "svg");

  async function onLogoFile(file: File | null) {
    if (!file) {
      setLogoDataUrl(null);
      setLogoErrorText(null);
      return;
    }

    const validation = validateLogoFile(file);
    if (!validation.valid) {
      setLogoDataUrl(null);
      setLogoErrorText(validation.reason === "size" ? copy.invalidLogoSize : copy.invalidLogoType);
      trackGtmEvent("qr_logo_upload_rejected", {
        reason: validation.reason ?? "unknown"
      });
      return;
    }

    setLogoErrorText(null);
    const dataUrl = await readFileAsDataUrl(file);
    setLogoDataUrl(dataUrl);
    trackGtmEvent("qr_logo_upload", {
      file_type: file.type || "unknown",
      file_size_kb: Math.max(1, Math.round(file.size / 1024))
    });
  }

  function onRemoveLogo() {
    if (!logoDataUrl) return;
    setLogoDataUrl(null);
    trackGtmEvent("qr_logo_remove");
  }

  function onDownloadPng() {
    if (!previewPng) return;
    downloadDataUrl(previewPng, fileNamePng);
    trackGtmEvent("qr_download", {
      format: "png",
      text_length: text.trim().length,
      has_logo: Boolean(logoDataUrl)
    });
  }

  function onDownloadSvg() {
    if (!previewSvg) return;
    downloadTextFile(previewSvg, fileNameSvg, "image/svg+xml;charset=utf-8");
    trackGtmEvent("qr_download", {
      format: "svg",
      text_length: text.trim().length,
      has_logo: Boolean(logoDataUrl)
    });
  }

  return (
    <section
      id="generator"
      className="grid gap-3 bg-gray-50 p-4 dark:bg-gray-950 md:gap-4 md:p-6 lg:grid-cols-[minmax(0,1fr)_380px]"
    >
      <section className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-4 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
          {copy.inputPanelTitle}
        </h2>
        <QrTextField
          label={copy.textLabel}
          value={text}
          placeholder={copy.textPlaceholder}
          helperText={copy.textRule}
          onChange={setText}
        />

        <ColorPickerGroup
          foregroundLabel={copy.foregroundColor}
          backgroundLabel={copy.backgroundColor}
          foregroundColor={foregroundColor}
          backgroundColor={backgroundColor}
          onForegroundChange={setForegroundColor}
          onBackgroundChange={setBackgroundColor}
        />

        {(() => {
          if (transparentBackground) return null;
          const ratio = getContrastRatio(foregroundColor, backgroundColor);
          if (ratio >= 4.5) return null;
          const isVeryLow = ratio < 3;
          return (
            <p className={`mb-3 rounded-md border p-2 text-xs ${isVeryLow ? "border-red-200 bg-red-50 text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400" : "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-400"}`}>
              {copy.contrastWarning} — {ratio.toFixed(1)}:1
            </p>
          );
        })()}

        <div className="mb-4 grid gap-2">
          <TransparencyToggle
            label={copy.transparentBackground}
            checked={transparentBackground}
            onChange={setTransparentBackground}
          />
        </div>

        <LogoUploader
          label={copy.logoLabel}
          hint={copy.logoHint}
          removeLabel={copy.removeLogo}
          hasLogo={Boolean(logoDataUrl)}
          onFileChange={onLogoFile}
          onRemove={onRemoveLogo}
        />
        {logoErrorText ? <p className="text-xs text-red-500">{logoErrorText}</p> : null}
      </section>

      <section className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <QrPreviewCard
          title={copy.previewPanelTitle}
          previewUrl={previewPng}

          emptyPreview={copy.emptyPreview}
          loadingText={copy.generating}
          fileNameLabel={copy.fileNameLabel}
          fileNamePreview={fileNamePng}
          error={errorText}
          isRendering={isRendering}
        />
        <DownloadActions
          pngLabel={copy.pngButton}
          svgLabel={copy.svgButton}
          disabled={!previewPng || !previewSvg}
          onDownloadPng={onDownloadPng}
          onDownloadSvg={onDownloadSvg}
        />
      </section>
    </section>
  );
}

function hexToLinear(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const toLinear = (c: number) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function getContrastRatio(hex1: string, hex2: string): number {
  const l1 = hexToLinear(hex1);
  const l2 = hexToLinear(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
