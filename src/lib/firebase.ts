import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer, collection, addDoc, query, where, getDocs, onSnapshot, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        console.error("Error signing in with Google:", error);
        throw error;
    }
};

export const signOutUser = () => auth.signOut();

// Connection Test
export async function testConnection() {
  try {
    // Attempting to read a non-existent doc to trigger connection check
    await getDocFromServer(doc(db, 'test_connection', 'ping'));
    console.log("Firebase connection established.");
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration or internet connection.");
    }
  }
}

testConnection();

// Validation Helper for App Code (mirroring rules)
export const handleFirestoreError = (error: any, operationType: 'create' | 'update' | 'delete' | 'list' | 'get' | 'write', path: string | null = null) => {
    if (error.code === 'permission-denied') {
        const currentUser = auth.currentUser;
        const errorInfo = {
            error: error.message,
            operationType,
            path,
            authInfo: {
                userId: currentUser?.uid || 'anonymous',
                email: currentUser?.email || 'none',
                emailVerified: currentUser?.emailVerified || false,
                isAnonymous: currentUser?.isAnonymous || true,
                providerInfo: currentUser?.providerData.map(p => ({
                    providerId: p.providerId,
                    displayName: p.displayName || '',
                    email: p.email || ''
                })) || []
            }
        };
        throw new Error(JSON.stringify(errorInfo));
    }
    throw error;
};
