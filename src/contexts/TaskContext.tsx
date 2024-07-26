import { createContext, Dispatch, SetStateAction } from "react";
import { UUID } from "../types/user";

interface TaskState {
    selectedTaskId: UUID | null;
}

interface TaskAction {
    setSelectedTaskId: Dispatch<SetStateAction<UUID | null>>;
}

export type TaskContexType = TaskState & TaskAction;

export const TaskContext = createContext<TaskContexType>({} as TaskContexType);

