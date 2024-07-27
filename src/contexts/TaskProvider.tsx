import { ReactNode, useState } from "react"
import { UUID } from "../types/user"
import { TaskContext, TaskContexType } from "./TaskContext";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [selectedTaskId, setSelectedTaskId] = useState<UUID | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

    const handleDeleteTask = () => {
        if (selectedTaskId) {
            setDeleteDialogOpen(true);
        }
    }

    const handleCloseMoreMenu = () => {
        setAnchorEl(null);
        document.body.style.overflow = "visible";
    }

    const contextValue: TaskContexType = {
        anchorEl,
        setAnchorEl,
        handleDeleteTask,
        selectedTaskId,
        setSelectedTaskId,
        deleteDialogOpen,
        setDeleteDialogOpen,
        handleCloseMoreMenu,
    };

    return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
}