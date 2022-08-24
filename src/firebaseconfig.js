import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7Ev_G4qVD2CEzlcXSU06iWExeuuEqc18",
  authDomain: "claudio-rodriguez.firebaseapp.com",
  projectId: "claudio-rodriguez",
  storageBucket: "claudio-rodriguez.appspot.com",
  messagingSenderId: "95777805376",
  appId: "1:95777805376:web:6c4b955458289c0ec0fba5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);
