import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHzBdcQAn3DRWMN5TyQNNdjIgnCj73Np0",
  authDomain: "wikimemia.firebaseapp.com",
  projectId: "wikimemia",
  storageBucket: "wikimemia.appspot.com",
  messagingSenderId: "1057972260128",
  appId: "1:1057972260128:web:6e2926dfc62348f5d71b45",
  measurementId: "G-8CYWBWSS1E",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
