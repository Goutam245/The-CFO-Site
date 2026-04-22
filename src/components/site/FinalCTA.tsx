import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FinalCTA = () => {
  return (
    <section className="bg-gradient-green py-24 lg:py-28 relative overflow-hidden">
      <div className="grain-overlay" style={{ opacity: 0.06 }} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl mx-auto px-5 lg:px-10 text-center"
      >
        <div className="inline-flex w-16 h-16 rounded-2xl bg-white/15 backdrop-blur items-center justify-center">
          <ShieldCheck className="w-8 h-8 text-white" />
        </div>
        <h2 className="mt-6 font-display font-bold text-white text-[36px] lg:text-[56px] leading-[1.05] tracking-h2">
          Ready to See Your Business Finances
          <br />
          in Real-Time?
        </h2>
        <p className="mt-6 text-[18px] lg:text-[19px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.9)" }}>
          Book your free 30-minute assessment. No obligation, no sales pressure — just an honest
          conversation about where your finances stand and what it would take to make them work
          harder for you.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] text-[17px] font-bold bg-white text-brand-deep hover:scale-[1.02] hover:shadow-2xl transition-all"
          >
            Book My Free Assessment <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/resources"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] text-[17px] font-semibold text-white border border-white/40 hover:bg-white hover:text-brand-deep transition-all"
          >
            Download the CFO Checklist
          </Link>
        </div>
        <p className="mt-8 text-[14px]" style={{ color: "rgba(255,255,255,0.7)" }}>
          🔒 Confidential · No obligation · Response in 4 hours
        </p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
