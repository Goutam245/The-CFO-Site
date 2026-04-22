import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Briefcase, ClipboardCheck, BarChart3, Target, Timer, Cloud,
  Check, ArrowRight, type LucideIcon,
} from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";
import { useState } from "react";

type Svc = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  deliverables: string[];
  pricing: string;
  image: string;
  alt: string;
};

const services: Svc[] = [
  {
    icon: Briefcase,
    eyebrow: "Fractional CFO",
    title: "Senior CFO Leadership. None of the Overhead.",
    paragraphs: [
      "A fractional CFO is a seasoned finance executive — typically with 15+ years of experience and a Big Four background — embedded part-time into your business. You get the strategic thinking, board-level reporting, and capital strategy of a full-time CFO at roughly one-fifth of the cost.",
      "Each engagement is led by a CPA-designated professional who acts as your finance partner, not just a service provider. They sit in your leadership meetings, challenge your assumptions, build your investor narrative, and own your monthly close.",
      "Best for businesses between $1M and $50M in annual revenue who are scaling fast, raising capital, or preparing for a liquidity event.",
    ],
    deliverables: [
      "8–16 hours of dedicated CFO time per month",
      "Monthly strategy and performance call",
      "Cash flow forecast (13-week rolling)",
      "Board deck and investor updates",
      "Slack access for urgent questions",
      "Quarterly business review and 12-month roadmap",
    ],
    pricing: "From $1,800/month",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&q=85",
    alt: "Fractional CFO reviewing performance dashboard",
  },
  {
    icon: ClipboardCheck,
    eyebrow: "Controllership",
    title: "Never Miss a Close Deadline Again.",
    paragraphs: [
      "Our controllers run your day-to-day accounting operations with the precision of a Big Four audit team. Month-end closes happen on schedule. Reconciliations are clean. Audit prep is built into your monthly rhythm — not a fire drill in March.",
      "We handle the entire general ledger function: bookkeeping, AP/AR oversight, payroll review, multi-entity consolidations, and intercompany eliminations. Your books are always investor-ready and audit-ready.",
      "Designed for companies that have outgrown their bookkeeper but don't yet need a full-time controller on payroll.",
    ],
    deliverables: [
      "Month-end close in 5 business days or less",
      "Bank, credit card, and intercompany reconciliations",
      "Multi-entity consolidation and eliminations",
      "Monthly P&L, balance sheet, and cash flow",
      "Audit preparation and external auditor liaison",
      "Sales tax filings across multiple jurisdictions",
    ],
    pricing: "From $1,200/month",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=85",
    alt: "Controllership team performing month-end close",
  },
  {
    icon: BarChart3,
    eyebrow: "Power BI",
    title: "Living Dashboards. Not Static Spreadsheets.",
    paragraphs: [
      "Most finance teams still email PDFs of last month's performance. We replace that with live Power BI dashboards connected directly to your accounting, CRM, and operational systems — refreshed every hour.",
      "Our Power BI architects design custom data models, build secure refresh pipelines, and create the visualizations your leadership team will actually use. Then we maintain them — adding new metrics as your business evolves.",
      "Whether you need a CEO scorecard, departmental P&Ls, or investor-grade reporting, we build it once and maintain it forever.",
    ],
    deliverables: [
      "Custom data model design and build",
      "Real-time P&L, cash flow, and burn rate dashboards",
      "Custom KPI scorecards with threshold alerts",
      "Department-level profitability reporting",
      "Automated investor and board packages",
      "Ongoing dashboard maintenance and new builds",
    ],
    pricing: "From $800/month",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85",
    alt: "Live Power BI dashboard on screen",
  },
  {
    icon: Target,
    eyebrow: "KPI Tracking",
    title: "The 8–12 Numbers That Actually Predict Performance.",
    paragraphs: [
      "Most businesses track dozens of metrics that no one acts on. We work with your leadership team to identify the small set of leading indicators that genuinely predict revenue, margin, and cash performance — then build the systems to track, report, and alert on them weekly.",
      "We start with industry benchmarks and adapt them to your specific business model. Then we connect your accounting, CRM, marketing, and ops data into a single performance scorecard that updates automatically.",
      "Your team stops debating numbers and starts acting on them.",
    ],
    deliverables: [
      "Industry-specific KPI framework design",
      "Weekly automated performance scorecards",
      "Leading vs lagging indicator analysis",
      "Threshold alerting via email and Slack",
      "Monthly KPI review meeting facilitation",
      "Quarterly framework refresh",
    ],
    pricing: "From $600/month",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
    alt: "KPI scorecard review meeting",
  },
  {
    icon: Timer,
    eyebrow: "Time Tracking",
    title: "Stop Leaving Billable Hours on the Table.",
    paragraphs: [
      "Service businesses lose 15–25% of their billable revenue to untracked time. We integrate, optimize, and connect your time-tracking platform directly to project profitability reporting — so every hour is captured, billed, and reported correctly.",
      "We work with Harvest, Toggl, Clockify, BambooHR, and most major time-tracking platforms. The result is a real-time view of project margins by client, team, and engagement type.",
      "Most clients recover 6–12x the cost of the engagement within the first 90 days.",
    ],
    deliverables: [
      "Time-tracking platform setup and optimization",
      "Billable vs non-billable analysis by project",
      "Real-time project profitability dashboard",
      "Utilization tracking by team member",
      "Unbilled WIP monitoring and alerts",
      "Monthly profitability review",
    ],
    pricing: "From $400/month",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85",
    alt: "Project time tracking and profitability dashboard",
  },
  {
    icon: Cloud,
    eyebrow: "Cloud Migration",
    title: "Move to the Cloud Without Disrupting Operations.",
    paragraphs: [
      "Legacy desktop accounting software is slowing you down — limiting collaboration, hiding errors, and making remote work impossible. We migrate your entire finance function to the cloud with zero disruption to daily operations.",
      "Our migration team handles everything: legacy data audit, chart of accounts redesign, historical data migration, integration setup, staff training, and post-migration support. You don't lose a single day of operations.",
      "Certified across QuickBooks Online, Xero, and Microsoft 365 ecosystems.",
    ],
    deliverables: [
      "Complete legacy system audit",
      "Chart of accounts redesign and cleanup",
      "Historical data migration (3+ years)",
      "Integration with banks, payroll, and ops systems",
      "Team training and documentation",
      "30-day post-migration support",
    ],
    pricing: "Custom — one-time engagement",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=900&q=85",
    alt: "Cloud accounting migration team",
  },
];

