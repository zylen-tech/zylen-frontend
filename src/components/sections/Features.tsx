const features = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Seamless E-Invoice Integration',
    description:
      'Connect Zylen to your ERP, accounting software, or custom workflow in minutes. Our RESTful API supports all major platforms with zero downtime.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Automated Compliance',
    description:
      'Stay ahead of regulatory requirements. Zylen auto-validates every invoice against the latest government standards so you never face penalties.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Real-time Tracking',
    description:
      'Monitor every invoice from submission to approval in real time. Get instant alerts on rejections, delays, or approvals — all in one dashboard.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Developer-First API',
    description:
      'Comprehensive SDKs, webhooks, and sandbox environments. Integrate in days, not months — with full documentation and dedicated support.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Advanced Analytics',
    description:
      'Gain full visibility into your invoicing pipeline. Track processing times, identify bottlenecks, and export reports for finance teams.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Multi-Entity Support',
    description:
      'Manage invoicing across multiple subsidiaries, branches, or legal entities from a single account — with granular role-based access control.',
  },
];

const Features = () => (
  <section id="solutions" className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="mb-14 text-center">
        <span
          className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
          style={{ background: '#e8eff4', color: '#053959' }}
        >
          Features
        </span>
        <h2
          className="text-3xl font-bold md:text-4xl lg:text-5xl"
          style={{ color: '#053959', letterSpacing: '-0.02em' }}
        >
          Everything you need to
          <br className="hidden md:block" /> run e-invoicing at scale
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-500">
          From first connection to full compliance — Zylen handles every step of
          your e-invoicing workflow automatically.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <div
            key={title}
            className="group rounded-2xl border border-gray-100 bg-white p-7 transition-shadow duration-200 hover:shadow-lg"
            style={{ boxSizing: 'border-box' }}
          >
            <div
              className="mb-5 inline-flex items-center justify-center rounded-xl p-3"
              style={{ background: '#e8eff4', color: '#053959' }}
            >
              {icon}
            </div>
            <h3
              className="mb-2 text-base font-semibold"
              style={{ color: '#053959' }}
            >
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { Features };
