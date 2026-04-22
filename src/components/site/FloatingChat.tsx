import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const FloatingChat = () => {
  return (
    <Link
      to="/contact"
      aria-label="Chat with us"
      className="group fixed bottom-24 right-5 lg:bottom-6 lg:right-6 z-[60] w-14 h-14 rounded-full bg-gradient-green shadow-[0_10px_30px_rgba(5,150,105,0.45)] flex items-center justify-center hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <span className="absolute right-full mr-3 whitespace-nowrap bg-surface-dark text-white text-[13px] font-semibold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden lg:block">
        Chat with us
      </span>
    </Link>
  );
};

export default FloatingChat;
