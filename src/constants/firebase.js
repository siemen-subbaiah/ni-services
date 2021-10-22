import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCBMvMCcorZjdl9AkR-nvNkz58w_UorVKA",
  authDomain: "ni-services.firebaseapp.com",
  projectId: "ni-services",
  storageBucket: "ni-services.appspot.com",
  messagingSenderId: "223370895298",
  appId: "1:223370895298:web:e82a8049a83573e4c8005b",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
