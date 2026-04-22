import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const team = [
  {
    name: "David Chen",
    role: "Senior CFO Advisor",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=85",
    creds: ["18 yrs", "Ex-Deloitte", "CPA, CGA"],
    specialties: ["SaaS", "Fintech", "Fundraising"],
  },
  {
    name: "Amanda Ross",
    role: "Controllership Lead",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85",
    creds: ["14 yrs", "Ex-PwC", "CPA, CA"],
    specialties: ["E-commerce", "Manufacturing", "Audit"],
  },
  {
    name: "James Okafor",
    role: "Power BI Practice Lead",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85",
    creds: ["12 yrs", "Ex-KPMG", "MBA"],
    specialties: ["Construction", "Healthcare", "KPI Design"],
  },
];

export const Team = () => {
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
          <span className="label-eyebrow">Our Team</span>
          <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[52px] leading-[1.05] tracking-h2">
            Senior Finance Leaders.
            <br />
            <span className="text-gradient-green">Every Single Engagement.</span>
          </h2>
          <p className="mt-5 text-ink-500 text-[18px] leading-[1.7]">
            You don't get a junior associate. Every client engagement is led by a CPA-designated
            professional with a minimum of 10 years of industry experience — many from Big Four
            backgrounds.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((m) => (
            <motion.article
              key={m.name}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              className="bg-white border border-ink-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(6,95,70,0.1)] transition-all duration-300"
            >
              <div
                className="relative h-40 flex items-end justify-center"
                style={{ background: "linear-gradient(135deg, #064E3B, #065F46)" }}
              >
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  width={200}
                  height={200}
                  className="w-[100px] h-[100px] rounded-full object-cover border-[3px] border-white translate-y-[50px] shadow-lg"
                />
              </div>
              <div className="px-7 pt-16 pb-8">
                <h3 className="font-display font-bold text-ink-900 text-[22px] text-center">
                  {m.name}
                </h3>
                <p className="text-brand-bright text-[14px] font-semibold text-center mt-1">
                  {m.role}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5 justify-center">
                  {m.creds.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded-full text-[12px] font-medium bg-ink-100 text-ink-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
                  {m.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full text-[12px] font-semibold"
                      style={{ background: "#D1FAE5", color: "#065F46" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex justify-center">
                  <a
                    href="#"
                    className="text-brand-deep hover:text-brand-bright transition-colors"
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-semibold text-brand-deep border-2 border-brand-deep hover:bg-brand-deep hover:text-white transition-all"
          >
            Meet the Full Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
