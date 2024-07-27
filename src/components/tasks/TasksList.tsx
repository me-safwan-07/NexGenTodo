import { useContext, useMemo } from "react"
import { TaskContext } from "../../contexts/TaskContext";
import { Task, UUID } from "../../types/user";
import { UserContext } from "../../contexts/UserContext";
import { 
    TasksContainer, 
    TaskContainer,
    StyledRadio,
    TaskName,
    RadioUnchecked,
    RadioChecked,
} from "./tasks.styled";
import { Taskmenu } from "./TaskMenu";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
const TasksList: React.FC = () => {
    const { user, setUser } = useContext(UserContext);
    const {
        selectedTaskId,
        setSelectedTaskId,
        anchorEl,
        setAnchorEl,
    } = useContext(TaskContext);
    const open = Boolean(anchorEl);
    const selectedTask = useMemo(() => {
        return user.tasks.find((task) => task.id === selectedTaskId) || ( {} as Task);
    }, [user.tasks, selectedTaskId]);

    const handleClick = (event: React.MouseEvent<HTMLElement>, taskId: UUID) => {
        setAnchorEl(event.currentTarget);
        setSelectedTaskId(taskId);
    }

    return (
        <>
            <Taskmenu />
            <TasksContainer>
                {user.tasks.length !== 0 ? (
                    user.tasks.map((task) => (
                        <TaskContainer 
                            key={task.id}
                            id={task.id.toString()}
                            onContextMenu={(e) => {
                                e.preventDefault();
                                handleClick(e, task.id);
                            }}
                            // onClick={() => setSelectedTaskId(task.id)}                          
                        >
                            <StyledRadio
                                // checked={task.id === selectedTaskId}
                                // icon={<RadioUnchecked />}
                                // checkedIcon={<RadioChecked />}
                            /> 
                            <TaskName>{task.name}</TaskName>
                            <IconButton
                                aria-label="Task Menu"
                                aria-controls={open ? "task-menu" : undefined}
                                aria-hashpopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={(event) => handleClick(event, task.id)}
                            >
                                <MoreVert /> 
                            </IconButton>
                        </TaskContainer>
                    ))
                ) : (
                    <b>You don't have any tasks yet</b>
                )}
            </TasksContainer>
        </>
        
    )
};

export default TasksList;