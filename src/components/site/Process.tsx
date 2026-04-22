import { motion } from "framer-motion";
import { Calendar, FileText, Rocket, type LucideIcon } from "lucide-react";

type Step = {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
  tag: string;
  image: string;
  alt: string;
};

const steps: Step[] = [
  {
    num: "01",
    icon: Calendar,
    title: "Discovery & Assessment",
    body: "A focused 30-minute call where we learn everything about your current finance function — what's working, what's broken, and where you're leaving money on the table. You receive a written summary of findings the same day.",
    tag: "Day 1",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=85",
    alt: "Discovery call between client and CFO advisor",
  },
  {
    num: "02",
    icon: FileText,
    title: "Custom Finance Blueprint",
    body: "Within 3 business days, we deliver your Finance Blueprint — a complete document outlining your CFO engagement scope, Power BI architecture, KPI framework, team structure, and a 90-day milestone roadmap.",
    tag: "Days 2–4",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=85",
    alt: "Finance blueprint planning session",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Live Execution & Real-Time Reporting",
    body: "We begin immediately. By day 7, you have a live Power BI dashboard showing your exact financial position. From that point forward, you have always-on access to your CFO advisor via Slack, plus structured weekly and monthly touchpoints.",
    tag: "Day 7 → Ongoing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85",
    alt: "Live financial dashboard reporting",
  },
];

export const Process = () => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="label-eyebrow">The Process</span>
          <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[52px] leading-[1.05] tracking-h2">
            From First Call to Live Dashboard
            <br />
            <span className="text-gradient-green">in 7 Business Days</span>
          </h2>
        </motion.div>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <span
                    className="absolute -top-12 -left-2 lg:-left-6 font-display font-extrabold text-[120px] lg:text-[160px] leading-none pointer-events-none select-none"
                    style={{ color: "#D1FAE5" }}
                  >
                    {s.num}
                  </span>
                  <div className="relative">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                      style={{ background: "#D1FAE5" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "#065F46" }} />
                    </div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider mb-4"
                      style={{ background: "#D1FAE5", color: "#065F46" }}
                    >
                      {s.tag}
                    </span>
                    <h3 className="font-display font-bold text-ink-900 text-[28px] lg:text-[36px] leading-[1.1] tracking-h2">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-ink-700 text-[17px] lg:text-[18px] leading-[1.75] max-w-lg">
                      {s.body}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={700}
                    height={520}
                    className="w-full h-[360px] lg:h-[460px] object-cover rounded-2xl"
                    style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.12)" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
