"use client";

import { motion } from "framer-motion";
import { 
  UserPlus, MapPin, Scan, HardHat, FileCheck, ClipboardList, 
  ArrowRight, Radio, Settings, Database, Brain, Camera, LayoutDashboard
} from "lucide-react";

const STAGES = [
  {
    step: "01",
    title: "Worker Onboarding",
    icon: UserPlus,
    input: "National ID + PF/ESIC Records",
    output: "Compliance Token (UUID)",
    telemetry: "BIOMETRIC: ACTIVE"
  },
  {
    step: "02",
    title: "Site Assignment",
    icon: MapPin,
    input: "Contractor Group + Gate Map",
    output: "Roster Group Allocations",
    telemetry: "ZONING: G-04 READY"
  },
  {
    step: "03",
    title: "Attendance Capture",
    icon: Scan,
    input: "Terminal QR/RFID Scans",
    output: "Raw Attendance Timesheets",
    telemetry: "SYNC LATENCY: 0.2s"
  },
  {
    step: "04",
    title: "Contractor Verification",
    icon: HardHat,
    input: "Supervisor Overrides",
    output: "Reconciled Billing Hours",
    telemetry: "AUDIT FLAG: Normal"
  },
  {
    step: "05",
    title: "Salary Processing",
    icon: FileCheck,
    input: "PF Formats + Day Rates",
    output: "Automated Bank Transfer",
    telemetry: "DISBURSEMENT: RECON"
  },
  {
    step: "06",
    title: "Reporting & Analytics",
    icon: ClipboardList,
    input: "Site Productivity Ratios",
    output: "Compliance Reports (XLSX)",
    telemetry: "SHA-256 SECURED"
  }
];

const DPR_STAGES = [
  {
    step: "01",
    title: "Field Capture",
    icon: Camera,
    input: "Handwritten DPR / Site Photo",
    output: "Chat Message Sent",
    telemetry: "SOURCE: FIELD SUPERVISOR"
  },
  {
    step: "02",
    title: "AI Classification",
    icon: Brain,
    input: "Raw Message + Image",
    output: "ACTIVITY / MANPOWER / MATERIAL",
    telemetry: "MODEL: GEMINI VISION"
  },
  {
    step: "03",
    title: "Data Extraction",
    icon: Scan,
    input: "Classified Message",
    output: "Spool No. · Inch-Dia · Activity",
    telemetry: "CONFIDENCE: 85-95%"
  },
  {
    step: "04",
    title: "Admin Review",
    icon: ClipboardList,
    input: "Extracted Data",
    output: "Approved & Synced",
    telemetry: "REVIEW TIME: < 60s"
  },
  {
    step: "05",
    title: "Live Dashboard",
    icon: LayoutDashboard,
    input: "Approved DPR",
    output: "Cumulative Totals Updated",
    telemetry: "SYNC: FIRESTORE LIVE"
  }
];

