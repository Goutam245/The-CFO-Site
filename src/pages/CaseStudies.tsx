import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";

export const cases = [
  {
    slug: "saas-month-end-close",
    industry: "SaaS · Series A",
    industryFilter: "SaaS",
    title: "Month-End Close Reduced from 14 Days to 48 Hours",
    body: "A 45-person SaaS company was losing two weeks every month to manual close activities. We restructured their entire close process and built an automated reconciliation dashboard in Power BI.",
    metrics: [{ v: "6×", l: "Faster Close" }, { v: "$87K", l: "Saved/Year" }, { v: "100%", l: "Automated" }],
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=900&q=85",
    alt: "SaaS team reviewing month-end close",
  },
  {
    slug: "construction-unbilled-recovery",
    industry: "Construction · $8M",
    industryFilter: "Construction",
    title: "$340,000 in Unbilled Work Recovered in 60 Days",
    body: "A mid-market construction firm had no visibility into WIP or unbilled hours across 12 active projects. Our time-tracking integration and custom dashboard found the gap within 30 days.",
    metrics: [{ v: "$340K", l: "Recovered" }, { v: "12", l: "Projects" }, { v: "Live", l: "WIP" }],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85",
    alt: "Construction profitability review",
  },
  {
    slug: "ecommerce-multi-platform",
    industry: "E-Commerce",
    industryFilter: "E-Commerce",
    title: "Six Platforms. One Dashboard. 18 Hours Saved Weekly.",
    body: "A multi-channel e-commerce brand was manually pulling data from 6 platforms into Excel every week. We connected everything into a single live dashboard.",
    metrics: [{ v: "6", l: "Platforms" }, { v: "18 hr", l: "Saved Weekly" }, { v: "Live", l: "Margins" }],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
    alt: "E-commerce analytics dashboard",
  },
  {
    slug: "healthcare-multi-entity",
    industry: "Healthcare · 4 entities",
    industryFilter: "Healthcare",
    title: "Multi-Entity Consolidation in Hours, Not Weeks",
    body: "A 4-clinic healthcare group was consolidating financials manually each quarter. We rebuilt the chart of accounts and automated the consolidation process end-to-end.",
    metrics: [{ v: "4", l: "Entities" }, { v: "30×", l: "Faster" }, { v: "$120K", l: "Saved/Year" }],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=85",
    alt: "Healthcare finance team reviewing consolidated reports",
  },
  {
    slug: "saas-fundraise-ready",
    industry: "SaaS · Series B",
    industryFilter: "SaaS",
    title: "From No Forecast to Series B Close in 90 Days",
    body: "A B2B SaaS founder needed an investor-grade financial model and forecast to close their Series B. We built the model, the dashboard, and led the diligence process.",
    metrics: [{ v: "$22M", l: "Raised" }, { v: "90", l: "Days" }, { v: "12", l: "Months Forecast" }],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=85",
    alt: "Fundraise process",
  },
  {
    slug: "ecommerce-margin-clarity",
    industry: "E-Commerce · DTC",
    industryFilter: "E-Commerce",
    title: "True Product Margins Revealed — Then Doubled",
    body: "A DTC brand thought they had 40% margins. Our cost analysis revealed they were actually at 18%. Within 2 quarters, we helped them get to 36% true margin.",
    metrics: [{ v: "+18pt", l: "Margin Lift" }, { v: "120", l: "SKUs Analyzed" }, { v: "2", l: "Quarters" }],
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=900&q=85",
    alt: "DTC product margin analysis",
  },
];

const filters = ["All", "SaaS", "Construction", "E-Commerce", "Healthcare"];

const CaseStudiesPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? cases : cases.filter((c) => c.industryFilter === active);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Case Studies"
        title="Real Businesses."
        subtitle="Real Numbers."
        body="We measure success in dollars saved, days reduced, and decisions made faster. Here's a look at what that means in practice."
        crumbs={[{ label: "Home", to: "/" }, { label: "Case Studies" }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all ${
                  active === f ? "bg-brand-deep text-white" : "bg-ink-100 text-ink-700 hover:bg-ink-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((c) => (
              <motion.article
                key={c.slug}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="group bg-white border border-ink-200 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1.5 hover:border-brand-bright hover:shadow-[0_20px_60px_rgba(6,95,70,0.12)] transition-all"
              >
                <img src={c.image} alt={c.alt} loading="lazy" className="w-full h-[220px] object-cover" />
                <div className="p-7 flex flex-col flex-1">
                  <span className="self-start px-2.5 py-1 rounded-md text-[12px] font-bold uppercase tracking-wide" style={{ background: "#D1FAE5", color: "#065F46" }}>
                    {c.industry}
                  </span>
                  <h3 className="mt-4 font-display font-bold text-ink-900 text-[20px] leading-tight">{c.title}</h3>
                  <p className="mt-3 text-ink-700 text-[14px] leading-[1.7]">{c.body}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3 pt-5 border-t border-ink-200">
                    {c.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="font-display font-bold text-brand-deep text-[18px] leading-none">{m.v}</div>
                        <div className="mt-1 text-[12px] text-ink-500">{m.l}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${c.slug}`}
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

      <FinalCTA />
    </PageLayout>
  );
};

export default CaseStudiesPage;
