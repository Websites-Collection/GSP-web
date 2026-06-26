import { BriefModalProvider } from "@/components/BriefModalContext";
import BriefModal from "@/components/BriefModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import AgenciesSection from "@/components/AgenciesSection";
import IndustriesGrid from "@/components/IndustriesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <BriefModalProvider>
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <MetricsBar />
        <AgenciesSection />
        <IndustriesGrid />
        <ProcessTimeline />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <BriefModal />
    </BriefModalProvider>
  );
}
