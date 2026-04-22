import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const filters = ["All", "SaaS", "Construction", "E-Commerce", "Healthcare"];

const cases = [
  {
    industry: "SaaS · Series A",
    title: "Month-End Close Reduced from 14 Days to 48 Hours",
    body: "A 45-person SaaS company was losing two weeks every month to manual close activities. We restructured their entire close process and built an automated reconciliation dashboard in Power BI.",
    metrics: [
      { v: "6×", l: "Faster Close" },
      { v: "$87K", l: "Saved/Year" },
      { v: "100%", l: "Automated" },
    ],
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=700&q=85",
    alt: "SaaS team reviewing month-end close dashboard",
  },
  {
    industry: "Construction · $8M",
    title: "$340,000 in Unbilled Work Recovered in 60 Days",
    body: "A mid-market construction firm had no visibility into WIP or unbilled hours across 12 active projects. Our time-tracking integration and custom dashboard found the gap within 30 days.",
    metrics: [
      { v: "$340K", l: "Recovered" },
      { v: "12", l: "Projects Tracked" },
      { v: "Live", l: "Real-Time WIP" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=85",
    alt: "Construction project profitability review",
  },
  {
    industry: "E-Commerce",
    title: "Six Platforms. One Dashboard. 18 Hours Saved Weekly.",
    body: "A multi-channel e-commerce brand was manually pulling data from 6 platforms into Excel every week. We connected everything into a single live dashboard.",
    metrics: [
      { v: "6", l: "Platforms" },
      { v: "18 hr", l: "Saved Weekly" },
      { v: "Live", l: "Margin Tracking" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=85",
    alt: "E-commerce analytics dashboard",
  },
];

export const CaseStudies = () => {
  const [active, setActive] = useState("All");
  return (
    <section className="bg-surface-soft py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="label-eyebrow">Proven Results</span>
          <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[52px] leading-[1.05] tracking-h2">
            Real Businesses. <span className="text-gradient-green">Real Numbers.</span>
          </h2>
          <p className="mt-5 text-ink-500 text-[18px] leading-[1.7]">
            We measure success in dollars saved, days reduced, and decisions made faster.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all ${
                active === f
                  ? "bg-brand-deep text-white"
                  : "bg-ink-200 text-ink-500 hover:bg-ink-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cases.map((c) => (
            <motion.article
              key={c.title}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              className="group bg-white border border-ink-200 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1.5 hover:border-brand-bright hover:shadow-[0_20px_60px_rgba(6,95,70,0.12)] transition-all duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
            >
              <img
                src={c.image}
                alt={c.alt}
                loading="lazy"
                width={700}
                height={440}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-7 flex flex-col flex-1">
                <span
                  className="self-start px-2.5 py-1 rounded-md text-[12px] font-bold uppercase tracking-wide"
                  style={{ background: "#D1FAE5", color: "#065F46" }}
                >
                  {c.industry}
                </span>
                <h3 className="mt-4 font-display font-bold text-ink-900 text-[22px] leading-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-ink-500 text-[15px] leading-[1.7]">{c.body}</p>
                <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-ink-200">
                  {c.metrics.map((m) => (
                    <div key={m.l}>
                      <div className="font-display font-bold text-brand-deep text-[20px] leading-none">
                        {m.v}
                      </div>
                      <div className="mt-1 text-[12px] text-ink-500 leading-tight">{m.l}</div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/case-studies"
                  className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-deep group-hover:text-brand-bright transition-colors"
                >
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
