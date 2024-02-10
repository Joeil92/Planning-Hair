// import { useContext } from "react";
// import { AuthContext } from "../providers/authProvider";
// import { useLocalStorage } from "./useLocalStorage";
// import { User } from "@PH/types/user.interface";

// export const useUser = () => {
//     const { user, setUser } = useContext(AuthContext);
//     const { setItem } = useLocalStorage();

//     const addUser = (user: User) => {
//         setUser(user);
//     };

//     const removeUser = () => {
//         setUser(null);
//         setItem("user", "");
//     };

//     return { user, addUser, removeUser };
// };