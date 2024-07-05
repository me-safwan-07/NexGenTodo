import { useEffect, useContext, useState} from 'react';
import { useTheme } from "@emotion/react";
import { UserContext } from "../contexts/UserContext";
import { useStorageState } from "../hooks/useStrorageState";
import { useNavigate } from "react-router-dom";
import { CATEGORY_NAME_MAX_LENGTH } from '../constants';


const Categories = () => {
    const { user, setUser } = useContext(UserContext);
    const theme  = useTheme();

    const [name, setName] = useStorageState<string>("", "catName", "sessionStorage");
    const [nameError, setNameError] = useState<string>("");
    const [emoji, setEmoji] = useStorageState<string | null>(null, "catEmoji", "sessionStorage");
    const [color, setColor] = useStorageState<string | null>(null, "catColor", "sessionStorage");

    const n = useNavigate();

    useEffect(() => {
        document.title = "Todo App - Categories";
        if(!user.settings[0].enableCategories) {
            n("/");
        }
        if(name.length > CATEGORY_NAME_MAX_LENGTH)  {
            setNameError(`Name is too long maximum ${CATEGORY_NAME_MAX_LENGTH} character`);
        }
    }, [n, name.length, user.settings]);
};

export default Categories;