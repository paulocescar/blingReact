import { createContext } from 'react';

interface AuthContextData {
    token: string | null,
    user: object | null,
    login: (token: string, user: object) => void,
    logout: () => void
}

export const AuthContext = createContext<AuthContextData>({
    token: null,
    user: null,
    login: () => {},
    logout: () => {}
})

export default AuthContext;