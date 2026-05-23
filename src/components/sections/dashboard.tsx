"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, Users, HardHat, ShieldCheck, Activity, 
  MapPin, Clock, Search, Filter, AlertOctagon, Terminal
} from "lucide-react";

// Mock Live Access Logs
const WORKER_LOGS = [
  { name: "Rajesh Sharma", badge: "BDG-0911", contractor: "L&T Engineering", zone: "Zone-1 Main Gate", time: "18:41:22", status: "VERIFIED", type: "in" },
  { name: "John Bradley", badge: "BDG-4041", contractor: "KBR Heavy Fab", zone: "Zone-3 Reactor Ring", time: "18:40:55", status: "VERIFIED", type: "in" },
  { name: "Akram Al-Khouri", badge: "BDG-2281", contractor: "Hansa Fab", zone: "Zone-2 Storage Block", time: "18:39:10", status: "OVERRIDE", type: "bypass" },
  { name: "Vikram Singh", badge: "BDG-3094", contractor: "L&T Engineering", zone: "Zone-1 Main Gate", time: "18:38:45", status: "VERIFIED", type: "in" },
  { name: "Chen Wei", badge: "BDG-0021", contractor: "Sinohydro", zone: "Zone-4 Marine Jetty", time: "18:36:18", status: "NO_INDUCTION", type: "hold" },
  { name: "Robert Gorski", badge: "BDG-7740", contractor: "KBR Heavy Fab", zone: "Zone-3 Reactor Ring", time: "18:35:02", status: "VERIFIED", type: "in" }
];

const WEEKLY_BARS = [
  { day: "MON", height: "14rem" },
  { day: "TUE", height: "12rem" },
  { day: "WED", height: "13rem" },
  { day: "THU", height: "15rem" },
  { day: "FRI", height: "16rem" },
];

const DPR_ROWS = [
  { date: "23/05", supervisor: "Ravi Kumar",  spool: "14-A",  activity: "FITUP",    unit: "8.5 ID",  approved: true },
  { date: "23/05", supervisor: "Mohan Singh", spool: "P-22B", activity: "WELDING",  unit: "12.0 ID", approved: true },
  { date: "23/05", supervisor: "Arjun R.",    spool: "P-31C", activity: "ERECTION", unit: "6.0 IM",  approved: true },
  { date: "22/05", supervisor: "Ravi Kumar",  spool: "13-D",  activity: "FITUP",    unit: "6.5 ID",  approved: true },
  { date: "22/05", supervisor: "Site Eng.",   spool: "P-18A", activity: "WELDING",  unit: "10.0 ID", approved: false },
];

