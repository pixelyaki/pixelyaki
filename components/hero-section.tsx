type HeroSectionProps = {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export function HeroSection({ copy }: HeroSectionProps) {
  return (
    <section className="px-5 py-8 md:px-10 md:py-14">
      <span className="mb-4 inline-block rounded-full border border-blue-100 bg-white px-3 py-2 text-sm font-semibold text-blue-700">
        {copy.eyebrow}
      </span>
      <h1 className="max-w-3xl font-[var(--font-heading)] text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] tracking-[-0.03em]">
        {copy.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-[1.05rem]">
        {copy.description}
      </p>
    </section>
  );
}
