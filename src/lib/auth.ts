// Simple admin authentication using environment variables
// In production, this should be replaced with a proper auth system like Firebase Auth

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "epcx_admin_2026";

export function verifyAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function setAdminSession(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('admin_session', 'true');
    localStorage.setItem('admin_session_timestamp', Date.now().toString());
  }
}

export function getAdminSession(): boolean {
  if (typeof window === 'undefined') return false;
  
  const session = localStorage.getItem('admin_session');
  const timestamp = localStorage.getItem('admin_session_timestamp');
  
  if (!session || !timestamp) return false;
  
  // Session expires after 24 hours
  const sessionAge = Date.now() - parseInt(timestamp);
  const maxAge = 24 * 60 * 60 * 1000; // 24 hours
  
  if (sessionAge > maxAge) {
    clearAdminSession();
    return false;
  }
  
  return session === 'true';
}

export function clearAdminSession(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('admin_session');
    localStorage.removeItem('admin_session_timestamp');
  }
}
