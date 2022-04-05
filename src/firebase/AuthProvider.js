import { useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react';
import { GoogleAuthProvider, signInWithPopup ,onAuthStateChanged} from 'firebase/auth';
import { auth,userExists} from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../actions/ShoppinCartActions";

export default function AuthProvider({children,
    onUserLoggedIn,onUserNotLoggedIn}) { 
        const dispatch= useDispatch()
  const navigate=useNavigate()
/*   const [currentUser, setCurrentUser] = useState(null);
  const [currentState, setCurrentState] = useState(0);
   */
 
  useEffect(()=>{
         onAuthStateChanged(auth, async (user)=>{
         if(user){
             const isRegistred=await userExists(user.uid)
             if(isRegistred){
                 onUserLoggedIn(user)
                dispatch(setUser(user))

             }
             onUserLoggedIn(user)
             dispatch(setUser(user))
            }else{
                console.log('no hay nadie authenticado ')
                onUserNotLoggedIn()

         }
            // todo redirigis a chose username
          
         })
    },[navigate,onUserLoggedIn,onUserNotLoggedIn])
  return <div>{children}</div>
}
