import { useContext, useMemo } from "react"
import { TaskContext } from "../../contexts/TaskContext";
import { Task } from "../../types/user";
import { UserContext } from "../../contexts/UserContext";
import styled from "@emotion/styled";
import { CheckBox, RadioButtonChecked } from "@mui/icons-material";

const TasksList: React.FC = () => {
    const { user, setUser } = useContext(UserContext);
    const {
        selectedTaskId,
        setSelectedTaskId
    } = useContext(TaskContext);

    const selectedTask = useMemo(() => {
        return user.tasks.find((task) => task.id === selectedTaskId) || ( {} as Task);
    }, [user.tasks, selectedTaskId]);


    return (
        <>
            <TasksContainer>
                {/* {user.tasks.length > 0 && (
                    {user.tasks.length !== 0 ? (
                        
                    ) : ()}     
                )} */}

                {user.tasks.length !== 0 ? (
                    user.tasks.map((task) => (
                        <TaskContainer 
                            key={task.id}
                            id={task.id.toString()}
                            onClick={() => setSelectedTaskId(task.id)}                          
                        >
                          <StyledRadio 
                            icon={<RadioUnchecked />}
                            checkedIcon={<RadioChecked />}
                            checked={task.id === selectedTaskId}
                          /> 
                          <TaskName>{task.name}</TaskName>
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
const TasksContainer = styled.main``;
const TaskContainer = styled.div``;
const StyledRadio = styled(CheckBox)``;
const RadioUnchecked = styled(RadioButtonChecked)``;
const RadioChecked = styled(RadioButtonChecked)``;
const TaskName = styled.span``;