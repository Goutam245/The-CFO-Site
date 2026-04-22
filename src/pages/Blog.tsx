import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";

const posts = [
  { tag: "Strategy", title: "The 5 Financial KPIs Every SaaS Founder Should Track", excerpt: "Most SaaS founders track too many metrics. Here are the five that genuinely predict whether your business will scale.", read: "6 min read", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=85" },
  { tag: "Operations", title: "How to Close the Books in 5 Days (Even if You're a Mess Right Now)", excerpt: "A practical, week-by-week playbook to get your month-end close from 14 days down to 5.", read: "9 min read", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&q=85" },
  { tag: "Power BI", title: "Building Your First Executive Dashboard in Power BI", excerpt: "Step-by-step guide to designing the dashboard your CEO will actually use to make decisions.", read: "12 min read", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=85" },
  { tag: "Hiring", title: "Fractional vs Full-Time CFO: A Real Cost Breakdown", excerpt: "We ran the numbers across 50+ engagements. Here's when each model actually makes sense.", read: "8 min read", img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=900&q=85" },
  { tag: "Tax", title: "The Year-End Tax Moves Most Founders Miss", excerpt: "Six legitimate strategies to reduce your effective tax rate before December 31.", read: "5 min read", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85" },
  { tag: "Fundraising", title: "What VCs Actually Want to See in Your Financial Model", excerpt: "Insights from 30+ successful Series A and B raises we've supported.", read: "11 min read", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85" },
];

const Blog = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Blog"
        title="Insights From the Field."
        subtitle="No Fluff. Just Finance."
        body="Practical articles, frameworks, and case studies written by our CFOs and controllers — based on what's actually working with our clients."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.title} className="group bg-white border border-ink-200 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:border-brand-bright hover:shadow-[0_20px_60px_rgba(6,95,70,0.1)] transition-all">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-52 object-cover" />
                <div className="p-7 flex flex-col flex-1">
                  <span className="self-start px-2.5 py-1 rounded-md text-[12px] font-bold uppercase tracking-wide" style={{ background: "#D1FAE5", color: "#065F46" }}>
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-display font-bold text-ink-900 text-[20px] leading-tight group-hover:text-brand-bright transition-colors">{p.title}</h3>
                  <p className="mt-3 text-ink-700 text-[14px] leading-[1.7] flex-1">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-[13px]">
                    <span className="text-ink-500">{p.read}</span>
                    <Link to="/blog" className="inline-flex items-center gap-1 font-semibold text-brand-deep group-hover:text-brand-bright transition-colors">
                      Read article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
};

export default Blog;
