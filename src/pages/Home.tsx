import { Tooltip } from "@mui/material";
import { useResponsiveDisplay } from "../hooks/useResponsiveDisplay";
import { AddButton } from "../styles";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
// import { useNavigate } from "react-router-dom";
import { AddRounded } from "@mui/icons-material";
import TasksList from "../components/tasks/TasksList";

const Home = () => {
    const { user } = useContext(UserContext);
    const { tasks, settings } = user;

    // const n = useNavigate();
    const isMobile = useResponsiveDisplay();
    return (
        <>
            <TasksList />
            
            
            {isMobile && (
                <Tooltip title={tasks.length > 0 ? "Add New Task" : "Add Task"} placement="left">
                    <AddButton 
                        animate={tasks.length === 0}
                        glow={settings[0].enableGlow}
                        // onClick={() => n("add")}
                        aria-label="Add Task"
                    >
                        <AddRounded style={{ fontSize: "44px"}} />

                    </AddButton>
                </Tooltip>
            )}
        </>
    )
};

export default Home;