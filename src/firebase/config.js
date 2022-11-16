import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwn4830eDCgt_1GWal3-MU7m6-a5SiPYg",
  authDomain: "miniblog-61ee7.firebaseapp.com",
  projectId: "miniblog-61ee7",
  storageBucket: "miniblog-61ee7.appspot.com",
  messagingSenderId: "43435750810",
  appId: "1:43435750810:web:b0cf0bc642143baaf4b623",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
