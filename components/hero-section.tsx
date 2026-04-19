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
      <span className="mb-4 inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {copy.eyebrow}
      </span>
      <h1 className="font-(--font-heading) text-4xl text-gray-900 dark:text-gray-100 md:text-5xl">
        {copy.title}
      </h1>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 md:text-base">
        {copy.description}
      </p>
    </section>
  );
}
