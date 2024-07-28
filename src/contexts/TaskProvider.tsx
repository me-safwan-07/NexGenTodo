import { ReactNode, useState } from "react"
import { UUID } from "../types/user"
import { TaskContext, TaskContexType } from "./TaskContext";
import { useStorageState } from "../hooks/useStorageState";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [selectedTaskId, setSelectedTaskId] = useState<UUID | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [expandedTasks, setExpandedTask] = useState<Set<UUID>>(new Set());
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
    const [multipleSelectedTasks, setMultipleSelectedTasks] = useStorageState<UUID[]>(
        [],
        "selectedTasks",
        "sessionStorage"
    );
    const [search, setSearch] = useStorageState<string>("", "search", "sessionStorage");
    const [tasks, setTasks] = useStorageState<UUID[]>([], "tasks", "sessionStorage");

    const toggleShowMore = (taskId: UUID) => {
        setExpandedTask((prevExpandedTasks) => {
            const newSet = new Set(prevExpandedTasks);
            newSet.has(taskId) ? newSet.delete(taskId) : newSet.add(taskId);
            return newSet;
        })
    }
    const handleSelectTask = (taskId: UUID) => {
        setAnchorEl(null);
        setMultipleSelectedTasks((prevSelectedTaskIds) => {
            if (prevSelectedTaskIds.includes(taskId)) {
                return prevSelectedTaskIds.filter((id) => id!== taskId);
            } else {
                return [...prevSelectedTaskIds, taskId];
            }
        });
    };

    const handleDeleteTask = () => {
        if (selectedTaskId) {
            setDeleteDialogOpen(true);
        }
    }

    const handleCloseMoreMenu = () => {
        setAnchorEl(null);
        document.body.style.overflow = "visible";
        if (selectedTaskId && expandedTasks.has(selectedTaskId)) {
            toggleShowMore(selectedTaskId);
        }
    } 

    const contextValue: TaskContexType = {
        tasks,
        setTasks,
        anchorEl,
        setAnchorEl,
        handleDeleteTask,
        selectedTaskId,
        setSelectedTaskId,
        search,
        setSearch,
        multipleSelectedTasks,
        setMultipleSelectedTasks,
        handleSelectTask,
        deleteDialogOpen,
        setDeleteDialogOpen,
        handleCloseMoreMenu,
    };

    return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
};