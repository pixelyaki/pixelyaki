"use client";

import { useEffect, useState } from "react";
import { ColorPickerGroup } from "@/components/color-picker-group";
import { DownloadActions } from "@/components/download-actions";
import { LogoUploader } from "@/components/logo-uploader";
import { QrPreviewCard } from "@/components/qr-preview-card";
import { QrTextField } from "@/components/qr-text-field";
import { TransparencyToggle } from "@/components/transparency-toggle";
import { downloadDataUrl, downloadTextFile } from "@/lib/download";
import { makeQrFilename } from "@/lib/filename";
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
};

type QrStudioProps = {
  copy: StudioCopy;
};

export function QrStudio({ copy }: QrStudioProps) {
  const [text, setText] = useState("");
  const [foregroundColor, setForegroundColor] = useState("#101828");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [transparentBackground, setTransparentBackground] = useState(true);
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [previewPng, setPreviewPng] = useState("");
  const [previewSvg, setPreviewSvg] = useState("");
  const [isRendering, setIsRendering] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [logoErrorText, setLogoErrorText] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function renderQr() {
      const valid = validateText(text);
      if (!valid) {
        setPreviewPng("");
        setPreviewSvg("");
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
      return;
    }

    setLogoErrorText(null);
    const dataUrl = await readFileAsDataUrl(file);
    setLogoDataUrl(dataUrl);
  }

  function onDownloadPng() {
    if (!previewPng) return;
    downloadDataUrl(previewPng, fileNamePng);
  }

  function onDownloadSvg() {
    if (!previewSvg) return;
    downloadTextFile(previewSvg, fileNameSvg, "image/svg+xml;charset=utf-8");
  }

  return (
    <section
      id="generator"
      className="grid gap-3 bg-neutral-50 p-4 dark:bg-neutral-950 md:gap-4 md:p-6 lg:grid-cols-[minmax(0,1fr)_380px]"
    >
      <section className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
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
          onRemove={() => setLogoDataUrl(null)}
        />
        {logoErrorText ? <p className="text-xs text-red-500">{logoErrorText}</p> : null}
      </section>

      <section className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
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

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
