import { createContext } from "react";
import { User } from "../types/user";
import { defaultUser } from "../constants/defaultUser";

interface UserProps {
    user: User;    
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserProps>({ user: defaultUser, setUser: () => {} });
