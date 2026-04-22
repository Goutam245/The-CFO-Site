import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";

const cols: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Fractional CFO", to: "/services" },
      { label: "Controllership", to: "/services" },
      { label: "Power BI Reporting", to: "/power-bi-reporting" },
      { label: "KPI Tracking", to: "/kpi-tracking" },
      { label: "Time Tracking", to: "/time-tracking" },
      { label: "Cloud Migration", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Team", to: "/about" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Blog", to: "/blog" },
      { label: "Partners", to: "/about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Fee Estimator", to: "/fee-estimator" },
      { label: "CFO Checklist (PDF)", to: "/resources" },
      { label: "KPI Template", to: "/resources" },
      { label: "Blog Library", to: "/blog" },
      { label: "Webinars", to: "/resources" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-surface-dark text-white pb-24 lg:pb-0">
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 pt-20 pb-10">
          <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] gap-10">
            <div>
              <Link to="/" className="flex items-center gap-2.5">
                <div className="grid grid-cols-2 gap-[3px] p-[3px] rounded-md bg-brand-bright/15">
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-[2px] bg-brand-bright" />
                  ))}
                </div>
                <span className="font-display font-bold text-[19px]">The CFO Site</span>
              </Link>
              <p className="mt-5 text-[15px] leading-[1.7]" style={{ color: "#CBD5E1" }}>
                Canada's premier fractional CFO and controllership platform for growing businesses.
              </p>
              <div className="mt-6 flex gap-3">
                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-brand-bright/20 group"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                    aria-label="Social link"
                  >
                    <Icon className="w-4 h-4 text-ink-500 group-hover:text-brand-bright transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {cols.map((c) => (
              <div key={c.title}>
                <p className="font-display font-bold text-white text-[15px] mb-5">{c.title}</p>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-[14px] text-ink-500 hover:text-brand-bright transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="font-display font-bold text-white text-[15px] mb-5">Get in Touch</p>
              <ul className="space-y-2.5 text-[14px]" style={{ color: "#CBD5E1" }}>
                <li>hello@thecfo.site</li>
                <li>1-800-CFO-SITE</li>
                <li className="text-brand-bright text-[13px]">Response within 4 hours</li>
              </ul>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-5 flex bg-white/[0.04] border border-white/10 rounded-lg overflow-hidden focus-within:border-brand-bright"
              >
                <input
                  type="email"
                  placeholder="Newsletter email"
                  className="flex-1 bg-transparent px-3 py-2.5 text-[14px] text-white placeholder:text-ink-500 outline-none"
                />
                <button
                  type="submit"
                  className="px-3 bg-brand-deep hover:bg-brand-mid transition-colors text-white"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <p className="text-[13px] text-ink-500">
              © 2025 The CFO Site. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-2">
              {["🔒 SSL Secured", "✓ CPA Regulated", "🇨🇦 PIPEDA Compliant"].map((b) => (
                <span
                  key={b}
                  className="px-3 py-1.5 rounded-full text-[12px]"
                  style={{ background: "rgba(255,255,255,0.04)", color: "#CBD5E1" }}
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="flex gap-5 text-[13px] text-ink-500">
              <Link to="/" className="hover:text-brand-bright transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-brand-bright transition-colors">Terms of Service</Link>
              <Link to="/" className="hover:text-brand-bright transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
