type SectionHeadingProps = {
  eyebrow: string;
  headline: string;
  centered?: boolean;
};

const SectionHeading = ({
  eyebrow,
  headline,
  centered = true,
}: SectionHeadingProps) => (
  <div className={centered ? 'text-center' : ''}>
    <span className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-500">
      {eyebrow}
    </span>
    <h2 className="mt-2 font-montserrat text-2xl font-bold tracking-[-0.02em] text-brand-500 md:text-3xl lg:text-4xl">
      {headline}
    </h2>
  </div>
);

export { SectionHeading };
