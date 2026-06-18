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
    <span
      className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
      style={{ background: '#e8eff4', color: '#053959' }}
    >
      {eyebrow}
    </span>
    <h2
      className="mt-2 text-3xl font-bold md:text-4xl"
      style={{
        color: '#053959',
        letterSpacing: '-0.02em',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      {headline}
    </h2>
  </div>
);

export { SectionHeading };
