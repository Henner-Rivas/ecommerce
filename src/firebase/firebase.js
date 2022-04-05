
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import {getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    getBytes
} from 'firebase/storage'
import {getFirestore,collection,addDoc,getDoc,doc,query,where,getDocs,setDoc,deleteDoc } from 'firebase/firestore'


export  const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN,
  projectId:process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID ,
  appId:process.env.REACT_APP_APPID 
};

export const app = initializeApp(firebaseConfig);
export  const auth= getAuth(app)
const db= getFirestore(app)
const storage=getStorage(app)

export async function userExists(uid){
  const docRef= doc(db,'users',uid)
   const res= await getDoc(docRef)
   console.log("🚀 ~ file: firebase.js ~ line 30 ~ userExists ~ res", res)
    
   return res.exists();
}

export async function logout() {
  await auth.signOut();
}