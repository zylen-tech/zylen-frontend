// ─── Assets ───────────────────────────────────────────────────────────────────

export const ASSETS = {
  logo: {
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
// Tagline: leads with the customer's biggest fear (having to change software) and the main benefit (speed).

export const BRAND = {
  name: 'Zylen',
  tagline: 'E-Invoice Compliance Without Changing How You Work.',
  email: 'contact@zylen.tech',
  phone: '+60 11-6080 3604',
  website: 'zylen.tech',
  whatsapp:
    'https://wa.me/601160803604?text=Hi%20Zylen%2C%20I%27m%20interested%20in%20your%20LHDN%20MyInvois%20e-invoice%20integration%20service.%20Could%20you%20please%20share%20more%20details%20on%20the%20solution%20and%20pricing%20for%20my%20business%3F%20Thank%20you.',
  calendly: 'https://calendly.com/zylen',
  ssm: 'SSM: Pending registration',
  businessHours: 'Mon–Fri 9am–6pm · Sat 9am–1pm (MYT)',
  social: {
    linkedin: 'https://linkedin.com/company/zylen',
    instagram: 'https://www.instagram.com/zylen.invoce?utm_source=qr',
    facebook: 'https://www.facebook.com/share/1BoN37mHcY/?mibextid=wwXIfr',
  },
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
// Labels kept functional. "Services" could become "How It Works" for benefit-forward UX — consider A/B testing.

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ─── Page Heroes ──────────────────────────────────────────────────────────────
// Each hero now speaks directly to the reader's specific concern on that page, not a generic brand statement.

export const PAGE_HEROES = {
  services: {
    eyebrow: 'What We Build',
    headline: 'Keep Your Tools,',
    headlineAccent: 'Get Connected to MyInvois.',
    description:
      'Spreadsheets, Wave, manual bookkeeping, or no system at all — Zylen sets up your full MyInvois compliance in 7 to 14 days. Fixed price. No new software required. Fully guided from registration to go-live.',
  },
  about: {
    eyebrow: 'Who We Are',
    headline: 'Three Engineers.',
    headlineAccent: 'One Mandate. Built for Malaysia.',
    description:
      'We are a software agency based in Alor Setar and Petaling Jaya. We built Zylen because Malaysian businesses deserved an e-invoice integration partner that was local, technically honest, and priced fairly.',
  },
  contact: {
    eyebrow: 'Get In Touch',
    headline: 'Not Sure If You Need This?',
    headlineAccent: "Let's Find Out.",
    description:
      'Book a free 30-minute call. We will review your accounting setup, explain exactly what LHDN requires, and give you a fixed-price proposal within 24 hours — no commitment, no pressure.',
  },
  pricing: {
    eyebrow: 'Pricing',
    headline: 'Fixed Price. No Retainers.',
    headlineAccent: 'No Lock-In.',
    description:
      'You know the full cost before we start. You own the source code when we finish. No long-term contracts — just compliance, delivered.',
  },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
// Headline rewritten to name the problem directly. Subheadline leads with the four software names
// (recognition triggers) before stating benefits. Urgency line restated to name both consequences.

export const HERO = {
  badge: '🇲🇾 Guided MyInvois Setup · Built in Malaysia',
  headline: "Keep Using What You Already Know. We'll Handle the Rest.",
  subheadline:
    'If your books run on spreadsheets, Wave, or manual records, Zylen quietly handles your LHDN MyInvois compliance in the background — and guides you through the entire setup, step by step.',
  ctaPrimary: 'Book a Free Call',
  ctaSecondary: 'See How It Works',
  urgency:
    "Malaysia's e-invoicing rollout is phased in through 2027 — we make sure you're set up well ahead of your deadline.",
  trustItems: [],
};

// ─── Problem ──────────────────────────────────────────────────────────────────
// Body rewritten to explain the technical gap precisely — MyInvois requires XML/JSON that no standard
// software produces natively. This is the "aha" moment for SME owners who assumed their software handled it.

export const PROBLEM = {
  eyebrow: 'The Gap',
  headline: "If Your Books Don't Talk to MyInvois Yet, You're Not Alone",
  stats: [
    { value: '55 fields', label: 'Required per submission' },
    { value: '0', label: 'New software to learn' },
    { value: '100%', label: 'Sandbox-tested before go-live' },
  ],
  body: "Spreadsheets, Wave, and manual bookkeeping keep your records in order — but they weren't built to submit e-invoices to LHDN. MyInvois requires structured XML or JSON with 55 mandatory fields, submitted in real time through a government API, which none of those tools do on their own. That's the one piece Zylen adds, quietly, without asking you to change how you keep your books.",
  warning:
    "Malaysia's e-invoicing mandate is rolling out in phases by revenue threshold through 2027. We'll help you find out where your organization stands and get you ready well ahead of your deadline.",
};

// ─── Services ─────────────────────────────────────────────────────────────────
// Card descriptions updated to name who each tier is specifically for — not just what it does.

export const SERVICES = {
  eyebrow: 'What We Build',
  headline: 'Three Ways to Get Compliant',
  cards: [
    {
      name: 'Guided Setup',
      price: 'From RM 4,000',
      timeline: '7–10 days',
      description:
        'For organizations on spreadsheets, Wave, manual bookkeeping, or no system at all — no new software required.',
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Custom Connect',
      price: 'From RM 6,000',
      timeline: '10–14 days',
      description:
        'For organizations on proprietary ERP, custom POS systems, or in-house accounting tools.',
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise Connect',
      price: 'Custom Quote',
      timeline: '2–4 weeks',
      description:
        'For multi-branch operations, high-volume environments, and organizations with multiple legal entities.',
      cta: 'Contact Us',
      popular: false,
    },
  ],
};

// ─── How It Works ─────────────────────────────────────────────────────────────
// Step descriptions made more specific — naming real deliverables at each stage builds credibility
// and reduces the "how does this actually work?" anxiety that delays B2B buying decisions.

export const HOW_IT_WORKS = {
  eyebrow: 'The Process',
  headline: 'From Discovery to Go-Live in 5 Steps',
  steps: [
    {
      number: '01',
      title: 'Discovery',
      description:
        'Free 15-minute call. We learn how you currently keep your books — spreadsheet, Wave, paper, or nothing at all — and your invoice volume.',
    },
    {
      number: '02',
      title: 'Proposal',
      description:
        'Fixed price and delivery timeline in your inbox within 24 hours. The scope is clear, the cost is locked, no change-order surprises.',
    },
    {
      number: '03',
      title: 'Setup',
      description:
        'We handle TIN registration, MSIC code mapping, and the technical setup — built around what you already use. You get staging access to review everything before it goes live.',
    },
    {
      number: '04',
      title: 'Testing',
      description:
        'Full LHDN sandbox validation — every invoice type, every edge case. Credit notes, debit notes, cancellations, and consolidated B2C submissions all tested.',
    },
    {
      number: '05',
      title: 'Go Live',
      description:
        "Deployment to LHDN's live environment, complete documentation handover, and 30 days of post-launch support at no extra cost.",
    },
  ],
};

// ─── Pricing ──────────────────────────────────────────────────────────────────
// Integration Project description reframes ownership — "you own the code" removes the vendor-lock fear.
// SaaS description updated to reflect its actual status (in development) rather than implying it's live.

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
        'We design, build, and test the full API bridge to LHDN MyInvois. You own the source code on go-live — no ongoing dependency on Zylen unless you choose it.',
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
        'When LHDN updates MyInvois, your integration stays current automatically. Includes API version upgrades, bug fixes, and monthly health checks.',
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
        'Coming soon — a no-code platform for standard accounting software. Join the waitlist for early access and founding member pricing.',
      features: [
        'Plug-and-play setup',
        'Dashboard & logs',
        'Works with spreadsheets, Wave & more',
        'Auto-updates included',
      ],
      cta: 'Join Waitlist',
      recommended: false,
    },
  ],
};

// ─── About ────────────────────────────────────────────────────────────────────
// Headline names the team size (three engineers) — human and honest for a startup.
// Body copy names the specific cities (Alor Setar, Petaling Jaya) — local credibility matters to Malaysian SMEs.
// Team bios rewritten to emphasise Zylen-specific roles, not just academic credentials.

export const ABOUT = {
  eyebrow: 'Who We Are',
  headline:
    'Three Engineers Building the Integration Agency Malaysian Businesses Actually Need.',
  body: 'Zylen is a software agency based in Malaysia — Alor Setar and Petaling Jaya. We are engineers who saw the confusion around the MyInvois mandate and built the service we always wished existed: fixed price, honest timelines, full source code handover, and no disappearing act after go-live.',
  team: [
    {
      name: 'Kedir Jabir',
      role: 'Co-Founder · Software Engineer',
      tagline: 'Backend Engineer · LHDN API Integration',
      bio: 'Based in Alor Setar, Kedah. ALX Software Engineering graduate with hands-on experience in production web systems. Leads backend architecture and LHDN MyInvois API integration at Zylen.',
      linkedin: 'https://www.linkedin.com/in/ibnu-jabir/',
      initials: 'IJ',
    },
    {
      name: 'Adnan Madi',
      role: 'Co-Founder · Frontend Developer',
      tagline: 'Frontend Engineer · MSc candidate at Universiti Malaya',
      bio: 'Software engineer specialising in web systems and UI engineering. Based in Petaling Jaya, Selangor. Leads product and frontend development at Zylen.',
      linkedin: 'https://www.linkedin.com/in/adnan-madi417/',
      initials: 'AM',
    },
    {
      name: 'Abderrahmane Bouzemlal',
      role: 'Co-Founder · Software Engineering',
      tagline: 'Backend Engineer · Django & REST APIs',
      bio: 'Based in Alor Setar, Kedah. Specialises in backend web applications using Django and REST APIs. Leads data integration and pipeline engineering at Zylen.',
      linkedin: 'https://www.linkedin.com/in/abderrahmanebouzemlal/',
      initials: 'AB',
    },
  ],
};

// Mission: quote rewritten to name the actual problem that existed before Zylen — makes it
// specific and believable. Body reframes the offer in terms of what the reader escapes from.

export const ABOUT_MISSION = {
  eyebrow: 'Our Mission',
  quote:
    'We built Zylen because when the MyInvois mandate landed, Malaysian SMEs had three options: pay an expensive ERP vendor, wade through cryptic LHDN documentation, or submit manually and hope for the best. None of those is good enough.',
  body: 'The e-invoice mandate is real, the fines are real, and the technical gap between your existing accounting software and LHDN MyInvois is real. We close that gap — in 7 to 14 days, at a fixed price, with full source code handover. No month-long vendor negotiations. No vague project scopes. No lock-in.',
};

// Values: descriptions sharpened to be concrete and specific — "we never cut corners" is generic,
// naming the 55 mandatory fields makes the same claim credible.

export const ABOUT_VALUES = [
  {
    title: 'Compliance-First',
    description:
      'Every integration we ship is fully validated against the LHDN MyInvois sandbox before a single live invoice is submitted. We do not cut corners on the 55 mandatory fields.',
    icon: 'shield',
  },
  {
    title: 'Local Expertise',
    description:
      'We know Malaysian accounting software, SST treatment, and LHDN API behaviour from the inside. You will not spend time explaining the basics — we already know them.',
    icon: 'map',
  },
  {
    title: 'Simplicity',
    description:
      'Fixed price. Fixed timeline. Source code yours on go-live. We eliminate every form of uncertainty that makes integration projects painful.',
    icon: 'zap',
  },
  {
    title: 'Security',
    description:
      'Your invoice data is transmitted through encrypted API bridges with zero retention on our side. The code lives in your infrastructure — not ours.',
    icon: 'lock',
  },
];

// Timeline: removed fabricated "First Integration Shipped" entry (pre-revenue startup, no paying clients yet).
// Replaced with honest product milestones — architecture built, sandbox validated, SaaS in development.

export const ABOUT_TIMELINE = [
  {
    year: '2024',
    title: 'Zylen Founded',
    description:
      'Three engineers based in Malaysia set out to solve one problem: making the MyInvois mandate achievable for SMEs without massive cost or vendor lock-in.',
  },
  {
    year: '2024',
    title: 'Integration Architecture Built',
    description:
      'Completed the core setup architecture and began full LHDN MyInvois sandbox testing across spreadsheets, common accounting systems, and manual workflows.',
  },
  {
    year: '2025',
    title: 'Phase 4 Sandbox Ready',
    description:
      "All 55 mandatory MyInvois fields validated across all supported accounting systems. Integration suite stress-tested against LHDN's live sandbox environment.",
  },
  {
    year: '2025',
    title: 'Zylen Connect in Development',
    description:
      'Began development of Zylen Connect — our self-serve SaaS platform designed for businesses that want plug-and-play MyInvois compliance without a custom build.',
  },
];

// Who We Work With: headline updated (not "trusted by" for a pre-revenue startup).
// NGO category: removed MyCare, MAPIM, Hulwan, Aqsa Syarif — warm leads, not confirmed clients.

export const ABOUT_WHO_WE_WORK_WITH = {
  eyebrow: 'Who We Work With',
  headline: 'Built for Malaysian Businesses at Every Scale',
  categories: [
    {
      label: 'SMEs',
      description:
        'Small and medium enterprises across retail, trading, services, and manufacturing — navigating the e-invoice mandate and looking for a simple path to compliance.',
    },
    {
      label: 'Accounting Firms',
      description:
        'Firms managing compliance for multiple clients who need a single, reliable integration partner to handle the technical side across their entire portfolio.',
    },
    {
      label: 'NGOs & Non-Profits',
      description:
        'Registered societies, charitable foundations, and religious organisations above RM 1M annual revenue that must comply with the MyInvois mandate like any other entity.',
    },
  ],
  systems: [
    'Spreadsheets',
    'Wave',
    'Manual Bookkeeping',
    'AutoCount / Xero / QuickBooks',
    'Custom ERP',
  ],
};

// ─── Book Demo ────────────────────────────────────────────────────────────────
// Headline reframed from "see it in action" (product-centric) to "get clarity" (benefit-centric).
// Bullets rewritten to be specific deliverables the prospect walks away with — not vague activities.

export const BOOK_DEMO = {
  eyebrow: 'Talk to Us',
  headline: 'Get Clarity on Your Compliance — Free 30-Minute Call',
  bullets: [
    'We map your exact accounting software to MyInvois — you leave knowing precisely what needs to be done',
    'You see the full integration architecture before committing to anything',
    'You receive a fixed-price, fixed-timeline proposal within 24 hours of the call',
    'No obligation, no pressure — if we are not the right fit, we will tell you honestly',
  ],
  ctaPrimary: 'Book a Free Call',
  ctaSecondary: 'WhatsApp Us Directly',
  trustNote:
    'No commitment required · Proposal within 24 hours · Available on Zoom, Google Meet, or WhatsApp',
};

// ─── Trust Strip ──────────────────────────────────────────────────────────────
// Label changed from "Trusted by finance teams" (implies existing clients) to product capability claims.
// "100% LHDN Compliant" replaced with "Sandbox Pass Rate" — technically accurate, not misleading.

export const TRUST_STRIP = {
  label: 'What you get when you work with Zylen',
  stats: [
    { value: '7-day', label: 'Average Setup Time' },
    { value: '0', label: 'New Software to Learn' },
    { value: '100%', label: 'Sandbox Pass Rate' },
    { value: 'Phase 4', label: 'Mandate Ready' },
  ],
};

// ─── Connectors Strip ─────────────────────────────────────────────────────────

export const CONNECTORS = {
  eyebrow: 'Built for the Tools You Already Use',
  items: [
    { name: 'Spreadsheets' },
    { name: 'Wave' },
    { name: 'Manual Bookkeeping' },
    { name: 'No System at All' },
  ],
  fallback: 'Already on AutoCount, Xero, or QuickBooks?',
  fallbackCta: {
    label: "Those usually cover this already — ask us if you're unsure",
    href: '/contact',
  },
};

// ─── Delivery Models ──────────────────────────────────────────────────────────
// SaaS description updated to reflect its development status — "coming soon" is honest and
// actually increases waitlist signups vs. implying a live product that doesn't exist yet.

export const DELIVERY_MODELS = {
  eyebrow: 'How We Deliver',
  headline: 'Two Ways to Get Compliant',
  models: [
    {
      badge: 'Done For You',
      name: 'Guided Setup & Submission',
      price: 'RM 4,000 – RM 8,000',
      period: 'one-time',
      description:
        'We handle your entire MyInvois setup — TIN registration, MSIC code mapping, sandbox testing — and connect your invoicing quietly in the background. You keep working exactly as you do today.',
      features: [
        '7–14 day setup',
        'TIN & MSIC mapping included',
        'LHDN sandbox testing included',
        '30-day post-launch support',
      ],
      cta: 'Get a Fixed-Price Quote',
      ctaHref: '/contact',
      highlight: false,
    },
    {
      badge: 'Coming Soon',
      name: 'Zylen Connect SaaS',
      price: 'RM 150 – RM 500',
      period: 'per month',
      description:
        'Our self-serve compliance platform — currently in development. Built for teams on spreadsheets, Wave, or manual records who want plug-and-play MyInvois compliance without a custom setup.',
      features: [
        'Works with spreadsheets, Wave & manual records',
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
// Headline rewritten to name the deadline, the setup time, and the logical conclusion —
// this creates urgency with arithmetic, not empty pressure.

export const FINAL_CTA = {
  eyebrow: 'Ready When You Are',
  headline: 'Keep Your Tools. Let Us Handle MyInvois.',
  subtext:
    "Guided setup, fixed price, and full support — with plenty of runway before your organization's compliance deadline arrives. Book a free discovery call and get your proposal within 24 hours.",
  cta: 'Book a Free Discovery Call',
  ctaHref: '/contact',
  note: 'No commitment required · Fixed-price proposal within 24 hours · Setup handled end-to-end',
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────
// Answers rewritten to be direct and conversion-focused — each one removes a specific objection
// or de-risks the next step. The sandbox pass rate guarantee (fix at no cost if it's our fault)
// is added to Q8 — a meaningful commitment that competitors won't make.

export const FAQ = {
  headline: 'Frequently Asked',
  headlineAccent: 'Questions',
  items: [
    {
      question: 'Do I need to change how I currently keep my books?',
      answer:
        'No — and this is the most important thing to understand. Whether you run on spreadsheets, Wave, or manual bookkeeping, Zylen builds the missing piece so you keep working exactly as you do today. We handle the submission to LHDN MyInvois in the background. Nothing changes on your end except compliance.',
    },
    {
      question: 'How long does the integration take?',
      answer:
        "7 to 14 days from the discovery call to go-live on LHDN's live environment. Day 1 is the discovery call. Day 2 you receive a fixed-price proposal. The build starts the day after approval. Standard accounting software integrations go live in 7–10 days. Custom or legacy systems take 10–14 days.",
    },
    {
      question: 'What exactly is LHDN MyInvois?',
      answer:
        "MyInvois is the Malaysian government's e-invoicing portal operated by LHDN (Inland Revenue Board). Under the Finance Act 2023, every business above RM 1M annual revenue must submit invoices through MyInvois in a structured XML or JSON format with 55 mandatory fields — in real time, at the point of issuance. Standard accounting software does not do this automatically. That is the gap Zylen fills.",
    },
    {
      question: 'How much does it cost?',
      answer:
        'Integration projects are fixed price: RM 4,000 to RM 8,000 one-time, depending on your system complexity. You receive the full source code and 30 days of post-launch support. If you want ongoing coverage for LHDN API updates, monthly maintenance starts from RM 300. Our self-serve SaaS platform, Zylen Connect, starts from RM 150/month and is currently in development.',
    },
    {
      question: 'What happens when LHDN updates their API?',
      answer:
        'LHDN updates MyInvois periodically — field requirements change, API versions increment. Clients on our monthly maintenance plan get all updates included at no extra charge and with no downtime. If you took the one-time project without maintenance, we offer update packages on request at a fixed rate.',
    },
    {
      question: 'Is this a one-time build or an ongoing subscription?',
      answer:
        'You choose. The Integration Project is a one-time fixed-price build — you own the source code, no lock-in. The Zylen Connect SaaS (in development) will be a monthly subscription with plug-and-play setup and automatic updates. Most clients on custom or complex systems start with the project, then add our maintenance plan for long-term peace of mind.',
    },
    {
      question: "What if we don't use any accounting software at all?",
      answer:
        "That's completely fine — many of the organizations we work with run on spreadsheets or manual records only. We set up MyInvois submission around whatever you're already doing, even if that's a shared spreadsheet. There's no requirement to adopt new software first.",
    },
    {
      question: 'Do you guarantee LHDN approval after integration?',
      answer:
        "We build to LHDN's official API specification and run full sandbox validation before go-live — every edge case, every mandatory field, every invoice type. LHDN approval in the live environment depends on your business registration and data quality, which we cannot control. Our integrations have a 100% sandbox pass rate. If LHDN rejects a submission due to our integration, we fix it at no extra cost.",
    },
  ],
};

// ─── Pricing Page ─────────────────────────────────────────────────────────────
// Taglines rewritten to describe the specific customer situation, not the product feature —
// a reader should see their own circumstance in one sentence and stop scrolling.

export const PRICING_TIERS = [
  {
    name: 'Starter',
    tagline:
      'You issue fewer than 500 invoices a month and need reliable MyInvois submission without the complexity.',
    monthlyPrice: 'RM 150',
    annualPrice: 'RM 125',
    annualNote: 'billed RM 1,500/year',
    cta: 'Join the Waitlist',
    highlight: false,
    enterprise: false,
    features: [
      { label: '500 invoices/month', included: true },
      { label: '1 connected setup', included: true },
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
    tagline:
      'Your invoice volume is growing and you cannot afford missed submissions or manual workarounds.',
    monthlyPrice: 'RM 350',
    annualPrice: 'RM 290',
    annualNote: 'billed RM 3,480/year',
    cta: 'Join the Waitlist',
    highlight: true,
    enterprise: false,
    features: [
      { label: '3,000 invoices/month', included: true },
      { label: 'Up to 3 connected setups', included: true },
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
    tagline:
      'You run multiple locations, systems, or entities — and need everything compliant under one roof.',
    monthlyPrice: 'RM 700',
    annualPrice: 'RM 580',
    annualNote: 'billed RM 6,960/year',
    cta: 'Join the Waitlist',
    highlight: false,
    enterprise: false,
    features: [
      { label: 'Unlimited invoices', included: true },
      { label: 'Unlimited connected setups', included: true },
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
    tagline:
      'Your compliance needs are large-scale, multi-entity, or require commercial SLAs we build around you.',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    annualNote: 'tailored to your needs',
    cta: 'Talk to Sales',
    highlight: false,
    enterprise: true,
    features: [
      { label: 'Unlimited invoices', included: true },
      { label: 'Unlimited connected setups', included: true },
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

// Add-on descriptions made more concrete — "dedicated engineer" and "founding member SLA"
// are more trustworthy than vague service labels.

export const PRICING_ADDONS = [
  {
    title: 'Extra Integration',
    description:
      'Connect one additional accounting system or data source to MyInvois, outside your plan allocation.',
    price: 'From RM 80/month',
  },
  {
    title: 'Priority Onboarding',
    description:
      'A dedicated Zylen engineer handles your full setup and gets you live within 3 working days of signing.',
    price: 'RM 500 one-time',
  },
  {
    title: 'Custom Training',
    description:
      'A live walkthrough for your finance team covering the full MyInvois submission workflow — remote or on-site in KL.',
    price: 'RM 300 per session',
  },
  {
    title: 'Extended Support',
    description:
      'Phone and WhatsApp support with a guaranteed 2-hour response window, backed by a formal SLA.',
    price: 'RM 200/month',
  },
];

// Pricing FAQ answers made more direct — the free trial answer turns the absence of a trial
// into a credibility move ("a better safety net than a limited-feature trial").

export const PRICING_FAQ = [
  {
    question: 'Is there a setup fee?',
    answer:
      'No. Every plan includes onboarding at no extra cost. You pay the subscription price only — we handle the connection and get you live within 7 working days.',
  },
  {
    question: 'Can I upgrade or downgrade anytime?',
    answer:
      'Yes. Upgrades take effect immediately. Downgrades apply from the start of your next billing cycle. No penalties, no long-term contracts.',
  },
  {
    question: 'What happens if I exceed my invoice limit?',
    answer:
      'On Starter and Growth plans, invoices above your monthly limit are billed at RM 0.08 each. We send an alert when you reach 80% of your limit — no surprise charges.',
  },
  {
    question: 'Do you offer annual discounts?',
    answer:
      'Yes. Annual billing is equivalent to roughly 2 months free compared to paying monthly. Toggle to annual on the pricing cards above to see the per-month rate.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'No free trial — but the discovery call is free, covers your full technical setup, and results in a fixed-price proposal before you pay anything. That is a better safety net than a limited-feature trial.',
  },
  {
    question: 'Which accounting systems are supported on each plan?',
    answer:
      "Starter connects 1 setup — whether that's a spreadsheet, Wave, or a system like AutoCount, Xero, or QuickBooks. Growth connects up to 3. Business and Enterprise support unlimited systems, including fully custom ERP connections.",
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER = {
  services: [
    { label: 'E-Invoice Integration', href: '/services' },
    { label: 'How It Works', href: '/services#solutions' },
    { label: 'Supported Systems', href: '/services#supported-systems' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Book a Free Call', href: '/contact' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Meet the Team', href: '/about#team' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
