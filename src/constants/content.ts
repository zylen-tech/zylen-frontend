// ─── Assets ───────────────────────────────────────────────────────────────────

export const ASSETS = {
  logo: {
    icon: '/assets/brand/logo/icon.png',
    logo: '/assets/brand/logo/logo.png',
    whiteIcon: '/assets/brand/logo/white-icon.png',
    whiteLogo: '/assets/brand/logo/white-logo.png',
    whiteIconBg: '/assets/brand/logo/white-icon-bg.png',
    whiteLogoBg: '/assets/brand/logo/white-logo-bg.png',
  },
  background: {
    blur: '/assets/background/blur-img-bg-1.png',
    blurAlt: '/assets/background/blur-img-bg.png',
  },
};

// ─── Brand ───────────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'Zylen',
  tagline: 'E-Invoice Integration Made Simple.',
  email: 'hello@zylen.com.my',
  phone: '+60 11-1234 5678',
  location: 'Kuala Lumpur, Malaysia',
  whatsapp: 'https://wa.me/601112345678',
  calendly: 'https://calendly.com/zylen',
  ssm: 'SSM: 202301012345 (1234567-X)',
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/services#pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ─── Page Heroes ──────────────────────────────────────────────────────────────

export const PAGE_HEROES = {
  services: {
    eyebrow: 'What We Build',
    headline: 'E-Invoice Integration Solutions',
    description:
      'From standard accounting software to fully custom ERP systems — Zylen connects your business to LHDN MyInvois in 7 to 14 days.',
  },
  about: {
    eyebrow: 'Who We Are',
    headline: 'Built by Engineers. Focused on Your Compliance.',
    description:
      'A Kuala Lumpur-based software agency dedicated to making Malaysian e-invoice compliance fast, affordable, and stress-free.',
  },
  contact: {
    eyebrow: 'Get In Touch',
    headline: "Let's Talk About Your Integration",
    description:
      'Book a free 30-minute call. We review your setup and deliver a fixed-price proposal within 24 hours.',
  },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  badge: '🇲🇾 LHDN MyInvois Compliant Middleware',
  headline: "Connect Your Business to Malaysia's E-Invoice System — In 7 Days",
  subheadline:
    "Zylen integrates your existing accounting software with LHDN's MyInvois API. No manual submissions. No compliance risk. No disruption to how you work.",
  ctaPrimary: 'Get a Free Estimate',
  ctaSecondary: 'Book a Demo Call',
  trustItems: [
    'MyInvois Compliant',
    'LHDN Certified Integration',
    '7–14 Day Delivery',
    'Works with AutoCount, SQL, Xero & more',
  ],
};

// ─── Problem ──────────────────────────────────────────────────────────────────

export const PROBLEM = {
  eyebrow: 'The Mandate',
  headline: 'Every Business Above RM 1M Must Comply by 1 January 2027',
  stats: [
    { value: 'RM 20,000', label: 'Maximum fine per invoice' },
    { value: '1 Jan 2027', label: 'Enforcement deadline' },
    { value: '55 fields', label: 'Required per submission' },
  ],
  body: 'Most Malaysian SMEs already use accounting software — AutoCount, SQL Accounting, Xero, or a custom POS system. None of these connect to MyInvois automatically. You need a technical integration layer. That is exactly what Zylen builds.',
  warning:
    'Each invoice is a separate offence. A business issuing 200 invoices a month with no compliance system could face fines exceeding RM 4 million per year.',
};

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES = {
  eyebrow: 'What We Build',
  headline: 'Three Ways to Get Compliant',
  cards: [
    {
      name: 'Basic Connect',
      price: 'From RM 4,000',
      timeline: '7–10 days',
      description:
        'Standard accounting software (AutoCount, SQL, Xero, QuickBooks)',
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Custom Connect',
      price: 'From RM 6,000',
      timeline: '10–14 days',
      description: 'Custom ERP, POS, or legacy systems',
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise Connect',
      price: 'Custom Quote',
      timeline: '2–4 weeks',
      description: 'Multi-branch, high-volume, multi-entity',
      cta: 'Contact Us',
      popular: false,
    },
  ],
};

// ─── How It Works ─────────────────────────────────────────────────────────────

