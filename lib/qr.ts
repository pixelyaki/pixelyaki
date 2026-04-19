"use client";

type QrErrorCorrectionLevel = "L" | "M" | "Q" | "H";

type QrRenderOptions = {
  text: string;
  foregroundColor: string;
  backgroundColor: string;
  transparentBackground: boolean;
  logoDataUrl?: string | null;
  size?: number;
  style?: QrStyleOptions;
  errorCorrectionLevel?: QrErrorCorrectionLevel;
};

type QrStylePreset = "square" | "rounded" | "classy" | "dot";
type QrDotsStyle = "square" | "dots" | "rounded" | "classy" | "classy-rounded" | "extra-rounded";
type QrCornerSquareStyle = "square" | "dot" | "extra-rounded";
type QrCornerDotStyle = "square" | "dot";

type QrStyleOptions = {
  preset: QrStylePreset;
  dots: QrDotsStyle;
  cornerSquare: QrCornerSquareStyle;
  cornerDot: QrCornerDotStyle;
};

type QrCodeStylingModule = typeof import("qr-code-styling");

const MODULE_PIXEL_SIZE = 10;

let qrCodeStylingModulePromise: Promise<QrCodeStylingModule> | null = null;

async function getQrCodeStylingModule(): Promise<QrCodeStylingModule> {
  if (!qrCodeStylingModulePromise) {
    qrCodeStylingModulePromise = import("qr-code-styling");
  }
  return qrCodeStylingModulePromise;
}

async function getQrModuleCount(text: string, ecl: QrErrorCorrectionLevel): Promise<number> {
  const qrcode = await import("qrcode");
  const code = qrcode.create(text, { errorCorrectionLevel: ecl });
  return code.modules.size;
}

async function createQrCodeStyling(options: QrRenderOptions) {
  const ecl = options.errorCorrectionLevel ?? "H";
  const [{ default: QRCodeStyling }, moduleCount] = await Promise.all([
    getQrCodeStylingModule(),
    getQrModuleCount(options.text, ecl)
  ]);
  const size = moduleCount * MODULE_PIXEL_SIZE;

  return new QRCodeStyling({
    width: size,
    height: size,
    data: options.text,
    margin: 0,
    qrOptions: {
      errorCorrectionLevel: ecl
    },
    dotsOptions: {
      type: options.style?.dots ?? "square",
      color: options.foregroundColor,
      roundSize: true
    },
    cornersSquareOptions: {
      type: options.style?.cornerSquare ?? "square",
      color: options.foregroundColor
    },
    cornersDotOptions: {
      type: options.style?.cornerDot ?? "square",
      color: options.foregroundColor
    },
    backgroundOptions: {
      color: options.transparentBackground ? "transparent" : options.backgroundColor
    },
    image: options.logoDataUrl ?? undefined,
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.25,
      margin: 0,
      saveAsBlob: true
    }
  });
}

function toPngDataUrl(rawData: Blob | Buffer | null): Promise<string> {
  if (!rawData) {
    throw new Error("QR generation returned empty data");
  }

  if (rawData instanceof Blob) {
    return blobToDataUrl(rawData);
  }

  return Promise.resolve(`data:image/png;base64,${rawData.toString("base64")}`);
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("Failed to read generated QR blob"));
    reader.readAsDataURL(blob);
  });
}

export async function renderQrPngDataUrl(options: QrRenderOptions): Promise<string> {
  const qrCode = await createQrCodeStyling(options);
  const rawData = await qrCode.getRawData("png");
  return toPngDataUrl(rawData);
}

export async function renderQrSvgMarkup(options: QrRenderOptions): Promise<string> {
  const qrCode = await createQrCodeStyling(options);
  const rawData = await qrCode.getRawData("svg");

  if (!rawData) {
    throw new Error("QR generation returned empty SVG");
  }

  if (rawData instanceof Blob) {
    return rawData.text();
  }

  return rawData.toString("utf-8");
}

export type {
  QrCornerDotStyle,
  QrCornerSquareStyle,
  QrDotsStyle,
  QrErrorCorrectionLevel,
  QrRenderOptions,
  QrStyleOptions,
  QrStylePreset
};
