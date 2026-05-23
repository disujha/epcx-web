import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, Firestore, getDocs, query, where, updateDoc, doc, orderBy } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyD_NPXnMtm5WZRB0ZSuHP8NZGR0gvogG5o",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "epcxsite.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "epcxsite",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "epcxsite.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "504230716580",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:504230716580:web:e842920275eb9334c83231",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-ZZ0EHQ8YVP",
};

let app;
let db: Firestore | null = null;

try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
} catch (error) {
  console.error('Firebase initialization failed:', error);
}

export { db };

// Enhanced Deployment Request Interface
export interface DeploymentRequest {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectType: string;
  workforceSize: string;
  message?: string;
  preferredContactMethod: 'email' | 'phone' | 'whatsapp';
  currentSystem?: string;
  deploymentTimeline?: string;
  createdAt?: unknown;
  status: 'new' | 'contacted' | 'demo_scheduled' | 'pilot_running' | 'converted';
  whatsappOptIn?: boolean;
}

// Save deployment request to Firestore
export async function saveDeploymentRequest(request: Omit<DeploymentRequest, 'status' | 'createdAt'>): Promise<{ success: boolean; id: string; error?: string }> {
  const requestData: DeploymentRequest = {
    ...request,
    status: 'new',
  };

  if (!db) {
    return { success: false, id: '', error: 'Firebase not initialized' };
  }

  try {
    const requestsCol = collection(db, 'deployment_requests');
    const docRef = await addDoc(requestsCol, {
      ...requestData,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Firestore save failed:', error);
    return { success: false, id: '', error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Get all deployment requests (for admin dashboard)
export async function getDeploymentRequests(): Promise<(DeploymentRequest & { id: string })[]> {
  if (!db) return [];

  try {
    const requestsCol = collection(db, 'deployment_requests');
    const q = query(requestsCol, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    } as DeploymentRequest & { id: string }));
  } catch (error) {
    console.error('Failed to fetch deployment requests:', error);
    return [];
  }
}

// Update deployment request status
export async function updateDeploymentRequestStatus(id: string, status: DeploymentRequest['status']): Promise<boolean> {
  if (!db) return false;

  try {
    const docRef = doc(db, 'deployment_requests', id);
    await updateDoc(docRef, { status });
    return true;
  } catch (error) {
    console.error('Failed to update status:', error);
    return false;
  }
}

// Filter deployment requests by status
export async function getDeploymentRequestsByStatus(status: DeploymentRequest['status']): Promise<(DeploymentRequest & { id: string })[]> {
  if (!db) return [];

  try {
    const requestsCol = collection(db, 'deployment_requests');
    const q = query(requestsCol, where('status', '==', status), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    } as DeploymentRequest & { id: string }));
  } catch (error) {
    console.error('Failed to fetch deployment requests by status:', error);
    return [];
  }
}
