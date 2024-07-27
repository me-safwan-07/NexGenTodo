import styled from "@emotion/styled";
import { Menu, MenuItem } from "@mui/material"
import { useContext, useMemo } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TaskContext } from "../../contexts/TaskContext";
import { DeleteRounded } from "@mui/icons-material";
import { Task } from "../../types/user";

export const Taskmenu = () => {
    const { user, setUser } = useContext(UserContext);
    const { tasks } = user;

    const { 
        selectedTaskId,
        anchorEl,
        handleDeleteTask,
        handleCloseMoreMenu,
    } = useContext(TaskContext);

    // const selectedTask = useMemo(() => {
    //     return tasks.find((task) => task.id === selectedTaskId) || ({} as Task);
    // }, [selectedTaskId, tasks]);

    const menuItems: JSX.Element = (
        <div>
            <StyledMenuItem
                onClick={() => {
                    handleDeleteTask();
                    handleCloseMoreMenu();
                }}
            >
                <DeleteRounded /> &nbsp; Delete
            </StyledMenuItem>
        </div>
    )
    return (
        <>
            <Menu
                id="task-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMoreMenu}
            >
                {menuItems}
            </Menu>
        </>
    )
}

const StyledMenuItem = styled(MenuItem)`
    margin: 0 6px;
    padding: 12px;
    border-radius: 12px;
    box-shadow: none;
    gap: 2px;
    color: unset;
`