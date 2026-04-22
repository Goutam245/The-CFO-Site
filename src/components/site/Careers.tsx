import { motion } from "framer-motion";
import { Globe2, Home, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const culture = [
  { icon: Globe2, title: "Global Team", desc: "Staff across 15 countries" },
  { icon: Home, title: "100% Remote", desc: "Work from anywhere, always" },
  { icon: TrendingUp, title: "Growth-First", desc: "Certifications, promotions, mentorship" },
  { icon: DollarSign, title: "Market Pay", desc: "Competitive in your local currency" },
];

const roles = [
  { title: "Senior CFO Advisor", range: "$100K–$140K" },
  { title: "Controller", range: "$75K–$95K" },
  { title: "Senior Bookkeeper", range: "$45K–$65K" },
  { title: "Power BI Analyst", range: "$55K–$80K" },
];

export const Careers = () => {
  return (
    <section className="bg-surface-dark py-24 lg:py-32 relative overflow-hidden">
      <div
        className="orb"
        style={{ width: 400, height: 400, top: -100, left: -100, background: "#065F46", opacity: 0.15 }}
      />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-eyebrow">Join the Team</span>
          <h2 className="mt-5 font-display font-bold text-white text-[36px] lg:text-[52px] leading-[1.05] tracking-h2">
            Work From Anywhere.
            <br />
            <span className="text-gradient-green">Lead From the Front.</span>
          </h2>
          <p className="mt-5 text-[18px] leading-[1.75]" style={{ color: "#94A3B8" }}>
            We are building the world's best remote accounting and finance team. Whether you're a
            bookkeeper looking for your first remote role or a seasoned CFO advisor ready for
            fractional work — we want to meet you.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {culture.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="p-5 rounded-xl"
                  style={{ background: "#161B27", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <Icon className="w-5 h-5 text-brand-bright" />
                  <p className="mt-3 font-semibold text-white text-[15px]">{c.title}</p>
                  <p className="text-[13px] mt-1" style={{ color: "#94A3B8" }}>{c.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 space-y-2">
            {roles.map((r) => (
              <a
                key={r.title}
                href="#"
                className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg text-white hover:text-brand-bright hover:bg-white/[0.03] transition-colors group"
              >
                <span className="text-[15px] font-medium flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-brand-bright transition-transform group-hover:translate-x-1" />
                  {r.title}
                </span>
                <span className="text-[14px]" style={{ color: "#94A3B8" }}>
                  Remote · {r.range}
                </span>
              </a>
            ))}
          </div>

          <Link
            to="/careers"
            className="btn-shimmer mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-white font-semibold bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.4)] hover:-translate-y-0.5 transition-all"
          >
            View All Open Positions <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-3 max-w-lg mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=85"
            alt="Remote team collaboration"
            loading="lazy"
            width={500}
            height={620}
            className="row-span-2 w-full h-full object-cover rounded-2xl"
          />
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=85"
            alt="Team meeting"
            loading="lazy"
            width={500}
            height={300}
            className="w-full h-full object-cover rounded-2xl"
          />
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85"
            alt="Working at laptop"
            loading="lazy"
            width={500}
            height={300}
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
