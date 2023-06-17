
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDrRMIXV0hirrLgwGOkZRSxas4xuOBUMIE",
  authDomain: "pifront-80a91.firebaseapp.com",
  projectId: "pifront-80a91",
  storageBucket: "pifront-80a91.appspot.com",
  messagingSenderId: "823993883441",
  appId: "1:823993883441:web:b8a1ffb6c25fc271076e10",
  measurementId: "G-M4RKN2DGC3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);