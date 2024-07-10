import  { createContext, ReactNode, Dispatch, SetStateAction, useState } from "react";
import type { UUID } from "../types/user";
import { useStorageState } from "../hooks/useStrorageState";
import { useResponsiveDisplay } from "../hooks/useResponsiveDisplay";
import { HighlightedText } from "../components/tasks/Tasks.styled";

interface TaskState {
    selectedTaskId: UUID | null;
    anchorE1:null | HTMLElement;
    anchorPosition: { top: number; left: number } | null;
    expandedTasks: Set<UUID>;
    multipleSelectedTasks: UUID[];
    search: string;
    editModalOpen: boolean;
    deleteDialogOpen: boolean;
}

interface TaskActions {
    setSelectedTaskId: Dispatch<SetStateAction<UUID | null>>;
    setAnchorE1: Dispatch<SetStateAction<null | HTMLElement>>;
    setAnchorPosition: Dispatch<SetStateAction<{ top: number, left:number } | null>>
    setExpandedTasks: Dispatch<SetStateAction<Set<UUID>>>;
    setMultipleSelectedTasks: Dispatch<SetStateAction<UUID[]>>;
    setSearch: Dispatch<SetStateAction<string>>;
    toggleShowMore: (taskId: UUID) => void;
    handleSelectTask: (taskId: UUID) => void;
    highlightMatchingText: (text: string) => ReactNode;
    setEditModalOpen: Dispatch<SetStateAction<boolean>>;
    setDeleteDialogOpen: Dispatch<SetStateAction<boolean>>;
    handleDeleteTask: () => void;
    handleCloseMoreMenu: () => void;
}

type TaskContextType = TaskState & TaskActions;

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export const TaskProvider = ({ children }: { children:ReactNode }) => {
    const [selectedTaskId, setSelectedTaskId] = useState<UUID | null>(null);
    const [anchorE1, setAnchorE1] = useState< null | HTMLElement>(null);
    const [anchorPosition, setAnchorPosition] = useState<{ top: number; left: number} | null>(null);
    const [expandedTasks, setExpandedTasks] = useState<Set<UUID>>(new Set());
    const [multipleSelectedTasks, setMultipleSelectedTasks] = useStorageState<UUID[]>(
        [],
        "selectedTasks",
        "sessionStorage"
    );
    const [search, setSearch] = useStorageState<string>("", "search", "sessionStorage");
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

    const toggleShowMore = (taskId: UUID) => {
        setExpandedTasks((prevExpandedTasks) => {
            const newSet = new Set(prevExpandedTasks);
            newSet.has(taskId) ? newSet.delete(taskId) : newSet.add(taskId);
            return newSet;
        });
    };

    const handleSelectTask = (taskId: UUID) => {
        setAnchorE1(null);
        setMultipleSelectedTasks((prevSelectedTaskIds) => {
            if(prevSelectedTaskIds.includes(taskId)) {
                // Deselec the task if already selected
                return prevSelectedTaskIds.filter((id) => id !== taskId);
            } else {
                // select the task if not selected
                return [...prevSelectedTaskIds, taskId];
            }
        });
    };

    const highlightMatchingText = (text: string): ReactNode => {
        if(!search) {
            return text;
        }
        const parts = text.split(new RegExp(`(${search})`, "gi"));
        return parts.map((parts, index) => 
            parts.toLowerCase() === search.toLowerCase() ? (
                <HighlightedText key={index}>{parts}</HighlightedText>
            ) : (
                parts
            )
        );
    }

    const handleDeleteTask = () => {
        // Opens the delete task dialog
        if(selectedTaskId) {
            setDeleteDialogOpen(true);
        }
    };

    const isMobile = useResponsiveDisplay();

    const handleCloseMoreMenu = () => {
        setAnchorE1(null);
        document.body.style.overflow = "visible";
        if(selectedTaskId && !isMobile && expandedTasks.has(selectedTaskId)) {
            toggleShowMore(selectedTaskId);
        }
    };

    const contextValue: TaskContextType = {
        selectedTaskId,
        setSelectedTaskId,
        anchorE1,
        setAnchorE1,
        anchorPosition,
        setAnchorPosition,
        expandedTasks,
        setExpandedTasks,
        toggleShowMore,
        search,
        setSearch,
        highlightMatchingText,
        multipleSelectedTasks,
        setMultipleSelectedTasks,
        handleSelectTask,
        editModalOpen,
        setEditModalOpen,
        handleDeleteTask,
        deleteDialogOpen,
        setDeleteDialogOpen,
        handleCloseMoreMenu
    };

    return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>

};