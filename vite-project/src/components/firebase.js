import { initializeApp} from "firebase/app";
import {gerAuth} from "firebaes/auth";
import {getFirestor} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApwVLSaACFonGmgtRBslnpzoWBCQVEpLc",
    authDomain: "ces-y-8e38d.firebaseapp.com",
    projectId: "ces-y-8e38d",
    storageBucket: "ces-y-8e38d.appspot.com",
    messagingSenderId: "942957494651",
    appId: "1:942957494651:web:9d103a051f92bebd433dde"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth=gerAuth();
  export const db=getFirestor(app);
  export default app;