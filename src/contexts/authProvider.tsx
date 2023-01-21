import React, { useState } from 'react';
import AuthContext from './authContext';


const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<object | null>(null);

    function login(token: string, user: object): void{
        setToken(token)
        setUser(user)   
    }

    function logout(): void{
        setToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ token, user, login, logout}} >
          {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;