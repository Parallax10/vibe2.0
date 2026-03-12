"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuarioVibe');

        if (usuarioGuardado) {
            try {
                const usuario = JSON.parse(usuarioGuardado);

                if (usuario.admin === true || usuario.admin === 1) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            } catch (error) {
                setIsAdmin(false);
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);