import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from './authContext';
import { User } from '../interfaces/user';

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        function getUser(){
            setUser(JSON.parse(localStorage.getItem("user") ?? "{name: null}"))
        }
        function getToken(){
            setToken(localStorage.getItem("token"))
        }
        getToken()
        getUser()
    }, [])

    function login(token: string, user: User): void{
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setToken(token)
        setUser(user)
        setIsLoggedIn(true)
    }

    function logout(): void{
        localStorage.setItem("token", "")
        localStorage.setItem("user", `{ "name": "" }`)
        setToken(null)
        setUser(null)
        setIsLoggedIn(false)
        refreshPage()
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