import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Rocket, Handshake, Globe2, Zap } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";
import Team from "@/components/site/Team";
import Integrations from "@/components/site/Integrations";

const values = [
  { icon: Target, title: "Radical Transparency", body: "Pricing, scope, deliverables — all visible up front. No surprises, ever." },
  { icon: Lightbulb, title: "Financial Education First", body: "We don't just hand over reports — we teach you how to read and act on them." },
  { icon: Rocket, title: "Bias Toward Action", body: "Strategy without execution is just a slide deck. We move fast and ship real outcomes." },
  { icon: Handshake, title: "Long-Term Partnerships", body: "Average client tenure is 3.4 years. We're in it for the long haul." },
  { icon: Globe2, title: "Globally Distributed", body: "Senior talent across 15 countries — diverse perspectives, world-class results." },
  { icon: Zap, title: "Technology-Driven", body: "Power BI, AI, and automation power everything we do — that's why we're 5x more efficient." },
];

const stats = [
  { v: "8+", l: "Years in Operation" },
  { v: "200+", l: "Clients Served" },
  { v: "$500M+", l: "Revenue Managed" },
  { v: "15+", l: "Countries" },
];

const About = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About Us"
        title="We Built the Finance Team"
        subtitle="We Wish We Had."
        body="The CFO Site was founded by CPAs who spent years inside Big Four firms watching great businesses fail because they couldn't afford senior financial leadership. We built the solution."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85"
            alt="Finance team office"
            loading="lazy"
            className="w-full h-[460px] object-cover rounded-2xl"
            style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.12)" }}
          />
          <div>
            <span className="label-eyebrow">Our Story</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[32px] lg:text-[44px] leading-[1.1] tracking-h2">
              From Big Four Frustration to <span className="text-gradient-green">a Better Model</span>
            </h2>
            <p className="mt-5 text-ink-700 text-[16px] leading-[1.75]">
              The CFO Site was founded in 2017 by three CPAs who had spent over a decade between Deloitte, PwC, and KPMG. They watched founder after founder make catastrophic financial decisions — not because they weren't smart, but because they couldn't access senior financial talent at a price that made sense.
            </p>
            <p className="mt-4 text-ink-700 text-[16px] leading-[1.75]">
              We started with one principle: every growing business deserves a CPA-designated CFO. We built the team, the technology, and the process to make that possible — at one-fifth the cost of a full-time hire.
            </p>
            <p className="mt-4 text-ink-700 text-[16px] leading-[1.75]">
              Today we serve over 200 businesses across North America, with senior advisors in 15 countries and over $500M in client revenue under management.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-dark py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="max-w-3xl">
            <span className="label-eyebrow">Mission & Values</span>
            <h2 className="mt-5 font-display font-bold text-white text-[36px] lg:text-[48px] leading-[1.05] tracking-h2">
              What We Believe.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7]" style={{ color: "#CBD5E1" }}>
              These aren't poster values. They're decision-making criteria we use every single day.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl p-7" style={{ background: "#161B27", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
                    <Icon className="w-5 h-5 text-brand-bright" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-white text-[20px]">{v.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.7]" style={{ color: "#CBD5E1" }}>{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="label-eyebrow justify-center">By the Numbers</span>
            <h2 className="mt-5 font-display font-bold text-ink-900 text-[36px] lg:text-[48px] leading-[1.05] tracking-h2">
              Built on Results.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.l} className="bg-white border border-ink-200 rounded-2xl p-7 text-center">
                <p className="font-display font-bold text-brand-deep text-[42px] lg:text-[52px] leading-none">{s.v}</p>
                <p className="mt-2 text-ink-500 text-[14px] uppercase font-semibold tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />
      <Integrations />
      <FinalCTA />
    </PageLayout>
  );
};

export default About;
