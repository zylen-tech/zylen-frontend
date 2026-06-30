# Zylen — E-Invoice Integration Service

Multi-page marketing website for **Zylen**, a Malaysian e-invoicing middleware that connects businesses to LHDN's MyInvois API. Built front-end first — full-stack (auth, client portal, admin panel) is the next phase.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 — Pages Router |
| Styling | Tailwind CSS v3 with custom brand tokens |
| Animations | Framer Motion |
| Language | TypeScript (strict) |
| Linting | ESLint (Airbnb + Next.js) + Prettier |
| Git hooks | Husky + lint-staged (ESLint, Prettier, tsc on every commit) |
| Deployment | Vercel (auto-deploy from `master`) |

---

## Pages

| Route | File | Sections |
|---|---|---|
| `/` | `pages/index.tsx` | Hero, Problem, Sponsors, Services, How It Works, Book Demo |
| `/services` | `pages/services.tsx` | Features, Services, Pricing, Book Demo |
| `/about` | `pages/about.tsx` | Team, Company story, Book Demo |
| `/contact` | `pages/contact.tsx` | Book Demo, Email / WhatsApp / Calendly cards |

---

## Project Structure

```
src/
│
├── pages/                        # Thin view wrappers — one import + one return
│   ├── index.tsx                 # /
│   ├── services.tsx              # /services
│   ├── about.tsx                 # /about
│   ├── contact.tsx               # /contact
│   ├── _app.tsx                  # getLayout pattern + page transitions
│   └── _document.tsx
│
├── layouts/                      # One layout per user role
│   └── PublicLayout.tsx          # Header + main + Footer (used by all current pages)
│   # AuthLayout.tsx              ← Phase 2
│   # AdminLayout.tsx             ← Phase 3
│
├── components/
│   ├── public/                   # Public-facing sections — no API calls
│   │   ├── home/                 # Hero.tsx  Problem.tsx  Sponsors.tsx
│   │   ├── services/             # Features.tsx  Pricing.tsx
│   │   ├── about/                # About.tsx
│   │   └── shared/               # Services.tsx  HowItWorks.tsx  BookDemo.tsx
│   │                             # PageHero.tsx  Banner.tsx
│   │
│   ├── features/                 # Business logic per feature (Phase 1+)
│   │   # Pattern: services/ hooks/ components/ constants/
│   │
│   ├── forms/                    # Controlled form field components (Phase 1+)
│   │
│   ├── layout/                   # Navigation shell
│   │   ├── Header.tsx            # Sticky, transparent→dark on scroll, active links
│   │   ├── Footer.tsx            # Background as="footer" variant="blur"
│   │   └── Meta.tsx
│   │
│   └── ui/                       # Generic reusable UI — no business logic
│       ├── Background.tsx        # variant: blur|blur-alt|white|light|dark|none
│       ├── Button.tsx
│       ├── FadeIn.tsx
│       ├── SectionHeading.tsx
│       └── Logo.tsx
│
├── services/
│   └── api.ts                    # Fetch wrapper (get/post/put/patch/delete)
│                                 # Auth header + 401 handling ready for backend
│
├── hooks/
│   └── useInView.ts              # IntersectionObserver hook → { ref, inView }
│
├── constants/
│   └── content.ts                # All copy + ASSETS + BRAND + NAV_LINKS + PAGE_HEROES
│
├── config/
│   └── site.config.ts            # AppConfig (title, description)
│
├── types/
│   └── next.ts                   # NextPageWithLayout + AppPropsWithLayout
│
└── styles/
    └── global.css

public/
  assets/
    background/                   # blur-img-bg-1.png  blur-img-bg.png
    brand/
      logo/                       # white-icon-bg.png (used in Header + Footer)
      favicon_io/
```

---

## Key Conventions

**Pages are thin wrappers**
```tsx
const ServicesPage: NextPageWithLayout = () => (
  <>
    <Meta title="..." description="..." />
    <PageHero eyebrow="..." headline="..." description="..." />
    <Features />
    <Pricing />
    <BookDemo />
  </>
);
ServicesPage.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;
export default ServicesPage;
```

**Asset paths — always from ASSETS, never hardcoded**
```ts
import { ASSETS } from '../constants/content';
// ASSETS.logo.whiteIconBg  →  '/assets/brand/logo/white-icon-bg.png'
// ASSETS.background.blur   →  '/assets/background/blur-img-bg-1.png'
```

**Background component**
```tsx
<Background variant="blur" position="top" className="relative z-10">
  <Hero />
</Background>

// Renders as a semantic element:
<Background as="footer" variant="blur" className="rounded-xl">
```

**Zero inline styles** — everything is Tailwind, including arbitrary values:
`bg-[url('/...')]` · `tracking-[-0.02em]` · `shadow-[0_0_0_2px_#05395920]` · `backdrop-blur-[14px]`

**Brand tokens** (`tailwind.config.js`)

| Token | Value | Usage |
|---|---|---|
| `primary-500` | `#053959` | Text, borders, icons |
| `primary-900` | `#021724` | Dark bg, header blur |
| `lightPrimary` | `#e8eff4` | Eyebrow badges, icon backgrounds |
| `font-montserrat` | Montserrat | Headings, prices, step numbers |

---

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Serve production build
npm run lint         # ESLint check
npm run format       # ESLint --fix + Prettier
npm run check-types  # TypeScript (no emit)
npm run clean        # Delete .next .swc out
npm run build-prod   # clean + build
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values. Never commit `.env.local`.

```bash
# Current (front-end only)
NEXT_PUBLIC_SITE_URL=https://www.zylen.com.my
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/zylen
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/601112345678

# Phase 1 — Lead capture
NEXT_PUBLIC_API_URL=http://localhost:3000

# Phase 2 — Auth + Database
DATABASE_URL=
DIRECT_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
RESEND_API_KEY=

# Phase 3 — LHDN MyInvois
LHDN_CLIENT_ID=
LHDN_CLIENT_SECRET=
LHDN_BASE_URL=
```

---

## Full-Stack Roadmap

### Phase 1 — Lead capture
- [ ] Book Demo / Contact form → `api/leads` → Supabase `leads` table
- [ ] Email notification on new lead (Resend)
- [ ] `components/features/leads/` — service + hook + form component

### Phase 2 — Client portal
- [ ] Auth: NextAuth v5 + Supabase
- [ ] `layouts/AuthLayout.tsx` — login / register pages
- [ ] `/dashboard` — project status, invoice logs, billing
- [ ] `components/features/integrations/` · `features/invoices/`

### Phase 3 — Admin panel
- [ ] `layouts/AdminLayout.tsx` — sidebar shell
- [ ] `/admin` — leads pipeline, client onboarding, project management
- [ ] LHDN MyInvois webhook receiver + status sync
- [ ] `components/features/leads/` · `features/clients/` · `features/staff/`

### Database schema (Supabase + Prisma)

```
leads          id, name, email, phone, company, system, message, status, createdAt
clients        id, company, contactEmail, plan, createdAt
integrations   id, clientId, system, status, goLiveDate, notes
invoices       id, integrationId, lhdnRef, status, submittedAt, errorLog
```

---

## Branch Strategy

| Branch | Purpose |
|---|---|
| `master` | Production — auto-deployed to Vercel |
| `release/1.0.0` | Current release candidate |
| `feature/*` | Feature branches off `master` |

---

## License

ISC © 2026 Zylen Sdn Bhd
