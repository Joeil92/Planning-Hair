// 'use client'
// import { useEffect } from "react";
// import { useUser } from "./useUser";
// import { useLocalStorage } from "./useLocalStorage";
// import { User } from "@PH/types/user.interface";
// import jwt from 'jsonwebtoken';

// export const useAuth = () => {
//     const { user, addUser, removeUser } = useUser();
//     const { getItem } = useLocalStorage();

//     useEffect(() => {
//         const token = getItem("phToken");

//         if (token) login(token);
//     }, []);

//     const decodeJWT = (token: string) => {
//         const decodedUser = jwt.verify(token, "kfjkvnklnvjke");

//         return decodedUser;
//     }

//     const login = (token: string) => {
//         const user = decodeJWT(token) as User;

//         addUser(user);
//     };

//     const logout = () => {
//         removeUser();
//     };

//     return { user, login, decodeJWT, logout };
// };