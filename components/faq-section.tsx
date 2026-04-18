type FaqSectionProps = {
  title: string;
  items: Array<{
    q: string;
    a: string;
  }>;
};

export function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <section className="px-6 py-6">
      <h2 className="mb-3.5 text-xl font-semibold tracking-[-0.01em]">{title}</h2>
      {items.map((item, index) => (
        <article key={item.q} className={index === 0 ? "" : "mt-3"}>
          <strong className="mb-1.5 block text-[0.93rem]">{item.q}</strong>
          <p className="text-[0.89rem] text-slate-600">{item.a}</p>
        </article>
      ))}
    </section>
  );
}
