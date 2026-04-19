type HeroSectionProps = {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export function HeroSection({ copy }: HeroSectionProps) {
  return (
    <section className="px-6 py-10 md:px-8 md:py-12">
      <span className="mb-4 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
        {copy.eyebrow}
      </span>
      <h1 className="font-(--font-heading) text-4xl text-neutral-900 dark:text-neutral-100 md:text-5xl">
        {copy.title}
      </h1>
      <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 md:text-base">
        {copy.description}
      </p>
    </section>
  );
}
