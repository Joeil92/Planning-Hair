'use client'
import { useLocalStorage } from "@PH/hooks/useLocalStorage"
import jwt from 'jsonwebtoken';
import { useRouter } from "next/navigation"
import { ReactNode, createContext, useEffect, useState } from "react"

interface Props {
    children: ReactNode
}

export interface User {
    id: number
    email: string
    roles: Array<string>
    stakeholder: {
        id: number
    }
}

interface DecodedUser {
    user: User
    exp: number
    iat: number
}

export interface AuthState {
    isAuthenticated: boolean
    user: DecodedUser | null
}

interface AuthContext {
    auth: AuthState;
    signin: (t: string) => void;
    signout: () => void;
}

export const authContext = createContext<AuthContext>({
    auth: { isAuthenticated: false, user: null },
    signin: () => {},
    signout: () => {}
});

export function AuthProvider({ children }: Props) {
    const [auth, setAuth] = useState<AuthState>({ isAuthenticated: false, user: null });
    const { getItem, setItem, removeItem } = useLocalStorage();
    const router = useRouter();
 
    useEffect(() => {
        const token = getItem('phToken');

        if(!token) {
            router.replace(`/login`, { scroll: false })
        } else {
            signin(token);
        };
    }, []);

    const signin = (token: string) => {
        setItem("phToken", token);
        let decodedToken = jwt.verify(token, "kfjkvnklnvjke") as DecodedUser;

        if(Date.now() >= decodedToken.exp * 1000) return signout();
        
        setAuth({
            isAuthenticated: true,
            user: decodedToken
        })
    }

    const signout = () => {
        removeItem("phToken");
        setAuth({
            isAuthenticated: false,
            user: null
        })
    }

    return (
        <authContext.Provider value={{ auth, signin, signout }}>{children}</authContext.Provider>
    )
}
