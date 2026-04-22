import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const featured = {
  quote:
    "The CFO Site didn't just clean up our books — they fundamentally changed how we run our business. Within 90 days, we had a live Power BI dashboard showing us real-time margins by product line. We found $180,000 in cost inefficiencies in the first two months alone. I think about it as the best hire we've ever made — and we don't pay a salary.",
  name: "Alexandra Chen",
  role: "CEO & Founder",
  company: "SaaS Platform · $4M ARR · Toronto, ON",
  photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=85",
};

const small = [
  {
    quote:
      "We were spending 18 hours a week manually pulling data from six platforms. Now it's all automated. Our team has their Friday afternoons back.",
    name: "Marcus Webb",
    role: "VP Finance",
    company: "E-commerce Brand",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=85",
  },
  {
    quote:
      "The time-tracking integration alone paid for the entire engagement. We found $340,000 in unbilled work we didn't even know existed.",
    name: "Jennifer Park",
    role: "COO",
    company: "Construction Firm",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=85",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} className="w-4 h-4 fill-gold-bright text-gold-bright" />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="label-eyebrow justify-center">Client Stories</span>
          <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[52px] leading-[1.05] tracking-h2">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-ink-500 text-[18px]">Don't take our word for it.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-[20px] p-8 lg:p-14 relative overflow-hidden"
          style={{ background: "#0D1117", border: "1px solid rgba(16,185,129,0.15)" }}
        >
          <Quote className="absolute top-6 right-8 w-20 h-20 text-brand-bright/20" />
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-start">
            <img
              src={featured.photo}
              alt={featured.name}
              loading="lazy"
              width={120}
              height={120}
              className="w-20 h-20 rounded-full object-cover border-2 border-brand-bright"
            />
            <div>
              <Stars />
              <p className="mt-4 text-white text-[18px] lg:text-[20px] leading-[1.7] italic">
                "{featured.quote}"
              </p>
              <div className="mt-6">
                <p className="font-display font-bold text-white text-[18px]">{featured.name}</p>
                <p className="text-brand-bright text-[14px] font-semibold mt-0.5">{featured.role}</p>
                <p className="text-ink-500 text-[14px] mt-0.5">{featured.company}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-6 grid md:grid-cols-2 gap-6"
        >
          {small.map((t) => (
            <motion.div
              key={t.name}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="bg-surface-soft border border-ink-200 rounded-2xl p-8"
            >
              <Stars />
              <p className="mt-4 text-ink-700 text-[16px] leading-[1.7]">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  width={56}
                  height={56}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-ink-900 text-[15px]">{t.name}</p>
                  <p className="text-ink-500 text-[13px]">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
