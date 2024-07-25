import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Button, TextField } from "@mui/material";
import { showToast } from "../utils";
import { Task } from "../types/user";
import { useStorageState } from "../hooks/useStorageState";

export const AddTask = () => {
    const { user, setUser } = useContext(UserContext);
    const [ name, setName ] = useStorageState<string>("", "name", "sessionStorage");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setName(newName);

    }

    const handleAddTask = () => {
        if(name === "") {
            showToast("Task name is required.", {type: "error"});
            return;
        }

        const newTask: Task = {
            id: crypto.randomUUID(),
            name,
        }
        setUser((prevUser) => ({
            ...prevUser,
            tasks: [...prevUser.tasks, newTask]
        }));
        // <h2>{name}</h2>
        console.log(newTask);
    }
    return (
        <Container>
            <StyledInput 
                label="Task Name"
                name="name"
                placeholder="Enter task name"
                autoComplete="off"
                value={name}
                onChange={handleNameChange}
                focused
                required

            />
            <AddTaskButton 
                onClick={handleAddTask}
            >
                Create Task
            </AddTaskButton>
            
        </Container>
    )
};


const Container = styled.div``;
const StyledInput = styled(TextField)``;
const AddTaskButton = styled(Button)``;