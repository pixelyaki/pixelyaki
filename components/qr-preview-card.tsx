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
    <section className="grid content-start gap-3">
      <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">{title}</h2>
      <div className="preview-checkerboard mx-auto grid h-72 w-72 place-items-center rounded-lg border border-neutral-200 dark:border-neutral-700">
        {previewUrl ? (
          <img className="h-full w-full object-contain" src={previewUrl} alt="QR preview" />
        ) : (
          <p className="px-4 text-center text-xs leading-relaxed text-neutral-400 dark:text-neutral-500">{emptyPreview}</p>
        )}
      </div>
      {isRendering ? <p className="text-xs text-neutral-400 dark:text-neutral-500">{loadingText}</p> : null}
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
      <p className="text-xs leading-relaxed text-neutral-400 dark:text-neutral-500">{previewHint}</p>
      <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        <span className="font-medium text-neutral-700 dark:text-neutral-300">{fileNameLabel}</span>
        <br />
        {fileNamePreview}
      </p>
    </section>
  );
}
