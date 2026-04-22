import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const MobileStickyCTA = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[55] bg-gradient-green px-4 py-3 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
      <span className="text-white font-semibold text-[14px]">Get Free CFO Assessment</span>
      <Link
        to="/contact"
        className="bg-white text-brand-deep font-bold text-[13px] px-4 py-2 rounded-lg inline-flex items-center gap-1.5"
      >
        Book Now <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
};

export default MobileStickyCTA;
