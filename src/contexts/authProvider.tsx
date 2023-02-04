import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from './authContext';
import { User } from '../interfaces/user';

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [expireAt, setExpireAt] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        function getUser(){
            setUser(JSON.parse(localStorage.getItem("user") ?? "{name: null}"))
        }
        function getToken(){
            setToken(localStorage.getItem("token"))
        }
        function getExpireToken(){
            setExpireAt(localStorage.getItem("expire_at"))
        }
        getExpireToken()
        getToken()
        getUser()
    }, [])

    function login(token: string, user: User, expireAt: string): void{
        localStorage.setItem("token", token)
        localStorage.setItem("expire_at", expireAt)
        localStorage.setItem("user", JSON.stringify(user))
        setToken(token)
        setExpireAt(expireAt)
        setUser(user)
        setIsLoggedIn(true)
    }

    function logout(): void{
        localStorage.setItem("token", "")
        localStorage.setItem("expire_at", "")
        localStorage.setItem("user", `{ "name": "" }`)
        setToken(null)
        setExpireAt(null)
        setUser(null)
        setIsLoggedIn(false)
        refreshPage()
    }

    function refreshPage() {
        window.location.reload();
    }

    function invalidateToken(){
        logout();
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, expireAt, user, login, logout, refreshPage}} >
          {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;