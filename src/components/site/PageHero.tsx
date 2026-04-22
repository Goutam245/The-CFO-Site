import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  body,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) => {
  return (
    <section className="relative bg-gradient-hero pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
      <div className="grain-overlay" />
      <div
        className="orb"
        style={{ width: 480, height: 480, top: -120, right: -120, background: "#10B981", opacity: 0.1 }}
      />
      <div
        className="orb"
        style={{ width: 320, height: 320, bottom: -120, left: -80, background: "#065F46", opacity: 0.15, filter: "blur(100px)" }}
      />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
        {crumbs && (
          <nav className="flex items-center gap-2 text-[13px] mb-6" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="text-white/60 hover:text-brand-bright transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/90 font-medium">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-white/30" />}
              </span>
            ))}
          </nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && <span className="label-eyebrow">{eyebrow}</span>}
          <h1 className="mt-5 font-display font-extrabold text-white leading-[1.05] tracking-hero text-[40px] sm:text-[52px] lg:text-[68px]">
            {title}
            {subtitle && (
              <>
                <br />
                <span className="text-gradient-green">{subtitle}</span>
              </>
            )}
          </h1>
          {body && (
            <p className="mt-6 text-[17px] lg:text-[19px] leading-[1.7] max-w-2xl" style={{ color: "#CBD5E1" }}>
              {body}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
