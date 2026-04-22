import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage =
  "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=85";

const headlineWords = [
  { text: "Financial", gradient: false },
  { text: "Clarity.", gradient: false, br: true },
  { text: "Built", gradient: false },
  { text: "for", gradient: false },
  { text: "Scale.", gradient: false, br: true },
  { text: "Powered", gradient: true },
  { text: "by", gradient: true },
  { text: "Data.", gradient: true },
];

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setVal(v),
    });
    return controls.stop;
  }, [inView, to, mv]);
  return (
    <span ref={ref}>
      {prefix}
      {Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 200, suffix: "+", label: "Clients" },
  { value: 500, prefix: "$", suffix: "M+", label: "Revenue Managed" },
  { value: 98, suffix: "%", label: "Retention" },
  { value: 15, suffix: "+", label: "Countries" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-28 lg:pt-32 pb-20">
      <div className="grain-overlay" />
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          top: -100,
          right: -120,
          background: "#10B981",
          opacity: 0.12,
          animationDuration: "10s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 300,
          height: 300,
          bottom: -80,
          left: -60,
          background: "#065F46",
          opacity: 0.15,
          animationDuration: "7s",
          filter: "blur(100px)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-brand-bright"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Trusted by 200+ Canadian & US Businesses
          </motion.div>

          <h1 className="mt-6 font-display font-extrabold text-white leading-[1.02] tracking-hero text-[44px] sm:text-[56px] lg:text-[72px] xl:text-[80px]">
            {headlineWords.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`inline-block ${w.gradient ? "text-gradient-green" : ""}`}
                >
                  {w.text}
                </motion.span>
                {w.br && <br />}
                {!w.br && <>&nbsp;</>}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-6 text-[17px] lg:text-[19px] leading-[1.75] max-w-xl"
            style={{ color: "#94A3B8" }}
          >
            Stop guessing about your finances. We embed senior CFO leadership into your
            business — delivering real-time Power BI dashboards, precise KPI tracking, and the
            strategic clarity you need to grow faster, smarter, and with complete confidence.
          </motion.p>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-y-6"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-1 sm:px-4 ${i > 0 ? "sm:border-l sm:border-white/[0.08]" : ""}`}
              >
                <div className="font-display font-bold text-white text-[28px] lg:text-[32px] tracking-tight">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="text-[13px] font-medium uppercase tracking-wider mt-1" style={{ color: "#64748B" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] text-[17px] font-semibold text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.35)] hover:shadow-[0_8px_30px_rgba(5,150,105,0.5)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300"
            >
              Get Your Free Assessment <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] text-[17px] font-semibold text-white border border-white/20 hover:border-brand-bright hover:text-brand-bright transition-colors"
            >
              <Play className="w-4 h-4" /> Watch Demo
            </button>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mx-auto w-full max-w-[560px] hidden md:block"
        >
          <div
            className="relative bg-gradient-card-dark rounded-[20px] p-6 border"
            style={{
              borderColor: "rgba(16,185,129,0.2)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 60px rgba(16,185,129,0.08)",
            }}
          >
            <img
              src={heroImage}
              alt="Finance professional reviewing live Power BI dashboard"
              loading="eager"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          {/* Floating pills */}
          <div
            className="absolute -top-5 -left-5 px-4 py-2.5 rounded-full text-[13px] font-semibold text-white animate-float-pill"
            style={{ background: "#065F46", border: "1px solid #10B981" }}
          >
            ↑ 42% Revenue Growth
          </div>
          <div
            className="absolute -bottom-5 -right-3 px-4 py-2.5 rounded-full text-[13px] font-semibold text-white animate-float-pill"
            style={{
              background: "#0D1117",
              border: "1px solid rgba(255,255,255,0.1)",
              animationDelay: "2s",
            }}
          >
            Month-End: 2 Days
          </div>
          <div
            className="absolute top-1/2 -right-6 -translate-y-1/2 px-4 py-2.5 rounded-full text-[13px] font-semibold animate-float-pill"
            style={{
              background: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.3)",
              color: "#F59E0B",
              animationDelay: "1s",
            }}
          >
            ⚡ Live Dashboard
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
