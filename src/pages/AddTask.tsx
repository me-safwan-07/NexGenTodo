import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Button, TextField } from "@mui/material";
import { showToast } from "../utils";
import { Task } from "../types/user";
import { useStorageState } from "../hooks/useStorageState";
// import { DESCRIPTION_MAX_LENGTH } from "../constants";
import {
    Container,
    StyledInput,
    AddTaskButton,
} from "../styles"
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const { user, setUser } = useContext(UserContext);
    const [ name, setName ] = useStorageState<string>("", "name", "sessionStorage");
    const [description, setDescription ] = useStorageState<string>("", "description", "sessionStorage");

    const n = useNavigate();
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setName(newName);
    }

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDescription = event.target.value;
        setDescription(newDescription);
        // if (newDescription.length > DESCRIPTION_MAX_LENGTH)
        // }
    }

    const handleAddTask = () => {
        if(name === "") {
            showToast("Task name is required.", {type: "error"});
            return;
        }

        const newTask: Task = {
            id: crypto.randomUUID(),
            name,
            description: description !== "" ? description : undefined,
        };

        setUser((prevUser) => ({
            ...prevUser,
            tasks: [...prevUser.tasks, newTask]
        }));

        n("/");
        // <h2>{name}</h2>
        console.log(newTask.description);
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
            <StyledInput
                label="Task Description (optional)"
                name="description"
                placeholder="Enter task description"
                multiline
                onChange={handleDescriptionChange}
                value={description}
                rows={4}
                focused
            />
            <AddTaskButton 
                onClick={handleAddTask}
            >
                Create Task
            </AddTaskButton>
            

        </Container>
    )
};

export default AddTask;


// const Container = styled.div``;
// const StyledInput = styled(TextField)``;
// const AddTaskButton = styled(Button)``;