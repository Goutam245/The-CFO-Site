const logos = [
  "QuickBooks",
  "Xero",
  "Microsoft Power BI",
  "Sage",
  "Harvest",
  "Gusto",
  "Rippling",
  "Stripe",
];

export const LogoStrip = () => {
  const doubled = [...logos, ...logos];
  return (
    <section className="bg-white border-y border-ink-200 py-8">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col lg:flex-row items-center gap-6">
        <p className="text-[14px] font-medium text-ink-500 shrink-0">
          Integrated with your existing tools:
        </p>
        <div className="relative overflow-hidden flex-1 w-full">
          <div className="marquee-track flex gap-12 items-center w-max">
            {doubled.map((l, i) => (
              <span
                key={i}
                className="text-[18px] font-display font-semibold text-ink-500 hover:text-brand-deep transition-colors whitespace-nowrap"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
