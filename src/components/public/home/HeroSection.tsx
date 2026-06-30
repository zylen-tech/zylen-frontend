import { BRAND, HERO } from '../../../constants/content';
import { Button } from '../../ui/buttons/Button';
import { Hero } from '../../ui/hero';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.15)" />
    <path
      d="M4.5 8l2.5 2.5 4.5-4.5"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroSection = () => (
  <Hero
    badge={HERO.badge}
    headline={HERO.headline}
    subheadline={HERO.subheadline}
    urgency={HERO.urgency}
    actions={
      <>
        <Button href="/contact" variant="white">
          {HERO.ctaPrimary}
        </Button>
        <Button href={BRAND.calendly} variant="outline-white">
          {HERO.ctaSecondary}
        </Button>
      </>
    }
    footer={
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {HERO.trustItems.map((item) => (
          <span
            key={item}
            className="flex items-center gap-1.5 text-sm font-medium text-white/85"
          >
            <CheckIcon />
            {item}
          </span>
        ))}
      </div>
    }
  />
);

export { HeroSection };
