import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe2, Home, TrendingUp, DollarSign, ChevronDown } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";

const culture = [
  { icon: Globe2, title: "Global Team", body: "Senior talent across 15 countries collaborating every day." },
  { icon: Home, title: "100% Remote", body: "Work from anywhere — always have, always will." },
  { icon: TrendingUp, title: "Growth-First", body: "Certifications, promotions, mentorship — built into the role." },
  { icon: DollarSign, title: "Market Pay", body: "Competitive in your local currency, reviewed annually." },
];

type Job = {
  title: string;
  level: string;
  range: string;
  type: string;
  notes?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

const jobs: Job[] = [
  {
    title: "Senior CFO Advisor",
    level: "Leadership",
    range: "$100K–$140K",
    type: "Full-time",
    notes: "CPA Required",
    description: "Lead 6–10 client engagements, own strategic financial leadership, and serve as the primary advisor to founders and CEOs.",
    responsibilities: ["Own strategic finance for client portfolio", "Lead board and investor presentations", "Build and maintain 13-week cash forecasts", "Mentor controllers and analysts on the engagement"],
    requirements: ["CPA designation", "12+ years progressive finance experience", "Prior CFO or VP Finance role", "Big Four background preferred"],
  },
  {
    title: "Controller",
    level: "Senior",
    range: "$75K–$95K",
    type: "Full-time",
    notes: "CPA Preferred",
    description: "Run month-end close, manage AP/AR, and ensure clean books across a portfolio of growing clients.",
    responsibilities: ["Manage month-end close for 4–6 clients", "Oversee multi-entity consolidations", "Coordinate with external auditors", "Review junior bookkeeper work"],
    requirements: ["CPA or actively pursuing", "6+ years accounting experience", "QuickBooks Online + Xero proficiency", "Strong written communication"],
  },
  {
    title: "Senior Bookkeeper",
    level: "Mid",
    range: "$45K–$65K",
    type: "Full-time",
    description: "Maintain accurate books across 5–8 client accounts using cloud accounting platforms.",
    responsibilities: ["Daily transaction coding", "Monthly bank and credit card reconciliations", "Sales tax filings", "AP/AR processing"],
    requirements: ["3+ years bookkeeping experience", "QuickBooks Online certification", "Strong attention to detail"],
  },
  {
    title: "Power BI Analyst",
    level: "Senior",
    range: "$55K–$80K",
    type: "Contract",
    description: "Design and build Power BI dashboards for clients across SaaS, e-commerce, and professional services.",
    responsibilities: ["Build custom data models in Power BI", "Design KPI scorecards", "Set up automated refresh pipelines", "Train client teams on dashboard usage"],
    requirements: ["3+ years Power BI experience", "DAX expertise", "SQL proficiency", "Experience with finance data preferred"],
  },
  {
    title: "Payroll Specialist",
    level: "Mid",
    range: "$38K–$55K",
    type: "Part-time",
    description: "Run payroll for client portfolio across US and Canadian jurisdictions.",
    responsibilities: ["Bi-weekly and monthly payroll processing", "Year-end T4 / W-2 production", "Benefits and deductions management"],
    requirements: ["3+ years payroll experience", "Multi-state or multi-province experience", "Gusto or Rippling proficiency"],
  },
  {
    title: "Client Success Manager",
    level: "Senior",
    range: "$50K–$70K",
    type: "Full-time",
    description: "Own client relationships from onboarding through renewal — ensuring every engagement delivers measurable value.",
    responsibilities: ["Onboard new clients within 7 days", "Schedule and facilitate quarterly reviews", "Identify expansion opportunities", "Manage renewal pipeline"],
    requirements: ["4+ years account management", "Finance or accounting background preferred", "Excellent presentation skills"],
  },
];

const levels = ["All", "Leadership", "Senior", "Mid", "Entry"];

const hiringSteps = [
  { n: "1", title: "Submit your application", body: "Takes about 5 minutes. Tell us about yourself and what role interests you." },
  { n: "2", title: "Video screening call", body: "20-minute conversation with our People team to align on fit and expectations." },
  { n: "3", title: "Skills assessment", body: "Paid 2-hour exercise that mirrors real client work. We pay for your time." },
  { n: "4", title: "Final interview + offer", body: "Meet your future team. If it's a fit, we'll have an offer within 48 hours." },
];

const CareersPage = () => {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = filter === "All" ? jobs : jobs.filter((j) => j.level === filter);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Join the Team"
        title="Work From Anywhere."
        subtitle="Lead From the Front."
        body="We are building the world's best remote accounting and finance team. Whether you're a bookkeeper looking for your first remote role or a seasoned CFO advisor — we want to meet you."
        crumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
      />

      <section className="bg-surface-soft py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="max-w-3xl">
            <span className="label-eyebrow">Culture</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[48px] leading-[1.05] tracking-h2">
              Why People Stay.
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {culture.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-white border border-ink-200 rounded-2xl p-7">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#D1FAE5" }}>
                    <Icon className="w-5 h-5" style={{ color: "#065F46" }} />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-ink-900 text-[18px]">{c.title}</h3>
                  <p className="mt-3 text-ink-700 text-[14px] leading-[1.7]">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="label-eyebrow">Open Positions</span>
              <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[48px] leading-[1.05] tracking-h2">
                Find Your Next Role.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {levels.map((l) => (
                <button
                  key={l}
                  onClick={() => setFilter(l)}
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all ${
                    filter === l ? "bg-brand-deep text-white" : "bg-ink-100 text-ink-700 hover:bg-ink-200"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-3">
            {filtered.map((j) => (
              <div key={j.title} className="border border-ink-200 rounded-xl bg-white">
                <button
                  onClick={() => setOpen(open === j.title ? null : j.title)}
                  className="w-full text-left p-5 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6"
                >
                  <p className="font-display font-bold text-ink-900 text-[18px] flex-1">{j.title}</p>
                  <div className="flex flex-wrap gap-2 text-[13px]">
                    <span className="px-2.5 py-1 rounded-md bg-ink-100 text-ink-700 font-medium">Remote</span>
                    <span className="px-2.5 py-1 rounded-md font-medium" style={{ background: "#D1FAE5", color: "#065F46" }}>{j.range}</span>
                    <span className="px-2.5 py-1 rounded-md bg-ink-100 text-ink-700 font-medium">{j.type}</span>
                    {j.notes && <span className="px-2.5 py-1 rounded-md font-medium" style={{ background: "#FEF3C7", color: "#92400E" }}>{j.notes}</span>}
                  </div>
                  <ChevronDown className={`w-5 h-5 text-ink-500 transition-transform ${open === j.title ? "rotate-180" : ""}`} />
                </button>
                {open === j.title && (
                  <div className="px-5 pb-5 border-t border-ink-200 pt-5 text-[14px]">
                    <p className="text-ink-700 leading-[1.7]">{j.description}</p>
                    <div className="mt-5 grid md:grid-cols-2 gap-5">
                      <div>
                        <p className="font-semibold text-ink-900 mb-2">Responsibilities</p>
                        <ul className="space-y-1.5 text-ink-700 list-disc list-inside">
                          {j.responsibilities.map((r) => <li key={r}>{r}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-ink-900 mb-2">Requirements</p>
                        <ul className="space-y-1.5 text-ink-700 list-disc list-inside">
                          {j.requirements.map((r) => <li key={r}>{r}</li>)}
                        </ul>
                      </div>
                    </div>
                    <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] font-semibold text-white bg-gradient-green">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="max-w-2xl">
            <span className="label-eyebrow">How We Hire</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[48px] leading-[1.05] tracking-h2">
              Four Steps. Fully Transparent.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((s) => (
              <div key={s.n} className="bg-white border border-ink-200 rounded-2xl p-7 relative">
                <p className="font-display font-extrabold text-brand-light text-[60px] leading-none">{s.n}</p>
                <h3 className="mt-3 font-display font-bold text-ink-900 text-[18px]">{s.title}</h3>
                <p className="mt-2 text-ink-700 text-[14px] leading-[1.7]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-5 lg:px-10">
          <div className="text-center">
            <span className="label-eyebrow justify-center">Don't See Your Role?</span>
            <h2 className="mt-5 font-display font-bold text-white text-[32px] lg:text-[44px] leading-[1.05] tracking-h2">
              Tell Us About Yourself Anyway.
            </h2>
            <p className="mt-5 text-[16px]" style={{ color: "#CBD5E1" }}>
              We hire on talent, not job openings. If you're exceptional, reach out.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-8 mx-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] font-semibold text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.35)]"
          >
            Submit a General Application <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default CareersPage;
