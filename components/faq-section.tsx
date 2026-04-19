type FaqSectionProps = {
  title: string;
  items: Array<{
    q: string;
    a: string;
  }>;
};

export function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <section className="px-6 py-8 md:px-8">
      <h2 className="mb-4 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">{title}</h2>
      <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
        {items.map((item) => (
          <article key={item.q} className="px-4 py-4">
            <strong className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-gray-100">{item.q}</strong>
            <p className="text-xs text-gray-500 dark:text-gray-400">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
