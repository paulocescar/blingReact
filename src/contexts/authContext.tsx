import { createContext } from 'react';
import { User } from '../interfaces/user';

interface AuthContextData {
    isLoggedIn: boolean,
    token: string | null,
    user: User | null,
    expireAt: string | null,
    login: (token: string, user: User, expireAt: string) => void,
    logout: () => void,
    refreshPage: () => void
}

export const AuthContext = createContext<AuthContextData>({
    isLoggedIn: false,
    token: null,
    user: null,
    expireAt: null,
    login: () => {},
    logout: () => {},
    refreshPage: () => {}
})

export default AuthContext;