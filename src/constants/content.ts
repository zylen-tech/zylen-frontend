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
  email: 'hello@zylen.com.my',
  phone: '+60 11-1234 5678',
  location: 'Kuala Lumpur, Malaysia',
  whatsapp: 'https://wa.me/601112345678',
  calendly: 'https://calendly.com/zylen',
  ssm: 'SSM: 202301012345 (1234567-X)',
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/services#pricing' },
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
    headline: 'Built by Engineers,',
    headlineAccent: 'Focused on Your Compliance.',
    description:
      'A Kuala Lumpur-based software agency dedicated to making Malaysian e-invoice compliance fast, affordable, and stress-free.',
  },
  contact: {
    eyebrow: 'Get In Touch',
    headline: "Let's Talk About",
    headlineAccent: 'Your Integration.',
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
  urgency:
    '⚠️  LHDN Deadline: 1 January 2027 · Fine up to RM 20,000 per invoice',
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

// ─── Trust Strip ──────────────────────────────────────────────────────────────

export const TRUST_STRIP = {
  label: 'Trusted by finance teams across Malaysia',
  stats: [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '1M+', label: 'Invoices Processed' },
    { value: '50+', label: 'ERP Integrations' },
    { value: 'SOC 2', label: 'Type II Certified' },
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
    { name: 'Odoo' },
    { name: 'SAP Business One' },
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
        'Standard accounting software integrations take 7–10 working days from project kick-off to go-live. Custom ERP or POS systems typically take 10–14 days. Enterprise multi-entity setups are scoped individually but rarely exceed 4 weeks.',
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
        'Yes. Every integration goes through full LHDN sandbox validation before go-live — including credit notes, debit notes, cancellations, and rejection scenarios. We do not sign off until your setup is fully validated against the official MyInvois test environment.',
    },
  ],
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
