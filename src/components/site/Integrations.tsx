import { motion } from "framer-motion";

const integrations = [
  "QuickBooks Online",
  "Xero",
  "Sage Business Cloud",
  "FreshBooks",
  "Microsoft Power BI",
  "Microsoft 365",
  "Harvest",
  "Gusto",
];

export const Integrations = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display font-bold text-ink-900 text-[32px] lg:text-[44px] leading-[1.1] tracking-h2">
            We Work Inside Your Existing Stack
          </h2>
          <p className="mt-4 text-ink-500 text-[18px] leading-[1.7]">
            No migration required. We integrate directly into the tools your team already uses —
            and optimize them for maximum performance.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {integrations.map((i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="bg-surface-soft border border-ink-200 rounded-xl px-6 py-7 text-center font-semibold text-ink-700 hover:border-brand-bright hover:bg-brand-light/40 hover:shadow-[0_4px_20px_rgba(6,95,70,0.08)] transition-all duration-300"
            >
              {i}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
