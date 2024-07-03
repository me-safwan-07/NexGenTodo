import React, { createContext } from "react";
import type { User } from "../types/user";
import { defaultUser } from "../constants/defaultUser";
import { useStorageState } from "../hooks/useStrorageState";
interface UserProps {
    user: User; // user data
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserProps>({ user: defaultUser, setUser: () => {}});

export const UserContextProvider = ({ Children }: { Children: React.ReactNode }) => {
    const [user, setUser] = useStorageState<User>(defaultUser, "user");
    return <UserContext.Provider value={{ user, setUser }}>{Children}</UserContext.Provider>;
};