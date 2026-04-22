import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";
import { cases } from "./CaseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = cases.find((c) => c.slug === slug) || cases[0];

  return (
    <PageLayout>
      <PageHero
        eyebrow={study.industry}
        title={study.title}
        body={study.body}
        crumbs={[{ label: "Home", to: "/" }, { label: "Case Studies", to: "/case-studies" }, { label: study.industryFilter }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[900px] mx-auto px-5 lg:px-10">
          <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-brand-deep font-semibold text-[14px] mb-8 hover:text-brand-bright transition-colors">
            <ArrowLeft className="w-4 h-4" /> All case studies
          </Link>

          <img src={study.image} alt={study.title} className="w-full h-[420px] object-cover rounded-2xl" />

          <div className="mt-10 grid grid-cols-3 gap-4">
            {study.metrics.map((m) => (
              <div key={m.l} className="bg-surface-soft border border-ink-200 rounded-xl p-5 text-center">
                <p className="font-display font-bold text-brand-deep text-[28px]">{m.v}</p>
                <p className="mt-1 text-ink-500 text-[13px]">{m.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 prose-lg">
            <h2 className="font-display font-bold text-ink-900 text-[28px]">The Challenge</h2>
            <p className="mt-3 text-ink-700 text-[17px] leading-[1.8]">{study.body}</p>

            <h2 className="mt-10 font-display font-bold text-ink-900 text-[28px]">Our Approach</h2>
            <ul className="mt-3 space-y-2">
              {[
                "Discovery audit of existing systems and workflows",
                "Custom Finance Blueprint delivered within 3 days",
                "Implementation begins by day 7 with full leadership alignment",
                "Live Power BI dashboard for real-time visibility",
                "Ongoing weekly check-ins and monthly strategic review",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-ink-700 text-[16px]">
                  <Check className="w-5 h-5 mt-0.5 shrink-0 text-brand-bright" /> <span>{b}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display font-bold text-ink-900 text-[28px]">The Outcome</h2>
            <p className="mt-3 text-ink-700 text-[17px] leading-[1.8]">
              Within the first 90 days, the team had a complete real-time view of their finances, automated their highest-friction workflows, and freed leadership to focus on growth instead of firefighting.
            </p>
          </div>

          <div className="mt-12 bg-gradient-green rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-white text-[24px]">Want results like these?</h3>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-bold bg-white text-brand-deep hover:scale-[1.02] transition-transform">
              Book My Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
};

export default CaseStudyDetail;