const profiles = [
  { title: "You're scaling fast but flying blind financially", body: "Revenue is growing 50%+ year over year but you can't tell which products or channels are actually profitable." },
  { title: "You need investor-ready reports but hate Excel", body: "You're preparing for a raise or board meeting and need numbers you can defend — without spending nights in spreadsheets." },
  { title: "Your bookkeeper can't keep up anymore", body: "Month-end takes weeks, errors slip through, and you've outgrown the basic compliance work that got you here." },
];

const compRows = [
  ["Cost / month", "$1,800–$8,000", "$15,000–$30,000", "$0 (your time)"],
  ["Time to start", "5–7 days", "2–4 months", "Immediate, no expertise"],
  ["Expertise level", "CPA, 15+ yrs, Big Four", "Variable", "Limited"],
  ["Dashboard reporting", "Live Power BI included", "Build yourself", "Spreadsheets"],
  ["Availability", "Slack same-day", "Full-time, one person", "On you"],
  ["Scalability", "Scale up or down monthly", "Hire / fire", "Doesn't scale"],
];

const faqs = [
  { q: "What is a fractional CFO exactly?", a: "A fractional CFO is a seasoned finance executive who works with your business on a part-time basis — typically 8 to 40 hours per month — handling the same strategic responsibilities as a full-time CFO." },
  { q: "How many hours per week do we get?", a: "Engagements range from 8 hours per month for early-stage businesses up to 40+ hours per month for high-growth or PE-backed companies. We right-size the engagement to your stage." },
  { q: "Do you work with small businesses?", a: "Yes. We work with companies between $500K and $100M in annual revenue. Below $500K, our Starter plan is usually the right fit." },
  { q: "What accounting software do you support?", a: "QuickBooks Online, Xero, Sage, NetSuite, and Microsoft Dynamics. We're certified partners with QBO and Xero." },
  { q: "How quickly can you start?", a: "Most engagements begin within 5–7 business days of contract signature. By day 7, you have a live dashboard and your first strategy call scheduled." },
  { q: "Are your CFOs CPAs?", a: "Every senior advisor on our team holds a CPA designation (CPA, CGA, CMA, or CA equivalent). Most also have MBAs or finance master's degrees." },
  { q: "What happens if we need more hours?", a: "You can scale up your engagement at any time — month to month. There's no penalty for adjusting hours up or down based on what your business needs." },
  { q: "Is there a minimum contract length?", a: "Our standard engagement is month-to-month with a 30-day notice period. We also offer 6 and 12-month agreements at preferred rates." },
];

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Services"
        title="Full-Spectrum Financial Leadership"
        subtitle="Built for Scaling Businesses"
        body="From day-to-day bookkeeping to board-level CFO advisory — we handle your entire finance function so you can focus on growing your business."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      {services.map((s, i) => {
        const Icon = s.icon;
        const dark = i % 2 === 1;
        const reverse = i % 2 === 1;
        return (
          <section
            key={s.title}
            className={`py-20 lg:py-28 ${dark ? "bg-surface-dark" : "bg-white"}`}
          >
            <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "#D1FAE5" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#065F46" }} />
                    </div>
                    <span className="label-eyebrow !mt-0">{s.eyebrow}</span>
                  </div>
                  <h2 className={`mt-5 font-display font-bold text-[32px] lg:text-[44px] leading-[1.1] tracking-h2 ${dark ? "text-white" : "text-ink-900"}`}>
                    {s.title}
                  </h2>
                  {s.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="mt-4 text-[16px] lg:text-[17px] leading-[1.75]"
                      style={{ color: dark ? "#CBD5E1" : "#334155" }}
                    >
                      {p}
                    </p>
                  ))}

                  <div
                    className={`mt-7 border-l-4 border-brand-bright pl-5 py-2 ${dark ? "bg-white/[0.03]" : "bg-brand-light/30"} rounded-r-lg`}
                  >
                    <p className={`font-display font-bold text-[15px] mb-3 ${dark ? "text-white" : "text-ink-900"}`}>
                      What you get every month:
                    </p>
                    <ul className="space-y-2">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2.5 text-[15px]"
                          style={{ color: dark ? "#CBD5E1" : "#334155" }}
                        >
                          <Check className="w-4 h-4 mt-1 shrink-0 text-brand-bright" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <p className={`font-display font-bold text-[20px] ${dark ? "text-white" : "text-ink-900"}`}>
                      {s.pricing}
                    </p>
                    <Link
                      to="/contact"
                      className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-[15px] font-semibold text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.35)] hover:-translate-y-0.5 transition-all"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={900}
                    height={620}
                    className="w-full h-[320px] lg:h-[460px] object-cover rounded-2xl"
                    style={{ boxShadow: dark ? "0 30px 80px rgba(0,0,0,0.4)" : "0 30px 80px rgba(0,0,0,0.12)" }}
                  />
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      <section className="bg-surface-soft py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="max-w-3xl">
            <span className="label-eyebrow">Who Is This For</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[48px] leading-[1.05] tracking-h2">
              You'll Recognize Yourself in <span className="text-gradient-green">at Least One of These</span>
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {profiles.map((p) => (
              <div key={p.title} className="bg-white border border-ink-200 rounded-2xl p-8">
                <h3 className="font-display font-bold text-ink-900 text-[20px] leading-tight">{p.title}</h3>
                <p className="mt-3 text-ink-700 text-[15px] leading-[1.7]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="max-w-3xl">
            <span className="label-eyebrow">Compare Your Options</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[48px] leading-[1.05] tracking-h2">
              Fractional CFO vs Full-Time vs DIY
            </h2>
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-ink-200">
            <table className="w-full text-left text-[15px]">
              <thead>
                <tr className="bg-ink-100">
                  <th className="p-4 font-semibold text-ink-900">Feature</th>
                  <th className="p-4 font-semibold text-white bg-brand-deep">Fractional CFO</th>
                  <th className="p-4 font-semibold text-ink-900">Full-Time CFO</th>
                  <th className="p-4 font-semibold text-ink-900">DIY</th>
                </tr>
              </thead>
              <tbody>
                {compRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-surface-soft"}>
                    <td className="p-4 font-semibold text-ink-900">{row[0]}</td>
                    <td className="p-4 text-brand-deep font-semibold bg-brand-light/30">{row[1]}</td>
                    <td className="p-4 text-ink-700">{row[2]}</td>
                    <td className="p-4 text-ink-700">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-24 lg:py-32">
        <div className="max-w-[900px] mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="label-eyebrow justify-center">Common Questions</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[48px] leading-[1.05] tracking-h2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-ink-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-ink-900 text-[16px]">{f.q}</span>
                  <span className={`text-brand-deep text-[24px] leading-none transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-ink-700 text-[15px] leading-[1.7]">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
};

export default ServicesPage;
