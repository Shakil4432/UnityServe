import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase/firebase';
export const authContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userSignIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true);
        setUser(null);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
                setLoading(false);
            }else{
                setUser(null)
                setLoading(false);
            }
        });
        return ()=> unSubscribe();
    },[])

    const allData = {
        googleSignIn,
        createUser,
        userSignIn,
        user,
        logOut,
    }
  return (
    <authContext.Provider  value={allData}>
        {children}
    </authContext.Provider>
  )
}
