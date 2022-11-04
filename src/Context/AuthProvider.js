import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from 'firebase/auth';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [loader, setLoader] = useState(true);
   const [user, setUser] = useState();
   const createUser = (email, password) => {
      setLoader(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const userLogin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const googleLogin = (provider) => {
      return signInWithPopup(auth, provider);
   };
   const signoutUser = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
         setUser(CurrentUser);
         console.log('current User ', CurrentUser);
         setLoader(false);
      });
      return () => unsubscribe();
   }, []);

   const authInfo = { createUser, user, loader, userLogin, googleLogin, signoutUser };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
