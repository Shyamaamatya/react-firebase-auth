import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import firebaseConfig from "./firebaseConfig"

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID
// };

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app)
export const auth = getAuth(app) //auth instance
console.log("auth",auth);
export default app