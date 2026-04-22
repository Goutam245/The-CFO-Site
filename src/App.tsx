import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ServicesPage from "./pages/Services.tsx";
import PowerBI from "./pages/PowerBI.tsx";
import KPITracking from "./pages/KPITracking.tsx";
import TimeTracking from "./pages/TimeTracking.tsx";
import Pricing from "./pages/Pricing.tsx";
import FeeEstimator from "./pages/FeeEstimator.tsx";
import CaseStudiesPage from "./pages/CaseStudies.tsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.tsx";
import About from "./pages/About.tsx";
import CareersPage from "./pages/Careers.tsx";
import Resources from "./pages/Resources.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/power-bi-reporting" element={<PowerBI />} />
          <Route path="/kpi-tracking" element={<KPITracking />} />
          <Route path="/time-tracking" element={<TimeTracking />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/fee-estimator" element={<FeeEstimator />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
