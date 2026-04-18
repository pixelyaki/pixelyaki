type QrPreviewCardProps = {
  title: string;
  previewUrl: string;
  previewHint: string;
  emptyPreview: string;
  loadingText: string;
  fileNameLabel: string;
  fileNamePreview: string;
  error?: string | null;
  isRendering: boolean;
};

export function QrPreviewCard({
  title,
  previewUrl,
  previewHint,
  emptyPreview,
  loadingText,
  fileNameLabel,
  fileNamePreview,
  error,
  isRendering
}: QrPreviewCardProps) {
  return (
    <section className="grid h-full content-start gap-3.5">
      <h2 className="mb-1 text-base font-semibold tracking-[-0.01em]">{title}</h2>
      <div
        className="mx-auto mt-1 grid h-[300px] w-[300px] place-items-center rounded-[18px] border border-[#d5e1ff]"
        style={{
          background:
            "linear-gradient(45deg, #f4f6fb 25%, transparent 25%) -8px 0/16px 16px, linear-gradient(-45deg, #f4f6fb 25%, transparent 25%) -8px 0/16px 16px, linear-gradient(45deg, transparent 75%, #f4f6fb 75%) -8px 0/16px 16px, linear-gradient(-45deg, transparent 75%, #f4f6fb 75%) -8px 0/16px 16px, #fff"
        }}
      >
        {previewUrl ? (
          <img className="h-full w-full object-contain" src={previewUrl} alt="QR preview" />
        ) : (
          <p className="px-4 text-center text-xs leading-relaxed text-slate-600">{emptyPreview}</p>
        )}
      </div>
      {isRendering ? <p className="text-xs leading-relaxed text-slate-600">{loadingText}</p> : null}
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <p className="text-xs leading-relaxed text-slate-600">{previewHint}</p>
      <p className="text-xs leading-relaxed text-slate-600">
        <strong>{fileNameLabel}</strong>
        <br />
        {fileNamePreview}
      </p>
    </section>
  );
}
