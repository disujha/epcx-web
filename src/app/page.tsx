import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import CaseStudy from "@/components/sections/case-study";
import Problems from "@/components/sections/problems";
import OperationalStory from "@/components/sections/operational-story";
import Capabilities from "@/components/sections/capabilities";
import WorkTypes from "@/components/sections/work-types";
import Deployment from "@/components/sections/deployment";
import Timeline from "@/components/sections/timeline";
import Benefits from "@/components/sections/benefits";
import DashboardShowcase from "@/components/sections/dashboard";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background-light font-sans selection:bg-industrial-lime selection:text-industrial-dark antialiased">
      
      {/* 1. Sticky Navigation Console */}
      <Navbar />

      {/* 2. Full Viewport Command Hero */}
      <Hero />

      {/* 3. Infinite Scrolling Trust Strip */}
      <TrustStrip />

      {/* 3.5 PEC Petrochem Engineering Construction Case Study */}
      <CaseStudy />

      {/* 4. Dark Problems Telemetry Alerts Section */}
      <Problems />

      {/* 4.5 Operational Storytelling Section */}
      <OperationalStory />

      {/* 5. Interactive Capabilities Console Grid */}
      <Capabilities />

      {/* 5.5 EPC Work Type Coverage */}
      <WorkTypes />

      {/* 6. Live Site Deployment Infrastructure & Commissioning */}
      <Deployment />

      {/* 7. SCADA/DCS themed Workflow Process Diagram */}
      <Timeline />

      {/* 8. Dark Outcomes & Financial Metric Outcomes */}
      <Benefits />

      {/* 9. High-Fidelity Interactive Dashboard Showcase */}
      <DashboardShowcase />

      {/* 10. Dark Lead Telemetry Form & WhatsApp Hotlink */}
      <CTA />

      {/* 11. Minimalist Enterprise Footer */}
      <Footer />

    </div>
  );
}

