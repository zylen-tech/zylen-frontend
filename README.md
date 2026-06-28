# Zylen — E-Invoice Integration Service

Marketing website and (planned) client portal for **Zylen**, a Malaysian e-invoicing middleware that connects businesses to LHDN's MyInvois API.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (Pages Router → App Router migration planned) |
| Styling | Tailwind CSS v3 with custom brand tokens |
| Animations | Framer Motion |
| Language | TypeScript (strict) |
| Linting | ESLint (Airbnb + Next.js) + Prettier |
| Git hooks | Husky + lint-staged (ESLint, Prettier, tsc on commit) |
| Deployment | Vercel |

---

## Project Structure

```
src/
  components/
    layout/       Header, Footer, Meta
    sections/     Hero, Problem, Services, HowItWorks, Pricing,
                  About, BookDemo, Features, Sponsors, Banner
    ui/           Button, FadeIn, SectionHeading, Logo
  constants/
    content.ts    All copy, brand info, nav links, asset paths
  config/
    site.config.ts  App-level config (title, description)
  pages/
    index.tsx     Landing page
    coming-soon.tsx
    _app.tsx
    _document.tsx
  styles/
    global.css

public/
  assets/
    background/   Page background images
    brand/
      logo/       icon, logo, white-icon, white-logo, white-icon-bg, white-logo-bg
      favicon_io/ Favicon sets
```

### Key conventions

- All asset paths are centralised in `ASSETS` in `src/constants/content.ts` — never hardcode `/assets/...` directly in components
- All marketing copy lives in `content.ts` constants (HERO, PROBLEM, SERVICES, etc.) — components receive no raw strings
- Zero `style={{}}` props — everything is Tailwind classes, including arbitrary values (`bg-[url('/...')]`, `tracking-[-0.02em]`, `shadow-[0_0_0_2px_...]`)
- Brand colors: `primary-500: #053959`, `primary-900: #021724`, `lightPrimary: #e8eff4` (defined in `tailwind.config.js`)
- Custom font: `font-montserrat` (Montserrat via `tailwind.config.js` fontFamily extend)

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

```bash
npm run dev          # Development server with live reload
npm run build        # Production build
npm run start        # Start production build locally
npm run lint         # ESLint
npm run format       # ESLint --fix + Prettier
npm run check-types  # TypeScript check (no emit)
npm run clean        # Delete .next, .swc, out
npm run build-prod   # clean + build
```

---

## Roadmap — Full-Stack Evolution

The current codebase is a marketing landing page. The planned full-stack architecture:

### Phase 1 — Lead capture (next)
- [ ] Migrate to **App Router**
- [ ] Contact / Book Demo form with server action → Supabase `leads` table
- [ ] Email notification on new lead (Resend)
- [ ] Delete unused boilerplate files

### Phase 2 — Client portal
- [ ] Auth (NextAuth v5 + Supabase)
- [ ] `/dashboard` — client view of their integration project status
- [ ] `/dashboard/invoices` — submission logs, error tracking
- [ ] `/dashboard/billing` — plan + invoice history

### Phase 3 — Admin panel
- [ ] `/admin` — internal lead pipeline, client onboarding, project management
- [ ] LHDN MyInvois webhook receiver + status sync

### Planned folder additions

```
src/
  app/                  ← App Router (replaces pages/)
    (marketing)/        ← current landing page
    (auth)/             ← login, register
    dashboard/          ← client portal
    admin/              ← internal tools
    api/                ← API routes (leads, webhooks, auth)
  lib/
    db.ts               ← Prisma/Supabase client singleton
    email.ts            ← Resend client
    auth.ts             ← NextAuth config
    myinvois/           ← LHDN API client wrapper
  services/
    leads.ts
    integrations.ts
  types/
    index.ts            ← Lead, Client, Integration, Invoice types
  hooks/                ← Custom React hooks
  components/
    forms/              ← Contact form, Book Demo form
```

### Database (Supabase + Prisma)

```
leads          id, name, email, phone, company, system, status, createdAt
clients        id, company, contactName, email, plan, createdAt
integrations   id, clientId, system, status, goLiveDate, notes
invoices       id, integrationId, lhdnRef, status, submittedAt, errorLog
```

---

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# (Phase 1+)
DATABASE_URL=
DIRECT_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
RESEND_API_KEY=
LHDN_CLIENT_ID=
LHDN_CLIENT_SECRET=
```

---

## Branch Strategy

| Branch | Purpose |
|---|---|
| `master` | Production — deployed to Vercel |
| `release/1.0.0` | Current release candidate |
| `feature/*` | Feature branches off master |

---

## License

ISC © 2026 Zylen Sdn Bhd
