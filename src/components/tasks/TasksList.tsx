import { useCallback, useContext } from "react"
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
    TaskInfo,
    TaskHeader,
    SearchInput,
    SearchClear,
    // TaskDate,
} from "./tasks.styled";
import  TaskMenu  from "./TaskMenu";
import { IconButton, InputAdornment } from "@mui/material";
import { Close, MoreVert, Search } from "@mui/icons-material";
const TasksList: React.FC = () => {
    const { user } = useContext(UserContext);
    const {
        // selectedTaskId,
        setSelectedTaskId,
        anchorEl,
        setAnchorEl,
        search,
        setSearch,
        multipleSelectedTasks,
        setMultipleSelectedTasks,
        handleSelectTask,
    } = useContext(TaskContext);
    const open = Boolean(anchorEl);
    
    // const reorderTasks = useCallback(
    //     (tasks: Task[]) : Task[] => {
    //         const searchLower = search.toLowerCase();
    //         return tasks.filter(task => task.name.toLowerCase().includes(searchLower));
    //     },[search]
    // );

    // const filterTasks = reorderTasks()
    
    const handleClick = (event: React.MouseEvent<HTMLElement>, taskId: UUID) => {
        setAnchorEl(event.currentTarget);
        setSelectedTaskId(taskId);
    }

    return (
        <>
            <TaskMenu />
            <TasksContainer>
                {user.tasks.length > 0 && (
                    <SearchInput 
                        focused
                        color="primary"
                        placeholder="Search for task..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment  position="start">
                                    <Search sx={{ color: "pink"}} />
                                </InputAdornment>
                            ),
                            endAdornment: search ? (
                                <InputAdornment position="end">
                                    <SearchClear
                                        onClick={() => setSearch("")}
                                    >
                                        <Close 
                                            sx={{
                                                color: "white",
                                                transition: ".3s all"
                                            }}
                                        />
                                    </SearchClear>
                                </InputAdornment>
                            ) : undefined,
                        }}
                    />
                )}
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
                            {/* {multipleSelectedTasks.length > 0 && ( */}
                                <StyledRadio
                                    // checked={multipleSelectedTasks.includes(task.id)}
                                    // icon={<RadioUnchecked />}
                                    // checkedIcon={<RadioChecked />}
                                    onChange={() => {
                                        if (multipleSelectedTasks.includes(task.id)) {
                                            setMultipleSelectedTasks((prevTasks) => 
                                                prevTasks.filter((id) => id !== task.id)
                                            );
                                        } else {
                                            handleSelectTask(task.id);
                                        }
                                    }}
                                />
                            {/* )} */}
                             
                             <TaskInfo >
                                <TaskHeader>
                                    <TaskName >{task.name}</TaskName>
                                    {/* <TaskDate>{formateDate</TaskDate> */}
                                </TaskHeader>
                                <div className="div">
                                    {task.description}
                                </div>
                             </TaskInfo>
                            <IconButton
                                aria-label="Task Menu"
                                aria-controls={open ? "task-menu" : undefined}
                                aria-haspopup="true"
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