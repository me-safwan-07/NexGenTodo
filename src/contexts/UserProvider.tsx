import { defaultUser } from "../constants/defaultUser";
import { useStorageState } from "../hooks/useStrorageState";
import { UserContext } from "./UserContext";
import { User } from "../types/user";

export const UserContextProvider = ({ children }: { children: React.ReactNode}) => {
    const [user, setUser] = useStorageState<User>(defaultUser, "user");
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}