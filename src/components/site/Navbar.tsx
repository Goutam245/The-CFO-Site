import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Power BI", href: "/power-bi-reporting" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Logo = ({ light = true }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5 group">
    <div className="grid grid-cols-2 gap-[3px] p-[3px] rounded-md bg-brand-bright/15">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="w-1.5 h-1.5 rounded-[2px] bg-brand-bright" />
      ))}
    </div>
    <span className={`font-display font-bold text-[19px] tracking-tight ${light ? "text-white" : "text-ink-900"}`}>
      The CFO Site
    </span>
  </Link>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || pathname !== "/" ? "glass-dark border-b border-white/[0.06]" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-16 lg:h-[76px] flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className={`text-[15px] font-semibold transition-colors relative ${
                  isActive(l.href) ? "text-brand-bright" : "text-white/80 hover:text-brand-bright"
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-brand-bright rounded-full" />
                )}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="text-[15px] font-semibold text-white/90 hover:text-white px-4 py-2">
              Sign In
            </Link>
            <Link
              to="/contact"
              className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-[15px] font-semibold text-white bg-gradient-green shadow-[0_4px_20px_rgba(5,150,105,0.35)] hover:shadow-[0_8px_30px_rgba(5,150,105,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-surface-dark/[0.97] backdrop-blur-sm flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-16">
              <Logo />
              <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-7">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-2xl font-display font-semibold ${
                    isActive(l.href) ? "text-brand-bright" : "text-white hover:text-brand-bright"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="p-5 pb-10">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-6 py-4 rounded-xl text-white font-semibold bg-gradient-green"
              >
                Get Free Assessment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
