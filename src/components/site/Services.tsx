import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Briefcase,
  ClipboardCheck,
  BarChart3,
  Target,
  Timer,
  Cloud,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
  href: string;
};

const services: Service[] = [
  {
    icon: Briefcase,
    title: "Fractional CFO Services",
    href: "/services",
    desc: "Get the strategic thinking of a Big Four alumnus embedded directly into your business. Our fractional CFOs don't just report — they drive decisions, challenge assumptions, and build the financial infrastructure your investors expect to see.",
    bullets: [
      "Cash flow forecasting & 13-week projections",
      "Investor relations & board-level reporting",
      "Strategic M&A advisory and due diligence support",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Controllership & Compliance",
    href: "/services",
    desc: "Precision accounting operations that never miss a deadline. From daily bookkeeping to complex multi-entity consolidations, our controllers maintain the accuracy and compliance standards your auditors demand.",
    bullets: [
      "Month-end and year-end close management",
      "Multi-entity consolidation and intercompany",
      "Audit preparation and external auditor liaison",
    ],
  },
  {
    icon: BarChart3,
    title: "Power BI Reporting",
    href: "/power-bi-reporting",
    desc: "Replace static, error-prone spreadsheets with living dashboards that update in real time. We design, build, and maintain custom Power BI environments connected to your entire financial data ecosystem.",
    bullets: [
      "Real-time P&L, cash flow & burn rate dashboards",
      "Custom KPI scorecards with threshold alerting",
      "Automated board and investor reporting packages",
    ],
  },
  {
    icon: Target,
    title: "KPI Design & Tracking",
    href: "/kpi-tracking",
    desc: "Most businesses track the wrong metrics. We work with your leadership team to identify the 8–12 KPIs that truly predict performance — then build automated systems to track, report, and alert you in real time.",
    bullets: [
      "Industry-specific KPI framework design",
      "Weekly automated performance scorecards",
      "Leading vs lagging indicator analysis",
    ],
  },
  {
    icon: Timer,
    title: "Time-Tracking Integration",
    href: "/time-tracking",
    desc: "Billable hour leakage is costing your firm money every single day. We integrate, optimize, and connect your time-tracking platform directly to project profitability reporting — so nothing slips through.",
    bullets: [
      "Harvest, Toggl, Clockify & BambooHR integration",
      "Billable vs non-billable analysis by project",
      "Real-time project profitability dashboard",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Finance Migration",
    href: "/services",
    desc: "We migrate your entire finance function to the cloud with zero disruption to your operations. Legacy software to QuickBooks Online, Xero, or Microsoft 365 — fully implemented, staff-trained, and optimized.",
    bullets: [
      "Complete legacy system audit and data migration",
      "QuickBooks Online and Xero certified setup",
      "Team training, documentation and change management",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="bg-surface-soft py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="label-eyebrow">What We Do</span>
          <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[52px] leading-[1.05] tracking-h2">
            Complete Financial Leadership
            <br />
            <span className="text-gradient-green">Without the Full-Time Cost</span>
          </h2>
          <p className="mt-5 text-ink-500 text-[18px] lg:text-[19px] leading-[1.7]">
            One engagement. Senior expertise. Real results from day one.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                className="group bg-white border border-ink-200 rounded-2xl p-9 flex flex-col hover:-translate-y-1.5 hover:border-brand-bright hover:shadow-[0_20px_60px_rgba(6,95,70,0.12)] transition-all duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
              >
                <div
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-6"
                  style={{ background: "#D1FAE5" }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#065F46" }} />
                </div>
                <h3 className="font-display font-bold text-ink-900 text-[22px] leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-ink-500 text-[16px] leading-[1.7]">{s.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[15px] text-ink-700">
                      <Check className="w-4 h-4 mt-1 shrink-0 text-brand-bright" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-1">
                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-deep group-hover:text-brand-bright transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
