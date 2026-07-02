// ─── Assets ───────────────────────────────────────────────────────────────────

export const ASSETS = {
  logo: {
    icon: '/assets/img/brand/logo/icon.png',
    logo: '/assets/img/brand/logo/logo.png',
    whiteIcon: '/assets/img/brand/logo/white-icon.png',
    whiteLogo: '/assets/img/brand/logo/white-logo.png',
    whiteIconBg: '/assets/img/brand/logo/white-icon-bg.png',
    whiteLogoBg: '/assets/img/brand/logo/white-logo-bg.png',
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
  email: 'hello@zylen.tech',
  phone: '+60 3-3977 3973',
  website: 'zylen.tech',
  whatsapp: 'https://wa.me/60339773973',
  calendly: 'https://calendly.com/zylen',
  ssm: 'SSM: Pending registration',
  businessHours: 'Mon–Fri 9am–6pm · Sat 9am–1pm (MYT)',
  social: {
    linkedin: 'https://linkedin.com/company/zylen',
    instagram: 'https://instagram.com/zylen.tech',
  },
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ─── Page Heroes ──────────────────────────────────────────────────────────────

export const PAGE_HEROES = {
  services: {
    eyebrow: 'What We Build',
    headline: 'E-Invoice Integration',
    headlineAccent: 'Solutions.',
    description:
      'From standard accounting software to fully custom ERP systems — Zylen connects your business to LHDN MyInvois in 7 to 14 days.',
  },
  about: {
    eyebrow: 'Who We Are',
    headline: 'Built for Malaysian Businesses,',
    headlineAccent: 'by Malaysians.',
    description:
      'A software agency dedicated to making Malaysian e-invoice compliance fast, affordable, and stress-free.',
  },
  contact: {
    eyebrow: 'Get In Touch',
    headline: "Let's talk.",
    headlineAccent: '',
    description:
      "Have a question about e-invoice compliance? We're here to help.",
  },
  pricing: {
    eyebrow: 'Pricing',
    headline: 'Simple, Transparent Pricing.',
    headlineAccent: '',
    description: 'No hidden fees. No long-term lock-in. Just compliance, done.',
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
  urgency:
    '⚠️  LHDN Deadline: 1 January 2027 · Fine up to RM 20,000 per invoice',
  trustItems: [],
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
  body: 'Zylen is a software agency founded by engineers based in Malaysia. We built the agency we always wished existed — one that delivers on time, communicates honestly, and stays with you after go-live.',
  team: [
    {
      name: 'Kedir Jabir',
      role: 'Co-Founder · Software Engineer',
      tagline: 'Full-Stack Developer & ALX-SE Graduate',
      bio: 'Based in Alor Setar, Kedah. ALX-SE Graduate, previously at Byte of Bread Technologies.',
      linkedin: 'https://www.linkedin.com/in/ibnu-jabir/',
      initials: 'IJ',
    },
    {
      name: 'Adnan Madi',
      role: 'Co-Founder · Frontend Developer',
      tagline: 'Software Engineer pursuing MSc at Universiti Malaya',
      bio: 'CS graduate specialising in Software Engineering & Web Systems. Based in Petaling, Selangor.',
      linkedin: 'https://www.linkedin.com/in/adnan-madi417/',
      initials: 'AM',
    },
    {
      name: 'Abderrahmane Bouzemlal',
      role: 'Co-Founder · Software Engineering',
      tagline: 'Building data-driven apps with Django & REST',
      bio: 'Based in Alor Setar, Kedah. Focused on backend web applications with Django and REST Framework.',
      linkedin: 'https://www.linkedin.com/in/abderrahmanebouzemlal/',
      initials: 'AB',
    },
  ],
};

export const ABOUT_MISSION = {
  eyebrow: 'Our Mission',
  quote:
    'We built Zylen because Malaysian businesses deserve e-invoice compliance that is fast, affordable, and stress-free.',
  body: "When Malaysia's e-invoicing mandate arrived, businesses were drowning in manual submissions, cryptic LHDN error codes, and zero technical support. We built the integration agency we always wished existed — one that connects your accounting system to MyInvois without the chaos.",
};

export const ABOUT_VALUES = [
  {
    title: 'Compliance-First',
    description:
      'We never cut corners on LHDN requirements. Every integration we ship is fully validated against the MyInvois sandbox before going live.',
    icon: 'shield',
  },
  {
    title: 'Local Expertise',
    description:
      'Built by Malaysians who know MyInvois inside out. We speak the language of SST, LHDN, and local accounting software.',
    icon: 'map',
  },
  {
    title: 'Simplicity',
    description:
      'Complex e-invoice integrations, delivered simply. Fixed price, clear timelines, and no technical jargon.',
    icon: 'zap',
  },
  {
    title: 'Security',
    description:
      'Your financial data stays protected end-to-end. Secure API bridges, encrypted payloads, and zero data retention.',
    icon: 'lock',
  },
];

export const ABOUT_TIMELINE = [
  {
    year: '2024',
    title: 'Zylen Founded',
    description:
      'Three engineers came together with one goal: make Malaysian e-invoice compliance simple for every business.',
  },
  {
    year: '2024',
    title: 'First Integration Shipped',
    description:
      'Delivered our first AutoCount → MyInvois integration for an SME in Kuala Lumpur in under 14 days.',
  },
  {
    year: '2025',
    title: 'LHDN Phase 2 Ready',
    description:
      'Expanded support to SQL Accounting, Xero, and QuickBooks ahead of the LHDN Phase 2 mandate.',
  },
  {
    year: '2025',
    title: 'Growing the Team',
    description:
      'Onboarded our first engineering intern and began development of Zylen Connect — our self-serve SaaS platform.',
  },
];

export const ABOUT_WHO_WE_WORK_WITH = {
  eyebrow: 'Who We Work With',
  headline: 'Trusted by Malaysian Businesses',
  categories: [
    {
      label: 'SMEs',
      description:
        'Small and medium enterprises across all sectors navigating the e-invoice mandate.',
    },
    {
      label: 'Accounting Firms',
      description:
        'Firms managing compliance for multiple clients who need a reliable integration partner.',
    },
    {
      label: 'NGOs & Non-Profits',
      description:
        'Organisations like MyCare, MAPIM, Hulwan, and Aqsa Syarif staying compliant with LHDN.',
    },
  ],
  systems: ['AutoCount', 'SQL Accounting', 'Xero', 'QuickBooks', 'Custom ERP'],
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

// ─── Trust Strip ──────────────────────────────────────────────────────────────

export const TRUST_STRIP = {
  label: 'Trusted by finance teams across Malaysia',
  stats: [
    { value: '7-day', label: 'Setup' },
    { value: '4', label: 'Accounting Systems' },
    { value: '100%', label: 'LHDN Compliant' },
    { value: 'Phase 4', label: 'Ready' },
  ],
};

// ─── Connectors Strip ─────────────────────────────────────────────────────────

export const CONNECTORS = {
  eyebrow: 'Works With Your Existing Software',
  items: [
    { name: 'AutoCount' },
    { name: 'SQL Accounting' },
    { name: 'Xero' },
    { name: 'QuickBooks' },
  ],
  fallback: 'Using a custom system or in-house ERP?',
  fallbackCta: { label: 'We handle those too', href: '/contact' },
};

// ─── Delivery Models ──────────────────────────────────────────────────────────

export const DELIVERY_MODELS = {
  eyebrow: 'How We Deliver',
  headline: 'Two Ways to Get Compliant',
  models: [
    {
      badge: 'Done For You',
      name: 'Integration Project',
      price: 'RM 4,000 – RM 8,000',
      period: 'one-time',
      description:
        'We build the full API bridge between your accounting software and LHDN MyInvois. Fixed price, fixed timeline, source code yours.',
      features: [
        '7–14 day delivery',
        'LHDN sandbox testing included',
        'Source code & documentation',
        '30-day post-launch support',
      ],
      cta: 'Get a Fixed-Price Quote',
      ctaHref: '/contact',
      highlight: false,
    },
    {
      badge: 'Self-Serve Platform',
      name: 'Zylen Connect SaaS',
      price: 'RM 150 – RM 500',
      period: 'per month',
      description:
        'Plug-and-play middleware for standard accounting software. Connect in minutes — auto-updates keep you compliant as LHDN evolves.',
      features: [
        'AutoCount, SQL, Xero, QuickBooks',
        'Submission dashboard & error logs',
        'Auto-updates for LHDN API changes',
        'No developer needed',
      ],
      cta: 'Join the Waitlist',
      ctaHref: '/contact',
      highlight: true,
    },
  ],
};

// ─── Final CTA ────────────────────────────────────────────────────────────────

export const FINAL_CTA = {
  eyebrow: 'Ready to Comply?',
  headline: 'Get Compliant Before the Deadline.',
  subtext:
    'Fixed price. Fixed timeline. 30-day support included. Most integrations go live in 7–14 days.',
  cta: 'Book a Free 30-Min Call',
  ctaHref: '/contact',
  note: 'No commitment required · Fixed-price proposal within 24 hours',
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ = {
  headline: 'Frequently Asked',
  headlineAccent: 'Questions',
  items: [
    {
      question: 'Do I need to change my existing accounting software?',
      answer:
        'No. Zylen builds an integration layer that sits between your existing software and LHDN MyInvois. AutoCount, SQL Accounting, Xero, QuickBooks — you keep using exactly what you have today. We handle the connection to the government portal.',
    },
    {
      question: 'How long does the integration take?',
      answer:
        'Most integrations go live within 7–14 days. Discovery call on Day 1, proposal within 24 hours, build starts immediately after approval. We work around your schedule.',
    },
    {
      question: 'What exactly is LHDN MyInvois?',
      answer:
        "MyInvois is the Malaysian government's e-invoicing portal operated by LHDN (Inland Revenue Board). Under the Finance Act 2023, businesses above RM 1M annual revenue must submit all invoices through MyInvois in a structured XML/JSON format with 55 mandatory fields. The deadline for most SMEs is 1 January 2027.",
    },
    {
      question: 'How much does it cost?',
      answer:
        'Integration projects are fixed-price: RM 4,000–RM 8,000 one-time depending on your system complexity. You receive the source code and 30 days of post-launch support. Monthly maintenance (for LHDN API updates and monitoring) starts from RM 300/month. Our SaaS option, Zylen Connect, starts at RM 150/month.',
    },
    {
      question: 'What happens when LHDN updates their API?',
      answer:
        'LHDN periodically updates MyInvois field requirements and API versions. If you are on our monthly maintenance plan, all updates are included at no extra cost. If you took the one-time project, we offer update packages on request.',
    },
    {
      question: 'Is this a one-time build or an ongoing subscription?',
      answer:
        'Both options exist. The Integration Project is a one-time fixed-price build — you own the code. The Zylen Connect SaaS is a monthly subscription with zero setup effort, auto-updates, and a submission dashboard. Most clients on custom ERP start with the project and add the maintenance plan.',
    },
    {
      question: 'What if we have a custom-built or in-house system?',
      answer:
        'That is our speciality. Our Custom Connect package is designed for businesses on proprietary ERP, custom POS, or legacy systems. We analyse your data model, map your invoice fields to the 55 MyInvois requirements, and build a tailored API bridge.',
    },
    {
      question: 'Do you guarantee LHDN approval after integration?',
      answer:
        "Zylen builds to LHDN's official API specification and runs full sandbox validation before go-live. While LHDN approval depends on your data quality and business registration, our integrations have a 100% sandbox pass rate.",
    },
  ],
};

// ─── Pricing Page ─────────────────────────────────────────────────────────────

export const PRICING_TIERS = [
  {
    name: 'Starter',
    tagline: 'For small businesses just getting compliant.',
    monthlyPrice: 'RM 150',
    annualPrice: 'RM 125',
    annualNote: 'billed RM 1,500/year',
    cta: 'Get Started',
    highlight: false,
    enterprise: false,
    features: [
      { label: '500 invoices/month', included: true },
      { label: '1 accounting system', included: true },
      { label: 'Real-time MyInvois submission', included: true },
      { label: 'Basic dashboard', included: true },
      { label: 'Email support', included: true },
      { label: 'Multi-user access', included: false },
      { label: 'Priority support', included: false },
      { label: 'Custom ERP integration', included: false },
      { label: 'Dedicated account manager', included: false },
    ],
  },
  {
    name: 'Growth',
    tagline: 'For growing SMEs with higher invoice volumes.',
    monthlyPrice: 'RM 350',
    annualPrice: 'RM 290',
    annualNote: 'billed RM 3,480/year',
    cta: 'Get Started',
    highlight: true,
    enterprise: false,
    features: [
      { label: '3,000 invoices/month', included: true },
      { label: 'Up to 3 accounting systems', included: true },
      { label: 'Real-time MyInvois submission', included: true },
      { label: 'Full dashboard & audit logs', included: true },
      { label: 'Priority email & chat support', included: true },
      { label: 'Multi-user access (5 seats)', included: true },
      { label: 'Priority support', included: false },
      { label: 'Custom ERP integration', included: false },
      { label: 'Dedicated account manager', included: false },
    ],
  },
  {
    name: 'Business',
    tagline: 'For businesses with complex or multi-branch needs.',
    monthlyPrice: 'RM 700',
    annualPrice: 'RM 580',
    annualNote: 'billed RM 6,960/year',
    cta: 'Get Started',
    highlight: false,
    enterprise: false,
    features: [
      { label: 'Unlimited invoices', included: true },
      { label: 'Unlimited accounting systems', included: true },
      { label: 'Real-time MyInvois submission', included: true },
      { label: 'Full dashboard & audit logs', included: true },
      { label: 'Priority email & chat support', included: true },
      { label: 'Multi-user access (20 seats)', included: true },
      { label: 'Priority support', included: true },
      { label: 'Custom ERP integration', included: true },
      { label: 'Dedicated account manager', included: false },
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Custom pricing for large or multi-entity organisations.',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    annualNote: 'tailored to your needs',
    cta: 'Talk to Sales',
    highlight: false,
    enterprise: true,
    features: [
      { label: 'Unlimited invoices', included: true },
      { label: 'Unlimited accounting systems', included: true },
      { label: 'Real-time MyInvois submission', included: true },
      { label: 'Full dashboard & audit logs', included: true },
      { label: 'Priority email & chat support', included: true },
      { label: 'Unlimited seats', included: true },
      { label: 'Priority support', included: true },
      { label: 'Custom ERP integration', included: true },
      { label: 'Dedicated account manager', included: true },
    ],
  },
];

export const PRICING_ADDONS = [
  {
    title: 'Extra Integration',
    description:
      'Connect an additional accounting system or data source outside your plan.',
    price: 'From RM 80/month',
  },
  {
    title: 'Priority Onboarding',
    description:
      'Dedicated engineer for setup, migration, and go-live within 3 working days.',
    price: 'RM 500 one-time',
  },
  {
    title: 'Custom Training',
    description:
      'Live walkthrough session for your finance team — remote or on-site in KL.',
    price: 'RM 300 per session',
  },
  {
    title: 'Extended Support',
    description:
      'SLA-backed phone & WhatsApp support with guaranteed 2-hour response time.',
    price: 'RM 200/month',
  },
];

export const PRICING_FAQ = [
  {
    question: 'Is there a setup fee?',
    answer:
      'No setup fee on any plan. You pay the monthly or annual subscription price only. The onboarding process is included — we get you connected within 7 working days.',
  },
  {
    question: 'Can I upgrade or downgrade anytime?',
    answer:
      'Yes. You can upgrade your plan at any time and the change takes effect immediately. Downgrades take effect at the start of your next billing cycle.',
  },
  {
    question: 'What happens if I exceed my invoice limit?',
    answer:
      'On Starter and Growth plans, invoices above your monthly limit are charged at RM 0.08 per invoice. We will notify you when you reach 80% of your limit so there are no surprises.',
  },
  {
    question: 'Do you offer annual discounts?',
    answer:
      'Yes — annual billing saves you roughly 2 months compared to paying monthly. Prices are shown with the annual toggle on the pricing cards above.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'We do not offer a free trial, but we offer a free 30-minute discovery call where we review your system and confirm the integration is possible before you pay anything.',
  },
  {
    question: 'Which accounting systems are supported on each plan?',
    answer:
      'Starter supports 1 system (AutoCount, SQL, Xero, or QuickBooks). Growth supports up to 3. Business and Enterprise support unlimited systems including custom ERP connections.',
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER = {
  services: [
    { label: 'E-Invoice Integration', href: '/services' },
    { label: 'How It Works', href: '/services#solutions' },
    { label: 'Supported Systems', href: '/services#solutions' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Book a Free Call', href: '/contact' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Meet the Team', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
