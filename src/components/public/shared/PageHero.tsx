type PageHeroProps = {
  eyebrow: string;
  headline: string;
  description?: string;
};

const PageHero = ({ eyebrow, headline, description }: PageHeroProps) => (
  <section className="bg-brand-900 pb-20 pt-[calc(70px+5rem)] md:pb-28 md:pt-[calc(80px+7rem)]">
    <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
      <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
        {eyebrow}
      </span>
      <h1 className="mx-auto mt-4 max-w-3xl font-montserrat text-3xl font-extrabold leading-tight tracking-[-0.025em] text-white md:text-4xl lg:text-5xl">
        {headline}
      </h1>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
          {description}
        </p>
      )}
    </div>
  </section>
);

export { PageHero };
