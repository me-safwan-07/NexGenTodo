import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { useSystemTheme } from "../hooks/useSystemTheme";
import { USER_NAME_MAX_LENGTH } from "../constants";
import { TopBar } from "../components/TopBar";

export const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);
    const { name, profilePicture, createdAt } = user;
    const [userName, setUserName] = useState<string>("");
    const [profilePictureURL, setProfilePictureURL] = useState<string>(""); 

    const systemTheme = useSystemTheme();

    const handleSaveName = () => {
        if (userName.length <= USER_NAME_MAX_LENGTH && userName !== name) {
           setUser({ ...user, name: userName});
        }
    }

    return (
        <>
            <TopBar title="User Profile" />
        </>
    )
}