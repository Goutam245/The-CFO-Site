import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";

const TimeTracking = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Time-Tracking Integration"
        title="Stop Leaving Billable Hours"
        subtitle="On the Table"
        body="Service businesses lose 15–25% of their billable revenue to untracked time. We integrate, optimize, and connect your time-tracking platform directly to project profitability reporting."
        crumbs={[{ label: "Home", to: "/" }, { label: "Time Tracking" }]}
      >
        <Link to="/contact" className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[16px] font-semibold text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.35)] hover:-translate-y-0.5 transition-all">
          Recover My Lost Hours <ArrowRight className="w-4 h-4" />
        </Link>
      </PageHero>

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label-eyebrow">What You Get</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[44px] leading-[1.05] tracking-h2">
              Real-Time Project Profitability — <span className="text-gradient-green">Always</span>
            </h2>
            <ul className="mt-7 space-y-3">
              {[
                "Harvest, Toggl, Clockify, BambooHR setup",
                "Billable vs non-billable analysis by project",
                "Real-time project profitability dashboard",
                "Utilization tracking by team member",
                "Unbilled WIP monitoring and alerts",
                "Monthly profitability review",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-ink-700">
                  <Check className="w-5 h-5 mt-0.5 shrink-0 text-brand-bright" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85"
            alt="Project profitability dashboard"
            loading="lazy"
            className="w-full h-[460px] object-cover rounded-2xl"
            style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.12)" }}
          />
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
};

export default TimeTracking;
