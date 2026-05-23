"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserCheck, ScanFace, FileSpreadsheet, Briefcase, BarChart3, 
  Download, Globe, Lock, LayoutDashboard, MonitorPlay, Check, ShieldAlert, ArrowRight,
  Brain, GitBranch, FolderOpen, MessageSquare, Users
} from "lucide-react";

// List of all capabilities with metadata
const CAPABILITIES = [
  {
    id: "onboarding",
    title: "Worker Onboarding",
    tag: "SYS_ONB_01",
    desc: "Deploy swift biometric field onboarding. Instantly register workers, upload safety inductions, PF/ESIC data, and issue technical QR badge IDs directly at the site gates.",
    icon: UserCheck,
  },
  {
    id: "attendance",
    title: "Attendance Tracking",
    tag: "SYS_ATT_02",
    desc: "Eliminate logbooks. Capture real-time attendance using smart terminal integrations, geo-fenced mobile scans, or biometric hardware with instant cloud syncing.",
    icon: ScanFace,
  },
  {
    id: "salary",
    title: "Salary Slip Generation",
    tag: "SYS_SAL_03",
    desc: "Enforce payment transparency. Automatically compile contractor-level wage sheets, verify structural allowances, generate slips, and maintain complete audit trails.",
    icon: FileSpreadsheet,
  },
  {
    id: "contractor",
    title: "Contractor Management",
    tag: "SYS_CON_04",
    desc: "Establish clear contractor operations. Monitor deployment numbers, track subcontractor invoicing limits, check historical compliance scores, and verify billable times.",
    icon: Briefcase,
  },
  {
    id: "analytics",
    title: "Workforce Analytics",
    tag: "SYS_ANL_05",
    desc: "Uncover operational leakage. View live worker allocations, idle time quotients, site-to-site transfer rosters, and project pacing trends in standard SCADA dashboards.",
    icon: BarChart3,
  },
  {
    id: "exports",
    title: "Reporting & Exports",
    tag: "SYS_EXP_06",
    desc: "Satisfy legal labor audits instantly. Compile timesheets and compliance forms in one click. Export secure CSV, Excel, or PDF reports with cryptographic signatures.",
    icon: Download,
  },
  {
    id: "multilingual",
    title: "Multilingual Support",
    tag: "SYS_LANG_07",
    desc: "Ensure seamless worker interaction. Multilingual field supervisor interfaces allow contractors and laborers to check timesheets and salary splits in local dialects.",
    icon: Globe,
  },
  {
    id: "rbac",
    title: "Role-Based Access",
    tag: "SYS_SEC_08",
    desc: "Secure critical site data. Separate administrative, client, contractor, and supervisor credentials, enforcing field-level security constraints.",
    icon: Lock,
  },
  {
    id: "dashboards",
    title: "Operational Dashboards",
    tag: "SYS_DASH_09",
    desc: "View aggregate data. Keep executive managers, safety leads, and client representatives aligned with clean grids showing overall project statistics.",
    icon: LayoutDashboard,
  },
  {
    id: "monitoring",
    title: "Site Monitoring",
    tag: "SYS_MON_10",
    desc: "Monitor physical site environments. Track active check-in zones, supervisor override alerts, terminal battery status, and sync telemetry on the fly.",
    icon: MonitorPlay,
  },
  {
    id: "dpr",
    title: "AI DPR Extraction",
    tag: "SYS_DPR_11",
    desc: "Supervisors send a photo of their handwritten daily progress report. EPCX AI reads it and extracts structured piping data — spool numbers, inch-dia, activity type, shift, date, supervisor — in under 30 seconds. No forms. No data entry.",
    icon: Brain,
  },
  {
    id: "piping",
    title: "Piping Progress Tracking",
    tag: "SYS_PIPE_12",
    desc: "Track FITUP, WELDING, and ERECTION progress with cumulative inch-dia and inch-meter totals. Data is logged per spool, per line, per shift, per contractor. Live running totals update the dashboard automatically after every approved DPR.",
    icon: GitBranch,
  },
  {
    id: "drawings",
    title: "Drawing Management",
    tag: "SYS_DWG_13",
    desc: "Import your ISO drawing register and line-list. Track revision status, mark drawings as under-review or approved, and link field progress directly to specific drawing numbers. All document control in one place.",
    icon: FolderOpen,
  },
  {
    id: "fieldchat",
    title: "AI Field Chat",
    tag: "SYS_CHAT_14",
    desc: "Field supervisors update progress through a familiar chat interface — no forms, no training required. Every message is automatically classified as ACTIVITY, MANPOWER, or MATERIAL update, then routed for AI data extraction and admin review.",
    icon: MessageSquare,
  },
  {
    id: "livesummary",
    title: "Live Summary Dashboard",
    tag: "SYS_LIVE_15",
    desc: "Auto-aggregated project totals — cumulative FITUP ID, WELDING ID, ERECTION IM, daily manpower count — updated in real time with every approved DPR. Clients and PMCs can view live project progress without waiting for weekly reports.",
    icon: LayoutDashboard,
  },
  {
    id: "shiftmanpower",
    title: "Shift Manpower Tracking",
    tag: "SYS_MP_16",
    desc: "Track workforce attendance split by Shift A and Shift B. Supply contractor attendance can be logged with photo evidence. Manpower counts by role, contractor, and sub-contractor are automatically aggregated into daily reports.",
    icon: Users,
  },
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState("onboarding");
  const activeData = CAPABILITIES.find(c => c.id === activeTab) || CAPABILITIES[0];

  return (
    <section id="capabilities" className="bg-background-light py-24 border-b border-industrial-silver relative overflow-hidden industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="border-l-4 border-industrial-dark pl-4 md:pl-6 max-w-3xl">
          <span className="font-technical text-xs text-industrial-slate uppercase tracking-widest font-bold block">
            [ PLATFORM CAPABILITIES ]
          </span>
          <h2 className="font-technical text-3xl md:text-4xl font-bold uppercase tracking-tight text-industrial-dark mt-2">
            INTELLIGENT SITE COMMAND CAPABILITIES
          </h2>
          <p className="mt-4 text-sm text-industrial-slate leading-relaxed font-sans">
            EPCX integrates field operations, workforce database registers, compliance pipelines, and executive dashboards into a unified enterprise operations software.
          </p>
        </div>

        {/* Interactive Console Workspace */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT LIST: Selection Nodes */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <span className="text-[10px] font-technical uppercase text-industrial-slate tracking-wider mb-2 font-bold block px-2">
              SELECT MODULE CONSOLE //
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 max-h-[500px] lg:overflow-y-auto pr-2 custom-scrollbar">
              {CAPABILITIES.map((cap) => {
                const TabIcon = cap.icon;
                const isActive = cap.id === activeTab;
                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveTab(cap.id)}
                    className={`w-full text-left p-3.5 border transition-all duration-200 rounded-sm flex items-center justify-between ${
                      isActive
                        ? "bg-industrial-dark border-industrial-dark text-white shadow-md"
                        : "bg-white border-industrial-silver/70 text-industrial-dark hover:bg-industrial-silver/10 hover:border-industrial-slate/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xs border flex items-center justify-center ${
                        isActive ? "bg-industrial-slate border-industrial-lime text-industrial-lime" : "bg-industrial-silver/20 border-industrial-silver text-industrial-slate"
                      }`}>
                        <TabIcon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-technical text-xs font-bold uppercase tracking-wide">
                          {cap.title}
                        </span>
                        <span className={`text-[8px] font-mono tracking-widest ${isActive ? "text-industrial-lime" : "text-industrial-silver"}`}>
                          {cap.tag}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? "text-industrial-lime translate-x-0" : "text-industrial-silver -translate-x-1"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SCREEN: Dynamic Mockup Display */}
          <div className="lg:col-span-7 flex">
            <div className="w-full bg-industrial-dark border border-industrial-slate rounded-sm shadow-xl flex flex-col justify-between overflow-hidden relative corner-brackets">
              
              {/* Telemetry Header */}
              <div className="bg-industrial-slate/50 border-b border-industrial-slate/80 p-3.5 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-industrial-lime status-active" />
                  <span className="font-technical text-[9px] uppercase tracking-wider text-industrial-silver">
                    DISPLAY PANEL // {activeData.tag}
                  </span>
                </div>
                <span className="font-technical text-[9px] uppercase tracking-widest text-industrial-lime font-mono">
                  ACTIVE_VIEW: {activeData.id.toUpperCase()}
                </span>
              </div>

              {/* Panel Core Content Description */}
              <div className="p-6 border-b border-industrial-slate/40 bg-industrial-dark/40">
                <h3 className="font-technical text-lg font-bold uppercase tracking-wide text-white">
                  {activeData.title}
                </h3>
                <p className="mt-2 text-xs text-industrial-silver leading-relaxed font-sans max-w-2xl">
                  {activeData.desc}
                </p>
              </div>

              {/* DYNAMIC SCREEN PREVIEW */}
              <div className="p-6 bg-industrial-dark flex-grow flex items-center justify-center relative min-h-[300px]">
                
                {/* Visual grid backdrop behind the mockup */}
                <div className="absolute inset-0 opacity-10 industrial-grid-dark pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="w-full relative z-10"
                  >
                    
                    {/* 1. Worker Onboarding Mockup */}
                    {activeTab === "onboarding" && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-4 rounded-sm">
                        <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-3 mb-4">
                          <span className="font-technical text-[9px] text-industrial-lime tracking-widest font-bold">ONBOARDING FILE REGISTER</span>
                          <span className="text-[9px] text-feedback-success bg-feedback-success/10 border border-feedback-success/20 px-1.5 rounded-xs">VERIFIED</span>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-16 h-16 bg-industrial-dark border border-industrial-slate rounded-xs flex items-center justify-center flex-shrink-0">
                            <ScanFace className="w-8 h-8 text-industrial-silver" />
                          </div>
                          <div className="flex-grow space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-white">Dinesh Solanki</span>
                              <span className="text-[9px] text-industrial-silver font-mono">ID: #9048-A</span>
                            </div>
                            <div className="text-[10px] text-industrial-silver">Designation: Structural Fitter</div>
                            <div className="text-[10px] text-industrial-silver">Contractor: Star Erectors</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-industrial-slate/30 text-[10px]">
                          <div className="flex items-center gap-1.5 text-industrial-silver">
                            <Check className="w-3.5 h-3.5 text-industrial-lime" /> PF Setup: OK
                          </div>
                          <div className="flex items-center gap-1.5 text-industrial-silver">
                            <Check className="w-3.5 h-3.5 text-industrial-lime" /> ESIC Card: Verified
                          </div>
                          <div className="flex items-center gap-1.5 text-industrial-silver">
                            <Check className="w-3.5 h-3.5 text-industrial-lime" /> Medical Status: FIT
                          </div>
                          <div className="flex items-center gap-1.5 text-industrial-silver">
                            <Check className="w-3.5 h-3.5 text-industrial-lime" /> PPE Issued: 100%
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 2. Attendance Tracking Mockup */}
                    {activeTab === "attendance" && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-4 rounded-sm font-mono text-[10px] text-industrial-silver">
                        <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-2 mb-3">
                          <span className="font-technical text-[9px] text-industrial-lime font-bold uppercase">LIVE SCANNER LOGS</span>
                          <span className="text-[9px] text-white">PORT: F-GATE-02</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between p-1 bg-industrial-dark/60 rounded-xs border border-industrial-slate/40">
                            <span>18:31:02 // BADGE-8902 // CHECK_IN</span>
                            <span className="text-feedback-success font-bold">APPROVED</span>
                          </div>
                          <div className="flex items-center justify-between p-1 bg-industrial-dark/60 rounded-xs border border-industrial-slate/40">
                            <span>18:30:55 // BADGE-4420 // CHECK_IN</span>
                            <span className="text-feedback-success font-bold">APPROVED</span>
                          </div>
                          <div className="flex items-center justify-between p-1 bg-industrial-dark/60 rounded-xs border border-industrial-slate/40">
                            <span>18:29:48 // BADGE-1109 // MANUAL OVERRIDE</span>
                            <span className="text-feedback-warning font-bold">BYPASS_AUTH</span>
                          </div>
                          <div className="flex items-center justify-between p-1 bg-industrial-dark/60 rounded-xs border border-industrial-slate/40">
                            <span>18:28:11 // BADGE-9912 // CHECK_OUT</span>
                            <span className="text-industrial-silver font-bold">REGISTERED</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 3. Salary Slip Mockup */}
                    {activeTab === "salary" && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-4 rounded-sm font-sans text-xs text-industrial-silver">
                        <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-2 mb-3">
                          <span className="font-technical text-[9px] text-industrial-lime font-bold uppercase">AUTO-CALCULATED WAGE SHEET</span>
                          <span className="text-[9px] text-white font-mono">AUDIT_LOCK: YES</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                          <span>Base Wage (26 Days):</span>
                          <span className="text-right text-white font-semibold">INR 22,100</span>
                          <span>Overtime (14 Hours):</span>
                          <span className="text-right text-white font-semibold">INR 2,380</span>
                          <span>Gross Earnings:</span>
                          <span className="text-right text-white font-semibold border-b border-industrial-slate pb-0.5">INR 24,480</span>
                          <span className="text-feedback-error">PF Deduction (12%):</span>
                          <span className="text-right text-feedback-error font-semibold">-INR 2,652</span>
                          <span className="text-feedback-error">ESIC Deduction:</span>
                          <span className="text-right text-feedback-error font-semibold">-INR 183</span>
                          <span className="text-industrial-lime font-semibold">Net Payable Wage:</span>
                          <span className="text-right text-industrial-lime font-bold">INR 21,645</span>
                        </div>
                        <div className="mt-3 bg-industrial-dark p-1.5 border border-industrial-slate text-[9px] font-mono text-center flex items-center justify-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-feedback-success" />
                          <span>CONTRACTOR WAGE DISBURSEMENT RECONCILED</span>
                        </div>
                      </div>
                    )}

                    {/* 4. Contractor Management Mockup */}
                    {activeTab === "contractor" && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-4 rounded-sm">
                        <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-2 mb-3 text-[9px]">
                          <span className="font-technical text-industrial-lime font-bold uppercase">SUBCONTRACTOR ALLOCATION METRICS</span>
                          <span className="text-industrial-silver font-mono">ACTIVE: 12 COs</span>
                        </div>
                        <div className="space-y-2.5">
                          <div>
                            <div className="flex justify-between text-[10px] text-industrial-silver mb-1">
                              <span>Hansa Fabricators</span>
                              <span className="font-semibold text-white">280 / 300 Workers Assigned</span>
                            </div>
                            <div className="w-full bg-industrial-dark h-2 rounded-xs overflow-hidden border border-industrial-slate/50">
                              <div className="bg-industrial-lime h-full rounded-xs" style={{ width: "93%" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[10px] text-industrial-silver mb-1">
                              <span>L&T Heavy Engineering</span>
                              <span className="font-semibold text-white">412 / 500 Workers Assigned</span>
                            </div>
                            <div className="w-full bg-industrial-dark h-2 rounded-xs overflow-hidden border border-industrial-slate/50">
                              <div className="bg-industrial-lime h-full rounded-xs" style={{ width: "82%" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[10px] text-industrial-silver mb-1">
                              <span>Sinohydro Projects</span>
                              <span className="font-semibold text-white">180 / 250 Workers Assigned</span>
                            </div>
                            <div className="w-full bg-industrial-dark h-2 rounded-xs overflow-hidden border border-industrial-slate/50">
                              <div className="bg-industrial-lime h-full rounded-xs" style={{ width: "72%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 5. Workforce Analytics Mockup */}
                    {activeTab === "analytics" && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-4 rounded-sm text-center">
                        <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-2 mb-4 text-[9px]">
                          <span className="font-technical text-industrial-lime font-bold uppercase">PRODUCTIVITY TELEMETRY</span>
                          <span className="text-industrial-silver font-mono">REFRESH: LIVE</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-industrial-dark p-2 border border-industrial-slate rounded-xs">
                            <span className="text-[9px] text-industrial-silver block uppercase">FIELD PRODUCTIVITY</span>
                            <span className="text-xl font-technical font-bold text-industrial-lime mt-1 block">94.2%</span>
                          </div>
                          <div className="bg-industrial-dark p-2 border border-industrial-slate rounded-xs">
                            <span className="text-[9px] text-industrial-silver block uppercase">IDLE FRACTION</span>
                            <span className="text-xl font-technical font-bold text-feedback-success mt-1 block">2.4%</span>
                          </div>
                          <div className="bg-industrial-dark p-2 border border-industrial-slate rounded-xs">
                            <span className="text-[9px] text-industrial-silver block uppercase">OVERALL OEE</span>
                            <span className="text-xl font-technical font-bold text-white mt-1 block">91.8%</span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 bg-industrial-dark/40 border border-industrial-slate/40 p-2 text-[10px] text-left text-industrial-silver">
                          <ShieldAlert className="w-4 h-4 text-feedback-warning flex-shrink-0" />
                          <span>OPTIMIZATION: Re-routing 12 fitters from Area-C to Fab Yard is recommended based on active incident limits.</span>
                        </div>
                      </div>
                    )}

                    {/* 11. AI DPR Extraction Mockup */}
                    {activeTab === "dpr" && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-4 rounded-sm">
                        <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-2 mb-3">
                          <span className="font-technical text-[9px] text-industrial-lime font-bold uppercase">AI DPR EXTRACTION ENGINE</span>
                          <span className="text-[9px] text-feedback-success bg-feedback-success/10 border border-feedback-success/20 px-1.5 rounded-xs">CONFIDENCE: 91%</span>
                        </div>
                        {/* Chat bubble */}
                        <div className="bg-industrial-dark/60 border border-industrial-slate/40 rounded-xs p-2.5 mb-2">
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-5 h-5 rounded-xs bg-industrial-slate flex items-center justify-center flex-shrink-0">
                              <span className="text-[7px] font-technical text-industrial-lime font-bold">RK</span>
                            </div>
                            <span className="text-[9px] text-white font-semibold">Ravi K.</span>
                            <span className="text-[8px] text-industrial-silver">09:14</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-8 bg-industrial-slate/40 border border-industrial-slate/60 rounded-xs flex items-center justify-center flex-shrink-0">
                              <Brain className="w-4 h-4 text-industrial-silver" />
                            </div>
                            <span className="text-[9px] text-industrial-silver font-mono">Photo: DPR_0523.jpg</span>
                          </div>
                        </div>
                        {/* AI classification arrow */}
                        <div className="flex items-center gap-2 mb-2 text-[9px]">
                          <span className="text-industrial-silver">→</span>
                          <span className="font-technical text-industrial-silver uppercase tracking-wider">AI CLASSIFIED:</span>
                          <span className="text-industrial-lime font-bold font-technical">ACTIVITY / PIPING</span>
                        </div>
                        {/* Extracted data */}
                        <div className="bg-industrial-dark/80 border border-industrial-slate/50 rounded-xs p-2.5 space-y-1 mb-3">
                          <div className="flex justify-between text-[9px]">
                            <span className="text-industrial-silver font-technical uppercase">Spool</span>
                            <span className="text-white font-mono">14-A</span>
                          </div>
                          <div className="flex justify-between text-[9px]">
                            <span className="text-industrial-silver font-technical uppercase">Line</span>
                            <span className="text-white font-mono">P-0614</span>
                          </div>
                          <div className="flex justify-between text-[9px]">
                            <span className="text-industrial-silver font-technical uppercase">Activity</span>
                            <span className="text-industrial-lime font-bold font-mono">FITUP</span>
                          </div>
                          <div className="flex justify-between text-[9px]">
                            <span className="text-industrial-silver font-technical uppercase">Inch Dia</span>
                            <span className="text-white font-mono">8.5 ID</span>
                          </div>
                        </div>
                        {/* Sync status */}
                        <div className="flex items-center justify-center gap-1.5 bg-feedback-success/10 border border-feedback-success/20 p-1.5 rounded-xs">
                          <Check className="w-3 h-3 text-feedback-success" />
                          <span className="text-[8px] font-technical text-feedback-success uppercase tracking-wider">SYNCED TO PROGRESS DASHBOARD</span>
                        </div>
                      </div>
                    )}

                    {/* 12. Piping Progress Tracking Mockup */}
                    {activeTab === "piping" && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-4 rounded-sm">
                        <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-2 mb-3 text-[9px]">
                          <span className="font-technical text-industrial-lime font-bold uppercase">PIPING PROGRESS SUMMARY</span>
                          <span className="text-industrial-silver font-mono">LIVE</span>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-[10px] text-industrial-silver mb-1">
                              <span className="font-technical uppercase">FITUP ID Total</span>
                              <span className="font-semibold text-white">842.5 ID</span>
                            </div>
                            <div className="w-full bg-industrial-dark h-2 rounded-xs overflow-hidden border border-industrial-slate/50">
                              <div className="bg-industrial-lime h-full rounded-xs" style={{ width: "70%" }} />
                            </div>
                            <div className="text-right text-[8px] text-industrial-silver mt-0.5 font-mono">70%</div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[10px] text-industrial-silver mb-1">
                              <span className="font-technical uppercase">WELDING ID Total</span>
                              <span className="font-semibold text-white">620.0 ID</span>
                            </div>
                            <div className="w-full bg-industrial-dark h-2 rounded-xs overflow-hidden border border-industrial-slate/50">
                              <div className="bg-industrial-lime h-full rounded-xs" style={{ width: "52%" }} />
                            </div>
                            <div className="text-right text-[8px] text-industrial-silver mt-0.5 font-mono">52%</div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[10px] text-industrial-silver mb-1">
                              <span className="font-technical uppercase">ERECTION IM</span>
                              <span className="font-semibold text-white">184.3 IM</span>
                            </div>
                            <div className="w-full bg-industrial-dark h-2 rounded-xs overflow-hidden border border-industrial-slate/50">
                              <div className="bg-industrial-lime h-full rounded-xs" style={{ width: "35%" }} />
                            </div>
                            <div className="text-right text-[8px] text-industrial-silver mt-0.5 font-mono">35%</div>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5 border-t border-industrial-slate/40 pt-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-feedback-success status-active" />
                          <span className="text-[8px] font-technical text-industrial-silver uppercase tracking-wider">LAST UPDATED: TODAY 09:47</span>
                        </div>
                      </div>
                    )}

                    {/* 13. Drawing Management Mockup */}
                    {activeTab === "drawings" && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-4 rounded-sm">
                        <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-2 mb-3">
                          <span className="font-technical text-[9px] text-industrial-lime font-bold uppercase">ISO DRAWING REGISTER</span>
                          <span className="text-[9px] text-industrial-silver font-mono">4 DRAWINGS</span>
                        </div>
                        <div className="space-y-1.5">
                          {/* Header row */}
                          <div className="grid grid-cols-3 gap-2 text-[8px] font-technical uppercase text-industrial-silver/60 pb-1 border-b border-industrial-slate/30">
                            <span>Drawing No.</span>
                            <span>Format</span>
                            <span>Status</span>
                          </div>
                          {/* Row 1 */}
                          <div className="grid grid-cols-3 gap-2 items-center bg-industrial-dark/50 border border-industrial-slate/30 rounded-xs p-1.5">
                            <span className="text-[9px] font-mono text-white">P-0601</span>
                            <span className="text-[9px] text-industrial-silver font-mono">ISO-A3</span>
                            <span className="text-[8px] font-technical font-bold text-feedback-success uppercase">APPROVED</span>
                          </div>
                          {/* Row 2 */}
                          <div className="grid grid-cols-3 gap-2 items-center bg-industrial-dark/50 border border-industrial-slate/30 rounded-xs p-1.5">
                            <span className="text-[9px] font-mono text-white">P-0614</span>
                            <span className="text-[9px] text-industrial-silver font-mono">ISO-A2</span>
                            <span className="text-[8px] font-technical font-bold text-feedback-warning uppercase">UNDER REVIEW</span>
                          </div>
                          {/* Row 3 */}
                          <div className="grid grid-cols-3 gap-2 items-center bg-industrial-dark/50 border border-industrial-slate/30 rounded-xs p-1.5">
                            <span className="text-[9px] font-mono text-white">P-0622</span>
                            <span className="text-[9px] text-industrial-silver font-mono">ISO-A2</span>
                            <span className="text-[8px] font-technical font-bold text-feedback-success uppercase">APPROVED</span>
                          </div>
                          {/* Row 4 */}
                          <div className="grid grid-cols-3 gap-2 items-center bg-industrial-dark/50 border border-industrial-slate/30 rounded-xs p-1.5">
                            <span className="text-[9px] font-mono text-white">P-0631</span>
                            <span className="text-[9px] text-industrial-silver font-mono">ISO-A1</span>
                            <span className="text-[8px] font-technical font-bold text-industrial-silver uppercase">PENDING</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 14. AI Field Chat Mockup */}
                    {activeTab === "fieldchat" && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-4 rounded-sm">
                        <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-2 mb-3">
                          <span className="font-technical text-[9px] text-industrial-lime font-bold uppercase">FIELD CHAT — AI CLASSIFIER</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-feedback-success status-active" />
                        </div>
                        <div className="space-y-2.5">
                          {/* Message 1 */}
                          <div className="bg-industrial-dark/60 border border-industrial-slate/40 rounded-xs p-2.5">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[9px] font-semibold text-white">Ravi Kumar</span>
                              <span className="text-[8px] font-technical font-bold text-industrial-lime bg-industrial-lime/10 border border-industrial-lime/20 px-1.5 py-0.5 rounded-xs uppercase">ACTIVITY</span>
                            </div>
                            <p className="text-[9px] text-industrial-silver leading-relaxed">
                              &ldquo;Fitup completed on spool 14-A today. DPR attached.&rdquo;
                            </p>
                          </div>
                          {/* Message 2 */}
                          <div className="bg-industrial-dark/60 border border-industrial-slate/40 rounded-xs p-2.5">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[9px] font-semibold text-white">Site Supervisor</span>
                              <span className="text-[8px] font-technical font-bold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-1.5 py-0.5 rounded-xs uppercase">MANPOWER</span>
                            </div>
                            <p className="text-[9px] text-industrial-silver leading-relaxed">
                              &ldquo;Total manpower today: 82 workers Shift A, 60 workers Shift B.&rdquo;
                            </p>
                          </div>
                          {/* Message 3 */}
                          <div className="bg-industrial-dark/60 border border-industrial-slate/40 rounded-xs p-2.5">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[9px] font-semibold text-white">Material In-charge</span>
                              <span className="text-[8px] font-technical font-bold text-orange-400 bg-orange-400/10 border border-orange-400/20 px-1.5 py-0.5 rounded-xs uppercase">MATERIAL</span>
                            </div>
                            <p className="text-[9px] text-industrial-silver leading-relaxed">
                              &ldquo;MS pipe 6&quot; received, qty 120 Mtrs from vendor.&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 15. Live Summary Dashboard Mockup */}
                    {activeTab === "livesummary" && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-4 rounded-sm">
                        <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-2 mb-4">
                          <span className="font-technical text-[9px] text-industrial-lime font-bold uppercase">PEC PROJECT — LIVE TOTALS</span>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-feedback-success status-active" />
                            <span className="text-[8px] font-technical text-feedback-success uppercase">LIVE</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-industrial-dark border border-industrial-slate rounded-xs p-2.5 text-center">
                            <span className="text-[8px] font-technical text-industrial-silver uppercase block">FITUP ID</span>
                            <span className="text-lg font-technical font-bold text-industrial-lime mt-1 block">842.5</span>
                          </div>
                          <div className="bg-industrial-dark border border-industrial-slate rounded-xs p-2.5 text-center">
                            <span className="text-[8px] font-technical text-industrial-silver uppercase block">WELDING ID</span>
                            <span className="text-lg font-technical font-bold text-white mt-1 block">620.0</span>
                          </div>
                          <div className="bg-industrial-dark border border-industrial-slate rounded-xs p-2.5 text-center">
                            <span className="text-[8px] font-technical text-industrial-silver uppercase block">ERECTION IM</span>
                            <span className="text-lg font-technical font-bold text-white mt-1 block">184.3</span>
                          </div>
                          <div className="bg-industrial-dark border border-industrial-slate rounded-xs p-2.5 text-center">
                            <span className="text-[8px] font-technical text-industrial-silver uppercase block">TODAY&apos;S DPRs</span>
                            <span className="text-lg font-technical font-bold text-industrial-lime mt-1 block">6</span>
                          </div>
                        </div>
                        <div className="bg-industrial-dark/60 border border-industrial-slate/40 p-1.5 rounded-xs text-center">
                          <span className="text-[8px] font-technical text-industrial-silver uppercase tracking-wider">LAST RECALCULATED: JUST NOW · AUTO-SYNC: ON</span>
                        </div>
                      </div>
                    )}

                    {/* 16. Shift Manpower Tracking Mockup */}
                    {activeTab === "shiftmanpower" && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-4 rounded-sm">
                        <div className="flex items-center justify-between border-b border-industrial-slate/50 pb-2 mb-3">
                          <span className="font-technical text-[9px] text-industrial-lime font-bold uppercase">SHIFT ATTENDANCE SUMMARY</span>
                          <span className="text-[9px] text-industrial-silver font-mono">TODAY</span>
                        </div>
                        {/* Shift cards */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-industrial-dark border border-industrial-slate rounded-xs p-3 text-center">
                            <div className="flex items-center justify-center gap-1.5 mb-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-feedback-success" />
                              <span className="text-[8px] font-technical text-industrial-silver uppercase">SHIFT A</span>
                            </div>
                            <span className="text-2xl font-technical font-bold text-feedback-success block">82</span>
                            <span className="text-[8px] text-industrial-silver font-technical uppercase mt-0.5 block">Workers</span>
                          </div>
                          <div className="bg-industrial-dark border border-industrial-slate rounded-xs p-3 text-center">
                            <div className="flex items-center justify-center gap-1.5 mb-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                              <span className="text-[8px] font-technical text-industrial-silver uppercase">SHIFT B</span>
                            </div>
                            <span className="text-2xl font-technical font-bold text-blue-400 block">60</span>
                            <span className="text-[8px] text-industrial-silver font-technical uppercase mt-0.5 block">Workers</span>
                          </div>
                        </div>
                        {/* Total */}
                        <div className="bg-industrial-dark/60 border border-industrial-slate/40 rounded-xs p-2 text-center mb-3">
                          <span className="text-[9px] font-technical text-industrial-silver uppercase">TOTAL WORKFORCE: </span>
                          <span className="text-[9px] font-technical font-bold text-white">142 WORKERS</span>
                        </div>
                        {/* Contractor breakdown */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[9px]">
                            <span className="text-industrial-silver">L&T Engineering</span>
                            <span className="text-white font-mono font-semibold">68 heads</span>
                          </div>
                          <div className="flex items-center justify-between text-[9px]">
                            <span className="text-industrial-silver">Hansa Fabricators</span>
                            <span className="text-white font-mono font-semibold">42 heads</span>
                          </div>
                          <div className="flex items-center justify-between text-[9px]">
                            <span className="text-industrial-silver">Star Erectors</span>
                            <span className="text-white font-mono font-semibold">32 heads</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Default Mockup Panel for other tabs */}
                    {!["onboarding", "attendance", "salary", "contractor", "analytics", "dpr", "piping", "drawings", "fieldchat", "livesummary", "shiftmanpower"].includes(activeTab) && (
                      <div className="max-w-md mx-auto bg-industrial-slate/50 border border-industrial-slate p-6 rounded-sm text-center">
                        <div className="w-12 h-12 bg-industrial-dark border border-industrial-lime rounded-xs flex items-center justify-center mx-auto">
                          <LayoutDashboard className="w-6 h-6 text-industrial-lime" />
                        </div>
                        <h4 className="font-technical text-xs font-bold text-white uppercase mt-4">
                          SECURE SYSTEM INTERFACE LAYER ENABLED
                        </h4>
                        <p className="text-[10px] text-industrial-silver mt-2 max-w-sm mx-auto">
                          This admin module leverages AES-256 cloud encryption nodes, synchronizing field telemetry feeds directly into your enterprise ERP server layer.
                        </p>
                        <div className="mt-4 p-1.5 border border-industrial-slate/60 text-[8px] font-mono text-industrial-silver inline-block bg-industrial-dark">
                          SEC_KEY_HASH: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Bottom Footer Info */}
              <div className="bg-industrial-dark border-t border-industrial-slate p-3 px-4 flex items-center justify-between text-[8px] font-technical tracking-widest text-industrial-silver">
                <span>SYSTEM: READY // STABLE_STATE</span>
                <span>SECURE SSL // CLOUD ACTIVE</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
