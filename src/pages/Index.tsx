import PageLayout from "@/components/site/PageLayout";
import Hero from "@/components/site/Hero";
import LogoStrip from "@/components/site/LogoStrip";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import Estimator from "@/components/site/Estimator";
import CaseStudies from "@/components/site/CaseStudies";
import LeadMagnet from "@/components/site/LeadMagnet";
import Testimonials from "@/components/site/Testimonials";
import Team from "@/components/site/Team";
import Integrations from "@/components/site/Integrations";
import Careers from "@/components/site/Careers";
import FinalCTA from "@/components/site/FinalCTA";

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <LogoStrip />
      <Services />
      <Process />
      <Estimator />
      <CaseStudies />
      <section id="lead-magnet">
        <LeadMagnet />
      </section>
      <Testimonials />
      <Team />
      <Integrations />
      <Careers />
      <FinalCTA />
    </PageLayout>
  );
};

export default Index;
