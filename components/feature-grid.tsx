type FeatureGridProps = {
  items: Array<{
    title: string;
    description: string;
  }>;
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <section>
      <div className="grid grid-cols-1 divide-y divide-neutral-200 dark:divide-neutral-800 sm:grid-cols-2 sm:divide-y-0 xl:grid-cols-5 *:border-r *:border-neutral-200 dark:*:border-neutral-800 last:*:border-r-0">
        {items.map((item) => (
          <article className="p-5" key={item.title}>
            <strong className="mb-1.5 block text-sm font-medium text-neutral-900 dark:text-neutral-100">{item.title}</strong>
            <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
