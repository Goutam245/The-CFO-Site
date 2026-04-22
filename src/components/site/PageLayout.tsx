import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingChat from "./FloatingChat";
import MobileStickyCTA from "./MobileStickyCTA";

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      {children}
      <Footer />
      <FloatingChat />
      <MobileStickyCTA />
    </main>
  );
};

export default PageLayout;
