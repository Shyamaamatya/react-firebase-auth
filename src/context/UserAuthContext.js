// import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useContext, useState } from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged //provides authentication to current user (to get notified if a particular user was created of logged in )
} from "firebase/auth";

import {auth} from "../firebase"

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(""); //state of a user to access all the components
    const signUp = (email, password ) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        console.log("Email", email);
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        // //whenever the component is mounted, we have onAuthStateChanged and we set the current user
        // onAuthStateChanged(auth, (currentUser) => {

        //but when unmounted, we dont want the above commented function so: we have unsubscribe function
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            //currentUser is set to the set user so we can access this user in protectedRoute
            setUser(currentUser); // to set the current user whenever the auth state changes
        });

        //for cleanup when a component is unmount
        return () => {
            unsubcribe();
        }
    }, []); //to run only once whenever the component gets mount
    //whenever the component gets mount, either the auth status or the current user will be null or we'll have some user
    return <userAuthContext.Provider value = {{user, signUp, logIn, logOut}}>{children}</userAuthContext.Provider> //In case the uthentication is successful, the createUser is set to the setUser to access the user in ProtectedRoute
}

export const useUserAuth = () => {
    return useContext(userAuthContext);
}