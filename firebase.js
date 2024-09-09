// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPrr9wBV25zJeOE5YLw-6i2ilPhfh-zRs",
  authDomain: "script-up-d3da8.firebaseapp.com",
  projectId: "script-up-d3da8",
  storageBucket: "script-up-d3da8.appspot.com",
  messagingSenderId: "53768269746",
  appId: "1:53768269746:web:49b26d584045edb05cfeab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;
export {auth};
