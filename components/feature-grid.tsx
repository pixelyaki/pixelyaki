type FeatureGridProps = {
  items: Array<{
    title: string;
    description: string;
  }>;
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <section className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 xl:grid-cols-5">
      {items.map((item) => (
        <article
          className="min-h-[110px] rounded-[14px] border border-[#dbe6ff] bg-white p-3.5"
          key={item.title}
        >
          <strong className="mb-2 block text-[0.92rem]">{item.title}</strong>
          <p className="text-[0.84rem] text-slate-600">{item.description}</p>
        </article>
      ))}
    </section>
  );
}
