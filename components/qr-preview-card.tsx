type QrPreviewCardProps = {
  title: string;
  previewUrl: string;
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
  emptyPreview,
  loadingText,
  fileNameLabel,
  fileNamePreview,
  error,
  isRendering
}: QrPreviewCardProps) {
  return (
    <section className="grid content-start gap-3">
      <h2 className="text-xs font-medium uppercase text-gray-400 dark:text-gray-500">{title}</h2>
      <div className="preview-checkerboard mx-auto grid h-72 w-72 place-items-center rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {previewUrl ? (
          <img className="h-full w-full object-contain" src={previewUrl} alt="QR preview" />
        ) : (
          <p className="px-4 text-center text-xs text-gray-400 dark:text-gray-500">{emptyPreview}</p>
        )}
      </div>
      {isRendering ? <p className="text-xs text-gray-400 dark:text-gray-500">{loadingText}</p> : null}
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        <span className="font-medium text-gray-700 dark:text-gray-300">{fileNameLabel}</span>
        <br />
        {fileNamePreview}
      </p>
    </section>
  );
}
