import { createContext, Dispatch, SetStateAction } from "react";
import { UUID } from "../types/user";

interface TaskState {
    selectedTaskId: UUID | null;
    anchorEl: null | HTMLElement;
    deleteDialogOpen: boolean;
}

interface TaskAction {
    setSelectedTaskId: Dispatch<SetStateAction<UUID | null>>;
    setAnchorEl: Dispatch<SetStateAction<null | HTMLElement>>;
    setDeleteDialogOpen: Dispatch<SetStateAction<boolean>>;
    handleDeleteTask: () => void;
    handleCloseMoreMenu: () => void;
}

export type TaskContexType = TaskState & TaskAction;

export const TaskContext = createContext<TaskContexType>({} as TaskContexType);

