import QRCode from "qrcode";

const QR_MARGIN_MODULES = 1;
const PNG_MODULE_PIXEL_SIZE = 10;

export type QrRenderOptions = {
  text: string;
  foregroundColor: string;
  backgroundColor: string;
  transparentBackground: boolean;
  logoDataUrl?: string | null;
  size?: number;
};

function loadImage(dataUrl: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Failed to load image"));
    image.src = dataUrl;
  });
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

async function drawLogo(canvas: HTMLCanvasElement, logoDataUrl: string) {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  const img = await loadImage(logoDataUrl);
  const logoSize = Math.round(canvas.width * 0.23);
  const x = Math.round((canvas.width - logoSize) / 2);
  const y = Math.round((canvas.height - logoSize) / 2);
  const padding = Math.round(logoSize * 0.14);

  drawRoundedRect(
    ctx,
    x - padding,
    y - padding,
    logoSize + padding * 2,
    logoSize + padding * 2,
    12
  );
  ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
  ctx.fill();
  ctx.drawImage(img, x, y, logoSize, logoSize);
}

function getDynamicPngSizeFromModules(text: string): number {
  const model = QRCode.create(text, { errorCorrectionLevel: "H" });
  const moduleCount = model.modules.size;
  return (moduleCount + QR_MARGIN_MODULES * 2) * PNG_MODULE_PIXEL_SIZE;
}

export async function renderQrPngDataUrl(options: QrRenderOptions): Promise<string> {
  const size = getDynamicPngSizeFromModules(options.text);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  await QRCode.toCanvas(canvas, options.text, {
    margin: QR_MARGIN_MODULES,
    scale: PNG_MODULE_PIXEL_SIZE,
    errorCorrectionLevel: "H",
    color: {
      dark: options.foregroundColor,
      light: options.transparentBackground ? "#0000" : options.backgroundColor
    }
  });

  if (options.logoDataUrl) {
    await drawLogo(canvas, options.logoDataUrl);
  }

  return canvas.toDataURL("image/png");
}

function escapeAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function renderQrSvgMarkup(options: QrRenderOptions): Promise<string> {
  const size = options.size ?? 300;
  let svg = await QRCode.toString(options.text, {
    type: "svg",
    width: size,
    margin: QR_MARGIN_MODULES,
    errorCorrectionLevel: "H",
    color: {
      dark: options.foregroundColor,
      light: options.transparentBackground ? "#0000" : options.backgroundColor
    }
  });

  if (!options.logoDataUrl) {
    return svg;
  }

  const logoSize = Math.round(size * 0.23);
  const x = Math.round((size - logoSize) / 2);
  const y = Math.round((size - logoSize) / 2);
  const padding = Math.round(logoSize * 0.14);
  const roundedRect = [
    `<rect x="${x - padding}" y="${y - padding}" width="${logoSize + padding * 2}" height="${
      logoSize + padding * 2
    }" rx="12" ry="12" fill="rgba(255,255,255,0.92)" />`,
    `<image href="${escapeAttribute(options.logoDataUrl)}" x="${x}" y="${y}" width="${logoSize}" height="${logoSize}" preserveAspectRatio="xMidYMid meet" />`
  ].join("");

  svg = svg.replace("</svg>", `${roundedRect}</svg>`);
  return svg;
}
