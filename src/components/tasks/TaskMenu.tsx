import { useContext, useMemo } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useResponsiveDisplay } from "../../hooks/useResponsiveDisplay";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { TaskContext } from "../../contexts/TaskContext";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { Task, UUID } from "../../types/user";
import  styled  from "@emotion/styled";
import { MenuItem, Menu} from "@mui/material";
import { Close, Done } from "@mui/icons-material";

export const TaskMenu = () => {
    const { user, setUser} = useContext(UserContext);
    const { tasks, name, settings, emojisStyle } = user;
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

    const isMobile = useResponsiveDisplay();
    const n = useNavigate();
    const theme = useTheme();

    const selectedTask = useMemo(() => {
        return tasks.find((task) => task.id === selectedTaskId) || ({} as Task);
    }, [selectedTaskId, tasks]);

    const menuItems: JSX.Element = (
        <div>
            <StyledMenuItem>
                {selectedTask.done ? <Close /> : <Done />}
            </StyledMenuItem>
        </div>
    )
    return (
        <>
            { isMobile ? (
                <BottomSheet
                    open={Boolean(anchorE1)}
                    onDismiss={handleCloseMoreMenu}
                    snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight]}
                    expandOnContentDrag
                    header={
                        <SheetHeader translate="no">
                            <Emoji emojiStyle={emojisStyle} size={32} unified={selectedTask.emoji || ""}/>{" "}
                            {emojisStyle === EmojiStyle.NATIVE && "\u00A0"}    
                            {selectedTask.name}
                        </SheetHeader>
                    }
                >
                    <SheetContent>{menuItems}</SheetContent>
                </BottomSheet>
            ) : (
                <Menu
                    open={Boolean(anchorE1)}
                >
                        <h2>Safeam</h2>
                </Menu>
            )}
        </>
    )
};

const SheetHeader = styled.h3`
`
const SheetContent = styled.div``
const StyledMenuItem = styled(MenuItem)<{ clr?: string}>``