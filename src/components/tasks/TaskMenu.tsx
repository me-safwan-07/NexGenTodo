import styled from "@emotion/styled";
import { Menu, MenuItem } from "@mui/material"
import { useContext, useMemo } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TaskContext } from "../../contexts/TaskContext";
import { DeleteRounded } from "@mui/icons-material";
import { useResponsiveDisplay } from "../../hooks/useResponsiveDisplay";
import { BottomSheet } from "react-spring-bottom-sheet"
import { Task } from "../../types/user";

const TaskMenu: React.FC = () => {
    const { user } = useContext(UserContext);
    const { tasks } = user;
    const isMobile = useResponsiveDisplay();
    const { 
        selectedTaskId,
        anchorEl,
        handleDeleteTask,
        handleCloseMoreMenu,
    } = useContext(TaskContext);

    const selectedTask = useMemo(() => {
        return tasks.find((task) => task.id === selectedTaskId) || ({} as Task);
    }, [selectedTaskId, tasks]);

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

            {isMobile ? (
                <BottomSheet
                    open={Boolean(anchorEl)}
                    onDismiss={handleCloseMoreMenu}
                    header={
                        <div>
                            <SheetHeader>
                                {selectedTask.name}
                            </SheetHeader>
                        </div>
                    }
                >
                    <SheetContent>{menuItems}</SheetContent>
                </BottomSheet>
            ) : (
                <Menu
                id="task-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMoreMenu}
            >
                {menuItems}
            </Menu>
        )}
            
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
`;

const SheetHeader = styled.h3``;
const SheetContent = styled.div``;

export default TaskMenu;