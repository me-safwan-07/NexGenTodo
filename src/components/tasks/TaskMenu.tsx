import styled from "@emotion/styled";
import { Close, PushPinRounded } from "@mui/icons-material";
import { Dialog, DialogTitle, Menu, MenuItem } from "@mui/material"
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { UserContext } from "../../contexts/UserContext";
import { UUID } from "../../types/user";

export const TaskMenu = () => {
    const { user, setUser } = useContext(UserContext);
    const { tasks } = user;
    const {
        selectedTaskId,
        anchorE1,
        anchorPosition,
        multipleSelectedTasks,
        handleSelectTask,
        setEditModalOpen,
        handleDeleteTask,
        handleCloseMoreMenu,
    } = useContext(TaskContext);
    const menuItems: JSX.Element = (
        <div>
            <StyledMenuItem>
                <Close /> &nbsp; "Mark as not done;
            </StyledMenuItem>
            <StyledMenuItem>
                <PushPinRounded sx={{ textDecoration: "line-through "}}/>
                &nbsp; "unpin"
            </StyledMenuItem>
        </div>
    )
    
    const generateShreableLink = (taskId: UUID | null, userName: string): string => {
        const 
    }
    return (
        <>
            <Menu 
                id="task-menu"
                open={Boolean(anchorE1)}
                sx={{
                    "& .MuiPaper-root": {
                        borderRadius: "18px",
                        minWidth: "200px",
                        boxShadow: "none",
                        padding: "6px 4px"
                    }
                }}

            >
                {menuItems}
            </Menu>
            <Dialog
                open={false}
            >
                <DialogTitle>Share Task</DialogTitle>
            </Dialog>
        </>
    )
};

const StyledMenuItem = styled(MenuItem)<{ clr?: string }>`
    margin: 0 6px;
    padding: 12px;
    border-radius: 12px;
    box-shadow: none;
    gap: 2px;
    color: ${({ clr }) => clr || "unset"};
`;