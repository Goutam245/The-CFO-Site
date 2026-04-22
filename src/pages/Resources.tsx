import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, X, FileText, BookOpen, Calculator, Briefcase, ClipboardList, Cloud } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";

const resources = [
  { id: "1", icon: ClipboardList, type: "PDF · 12 pages", title: "CFO Readiness Checklist", desc: "27 financial signals that tell you it's time to hire a Fractional CFO — plus the exact questions to ask before you do.", learn: ["The 5 cash flow warning signs", "How to evaluate fractional vs full-time CFOs", "30-day onboarding checklist"] },
  { id: "2", icon: BookOpen, type: "Whitepaper · 24 pages", title: "Power BI for Founders", desc: "A non-technical guide to building executive dashboards that drive real decisions.", learn: ["Choosing the right metrics", "Data architecture basics", "Sample dashboard layouts"] },
  { id: "3", icon: Calculator, type: "Google Sheets", title: "KPI Tracking Template", desc: "Plug-and-play tracker with 12 leading and lagging indicators for SaaS, e-commerce, and services.", learn: ["Pre-built formulas", "Automated trend charts", "Threshold alert templates"] },
  { id: "4", icon: Briefcase, type: "Guide · 18 pages", title: "When to Hire a CFO", desc: "Stage-by-stage guidance on when (and how) to bring senior finance leadership into your business.", learn: ["The 3 inflection points", "Cost-benefit analysis frameworks", "Sample compensation models"] },
  { id: "5", icon: FileText, type: "PDF · 2 pages", title: "Month-End Close Checklist", desc: "The exact 47-step checklist our controllers use to close the books in 5 days or less.", learn: ["Daily, weekly, monthly tasks", "Reconciliation workflows", "Sign-off templates"] },
  { id: "6", icon: Cloud, type: "PDF · 30 pages", title: "Cloud Migration Playbook", desc: "Move from desktop accounting to QuickBooks Online or Xero without disrupting operations.", learn: ["Pre-migration audit", "Data mapping strategy", "Team training plan"] },
];

const blogPreviews = [
  { tag: "Strategy", title: "The 5 Financial KPIs Every SaaS Founder Should Track", read: "6 min read", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=85" },
  { tag: "Operations", title: "How to Close the Books in 5 Days (Even if You're a Mess Right Now)", read: "9 min read", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=85" },
  { tag: "Power BI", title: "Building Your First Executive Dashboard in Power BI", read: "12 min read", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85" },
];

const Resources = () => {
  const [modalId, setModalId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const close = () => { setModalId(null); setDone(false); setName(""); setEmail(""); };
  const active = resources.find((r) => r.id === modalId);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Resources"
        title="Free Tools & Guides"
        subtitle="For Finance Leaders"
        body="Practical playbooks, templates, and frameworks built from real client engagements. Download anything — no email required for most resources."
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources" }]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.id} className="bg-white border border-ink-200 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:border-brand-bright hover:shadow-[0_20px_60px_rgba(6,95,70,0.1)] transition-all">
                  <div className="h-44 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #064E3B, #065F46)" }}>
                    <div className="bg-white rounded-lg w-32 h-40 shadow-2xl flex flex-col p-3">
                      <div className="h-1 rounded-full bg-brand-bright mb-3" />
                      <Icon className="w-7 h-7 text-brand-deep" />
                      <p className="mt-3 font-display font-bold text-ink-900 text-[10px] leading-tight">{r.title}</p>
                      <div className="mt-auto space-y-1">
                        {[1,2,3].map((n) => <div key={n} className="h-1 bg-ink-200 rounded-full" />)}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-brand-deep">{r.type}</span>
                    <h3 className="mt-2 font-display font-bold text-ink-900 text-[18px] leading-tight">{r.title}</h3>
                    <p className="mt-2 text-ink-700 text-[14px] leading-[1.7]">{r.desc}</p>
                    <ul className="mt-4 space-y-1.5">
                      {r.learn.map((l) => (
                        <li key={l} className="text-[13px] text-ink-500 flex items-start gap-2">
                          <span className="text-brand-bright">✓</span> {l}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setModalId(r.id)}
                      className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[10px] font-semibold text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.25)]"
                    >
                      <Download className="w-4 h-4" /> Download Free
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="label-eyebrow">From the Blog</span>
              <h2 className="mt-5 font-display font-bold text-ink-900 text-[32px] lg:text-[44px] leading-[1.05] tracking-h2">
                Latest Articles
              </h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-deep font-semibold hover:text-brand-bright transition-colors">
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPreviews.map((b) => (
              <Link key={b.title} to="/blog" className="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-brand-bright transition-all">
                <img src={b.img} alt={b.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-brand-deep">{b.tag}</span>
                  <h3 className="mt-2 font-display font-bold text-ink-900 text-[18px] leading-tight group-hover:text-brand-bright transition-colors">{b.title}</h3>
                  <p className="mt-3 text-ink-500 text-[13px]">{b.read}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      {/* Download modal */}
      {modalId && active && (
        <div className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={close}>
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={close} className="absolute top-4 right-4 text-ink-500 hover:text-ink-900" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            {!done ? (
              <>
                <h3 className="font-display font-bold text-ink-900 text-[24px]">Download "{active.title}"</h3>
                <p className="mt-2 text-ink-500 text-[14px]">Enter your details and we'll send the resource straight to your inbox.</p>
                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-6 space-y-3">
                  <input
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 px-4 rounded-[10px] border border-ink-200 outline-none focus:border-brand-bright text-ink-900"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 px-4 rounded-[10px] border border-ink-200 outline-none focus:border-brand-bright text-ink-900"
                  />
                  <button type="submit" className="w-full h-12 rounded-[10px] font-semibold text-white bg-gradient-green inline-flex items-center justify-center gap-2">
                    Download Now <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mx-auto">
                  <Download className="w-6 h-6 text-brand-deep" />
                </div>
                <h3 className="mt-5 font-display font-bold text-ink-900 text-[22px]">Thank you, {name || "there"}!</h3>
                <p className="mt-2 text-ink-700 text-[14px]">Your download is on its way to {email}.</p>
                <button onClick={close} className="mt-6 px-5 py-2.5 rounded-[10px] font-semibold text-brand-deep border-2 border-brand-deep">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Resources;
