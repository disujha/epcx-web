"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  getDeploymentRequests, 
  updateDeploymentRequestStatus, 
  DeploymentRequest 
} from "@/lib/firebase";
import { 
  verifyAdminPassword, 
  setAdminSession, 
  getAdminSession, 
  clearAdminSession 
} from "@/lib/auth";
import { 
  Shield, ArrowLeft, Download, RefreshCw, 
  Calendar, Phone, Mail, Building2,
  Users, MessageSquare, MoreVertical, Search, Lock, LogOut
} from "lucide-react";

const STATUS_CONFIG = {
  new: { label: "New", color: "bg-industrial-lime", textColor: "text-industrial-dark" },
  contacted: { label: "Contacted", color: "bg-blue-500", textColor: "text-white" },
  demo_scheduled: { label: "Demo Scheduled", color: "bg-purple-500", textColor: "text-white" },
  pilot_running: { label: "Pilot Running", color: "bg-orange-500", textColor: "text-white" },
  converted: { label: "Converted", color: "bg-feedback-success", textColor: "text-white" },
};

export default function AdminLeadsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [leads, setLeads] = useState<(DeploymentRequest & { id: string })[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<(DeploymentRequest & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLead, setSelectedLead] = useState<(DeploymentRequest & { id: string }) | null>(null);

  useEffect(() => {
    // Check if user is already authenticated
    if (getAdminSession()) {
      setIsAuthenticated(true);
      loadLeads();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyAdminPassword(password)) {
      setAdminSession();
      setIsAuthenticated(true);
      loadLeads();
    } else {
      setAuthError("Invalid password");
    }
  };

  const handleLogout = () => {
    clearAdminSession();
    setIsAuthenticated(false);
    setPassword("");
    setLeads([]);
    setFilteredLeads([]);
  };

  useEffect(() => {
    let filtered = leads;

    if (statusFilter !== "all") {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(query) ||
        lead.company.toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query) ||
        lead.phone.includes(query)
      );
    }

    setFilteredLeads(filtered);
  }, [leads, statusFilter, searchQuery]);

  const loadLeads = async () => {
    setLoading(true);
    try {
      const data = await getDeploymentRequests();
      setLeads(data);
    } catch (error) {
      console.error("Failed to load leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (leadId: string, newStatus: DeploymentRequest['status']) => {
    try {
      const success = await updateDeploymentRequestStatus(leadId, newStatus);
      if (success) {
        setLeads(prev => prev.map(lead => 
          lead.id === leadId ? { ...lead, status: newStatus } : lead
        ));
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const formatDate = (timestamp: unknown) => {
    if (!timestamp) return "N/A";
    const date = timestamp instanceof Date ? timestamp : new Date(timestamp as string);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusCount = (status: string) => {
    return leads.filter(lead => lead.status === status).length;
  };

  return (
    <div className="min-h-screen bg-background-light">
      {!isAuthenticated ? (
        /* Login Screen */
        <div className="min-h-screen flex items-center justify-center bg-industrial-dark">
          <div className="bg-industrial-slate/30 border border-industrial-slate p-8 rounded-sm max-w-md w-full mx-4">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-industrial-lime" />
              <h1 className="text-2xl font-technical font-bold uppercase tracking-tight text-white">
                Admin Access
              </h1>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-[10px] font-technical uppercase text-industrial-silver tracking-wider mb-2 font-bold">
                  Admin Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full bg-industrial-dark border border-industrial-slate text-white px-4 py-3 rounded-sm focus:outline-none focus:border-industrial-lime"
                />
                {authError && (
                  <p className="text-feedback-error text-[10px] font-mono mt-2">{authError}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-industrial-lime text-industrial-dark font-technical font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-industrial-lime border border-industrial-lime transition-all duration-300 rounded-sm flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="bg-industrial-dark text-white border-b border-industrial-slate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Link href="/" className="flex items-center gap-2 text-industrial-silver hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm font-technical uppercase tracking-wider">Back to Site</span>
                  </Link>
                  <div className="h-6 w-px bg-industrial-slate" />
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-industrial-lime" />
                    <h1 className="text-xl font-technical font-bold uppercase tracking-tight">
                      Admin Dashboard
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={loadLeads}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-industrial-slate/50 border border-industrial-slate rounded-sm hover:bg-industrial-slate/30 transition-colors disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    <span className="text-xs font-technical uppercase tracking-wider">Refresh</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-feedback-error/20 border border-feedback-error/50 rounded-sm hover:bg-feedback-error/30 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-xs font-technical uppercase tracking-wider">Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {Object.entries(STATUS_CONFIG).map(([status, config]) => (
            <div
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`p-4 border rounded-sm cursor-pointer transition-all ${
                statusFilter === status
                  ? "border-industrial-lime bg-industrial-lime/5"
                  : "border-industrial-slate bg-white hover:border-industrial-slate/60"
              }`}
            >
              <div className={`text-2xl font-bold font-technical ${config.textColor}`}>
                {getStatusCount(status)}
              </div>
              <div className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate mt-1">
                {config.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white border border-industrial-slate rounded-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-industrial-slate" />
                <input
                  type="text"
                  placeholder="Search by name, company, email, or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-industrial-dark/5 border border-industrial-slate rounded-sm text-sm focus:outline-none focus:border-industrial-lime"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-industrial-dark/5 border border-industrial-slate rounded-sm text-sm focus:outline-none focus:border-industrial-lime"
              >
                <option value="all">All Statuses</option>
                {Object.entries(STATUS_CONFIG).map(([status, config]) => (
                  <option key={status} value={status}>
                    {config.label} ({getStatusCount(status)})
                  </option>
                ))}
              </select>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-industrial-dark text-white border border-industrial-slate rounded-sm hover:bg-industrial-slate/30 transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-xs font-technical uppercase tracking-wider">Export CSV</span>
            </button>
          </div>
        </div>

        {/* Leads Table */}
        {loading ? (
          <div className="bg-white border border-industrial-slate rounded-sm p-12 text-center">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-industrial-lime mb-4" />
            <p className="text-sm text-industrial-slate font-technical uppercase tracking-wider">
              Loading deployment requests...
            </p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="bg-white border border-industrial-slate rounded-sm p-12 text-center">
            <p className="text-sm text-industrial-slate font-technical uppercase tracking-wider">
              No deployment requests found
            </p>
          </div>
        ) : (
          <div className="bg-white border border-industrial-slate rounded-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-industrial-dark text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-[10px] font-technical uppercase tracking-wider font-bold">
                      Company / Name
                    </th>
                    <th className="px-4 py-3 text-left text-[10px] font-technical uppercase tracking-wider font-bold">
                      Contact
                    </th>
                    <th className="px-4 py-3 text-left text-[10px] font-technical uppercase tracking-wider font-bold">
                      Project Details
                    </th>
                    <th className="px-4 py-3 text-left text-[10px] font-technical uppercase tracking-wider font-bold">
                      Timeline
                    </th>
                    <th className="px-4 py-3 text-left text-[10px] font-technical uppercase tracking-wider font-bold">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-[10px] font-technical uppercase tracking-wider font-bold">
                      Submitted
                    </th>
                    <th className="px-4 py-3 text-left text-[10px] font-technical uppercase tracking-wider font-bold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-industrial-slate">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-industrial-lime/5 transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-industrial-dark/10 rounded-full flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-industrial-slate" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-industrial-dark">{lead.company}</div>
                            <div className="text-xs text-industrial-slate">{lead.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-industrial-dark">
                            <Mail className="w-3.5 h-3.5 text-industrial-slate" />
                            <a href={`mailto:${lead.email}`} className="hover:text-industrial-lime transition-colors">
                              {lead.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-industrial-dark">
                            <Phone className="w-3.5 h-3.5 text-industrial-slate" />
                            <a href={`tel:${lead.phone}`} className="hover:text-industrial-lime transition-colors">
                              {lead.phone}
                            </a>
                          </div>
                          {lead.preferredContactMethod && (
                            <div className="flex items-center gap-1 text-[10px] text-industrial-slate">
                              {lead.preferredContactMethod === 'whatsapp' && <MessageSquare className="w-3 h-3" />}
                              <span className="capitalize">{lead.preferredContactMethod}</span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="space-y-1">
                          <div className="text-xs text-industrial-dark">{lead.projectType}</div>
                          <div className="flex items-center gap-1 text-[10px] text-industrial-slate">
                            <Users className="w-3 h-3" />
                            <span>{lead.workforceSize}</span>
                          </div>
                          {lead.currentSystem && (
                            <div className="text-[10px] text-industrial-slate truncate max-w-[150px]">
                              Current: {lead.currentSystem}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-xs text-industrial-dark">
                          {lead.deploymentTimeline || "Not specified"}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as DeploymentRequest['status'])}
                          className={`px-3 py-1.5 text-[10px] font-technical uppercase tracking-wider font-bold rounded-sm border focus:outline-none focus:ring-2 focus:ring-industrial-lime ${STATUS_CONFIG[lead.status].color} ${STATUS_CONFIG[lead.status].textColor}`}
                        >
                          {Object.entries(STATUS_CONFIG).map(([status, config]) => (
                            <option key={status} value={status}>
                              {config.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1 text-xs text-industrial-slate">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{formatDate(lead.createdAt)}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="p-2 hover:bg-industrial-dark/5 rounded-sm transition-colors"
                        >
                          <MoreVertical className="w-4 h-4 text-industrial-slate" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-industrial-slate rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-industrial-slate">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-technical font-bold uppercase tracking-tight text-industrial-dark">
                  Lead Details
                </h2>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-2 hover:bg-industrial-dark/5 rounded-sm transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                    Name
                  </label>
                  <div className="text-sm text-industrial-dark">{selectedLead.name}</div>
                </div>
                <div>
                  <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                    Company
                  </label>
                  <div className="text-sm text-industrial-dark">{selectedLead.company}</div>
                </div>
                <div>
                  <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                    Email
                  </label>
                  <a href={`mailto:${selectedLead.email}`} className="text-sm text-industrial-lime hover:underline">
                    {selectedLead.email}
                  </a>
                </div>
                <div>
                  <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                    Phone
                  </label>
                  <a href={`tel:${selectedLead.phone}`} className="text-sm text-industrial-lime hover:underline">
                    {selectedLead.phone}
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                    Project Type
                  </label>
                  <div className="text-sm text-industrial-dark">{selectedLead.projectType}</div>
                </div>
                <div>
                  <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                    Workforce Size
                  </label>
                  <div className="text-sm text-industrial-dark">{selectedLead.workforceSize}</div>
                </div>
              </div>

              {selectedLead.currentSystem && (
                <div>
                  <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                    Current System
                  </label>
                  <div className="text-sm text-industrial-dark">{selectedLead.currentSystem}</div>
                </div>
              )}

              {selectedLead.deploymentTimeline && (
                <div>
                  <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                    Deployment Timeline
                  </label>
                  <div className="text-sm text-industrial-dark">{selectedLead.deploymentTimeline}</div>
                </div>
              )}

              {selectedLead.message && (
                <div>
                  <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                    Message
                  </label>
                  <div className="text-sm text-industrial-dark bg-industrial-dark/5 p-3 rounded-sm">
                    {selectedLead.message}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="text-sm text-industrial-dark capitalize">{selectedLead.preferredContactMethod}</div>
                </div>
                <div>
                  <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                    WhatsApp Opt-in
                  </label>
                  <div className="text-sm text-industrial-dark">
                    {selectedLead.whatsappOptIn ? "Yes" : "No"}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-technical uppercase tracking-wider text-industrial-slate block mb-1">
                  Submitted At
                </label>
                <div className="text-sm text-industrial-dark">{formatDate(selectedLead.createdAt)}</div>
              </div>
            </div>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
}
