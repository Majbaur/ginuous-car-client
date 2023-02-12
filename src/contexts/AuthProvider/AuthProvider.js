import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './../../firebase/firease.config';

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setuser]= useState(null);
    // const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        // loading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;