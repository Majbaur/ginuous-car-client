import React, { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from './../../firebase/firease.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect( () =>{
        const unsubcribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setuser(currentUser);
        });
        return() =>{
            return unsubcribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;