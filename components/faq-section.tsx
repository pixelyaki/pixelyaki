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
      <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">{title}</h2>
      <div className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {items.map((item) => (
          <article key={item.q} className="px-4 py-4">
            <strong className="mb-1.5 block text-sm font-medium text-neutral-900 dark:text-neutral-100">{item.q}</strong>
            <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