export const HOW_IT_WORKS = {
  eyebrow: 'The Process',
  headline: 'From Discovery to Go-Live in 5 Steps',
  steps: [
    {
      number: '01',
      title: 'Discovery',
      description:
        '15-min free call. We learn your system, your invoice volume, and your current setup.',
    },
    {
      number: '02',
      title: 'Proposal',
      description:
        'Fixed price and timeline delivered within 24 hours. No surprises.',
    },
    {
      number: '03',
      title: 'Integration',
      description:
        'Our engineers build the API bridge between your software and MyInvois. You get staging access to review.',
    },
    {
      number: '04',
      title: 'Testing',
      description:
        'Full LHDN sandbox validation. Every edge case — credit notes, debit notes, cancellations — is tested.',
    },
    {
      number: '05',
      title: 'Go Live',
      description:
        'Production deployment, full documentation handover, and 30-day post-launch support included.',
    },
  ],
};

// ─── Pricing ──────────────────────────────────────────────────────────────────

export const PRICING = {
  eyebrow: 'Transparent Pricing',
  headline: 'No Hidden Costs. No Surprises.',
  note: 'All prices exclude SST. Contact us for a custom quote.',
  tiers: [
    {
      name: 'Integration Project',
      price: 'RM 4,000 – RM 8,000',
      period: 'one-time',
      description:
        'Full integration build with documentation and go-live support.',
      features: [
        'One-time fixed price',
        'Source code included',
        '30-day post-launch support',
        'LHDN sandbox testing',
      ],
      cta: 'Get a Quote',
      recommended: false,
    },
    {
      name: 'Monthly Maintenance',
      price: 'RM 300 – RM 800',
      period: 'per month',
      description:
        'Ongoing support, updates for LHDN API changes, and monitoring.',
      features: [
        'API version updates',
        'Bug fixes & monitoring',
        'Priority support',
        'Monthly health reports',
      ],
      cta: 'Get Started',
      recommended: true,
    },
    {
      name: 'Zylen Connect SaaS',
      price: 'RM 150 – RM 500',
      period: 'per month',
      description:
        'Self-serve middleware platform for standard accounting software.',
      features: [
        'Plug-and-play setup',
        'Dashboard & logs',
        'AutoCount, SQL, Xero support',
        'Auto-updates included',
      ],
      cta: 'Join Waitlist',
      recommended: false,
    },
  ],
};

// ─── About ────────────────────────────────────────────────────────────────────

export const ABOUT = {
  eyebrow: 'Who We Are',
  headline: 'Built by Engineers. Focused on Your Compliance.',
  body: 'Zylen is a software agency founded by three engineers based in Kuala Lumpur. We built the agency we always wished existed — one that delivers on time, communicates honestly, and stays with you after go-live.',
  team: [
    {
      name: 'Ahmad Faris',
      role: 'Co-founder & CEO',
      bio: 'Full-stack engineer with 8 years in fintech and ERP integrations.',
      linkedin: '#',
    },
    {
      name: 'Li Wei',
      role: 'Co-founder & CTO',
      bio: 'API architect. Previously built compliance systems for Fortune 500 clients.',
      linkedin: '#',
    },
    {
      name: 'Priya Nair',
      role: 'Co-founder & Head of Delivery',
      bio: 'Project delivery lead. Obsessed with timelines and client communication.',
      linkedin: '#',
    },
  ],
};

// ─── Book Demo ────────────────────────────────────────────────────────────────

export const BOOK_DEMO = {
  eyebrow: 'Talk to Us',
  headline: 'See Zylen in Action — Free 30-Minute Call',
  bullets: [
    'We review your current accounting setup and invoice volume',
    'We show you exactly how the MyInvois integration works',
    'You get a fixed-price proposal within 24 hours',
    'No hard sell — just honest advice on what you actually need',
  ],
  ctaPrimary: 'Book a Call',
  ctaSecondary: 'WhatsApp Us Directly',
  trustNote:
    'No commitment required · Response within 24 hours · Available via Zoom, Google Meet, or WhatsApp',
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER = {
  services: [
    { label: 'Basic Connect', href: '#services' },
    { label: 'Custom Connect', href: '#services' },
    { label: 'Enterprise Connect', href: '#services' },
    { label: 'Monthly Maintenance', href: '#pricing' },
    { label: 'Zylen Connect SaaS', href: '#pricing' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Book a Demo', href: '#book-demo' },
    { label: 'Contact', href: '#book-demo' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ],
};
