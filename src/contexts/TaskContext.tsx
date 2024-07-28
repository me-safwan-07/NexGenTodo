import { createContext, Dispatch, SetStateAction } from "react";
import { UUID } from "../types/user";

interface TaskState {
    tasks: UUID[];
    selectedTaskId: UUID | null;
    anchorEl: null | HTMLElement;
    multipleSelectedTasks: UUID[];
    search: string;
    deleteDialogOpen: boolean;
}

interface TaskAction {
    setTasks: Dispatch<SetStateAction<UUID[]>>;
    setSelectedTaskId: Dispatch<SetStateAction<UUID | null>>;
    setAnchorEl: Dispatch<SetStateAction<null | HTMLElement>>;
    setMultipleSelectedTasks: Dispatch<SetStateAction<UUID[]>>;
    setSearch: Dispatch<SetStateAction<string>>;
    handleSelectTask: (taskId: UUID) => void;
    setDeleteDialogOpen: Dispatch<SetStateAction<boolean>>;
    handleDeleteTask: () => void;
    handleCloseMoreMenu: () => void;
}

export type TaskContexType = TaskState & TaskAction;

export const TaskContext = createContext<TaskContexType>({} as TaskContexType);

