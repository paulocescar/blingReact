import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from './authContext';
import { User } from '../interfaces/user';

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() =>{
        if(!user){
            
        }
    },[user, login, logout])
    function login(token: string, user: User): void{
        setToken(token)
        setUser(user)   
        setIsLoggedIn(true)
    }

    function logout(): void{
        setToken(null)
        setUser(null)
        setIsLoggedIn(false)
    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, user, login, logout, refreshPage}} >
          {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;