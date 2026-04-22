import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Lock, Phone, BarChart3, MessageCircle, FolderOpen, RefreshCw, ShieldCheck, Globe2 } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";

type Tier = {
  name: string;
  badge: string;
  badgeColor: { bg: string; text: string };
  price: { monthly: number | "custom"; annual: number | "custom" };
  popular?: boolean;
  features: { label: string; included: boolean }[];
  cta: string;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    badge: "Best for Early Stage",
    badgeColor: { bg: "#D1FAE5", text: "#065F46" },
    price: { monthly: 1200, annual: 1020 },
    features: [
      { included: true, label: "Monthly bookkeeping (up to 200 transactions)" },
      { included: true, label: "Bank and credit card reconciliation" },
      { included: true, label: "Monthly P&L and balance sheet" },
      { included: true, label: "Basic KPI dashboard (up to 5 metrics)" },
      { included: true, label: "Quarterly CFO strategy call (1 hour)" },
      { included: true, label: "Cloud accounting setup and optimization" },
      { included: true, label: "Sales tax filing (1 jurisdiction)" },
      { included: true, label: "Annual financial review" },
      { included: true, label: "Email support (48-hour response)" },
      { included: false, label: "Dedicated CFO advisor" },
      { included: false, label: "Power BI dashboard" },
      { included: false, label: "Investor reporting" },
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    badge: "Most Popular",
    badgeColor: { bg: "#FEF3C7", text: "#92400E" },
    popular: true,
    price: { monthly: 2800, annual: 2380 },
    features: [
      { included: true, label: "Everything in Starter" },
      { included: true, label: "Dedicated CFO Advisor (12 hrs/month)" },
      { included: true, label: "Full Power BI dashboard (unlimited metrics)" },
      { included: true, label: "Cash flow forecasting (13-week rolling)" },
      { included: true, label: "Month-end close management" },
      { included: true, label: "Accounts payable/receivable oversight" },
      { included: true, label: "Payroll review and oversight" },
      { included: true, label: "Time-tracking integration (1 platform)" },
      { included: true, label: "Investor-ready financial package" },
      { included: true, label: "Board deck preparation support" },
      { included: true, label: "Weekly check-in call (30 min)" },
      { included: true, label: "Slack access (same-day response)" },
      { included: true, label: "Sales tax (up to 3 jurisdictions)" },
      { included: true, label: "Annual budget and forecast model" },
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    badge: "For High-Growth & PE-Backed",
    badgeColor: { bg: "#D1FAE5", text: "#065F46" },
    price: { monthly: "custom", annual: "custom" },
    features: [
      { included: true, label: "Everything in Growth" },
      { included: true, label: "Full CFO coverage (unlimited hours)" },
      { included: true, label: "Multi-entity financial consolidation" },
      { included: true, label: "M&A support and due diligence" },
      { included: true, label: "Custom ERP and system integrations" },
      { included: true, label: "Fractional Controller dedicated" },
      { included: true, label: "Multi-jurisdiction tax compliance" },
      { included: true, label: "Audit liaison and management" },
      { included: true, label: "Custom reporting and data warehouse" },
    ],
    cta: "Book a Discovery Call",
  },
];

const includedAll = [
  { icon: Lock, label: "Data Security" },
  { icon: Phone, label: "Onboarding Call" },
  { icon: BarChart3, label: "Monthly Reports" },
  { icon: MessageCircle, label: "Slack Access" },
  { icon: FolderOpen, label: "Document Vault" },
  { icon: RefreshCw, label: "Software Setup" },
  { icon: ShieldCheck, label: "SLA Guarantee" },
  { icon: Globe2, label: "Remote-First Team" },
];

const faqs = [
  { q: "Is there a setup fee?", a: "No. Setup, onboarding, and first-month systems work are included in your monthly fee." },
  { q: "Can I change plans later?", a: "Yes — upgrade or downgrade at any time with 30 days' notice." },
  { q: "What's your minimum contract?", a: "Month-to-month with a 30-day notice period. Annual plans save 15%." },
  { q: "Do prices include software costs?", a: "Our service fees are separate from third-party software (QuickBooks, Power BI license, etc.). We help you procure these at partner pricing." },
  { q: "What if I need more CFO hours?", a: "You can purchase additional hour blocks at $185/hr or upgrade to the next tier." },
  { q: "Do you offer a free trial?", a: "We offer a free 30-minute assessment and a no-risk first-month engagement." },
  { q: "How do I get billed?", a: "Monthly via ACH or credit card on the 1st of each month. Invoices are sent in advance." },
  { q: "Are there any hidden fees?", a: "Never. Everything is itemized in your engagement letter before you sign." },
  { q: "What currencies do you accept?", a: "USD and CAD. We can invoice in EUR or GBP for European clients." },
  { q: "Can I cancel anytime?", a: "Yes — 30 days' written notice. We'll provide complete handover documentation." },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [overhead, setOverhead] = useState(8000);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Pricing"
        title="Transparent Pricing."
        subtitle="No Surprises. Ever."
        body="We believe you should know what you're investing before you ever talk to us. Pick the plan that fits your stage — and change it whenever your business evolves."
        crumbs={[{ label: "Home", to: "/" }, { label: "Pricing" }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-ink-100 rounded-full p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all ${!annual ? "bg-brand-deep text-white" : "text-ink-700"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all ${annual ? "bg-brand-deep text-white" : "text-ink-700"}`}
              >
                Annual — Save 15%
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((t) => {
              const price = annual ? t.price.annual : t.price.monthly;
              return (
                <div
                  key={t.name}
                  className={`bg-white border rounded-2xl p-8 flex flex-col ${
                    t.popular ? "border-2 border-brand-bright lg:scale-105" : "border-ink-200"
                  }`}
                  style={t.popular ? { boxShadow: "0 20px 60px rgba(6,95,70,0.15)" } : undefined}
                >
                  <span
                    className="self-start px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wide"
                    style={{ background: t.badgeColor.bg, color: t.badgeColor.text }}
                  >
                    {t.badge}
                  </span>
                  <h3 className="mt-5 font-display font-bold text-ink-900 text-[28px]">{t.name}</h3>
                  <div className="mt-3">
                    {price === "custom" ? (
                      <p className="font-display font-bold text-ink-900 text-[40px]">Custom</p>
                    ) : (
                      <p className="font-display font-bold text-ink-900 text-[40px]">
                        ${price.toLocaleString()}
                        <span className="text-ink-500 text-[16px] font-medium">/mo</span>
                      </p>
                    )}
                  </div>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {t.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2.5 text-[14px]">
                        {f.included ? (
                          <Check className="w-4 h-4 mt-1 shrink-0 text-brand-bright" />
                        ) : (
                          <X className="w-4 h-4 mt-1 shrink-0 text-ink-500" />
                        )}
                        <span className={f.included ? "text-ink-700" : "text-ink-500 line-through"}>{f.label}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`btn-shimmer mt-7 inline-flex items-center justify-center gap-2 h-12 rounded-[10px] font-semibold transition-all ${
                      t.popular
                        ? "text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.35)]"
                        : "text-brand-deep border-2 border-brand-deep hover:bg-brand-deep hover:text-white"
                    }`}
                  >
                    {t.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="label-eyebrow justify-center">Everything Included</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[32px] lg:text-[44px] leading-[1.05] tracking-h2">
              All Plans Include These Essentials
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {includedAll.map((i) => {
              const Icon = i.icon;
              return (
                <div key={i.label} className="bg-white border border-ink-200 rounded-xl p-5 flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: "#D1FAE5" }}>
                    <Icon className="w-5 h-5" style={{ color: "#065F46" }} />
                  </div>
                  <p className="mt-3 font-semibold text-ink-900 text-[14px]">{i.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[900px] mx-auto px-5 lg:px-10">
          <div className="text-center">
            <span className="label-eyebrow justify-center">ROI Calculator</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[32px] lg:text-[44px] leading-[1.05] tracking-h2">
              See Your Return on Investment
            </h2>
          </div>
          <div className="mt-10 bg-surface-soft border border-ink-200 rounded-2xl p-8">
            <label className="block">
              <span className="font-semibold text-ink-900 text-[15px]">Current monthly finance overhead</span>
              <input
                type="range"
                min={2000}
                max={30000}
                step={500}
                value={overhead}
                onChange={(e) => setOverhead(Number(e.target.value))}
                className="w-full mt-3 accent-brand-deep"
              />
              <div className="flex justify-between text-[13px] text-ink-500 mt-1">
                <span>$2,000</span>
                <span className="font-semibold text-brand-deep text-[16px]">${overhead.toLocaleString()}/mo</span>
                <span>$30,000</span>
              </div>
            </label>
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-ink-200 rounded-xl p-5">
                <p className="text-ink-500 text-[13px] uppercase font-semibold tracking-wider">Today</p>
                <p className="mt-2 font-display font-bold text-ink-900 text-[28px]">${overhead.toLocaleString()}/mo</p>
              </div>
              <div className="rounded-xl p-5" style={{ background: "#065F46" }}>
                <p className="text-white/80 text-[13px] uppercase font-semibold tracking-wider">With The CFO Site</p>
                <p className="mt-2 font-display font-bold text-white text-[28px]">
                  Save ${Math.max(0, overhead - 2800).toLocaleString()}/mo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-20 lg:py-28">
        <div className="max-w-[900px] mx-auto px-5 lg:px-10">
          <div className="text-center">
            <span className="label-eyebrow justify-center">FAQ</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[32px] lg:text-[44px] leading-[1.05] tracking-h2">
              Pricing Questions, Answered
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-ink-200 rounded-xl">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-ink-900 text-[16px]">{f.q}</span>
                  <span className={`text-brand-deep text-[24px] leading-none transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && <div className="px-6 pb-5 text-ink-700 text-[15px] leading-[1.7]">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
};

export default Pricing;