export default function DashboardShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterContractor, setFilterContractor] = useState("all");
  const [dashView, setDashView] = useState<'workforce' | 'progress'>('workforce');

  const filteredLogs = WORKER_LOGS.filter(log => {
    const matchesSearch = log.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          log.badge.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesContractor = filterContractor === "all" || log.contractor === filterContractor;
    return matchesSearch && matchesContractor;
  });

  return (
    <section id="dashboard" className="bg-background-light py-32 border-b border-industrial-silver relative overflow-hidden industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="border-l-4 border-industrial-dark pl-4 md:pl-6 max-w-3xl mb-16">
          <span className="font-technical text-xs text-industrial-slate uppercase tracking-widest font-bold block">
            [ OPERATIONAL COMMAND CENTER ]
          </span>
          <h2 className="font-technical text-3xl md:text-4xl font-bold uppercase tracking-tight text-industrial-dark mt-2">
            Central Site Operations Console
          </h2>
          <p className="mt-4 text-sm text-industrial-slate leading-relaxed font-sans">
            Real-time visibility into workforce operations, contractor coordination, and site performance — all from one unified command center.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-0 border border-industrial-slate rounded-sm overflow-hidden max-w-fit">
          <button
            onClick={() => setDashView('workforce')}
            className={`px-6 py-3 font-technical text-xs uppercase tracking-widest border-r border-industrial-slate transition-all ${
              dashView === 'workforce' 
                ? 'bg-industrial-dark text-industrial-lime' 
                : 'bg-white text-industrial-slate hover:bg-industrial-silver/10'
            }`}
          >
            Workforce Operations
          </button>
          <button
            onClick={() => setDashView('progress')}
            className={`px-6 py-3 font-technical text-xs uppercase tracking-widest transition-all ${
              dashView === 'progress' 
                ? 'bg-industrial-dark text-industrial-lime' 
                : 'bg-white text-industrial-slate hover:bg-industrial-silver/10'
            }`}
          >
            Progress Intelligence
          </button>
        </div>

        <AnimatePresence mode="wait">

          {/* WORKFORCE VIEW */}
          {dashView === 'workforce' && (
            <motion.div
              key="workforce"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* HIGH FIDELITY DASHBOARD WRAPPER */}
              <div className="mt-16 bg-industrial-dark border border-industrial-slate rounded-sm shadow-2xl overflow-hidden corner-brackets text-white">
                
                {/* Main Dashboard Header */}
                <div className="bg-industrial-slate/50 border-b border-industrial-slate px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-industrial-dark border border-industrial-lime flex items-center justify-center rounded-xs">
                      <Terminal className="w-6 h-6 text-industrial-lime" />
                    </div>
                    <div>
                      <span className="font-technical text-[10px] uppercase tracking-widest text-industrial-lime font-bold">OPERATIONAL COMMAND CENTER</span>
                      <h3 className="font-technical text-base font-bold uppercase tracking-wider text-white">Workforce Operations Console</h3>
                    </div>
                  </div>

                  {/* Quick telemetry indicators */}
                  <div className="flex flex-wrap items-center gap-4 text-[10px] font-technical text-industrial-silver">
                    <div className="flex items-center gap-2 bg-industrial-dark px-3 py-1.5 border border-industrial-slate rounded-xs">
                      <span className="w-2 h-2 bg-feedback-success rounded-full status-active" />
                      <span>LIVE FEEDS ACTIVE</span>
                    </div>
                    <div className="flex items-center gap-2 bg-industrial-dark px-3 py-1.5 border border-industrial-slate rounded-xs">
                      <span className="w-2 h-2 bg-feedback-success rounded-full status-active" />
                      <span>SYSTEM ONLINE</span>
                    </div>
                  </div>
                </div>

                {/* Top Level Metric Widgets */}
                <div className="grid grid-cols-1 md:grid-cols-4 border-b border-industrial-slate/50">
                  
                  <div className="p-8 border-b md:border-b-0 md:border-r border-industrial-slate/50 bg-industrial-dark/45">
                    <div className="flex items-center justify-between text-industrial-silver">
                      <span className="text-xs font-technical uppercase tracking-wider">Active Workforce</span>
                      <Users className="w-5 h-5 text-industrial-lime" />
                    </div>
                    <span className="text-4xl font-technical font-bold text-white mt-3 block tracking-tight">1,483</span>
                    <span className="text-xs font-mono text-feedback-success block mt-2">Live Across All Sites</span>
                  </div>

                  <div className="p-8 border-b md:border-b-0 md:border-r border-industrial-slate/50 bg-industrial-dark/45">
                    <div className="flex items-center justify-between text-industrial-silver">
                      <span className="text-xs font-technical uppercase tracking-wider">Contractors</span>
                      <HardHat className="w-5 h-5 text-industrial-silver" />
                    </div>
                    <span className="text-4xl font-technical font-bold text-white mt-3 block tracking-tight">12</span>
                    <span className="text-xs font-mono text-industrial-silver block mt-2">Unified Platform</span>
                  </div>

                  <div className="p-8 border-b md:border-b-0 md:border-r border-industrial-slate/50 bg-industrial-dark/45">
                    <div className="flex items-center justify-between text-industrial-silver">
                      <span className="text-xs font-technical uppercase tracking-wider">Compliance</span>
                      <ShieldCheck className="w-5 h-5 text-feedback-success" />
                    </div>
                    <span className="text-4xl font-technical font-bold text-feedback-success mt-3 block tracking-tight">99.85%</span>
                    <span className="text-xs font-mono text-feedback-success block mt-2">All Zones Verified</span>
                  </div>

                  <div className="p-8 bg-industrial-dark/45">
                    <div className="flex items-center justify-between text-industrial-silver">
                      <span className="text-xs font-technical uppercase tracking-wider">Risk Level</span>
                      <Activity className="w-5 h-5 text-feedback-warning" />
                    </div>
                    <span className="text-4xl font-technical font-bold text-feedback-warning mt-3 block tracking-tight">Low</span>
                    <span className="text-xs font-mono text-feedback-success block mt-2">Operational Stability</span>
                  </div>

                </div>

                {/* MAIN DOCK: Site Distribution & Active Logs */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* LEFT DOCK: Site Distribution (col-span-4) */}
                  <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-industrial-slate/50 p-8 bg-industrial-dark/60">
                    <span className="font-technical text-xs text-industrial-lime tracking-widest font-bold block mb-6">
                      SITE DISTRIBUTION
                    </span>

                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between text-xs text-industrial-silver mb-2">
                          <span>Refinery Shutdown</span>
                          <span className="text-white font-bold">582 Workers</span>
                        </div>
                        <div className="w-full bg-industrial-dark h-3 border border-industrial-slate/70 rounded-xs overflow-hidden">
                          <div className="bg-industrial-lime h-full" style={{ width: "80%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-industrial-silver mb-2">
                          <span>Fabrication Yard</span>
                          <span className="text-white font-bold">420 Workers</span>
                        </div>
                        <div className="w-full bg-industrial-dark h-3 border border-industrial-slate/70 rounded-xs overflow-hidden">
                          <div className="bg-industrial-lime h-full" style={{ width: "65%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-industrial-silver mb-2">
                          <span>Marine Jetty</span>
                          <span className="text-white font-bold">301 Workers</span>
                        </div>
                        <div className="w-full bg-industrial-dark h-3 border border-industrial-slate/70 rounded-xs overflow-hidden">
                          <div className="bg-industrial-lime h-full" style={{ width: "45%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-industrial-silver mb-2">
                          <span>Utility Infrastructure</span>
                          <span className="text-white font-bold">180 Workers</span>
                        </div>
                        <div className="w-full bg-industrial-dark h-3 border border-industrial-slate/70 rounded-xs overflow-hidden">
                          <div className="bg-industrial-lime h-full" style={{ width: "30%" }} />
                        </div>
                      </div>
                    </div>

                    {/* Attendance Visualizer mini graph */}
                    <div className="mt-10 pt-8 border-t border-industrial-slate/40">
                      <span className="font-technical text-xs text-industrial-silver tracking-widest font-bold block mb-6">
                        WEEKLY ATTENDANCE
                      </span>

                      <div className="flex items-end justify-between h-24 pt-2 font-mono text-[10px] text-industrial-silver">
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <div className="w-6 bg-industrial-slate/60 hover:bg-industrial-lime h-20 rounded-xs transition-colors" />
                          <span>MON</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <div className="w-6 bg-industrial-slate/60 hover:bg-industrial-lime h-16 rounded-xs transition-colors" />
                          <span>TUE</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <div className="w-6 bg-industrial-slate/60 hover:bg-industrial-lime h-18 rounded-xs transition-colors" />
                          <span>WED</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <div className="w-6 bg-industrial-slate/60 hover:bg-industrial-lime h-20 rounded-xs transition-colors" />
                          <span>THU</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <div className="w-6 bg-industrial-lime h-20 rounded-xs transition-colors" />
                          <span className="text-industrial-lime">FRI</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* RIGHT DOCK: Interactive Live Access Logs Table (col-span-8) */}
                  <div className="lg:col-span-8 p-8 bg-industrial-dark/40 flex flex-col justify-between">
                    
                    <div>
                      {/* Search & Filters */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-industrial-slate/40 pb-6 mb-6">
                        <span className="font-technical text-xs text-industrial-lime tracking-widest font-bold block">
                          LIVE WORKFORCE ACCESS
                        </span>

                        <div className="flex items-center gap-3">
                          {/* Search Field */}
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Search Worker/Badge..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="bg-industrial-dark border border-industrial-slate pl-10 pr-4 py-2 rounded-sm text-sm focus:outline-none focus:border-industrial-lime font-sans w-48"
                            />
                            <Search className="w-4 h-4 text-industrial-silver absolute left-3 top-2.5" />
                          </div>

                          {/* Contractor Filter Dropdown */}
                          <div className="relative">
                            <select
                              value={filterContractor}
                              onChange={(e) => setFilterContractor(e.target.value)}
                              className="bg-industrial-dark border border-industrial-slate px-4 py-2 pr-10 rounded-sm text-sm focus:outline-none focus:border-industrial-lime font-sans appearance-none"
                            >
                              <option value="all">All Contractors</option>
                              <option value="L&T Engineering">L&T Engineering</option>
                              <option value="KBR Heavy Fab">KBR Heavy Fab</option>
                              <option value="Hansa Fab">Hansa Fab</option>
                              <option value="Sinohydro">Sinohydro</option>
                            </select>
                            <Filter className="w-4 h-4 text-industrial-silver absolute right-3 top-2.5 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* ACCESS LOGS TABLE */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left font-sans text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-industrial-slate text-xs font-mono text-industrial-silver uppercase tracking-wider">
                              <th className="py-3 font-normal">Worker / Badge</th>
                              <th className="py-3 font-normal">Contractor</th>
                              <th className="py-3 font-normal">Access Zone</th>
                              <th className="py-3 font-normal">Timestamp</th>
                              <th className="py-3 font-normal text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-industrial-slate/30">
                            {filteredLogs.length > 0 ? (
                              filteredLogs.map((log, idx) => (
                                <tr key={idx} className="hover:bg-industrial-slate/20 transition-colors">
                                  <td className="py-4">
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 bg-industrial-slate/40 border border-industrial-slate rounded-xs flex items-center justify-center flex-shrink-0">
                                        <HardHat className="w-4 h-4 text-industrial-silver" />
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="font-semibold text-white leading-tight">{log.name}</span>
                                        <span className="text-xs text-industrial-silver font-mono leading-none mt-0.5">{log.badge}</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="py-4 text-industrial-silver">{log.contractor}</td>
                                  <td className="py-4">
                                    <div className="flex items-center gap-2 text-sm text-industrial-silver">
                                      <MapPin className="w-4 h-4 text-industrial-silver flex-shrink-0" />
                                      <span>{log.zone}</span>
                                    </div>
                                  </td>
                                  <td className="py-4 font-mono text-sm text-industrial-silver">
                                    <div className="flex items-center gap-2">
                                      <Clock className="w-4 h-4 text-industrial-silver flex-shrink-0" />
                                      <span>{log.time}</span>
                                    </div>
                                  </td>
                                  <td className="py-4 text-right">
                                    {log.type === "in" && (
                                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-feedback-success bg-feedback-success/15 border border-feedback-success/30 px-2 py-1 rounded-xs font-bold uppercase">
                                        ✓ APPROVED
                                      </span>
                                    )}
                                    {log.type === "bypass" && (
                                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-feedback-warning bg-feedback-warning/15 border border-feedback-warning/30 px-2 py-1 rounded-xs font-bold uppercase">
                                        ▲ OVERRIDE
                                      </span>
                                    )}
                                    {log.type === "hold" && (
                                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-feedback-error bg-feedback-error/15 border border-feedback-error/30 px-2 py-1 rounded-xs font-bold uppercase">
                                        🛇 LOCK_HOLD
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan={5} className="py-8 text-center text-industrial-silver font-mono text-sm">
                                  NO MATCHING TELEMETRY RECORDS FOUND IN CORE BUFFER
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Table Footer Summary Alert */}
                    <div className="mt-8 bg-industrial-dark border border-industrial-slate p-4 rounded-xs flex items-center gap-3 text-sm font-sans text-industrial-silver">
                      <AlertOctagon className="w-5 h-5 text-feedback-warning flex-shrink-0" />
                      <span>
                        <strong>Supervisor Override:</strong> Contractor Akram Al-Khouri check-in approved via Gate G-02 override by Lead Engineer M. Solanki (Token ID: APV-8830).
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* PROGRESS VIEW */}
          {dashView === 'progress' && (
            <motion.div
              key="progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mt-16 bg-industrial-dark border border-industrial-slate rounded-sm shadow-2xl overflow-hidden corner-brackets text-white">

                {/* Progress Console Header */}
                <div className="bg-industrial-slate/50 border-b border-industrial-slate px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-industrial-dark border border-industrial-lime flex items-center justify-center rounded-xs">
                      <Terminal className="w-6 h-6 text-industrial-lime" />
                    </div>
                    <div>
                      <span className="font-technical text-[10px] uppercase tracking-widest text-industrial-lime font-bold">PEC PETROCHEM ENGINEERING CONSTRUCTION</span>
                      <h3 className="font-technical text-base font-bold uppercase tracking-wider text-white">Progress Intelligence Console</h3>
                    </div>
                  </div>

                  {/* Status indicators */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-technical text-industrial-silver">
                    <div className="flex items-center gap-2 bg-industrial-dark px-3 py-1.5 border border-industrial-slate rounded-xs">
                      <span className="w-2 h-2 bg-feedback-success rounded-full status-active" />
                      <span>LIVE EXTRACTION ACTIVE</span>
                    </div>
                    <div className="flex items-center gap-2 bg-industrial-dark px-3 py-1.5 border border-industrial-slate rounded-xs">
                      <span className="w-2 h-2 bg-feedback-success rounded-full status-active" />
                      <span>AI SYNC ONLINE</span>
                    </div>
                  </div>
                </div>

                {/* Top Metrics — 4 cols */}
                <div className="grid grid-cols-1 md:grid-cols-4 border-b border-industrial-slate/50">

                  <div className="p-8 border-b md:border-b-0 md:border-r border-industrial-slate/50 bg-industrial-dark/45">
                    <div className="flex items-center justify-between text-industrial-silver">
                      <span className="text-xs font-technical uppercase tracking-wider">FITUP ID TOTAL</span>
                      <BarChart3 className="w-5 h-5 text-industrial-lime" />
                    </div>
                    <span className="text-4xl font-technical font-bold text-industrial-lime mt-3 block tracking-tight">842.5</span>
                    <span className="text-xs font-mono text-feedback-success block mt-2">▲ +38.5 TODAY</span>
                  </div>

                  <div className="p-8 border-b md:border-b-0 md:border-r border-industrial-slate/50 bg-industrial-dark/45">
                    <div className="flex items-center justify-between text-industrial-silver">
                      <span className="text-xs font-technical uppercase tracking-wider">WELDING ID TOTAL</span>
                      <BarChart3 className="w-5 h-5 text-industrial-lime" />
                    </div>
                    <span className="text-4xl font-technical font-bold text-industrial-lime mt-3 block tracking-tight">620.0</span>
                    <span className="text-xs font-mono text-feedback-success block mt-2">▲ +24.0 TODAY</span>
                  </div>

                  <div className="p-8 border-b md:border-b-0 md:border-r border-industrial-slate/50 bg-industrial-dark/45">
                    <div className="flex items-center justify-between text-industrial-silver">
                      <span className="text-xs font-technical uppercase tracking-wider">ERECTION IM</span>
                      <Activity className="w-5 h-5 text-industrial-silver" />
                    </div>
                    <span className="text-4xl font-technical font-bold text-white mt-3 block tracking-tight">184.3</span>
                    <span className="text-xs font-mono text-feedback-success block mt-2">▲ +12.0 TODAY</span>
                  </div>

                  <div className="p-8 bg-industrial-dark/45">
                    <div className="flex items-center justify-between text-industrial-silver">
                      <span className="text-xs font-technical uppercase tracking-wider">TODAY&apos;S DPRs</span>
                      <ShieldCheck className="w-5 h-5 text-feedback-success" />
                    </div>
                    <span className="text-4xl font-technical font-bold text-feedback-success mt-3 block tracking-tight">6</span>
                    <span className="text-xs font-mono text-feedback-success block mt-2">✓ ALL APPROVED</span>
                  </div>

                </div>

                {/* Main 2-col layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12">

                  {/* LEFT: Weekly Bar Chart */}
                  <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-industrial-slate/50 p-8 bg-industrial-dark/60">
                    <span className="font-technical text-xs text-industrial-lime tracking-widest font-bold block mb-8">
                      WEEKLY PIPING PROGRESS (ID)
                    </span>

                    <div className="flex items-end justify-between gap-4 font-mono text-xs text-industrial-silver" style={{ height: "18rem" }}>
                      {WEEKLY_BARS.map((bar, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                          <div
                            className="w-full bg-industrial-lime rounded-xs transition-all duration-300 hover:opacity-80"
                            style={{ height: bar.height }}
                          />
                          <span className={idx === WEEKLY_BARS.length - 1 ? "text-industrial-lime" : ""}>{bar.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT: Recent DPRs Table */}
                  <div className="lg:col-span-8 p-6 bg-industrial-dark/40 flex flex-col justify-between">

                    <div>
                      <div className="flex items-center justify-between border-b border-industrial-slate/40 pb-4 mb-4">
                        <span className="font-technical text-[10px] text-industrial-lime tracking-widest font-bold block">
                          RECENT DPR EXTRACTIONS
                        </span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left font-sans text-xs border-collapse">
                          <thead>
                            <tr className="border-b border-industrial-slate text-[9px] font-mono text-industrial-silver uppercase tracking-wider">
                              <th className="py-2.5 font-normal">Date</th>
                              <th className="py-2.5 font-normal">Supervisor</th>
                              <th className="py-2.5 font-normal">Spool</th>
                              <th className="py-2.5 font-normal">Activity</th>
                              <th className="py-2.5 font-normal">Inch Dia</th>
                              <th className="py-2.5 font-normal text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-industrial-slate/30">
                            {DPR_ROWS.map((row, idx) => (
                              <tr key={idx} className="hover:bg-industrial-slate/20 transition-colors">
                                <td className="py-3 font-mono text-[10px] text-industrial-silver">{row.date}</td>
                                <td className="py-3 text-white font-medium">{row.supervisor}</td>
                                <td className="py-3 font-mono text-[10px] text-industrial-silver">{row.spool}</td>
                                <td className="py-3 font-technical text-[10px] text-industrial-lime uppercase tracking-wide">{row.activity}</td>
                                <td className="py-3 font-mono text-[10px] text-industrial-silver">{row.unit}</td>
                                <td className="py-3 text-right">
                                  {row.approved ? (
                                    <span className="inline-flex items-center gap-1 text-[9px] font-mono text-feedback-success bg-feedback-success/15 border border-feedback-success/30 px-1.5 py-0.5 rounded-xs font-bold uppercase">
                                      ✓ APPROVED
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1 text-[9px] font-mono text-feedback-warning bg-feedback-warning/15 border border-feedback-warning/30 px-1.5 py-0.5 rounded-xs font-bold uppercase">
                                      ⚠ PENDING
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Bottom alert bar */}
                    <div className="mt-6 bg-industrial-dark border border-industrial-slate p-3 rounded-xs flex items-center gap-2 text-[10px] font-technical text-industrial-silver uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 bg-feedback-success rounded-full status-active flex-shrink-0" />
                      <span>LAST RECALCULATED: TODAY 09:47 · AI EXTRACTION ACTIVE · 0 PENDING DPRs</span>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
