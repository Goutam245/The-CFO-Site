import { Link } from "react-router-dom";
import { ArrowRight, Check, Target, TrendingUp, Activity, AlertTriangle } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";

const pillars = [
  { icon: Target, title: "Define", body: "Identify the 8–12 KPIs that genuinely predict your business performance." },
  { icon: Activity, title: "Connect", body: "Wire your accounting, CRM, and ops data into a single live scorecard." },
  { icon: TrendingUp, title: "Track", body: "Automated weekly scorecards delivered to leadership inboxes." },
  { icon: AlertTriangle, title: "Alert", body: "Slack and email alerts the moment a metric crosses your threshold." },
];

const KPITracking = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="KPI Tracking"
        title="The 8–12 Numbers"
        subtitle="That Actually Run Your Business"
        body="Most companies track too many metrics that no one acts on. We help you identify the small set of leading indicators that genuinely predict revenue, margin, and cash performance."
        crumbs={[{ label: "Home", to: "/" }, { label: "KPI Tracking" }]}
      >
        <Link to="/contact" className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[16px] font-semibold text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.35)] hover:-translate-y-0.5 transition-all">
          Build My KPI Framework <ArrowRight className="w-4 h-4" />
        </Link>
      </PageHero>

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="max-w-3xl">
            <span className="label-eyebrow">Our Approach</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[48px] leading-[1.05] tracking-h2">
              Define. Connect. Track. <span className="text-gradient-green">Alert.</span>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-surface-soft border border-ink-200 rounded-2xl p-7 hover:border-brand-bright hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#D1FAE5" }}>
                    <Icon className="w-5 h-5" style={{ color: "#065F46" }} />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-ink-900 text-[20px]">{p.title}</h3>
                  <p className="mt-3 text-ink-700 text-[14px] leading-[1.7]">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="max-w-3xl">
            <span className="label-eyebrow">Sample KPI Frameworks</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[44px] leading-[1.05] tracking-h2">Industry-Specific Frameworks</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { name: "SaaS", kpis: ["MRR / ARR Growth", "Net Revenue Retention", "CAC Payback (months)", "Gross Margin %", "Burn Multiple", "Magic Number"] },
              { name: "E-Commerce", kpis: ["Contribution Margin", "AOV by Channel", "Repeat Purchase Rate", "Inventory Turn", "Marketing Efficiency", "Cash Conversion Cycle"] },
              { name: "Professional Services", kpis: ["Utilization %", "Realization Rate", "Project Margin", "Pipeline Coverage", "Days Sales Outstanding", "Revenue per Employee"] },
            ].map((f) => (
              <div key={f.name} className="bg-white border border-ink-200 rounded-2xl p-7">
                <span className="inline-block px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wide" style={{ background: "#D1FAE5", color: "#065F46" }}>
                  {f.name}
                </span>
                <ul className="mt-5 space-y-2.5">
                  {f.kpis.map((k) => (
                    <li key={k} className="flex items-start gap-2.5 text-[14px] text-ink-700">
                      <Check className="w-4 h-4 mt-1 shrink-0 text-brand-bright" />
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
};

export default KPITracking;
