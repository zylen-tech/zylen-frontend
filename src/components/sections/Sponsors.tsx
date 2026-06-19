const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '1M+', label: 'Invoices Processed' },
  { value: '50+', label: 'ERP Integrations' },
  { value: 'SOC 2', label: 'Type II Certified' },
];

const Sponsors = () => (
  <section className="border-b border-gray-100 bg-white py-14">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
        Trusted by finance teams across industries
      </p>
      <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 text-center"
          >
            <span className="text-4xl font-bold text-primary-500 md:text-5xl">
              {value}
            </span>
            <span className="text-sm text-gray-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { Sponsors };
