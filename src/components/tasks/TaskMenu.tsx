import styled from "@emotion/styled";
import { Close, ContentCopyRounded, DeleteRounded,Done, LinkRounded, PushPinRounded } from "@mui/icons-material";
import { Button, Dialog, DialogTitle, InputAdornment, Menu, MenuItem, TextField } from "@mui/material"
import { useContext, useMemo } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { UserContext } from "../../contexts/UserContext";
import { Task,UUID } from "../../types/user";
import { showToast } from "../../utils";
import { TaskIcon } from "../TaskIcon";

export const TaskMenu = () => {
    const { user, setUser } = useContext(UserContext);
    const { tasks, name, settings } = user;
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

    const selectedTask = useMemo(() => {
        return tasks.find((task) => task.id === selectedTaskId) || ({} as Task);
    }, [selectedTaskId, tasks]);
    const menuItems: JSX.Element = (
        <div>
            <StyledMenuItem onClick={handleCloseMoreMenu}>
                {selectedTask.done ? <Close /> : <Done />}
                &nbsp; {selectedTask.done ? "Mark as not done" : "Mark as done"}
            </StyledMenuItem>
            <StyledMenuItem>
                <PushPinRounded sx={{ textDecoration: "line-through "}}/>
                &nbsp; "unpin"
            </StyledMenuItem>
        </div>
    )
    
    const generateShreableLink = (taskId: UUID | null, userName: string): string => {
        const task = tasks.find((task) => task.id === taskId);
        // This removes id property from link as a newidentifier is generated on the share page.
         interface TaskToShare extends Omit<Task, "id"> {
            id: undefined;
         }
         
         if (task) {
            const taskToShare: TaskToShare = {
                ...task,
                sharedBy: undefined,
                id: undefined,
                category: settings[0].enableCategories ? task.category : undefined, 
            };
            const encodedeTask = encodeURIComponent(JSON.stringify(taskToShare));
            const encodeUserName = encodeURIComponent(userName);
            return `${window.location.href}share?task=${encodedeTask}&username=${encodeUserName}`;
         }
         return "";
    }
        
    const handleCopyToClipboard = async (): Promise<void> => {
        const linkToCopy = generateShreableLink(selectedTaskId, name || "user" );
        try {
            await navigator.clipboard.writeText(linkToCopy);
            showToast("Copied link to clipboard.");
        } catch (error) {
            console.error("Error copying link to clipboard:", error);
            showToast("Error copying link to clipboard", { type: "error"});
        }
    };

    const handleShare = async ():Promise<void> => {
        const linkToShare = generateShreableLink(selectedTaskId, name || "user");
        if(navigator.share) {
            try{
                await navigator.share({
                    title: "Share Task",
                    text: `Check out this task: ${selectedTaskId}`,
                    url: linkToShare,
                });
            } catch (error) {
                console.error("Error sharing link:", error);
            }
        }
    };

    const handleMarkAsDone = () => {
        // Toggles the done Property of the selected task
        if (selectedTaskId) {
            handleCloseMoreMenu();
            const updatedTasks = tasks.map((task) => {
                if(task.id === selectedTaskId) {
                    return { ...task, done: !task.done};
                } 
                return task;
            });
            setUser((prevUser) => ({
                ...prevUser,
                tasks: updatedTasks,
            }));

            const allTasksDone = updatedTasks.every((task) => task.done);

            if (allTasksDone) {
                showToast(
                    <div>
                        <b>All tasks done</b>
                        <br />
                        <span>You've checked off all your todos. Well done</span>
                    </div>,
                    {
                        icon: (
                            <div style={{ margin: "-6px 4px -6px -6px"}}>
                                <TaskIcon variant="success" scale={0.18}/>
                            </div>
                        ),
                    }
                );
            }
        }
    };

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
            <ShareField
                value={generateShreableLink(selectedTaskId, name || "user")}
                fullWidth
                variant="outlined"
                label="Shareable Link"
                InputProps={{
                    readOnly: true,
                    startAdornment: (
                        <InputAdornment position="start">
                            <LinkRounded sx={{ m1: "8px"}}/>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button 
                                onClick={() => { 
                                    handleCopyToClipboard();
                                }}
                                sx={{ p: "12px", borderRadius: '14px', mr: "4px" }}
                            >
                                    <ContentCopyRounded /> &nbsp; Copy
                            </Button>
                        </InputAdornment>
                    ),
                }}
            >
                <DeleteRounded /> &nbsp; Delete
            </ShareField>
            <div>
            <StyledMenuItem onClick={handleCloseMoreMenu}>
                {selectedTask.done ? <Close /> : <Done />}
                &nbsp; {selectedTask.done ? "Mark as not done" : "Mark as done"}
            </StyledMenuItem>
            <StyledMenuItem>
                <PushPinRounded sx={{ textDecoration: "line-through "}}/>
                &nbsp; "unpin"
            </StyledMenuItem>
        </div>
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

const ShareField = styled(TextField)`
    margin-top: 22px;
    .MuiOutlinedInput-root {
        border-radius: 14px;
        padding: 2px;
        transition: 0.3s all;
    }
`;