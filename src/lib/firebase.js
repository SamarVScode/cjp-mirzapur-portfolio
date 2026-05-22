import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, query, orderBy, getCountFromServer } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDET1P-dd7aIZGZjzcnCdTGuPfDrSaB-NU",
  authDomain: "cjp-mirzapur.firebaseapp.com",
  projectId: "cjp-mirzapur",
  storageBucket: "cjp-mirzapur.firebasestorage.app",
  messagingSenderId: "835975351373",
  appId: "1:835975351373:web:69e7341a508fc911356004"
};

let db = null;
let isFirebaseEnabled = false;

// Only initialize Firebase if we are in a browser context and projectId is set
if (typeof window !== "undefined" && firebaseConfig.projectId) {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    isFirebaseEnabled = true;
    console.log("Firebase initialized successfully inside CJP Swarm App.");
  } catch (error) {
    console.warn("Failed to initialize Firebase:", error);
  }
} else {
  if (typeof window !== "undefined") {
    console.warn("Firebase credentials missing. Falling back to browser LocalStorage database.");
  }
}

export async function saveMemberToDb(memberData) {
  const payload = {
    name: memberData.name,
    email: memberData.email,
    phone: memberData.phone,
    memberId: memberData.memberId,
    district: "Mirzapur"
  };

  if (isFirebaseEnabled && db) {
    try {
      const docRef = await addDoc(collection(db, "members"), {
        ...payload,
        timestamp: serverTimestamp()
      });
      return { success: true, id: docRef.id, store: "firebase" };
    } catch (error) {
      console.error("Error saving member to Firestore, falling back to local storage:", error);
    }
  }
  
  // Local storage fallback
  try {
    const localMembers = JSON.parse(localStorage.getItem("cjp_members") || "[]");
    const newEntry = {
      ...payload,
      id: "local_" + Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toISOString()
    };
    localMembers.push(newEntry);
    localStorage.setItem("cjp_members", JSON.stringify(localMembers));
    return { success: true, id: newEntry.id, store: "local" };
  } catch (e) {
    console.error("Error saving locally:", e);
    return { success: false, error: e.message };
  }
}

export async function saveComplaintToDb(complaintData) {
  const payload = {
    name: complaintData.name,
    email: complaintData.email,
    complaint: complaintData.complaint,
    ticketId: complaintData.ticketId,
    district: "Mirzapur"
  };

  if (isFirebaseEnabled && db) {
    try {
      const docRef = await addDoc(collection(db, "complaints"), {
        ...payload,
        timestamp: serverTimestamp()
      });
      return { success: true, id: docRef.id, store: "firebase" };
    } catch (error) {
      console.error("Error saving complaint to Firestore, falling back to local storage:", error);
    }
  }
  
  // Local storage fallback
  try {
    const localComplaints = JSON.parse(localStorage.getItem("cjp_complaints") || "[]");
    const newEntry = {
      ...payload,
      id: "local_" + Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toISOString()
    };
    localComplaints.push(newEntry);
    localStorage.setItem("cjp_complaints", JSON.stringify(localComplaints));
    return { success: true, id: newEntry.id, store: "local" };
  } catch (e) {
    console.error("Error saving complaint locally:", e);
    return { success: false, error: e.message };
  }
}

export async function saveComplaint(name, email, complaint) {
  const ticketId = `CJP-COMP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  return saveComplaintToDb({ name, email, complaint, ticketId });
}

export async function fetchComplaints() {
  if (isFirebaseEnabled && db) {
    try {
      const q = query(collection(db, "complaints"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const complaints = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        complaints.push({
          id: doc.id,
          name: data.name,
          email: data.email,
          complaint: data.complaint,
          ticketId: data.ticketId || "",
          district: data.district || "Mirzapur",
          createdAt: data.timestamp ? data.timestamp.toDate().toISOString() : new Date().toISOString()
        });
      });
      return complaints;
    } catch (error) {
      console.error("Error fetching complaints from Firestore:", error);
    }
  }

  // Fallback to local storage
  try {
    const localComplaints = JSON.parse(localStorage.getItem("cjp_complaints") || "[]");
    return localComplaints
      .map(c => ({
        ...c,
        createdAt: c.timestamp || new Date().toISOString()
      }))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (e) {
    console.error("Error reading local complaints:", e);
    return [];
  }
}

export async function fetchStats() {
  let memberCount = 0;
  let complaintCount = 0;

  if (isFirebaseEnabled && db) {
    try {
      const membersColl = collection(db, "members");
      const membersSnapshot = await getCountFromServer(membersColl);
      memberCount = membersSnapshot.data().count;

      const complaintsColl = collection(db, "complaints");
      const complaintsSnapshot = await getCountFromServer(complaintsColl);
      complaintCount = complaintsSnapshot.data().count;

      return { memberCount, complaintCount };
    } catch (error) {
      console.error("Error fetching stats from Firestore:", error);
    }
  }

  // Local storage fallback with seed numbers
  try {
    const localMembers = JSON.parse(localStorage.getItem("cjp_members") || "[]");
    const localComplaints = JSON.parse(localStorage.getItem("cjp_complaints") || "[]");
    
    const baseMemberCount = 1342;
    const baseComplaintCount = 412;
    
    return {
      memberCount: baseMemberCount + localMembers.length,
      complaintCount: baseComplaintCount + localComplaints.length
    };
  } catch (e) {
    console.error("Error reading local stats:", e);
    return { memberCount: 1342, complaintCount: 412 };
  }
}

