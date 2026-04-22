import { Link } from "react-router-dom";
import { Check, ArrowRight, BarChart3, Zap, Bell, FileText } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";

const features = [
  { icon: BarChart3, title: "Live Financial Dashboards", body: "P&L, cash flow, and burn rate refreshed hourly from your accounting system." },
  { icon: Zap, title: "Custom KPI Scorecards", body: "The 8–12 metrics that actually predict performance — visualized for every leader." },
  { icon: Bell, title: "Threshold Alerting", body: "Get a Slack or email notification the moment a metric crosses your threshold." },
  { icon: FileText, title: "Investor & Board Packs", body: "Auto-generated PDF packages every month — no more copy-pasting from Excel." },
];

const PowerBI = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Power BI Reporting"
        title="Replace Your Spreadsheets"
        subtitle="With Live Financial Intelligence"
        body="We design, build, and maintain custom Microsoft Power BI environments connected to your entire financial data ecosystem — so your leadership team always knows where the business stands."
        crumbs={[{ label: "Home", to: "/" }, { label: "Power BI" }]}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] text-[16px] font-semibold text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.35)] hover:-translate-y-0.5 transition-all">
            Book a Demo <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/fee-estimator" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] text-[16px] font-semibold text-white border border-white/20 hover:border-brand-bright hover:text-brand-bright transition-colors">
            See Pricing
          </Link>
        </div>
      </PageHero>

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="max-w-3xl">
            <span className="label-eyebrow">Why Power BI</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[48px] leading-[1.05] tracking-h2">
              Built On the Same Platform Used by <span className="text-gradient-green">96% of Fortune 500</span>
            </h2>
            <p className="mt-5 text-ink-700 text-[17px] leading-[1.7]">
              Microsoft Power BI is the gold standard for enterprise business intelligence. We bring that same level of reporting sophistication to growing businesses — without the enterprise price tag or implementation timeline.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-surface-soft border border-ink-200 rounded-2xl p-7 hover:border-brand-bright hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#D1FAE5" }}>
                    <Icon className="w-5 h-5" style={{ color: "#065F46" }} />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-ink-900 text-[18px] leading-tight">{f.title}</h3>
                  <p className="mt-3 text-ink-700 text-[14px] leading-[1.7]">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label-eyebrow">What's Included</span>
            <h2 className="mt-5 font-display font-bold text-white text-[36px] lg:text-[48px] leading-[1.05] tracking-h2">
              A Complete Reporting Environment
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7]" style={{ color: "#CBD5E1" }}>
              Every Power BI engagement includes design, build, deployment, and ongoing maintenance. No piecemeal billing — one monthly fee, unlimited dashboards.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Custom data model architecture and design",
                "Secure data refresh pipelines (hourly or real-time)",
                "Up to 10 dashboards, scorecards, and reports",
                "Mobile-friendly responsive layouts",
                "Role-based access control for your team",
                "Monthly performance review and new build sessions",
                "Unlimited revisions and new metric additions",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px]" style={{ color: "#CBD5E1" }}>
                  <Check className="w-5 h-5 mt-0.5 shrink-0 text-brand-bright" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85"
            alt="Power BI dashboard preview"
            loading="lazy"
            className="w-full h-[460px] object-cover rounded-2xl"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}
          />
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
};

export default PowerBI;
