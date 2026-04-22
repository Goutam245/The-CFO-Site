import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Mail, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";

const employeeOptions = ["1–10 employees", "11–25 employees", "26–50 employees", "51–100 employees", "100+ employees"];
const revenueOptions = [
  "Under $50,000/month",
  "$50,000 – $150,000/month",
  "$150,000 – $500,000/month",
  "$500,000 – $2,000,000/month",
  "Over $2,000,000/month",
];

type ServiceOption = { id: string; label: string; price: number };
const serviceOptions: ServiceOption[] = [
  { id: "cfo", label: "Fractional CFO", price: 1800 },
  { id: "controller", label: "Controllership & Month-End Close", price: 1200 },
  { id: "powerbi", label: "Power BI Dashboard Setup", price: 800 },
  { id: "kpi", label: "KPI Design & Tracking", price: 600 },
  { id: "time", label: "Time-Tracking Integration", price: 400 },
  { id: "cloud", label: "Cloud Migration", price: 0 },
];

const FeeEstimator = () => {
  const [step, setStep] = useState(1);
  const [size, setSize] = useState<string | null>(null);
  const [revenue, setRevenue] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const total = selected.reduce((sum, id) => sum + (serviceOptions.find((s) => s.id === id)?.price || 0), 0);
  const high = Math.round(total * 1.4);

  const toggleService = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);
  const reset = () => {
    setStep(1);
    setSize(null);
    setRevenue(null);
    setSelected([]);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Fee Estimator"
        title="Get Your Personalized"
        subtitle="Investment Estimate"
        body="Three quick questions and you'll see exactly what an engagement with us would cost — plus how much you'd save versus a full-time hire."
        crumbs={[{ label: "Home", to: "/" }, { label: "Fee Estimator" }]}
      />

      <section className="bg-surface-soft py-20 lg:py-28">
        <div className="max-w-[760px] mx-auto px-5">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-10">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex-1 flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-ink-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-green transition-all duration-500"
                    style={{ width: step >= n ? "100%" : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[13px] uppercase tracking-wider font-bold text-brand-deep mb-8">
            {step < 4 ? `Step ${step} of 3` : "Your Results"}
          </p>

          <div className="bg-white border border-ink-200 rounded-3xl p-8 lg:p-12 shadow-[0_30px_80px_rgba(6,95,70,0.08)]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display font-bold text-ink-900 text-[26px] lg:text-[32px] leading-tight">
                    How many people work at your company?
                  </h2>
                  <div className="mt-6 space-y-3">
                    {employeeOptions.map((o) => (
                      <button
                        key={o}
                        onClick={() => setSize(o)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium ${
                          size === o
                            ? "border-brand-bright bg-brand-light/40 text-brand-deep"
                            : "border-ink-200 text-ink-700 hover:border-brand-bright/40"
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display font-bold text-ink-900 text-[26px] lg:text-[32px] leading-tight">
                    What is your approximate monthly revenue?
                  </h2>
                  <div className="mt-6 space-y-3">
                    {revenueOptions.map((o) => (
                      <button
                        key={o}
                        onClick={() => setRevenue(o)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium ${
                          revenue === o
                            ? "border-brand-bright bg-brand-light/40 text-brand-deep"
                            : "border-ink-200 text-ink-700 hover:border-brand-bright/40"
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display font-bold text-ink-900 text-[26px] lg:text-[32px] leading-tight">
                    Which services do you need?
                  </h2>
                  <p className="mt-2 text-ink-500 text-[14px]">Select all that apply.</p>
                  <div className="mt-6 space-y-3">
                    {serviceOptions.map((s) => {
                      const checked = selected.includes(s.id);
                      return (
                        <button
                          key={s.id}
                          onClick={() => toggleService(s.id)}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${
                            checked ? "border-brand-bright bg-brand-light/40" : "border-ink-200 hover:border-brand-bright/40"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className={`w-5 h-5 rounded border-2 flex items-center justify-center ${checked ? "bg-brand-deep border-brand-deep" : "border-ink-200"}`}>
                              {checked && <Check className="w-3.5 h-3.5 text-white" />}
                            </span>
                            <span className="font-semibold text-ink-900 text-[15px]">{s.label}</span>
                          </span>
                          <span className="text-ink-500 text-[14px] font-medium">
                            {s.price > 0 ? `+$${s.price.toLocaleString()}/mo` : "Custom"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="-m-8 lg:-m-12 mb-0 rounded-t-3xl bg-gradient-green p-8 lg:p-10 text-center">
                    <p className="text-white/80 text-[13px] uppercase font-bold tracking-wider">Your Estimated Investment</p>
                    <p className="mt-2 font-display font-bold text-white text-[40px] lg:text-[56px] leading-none">
                      ${total.toLocaleString()} – ${high.toLocaleString()}
                      <span className="text-[20px] font-medium">/mo</span>
                    </p>
                  </div>
                  <div className="mt-8 border border-ink-200 rounded-xl overflow-hidden">
                    <table className="w-full text-[14px]">
                      <thead className="bg-ink-100">
                        <tr>
                          <th className="text-left p-3 font-semibold text-ink-900">Service</th>
                          <th className="text-right p-3 font-semibold text-ink-900">Monthly Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selected.length === 0 ? (
                          <tr><td colSpan={2} className="p-4 text-center text-ink-500">No services selected</td></tr>
                        ) : (
                          selected.map((id) => {
                            const s = serviceOptions.find((x) => x.id === id)!;
                            return (
                              <tr key={id} className="border-t border-ink-200">
                                <td className="p-3 text-ink-700">{s.label}</td>
                                <td className="p-3 text-right text-ink-900 font-semibold">
                                  {s.price > 0 ? `$${s.price.toLocaleString()}` : "Custom"}
                                </td>
                              </tr>
                            );
                          })
                        )}
                        <tr className="bg-surface-soft border-t border-ink-200">
                          <td className="p-3 font-bold text-ink-900">Total Estimate</td>
                          <td className="p-3 text-right font-bold text-brand-deep">${total.toLocaleString()}/mo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 border-2 border-brand-bright rounded-xl p-5 bg-brand-light/30">
                    <p className="font-semibold text-ink-900 text-[15px]">
                      Compared to a full-time CFO ($18,000–$25,000/mo)
                    </p>
                    <p className="mt-1 text-brand-deep font-display font-bold text-[22px]">
                      You save up to ${Math.max(0, 22000 - total).toLocaleString()} every month
                    </p>
                    <p className="mt-1 text-ink-700 text-[14px]">
                      That's ${Math.max(0, (22000 - total) * 12).toLocaleString()} saved per year
                    </p>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    <Link
                      to="/contact"
                      className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] font-semibold text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.35)]"
                    >
                      Book Free Assessment <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/resources"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] font-semibold text-brand-deep border-2 border-brand-deep hover:bg-brand-deep hover:text-white transition-colors"
                    >
                      <Download className="w-4 h-4" /> Download Pricing PDF
                    </Link>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="mt-6 border-t border-ink-200 pt-5"
                  >
                    <p className="font-semibold text-ink-900 text-[14px]">Send my estimate to my inbox:</p>
                    <div className="mt-3 flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="flex-1 px-4 h-11 rounded-[10px] border border-ink-200 text-ink-900 outline-none focus:border-brand-bright"
                      />
                      <button
                        type="submit"
                        className="h-11 px-5 rounded-[10px] font-semibold text-white bg-brand-deep hover:bg-brand-mid inline-flex items-center justify-center gap-2"
                      >
                        {sent ? "Sent ✓" : <><Mail className="w-4 h-4" /> Send</>}
                      </button>
                    </div>
                  </form>

                  <button onClick={reset} className="mt-6 text-[14px] text-ink-500 underline hover:text-brand-deep">
                    Start over
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {step < 4 && (
              <div className="mt-8 flex justify-between gap-3">
                <button
                  onClick={back}
                  disabled={step === 1}
                  className="px-5 h-11 rounded-[10px] font-semibold text-ink-700 disabled:opacity-30 hover:bg-ink-100 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={next}
                  disabled={(step === 1 && !size) || (step === 2 && !revenue) || (step === 3 && selected.length === 0)}
                  className="btn-shimmer px-6 h-11 rounded-[10px] font-semibold text-white bg-gradient-green inline-flex items-center gap-2 disabled:opacity-40 disabled:pointer-events-none shadow-[0_4px_20px_rgba(5,150,105,0.35)]"
                >
                  {step === 3 ? "Calculate My Investment" : "Next Step"} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FeeEstimator;