export default function Timeline() {
  return (
    <section className="bg-background-light py-32 border-b border-industrial-silver relative overflow-hidden industrial-grid">
      
      {/* Pipeline Operations Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="/images/operations.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-12 mix-blend-multiply"
          style={{ filter: 'contrast(1.1) brightness(1.05) saturate(0.9)' }}
          animate={{
            x: [0, -8, 0],
            opacity: [0.12, 0.14, 0.12]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/93 via-white/89 to-industrial-lime/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="border-l-4 border-industrial-dark pl-4 md:pl-6 max-w-3xl mb-12">
          <span className="font-technical text-xs text-industrial-slate uppercase tracking-widest font-bold block">
            [ DATA PIPELINE ARCHITECTURE ]
          </span>
          <h2 className="font-technical text-3xl md:text-4xl font-bold uppercase tracking-tight text-industrial-dark mt-3">
            INDUSTRIAL FIELD EXECUTION PIPELINE
          </h2>
          <p className="mt-5 text-sm text-industrial-slate leading-relaxed font-sans max-w-2xl">
            How raw field logs translate into audited, compliant enterprise analytics. EPCX establishes an unbroken digital chain of custody from gate punch-ins to bank wage disbursement.
          </p>
        </div>

        {/* SCADA DCS Layout Pipeline Display */}
        <div className="mt-16 bg-industrial-dark border border-industrial-slate rounded-sm p-6 lg:p-8 text-white relative shadow-xl overflow-x-auto select-none">
          
          {/* Subtle Grid Backdrop inside DCS panel */}
          <div className="absolute inset-0 opacity-[0.03] industrial-grid-dark pointer-events-none" />

          {/* DCS Instrumentation Label Block */}
          <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-4 mb-8 text-[9px] font-technical uppercase text-industrial-silver font-mono">
            <div className="flex items-center gap-2">
              <Settings className="w-3.5 h-3.5 text-industrial-lime status-active" />
              <span>DCS MONITORING // EPCX DATA STREAM FLOW</span>
            </div>
            <div className="flex items-center gap-3">
              <span>PIPELINE CAPACITY: 10,000 PUNCHES/MIN</span>
              <span className="w-1.5 h-1.5 bg-feedback-success rounded-full" />
              <span>STATUS: STABLE</span>
            </div>
          </div>

          {/* Horizontal Process Flow Grid */}
          <div className="flex lg:grid lg:grid-cols-6 gap-6 min-w-[1000px] pb-4">
            {STAGES.map((stage, idx) => {
              const StageIcon = stage.icon;
              return (
                <div key={idx} className="flex-1 flex flex-col justify-between relative group">
                  
                  {/* Connective pipeline line behind nodes */}
                  {idx < STAGES.length - 1 && (
                    <div className="absolute top-10 left-[60%] w-[100%] h-0.5 bg-industrial-slate z-0 hidden lg:block">
                      <div className="absolute -top-1 right-2 animate-pulse">
                        <ArrowRight className="w-3 h-3 text-industrial-lime" />
                      </div>
                    </div>
                  )}

                  {/* DCS Pipeline Node Module */}
                  <div className="relative z-10">
                    
                    {/* Step tag */}
                    <div className="flex items-center justify-between text-[9px] font-mono text-industrial-silver mb-2 pr-2">
                      <span>PROCESS_NODE //</span>
                      <span className="text-industrial-lime font-bold font-technical">#{stage.step}</span>
                    </div>

                    {/* Technical Icon Node */}
                    <div className="w-12 h-12 bg-industrial-slate/50 border border-industrial-slate/80 rounded-sm flex items-center justify-center relative hover:border-industrial-lime transition-colors duration-200">
                      <StageIcon className="w-5 h-5 text-industrial-lime" />
                      
                      {/* Sub-node green active light */}
                      <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-feedback-success rounded-full border border-industrial-dark status-active" />
                    </div>

                    <h4 className="font-technical text-xs font-bold uppercase text-white tracking-wide mt-4">
                      {stage.title}
                    </h4>

                    {/* Data parameters breakdown */}
                    <div className="mt-4 space-y-1.5 text-[9px] font-mono text-industrial-silver border-t border-industrial-slate/30 pt-3">
                      <div>
                        <span className="text-[8px] text-industrial-silver block uppercase">INPUT:</span>
                        <span className="text-white font-medium block truncate max-w-[150px]">{stage.input}</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-industrial-silver block uppercase">OUTPUT:</span>
                        <span className="text-industrial-lime font-medium block truncate max-w-[150px]">{stage.output}</span>
                      </div>
                    </div>

                  </div>

                  {/* Telemetry Footer of Node */}
                  <div className="mt-6 bg-industrial-dark/60 border border-industrial-slate/40 p-2 rounded-xs text-[8px] font-mono text-center flex items-center justify-center gap-1 leading-none">
                    <Database className="w-2.5 h-2.5 text-industrial-silver" />
                    <span>{stage.telemetry}</span>
                  </div>

                </div>
              );
            })}
          </div>

          {/* DCS Panel Info Ticker */}
          <div className="bg-industrial-dark/90 border border-industrial-slate/50 p-2.5 mt-8 text-[9px] font-technical uppercase tracking-wide text-industrial-silver flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-industrial-lime status-active" />
              <span>FLOW CONTROL DIAGRAM READ-OUT: ALL CONTEXTS RECONCILED WITH 0.00% AUDIT DEVIATION IN LAST 24 HOURS</span>
            </div>
            <span>v1.2.9 SECURE</span>
          </div>

        </div>

        {/* DPR AUTOMATION PIPELINE */}
        <div className="mt-16 border-t border-industrial-slate/70 pt-16">

          {/* Section Header */}
          <div className="border-l-4 border-industrial-dark pl-4 md:pl-6 max-w-3xl">
            <span className="font-technical text-xs text-industrial-slate uppercase tracking-widest font-bold block">
              [ DPR AUTOMATION PIPELINE ]
            </span>
            <h3 className="font-technical text-3xl md:text-4xl font-bold uppercase tracking-tight text-industrial-dark mt-2">
              FIELD PHOTO TO DASHBOARD — IN 30 SECONDS
            </h3>
            <p className="mt-4 text-sm text-industrial-slate leading-relaxed font-sans">
              How a field supervisor&apos;s site photo becomes a structured, auditable DPR in your dashboard without any manual data entry.
            </p>
          </div>

          {/* DPR DCS Dark Panel */}
          <div className="mt-16 bg-industrial-dark border border-industrial-slate rounded-sm p-6 lg:p-8 text-white relative shadow-xl overflow-x-auto select-none">

            {/* Subtle Grid Backdrop */}
            <div className="absolute inset-0 opacity-[0.03] industrial-grid-dark pointer-events-none" />

            {/* DCS Instrumentation Label Block */}
            <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-4 mb-8 text-[9px] font-technical uppercase text-industrial-silver font-mono">
              <div className="flex items-center gap-2">
                <Settings className="w-3.5 h-3.5 text-industrial-lime status-active" />
                <span>DCS MONITORING // EPCX DPR EXTRACTION FLOW</span>
              </div>
              <div className="flex items-center gap-3">
                <span>AI EXTRACTION: GEMINI VISION ACTIVE</span>
                <span className="w-1.5 h-1.5 bg-feedback-success rounded-full" />
                <span>STATUS: PROCESSING</span>
              </div>
            </div>

            {/* Horizontal DPR Flow Grid */}
            <div className="flex lg:grid lg:grid-cols-5 gap-6 min-w-[900px] pb-4">
              {DPR_STAGES.map((stage, idx) => {
                const StageIcon = stage.icon;
                return (
                  <div key={idx} className="flex-1 flex flex-col justify-between relative group">

                    {/* Connective pipeline line */}
                    {idx < DPR_STAGES.length - 1 && (
                      <div className="absolute top-10 left-[60%] w-[100%] h-0.5 bg-industrial-slate z-0 hidden lg:block">
                        <div className="absolute -top-1 right-2 animate-pulse">
                          <ArrowRight className="w-3 h-3 text-industrial-lime" />
                        </div>
                      </div>
                    )}

                    {/* DCS Pipeline Node Module */}
                    <div className="relative z-10">

                      {/* Step tag */}
                      <div className="flex items-center justify-between text-[9px] font-mono text-industrial-silver mb-2 pr-2">
                        <span>PROCESS_NODE //</span>
                        <span className="text-industrial-lime font-bold font-technical">#{stage.step}</span>
                      </div>

                      {/* Technical Icon Node */}
                      <div className="w-12 h-12 bg-industrial-slate/50 border border-industrial-slate/80 rounded-sm flex items-center justify-center relative hover:border-industrial-lime transition-colors duration-200">
                        <StageIcon className="w-5 h-5 text-industrial-lime" />
                        <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-feedback-success rounded-full border border-industrial-dark status-active" />
                      </div>

                      <h4 className="font-technical text-xs font-bold uppercase text-white tracking-wide mt-4">
                        {stage.title}
                      </h4>

                      {/* Data parameters */}
                      <div className="mt-4 space-y-1.5 text-[9px] font-mono text-industrial-silver border-t border-industrial-slate/30 pt-3">
                        <div>
                          <span className="text-[8px] text-industrial-silver block uppercase">INPUT:</span>
                          <span className="text-white font-medium block truncate max-w-[150px]">{stage.input}</span>
                        </div>
                        <div>
                          <span className="text-[8px] text-industrial-silver block uppercase">OUTPUT:</span>
                          <span className="text-industrial-lime font-medium block truncate max-w-[150px]">{stage.output}</span>
                        </div>
                      </div>

                    </div>

                    {/* Telemetry Footer */}
                    <div className="mt-6 bg-industrial-dark/60 border border-industrial-slate/40 p-2 rounded-xs text-[8px] font-mono text-center flex items-center justify-center gap-1 leading-none">
                      <Database className="w-2.5 h-2.5 text-industrial-silver" />
                      <span>{stage.telemetry}</span>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* DPR Panel Info Ticker */}
            <div className="bg-industrial-dark/90 border border-industrial-slate/50 p-2.5 mt-8 text-[9px] font-technical uppercase tracking-wide text-industrial-silver flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-industrial-lime status-active" />
                <span>DPR AUTOMATION PIPELINE STATUS: PROCESSING 6 REPORTS TODAY · AVG EXTRACTION TIME: 28 SECONDS · CONFIDENCE: 91%</span>
              </div>
              <span>v1.2.9 SECURE</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
