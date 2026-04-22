import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const items = [
  "The 5 cash flow warning signs most founders miss",
  "How to evaluate fractional vs full-time CFO candidates",
  "The KPIs your new CFO must own on day one",
  "30-day onboarding checklist for finance leaders",
  "True cost comparison: all three hiring models",
];

export const LeadMagnet = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#065F46" }}>
      <div className="grain-overlay" style={{ opacity: 0.05 }} />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-[60fr_40fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider"
            style={{ background: "white", color: "#065F46" }}
          >
            Free Download
          </span>
          <h2 className="mt-5 font-display font-bold text-white text-[36px] lg:text-[52px] leading-[1.05] tracking-h2">
            The CFO Readiness Checklist
          </h2>
          <p className="mt-5 text-[18px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.85)" }}>
            27 financial signals that tell you it's time to hire a Fractional CFO — plus the exact
            questions to ask before you do.
          </p>
          <ul className="mt-7 space-y-3">
            {items.map((i) => (
              <li key={i} className="flex items-start gap-3 text-white/95 text-[15px]">
                <Check className="w-5 h-5 mt-0.5 shrink-0 text-brand-light" />
                {i}
              </li>
            ))}
          </ul>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="mt-8 grid sm:grid-cols-[1fr_1fr_auto] gap-3 max-w-2xl"
          >
            <input
              required
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 h-12 rounded-[10px] bg-white text-ink-900 placeholder:text-ink-500 outline-none focus:ring-2 focus:ring-brand-bright"
            />
            <input
              required
              type="email"
              placeholder="Your Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 h-12 rounded-[10px] bg-white text-ink-900 placeholder:text-ink-500 outline-none focus:ring-2 focus:ring-brand-bright"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-[10px] font-bold inline-flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-lg transition-all"
              style={{ background: "white", color: "#065F46" }}
            >
              {done ? "Sent ✓" : (<>Download Free <ArrowRight className="w-4 h-4" /></>)}
            </button>
          </form>

          <p className="mt-5 text-[14px]" style={{ color: "rgba(255,255,255,0.7)" }}>
            ⭐ Downloaded by 3,400+ founders and finance leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 0, y: 40 }}
          whileInView={{ opacity: 1, rotate: -3, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto w-full max-w-sm bg-white rounded-2xl p-8 overflow-hidden"
          style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.3)" }}
        >
          <div className="h-2 rounded-full bg-gradient-green mb-6" />
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-deep">
            The CFO Site
          </p>
          <h3 className="mt-5 font-display font-bold text-ink-900 text-[34px] leading-[1.05]">
            CFO Readiness <br />
            <span className="text-brand-deep">Checklist</span>
          </h3>
          <p className="mt-3 text-ink-500 text-[14px]">27 Signals. 1 Decision.</p>
          <div className="mt-6 space-y-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-light text-brand-deep text-[11px] font-bold flex items-center justify-center">
                  {n}
                </span>
                <span className="h-2 flex-1 rounded-full bg-ink-100" />
              </div>
            ))}
          </div>
          <div
            className="mt-7 inline-block px-3 py-1.5 rounded-md text-white text-[11px] font-bold uppercase tracking-wider"
            style={{ background: "#065F46" }}
          >
            Free Download
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;
