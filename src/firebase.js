import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCptko67v2nmnXovoL-VBtsJGGufCb7r1I",
    authDomain: "ecommerce-dev-67378.firebaseapp.com",
    projectId: "ecommerce-dev-67378",
    storageBucket: "ecommerce-dev-67378.appspot.com",
    messagingSenderId: "764399757815",
    appId: "1:764399757815:web:90072e8190e1a8aebb66f2",
    measurementId: "G-24TGN33CS9"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };