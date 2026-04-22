import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Instant estimate — no email required",
  "Side-by-side savings vs full-time hire",
  "Full service-by-service cost breakdown",
  "Downloadable PDF price guide",
];

const breakdown = [
  { label: "Fractional CFO", price: "$1,800/mo", pct: 80, color: "#10B981" },
  { label: "Controllership", price: "$1,200/mo", pct: 60, color: "#34D399" },
  { label: "Power BI", price: "$800/mo", pct: 40, color: "#6EE7B7" },
];

export const Estimator = () => {
  return (
    <section className="relative bg-surface-dark py-24 lg:py-32 overflow-hidden">
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          bottom: -200,
          right: -150,
          background: "#10B981",
          opacity: 0.1,
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-eyebrow">Pricing Transparency</span>
          <h2 className="mt-5 font-display font-bold text-white text-[36px] lg:text-[52px] leading-[1.05] tracking-h2">
            Find Out What a Fractional CFO
            <br />
            <span className="text-gradient-green">Costs Your Business</span>
          </h2>
          <p className="mt-6 text-[18px] leading-[1.75]" style={{ color: "#94A3B8" }}>
            We believe in radical transparency. Our fee estimator gives you an instant,
            personalized investment range based on your business size, revenue, and the services
            you need. No sales call required to see a number.
          </p>
          <ul className="mt-7 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-white/90 text-[16px]">
                <Check className="w-5 h-5 text-brand-bright shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            to="/fee-estimator"
            className="btn-shimmer mt-10 inline-flex items-center justify-center gap-2 px-8 h-14 rounded-[10px] text-[18px] font-bold text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.4)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
          >
            Calculate My Investment <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-[14px]" style={{ color: "#CBD5E1" }}>
            Most clients save $8,000–$16,000/month vs a full-time hire
          </p>
          <p className="mt-4 text-[14px]" style={{ color: "#64748B" }}>
            Most clients save $8,000–$16,000/month vs a full-time hire
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[20px] p-8 lg:p-10"
          style={{
            background: "#161B27",
            border: "1px solid rgba(16,185,129,0.2)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
          }}
        >
          <p className="text-[14px] font-medium uppercase tracking-wider" style={{ color: "#94A3B8" }}>
            Estimated Monthly Investment
          </p>
          <p className="mt-3 font-display font-bold text-white text-[42px] lg:text-[48px] tracking-tight leading-none">
            $2,400 <span className="text-ink-500 font-medium">—</span> $4,800
            <span className="text-[20px] font-medium text-ink-500"> /month</span>
          </p>

          <div className="mt-8 space-y-5">
            {breakdown.map((b) => (
              <div key={b.label}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-white text-[15px] font-medium">{b.label}</span>
                  <span className="text-white/70 text-[14px]">{b.price}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{ background: b.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-8 px-5 py-4 rounded-xl text-[15px] font-semibold text-brand-bright"
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            You save up to $14,200/month vs full-time
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Estimator;
