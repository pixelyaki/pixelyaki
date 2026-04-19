type FeatureGridProps = {
  items: Array<{
    title: string;
    description: string;
  }>;
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <section>
      <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-800 sm:grid-cols-2 sm:divide-y-0 xl:grid-cols-5 *:border-r *:border-gray-200 dark:*:border-gray-800 last:*:border-r-0">
        {items.map((item) => (
          <article className="p-5" key={item.title}>
            <strong className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-gray-100">{item.title}</strong>
            <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
