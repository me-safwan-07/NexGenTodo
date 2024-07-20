import styled from "@emotion/styled";
import { CustomEmojiPicker, TopBar } from "../components"
import { TextField, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useTheme } from "@emotion/react";
import { useStorageState } from "../hooks/useStrorageState";
import { Category, Task } from "../types/user";
import { useNavigate } from "react-router-dom";
import { DESCRIPTION_MAX_LENGTH, TASK_NAME_MAX_LENGTH } from "../constants";
import { showToast } from "../utils";
import { AddAPhotoRounded } from "@mui/icons-material";
import { ColorPalette } from "../styles";

const AddTask = () => {
    const { user, setUser } = useContext(UserContext);
    const theme = useTheme()
    const [name, setName] = useStorageState<string>("", "name", "sessionStorage");
    const [emoji, setEmoji] = useStorageState<string | null>(null, "emoji", "sessionStorage");
    const [color, setColor] = useStorageState<string>("", "color", "sessionStorage");
    const [description, setDescription] = useStorageState<string>(
        "",
        "description",
        "sessionStorage"
    );
    const [deadline, setDeadline] = useStorageState<string>("", "deadline", "sessionStorage");
    const [nameError, setNameError] = useState<string>("");
    const [descriptionError, setDescriptionError] = useState<string>("");
    const [selectedCategories, setSelectedCategories] = useStorageState<Category[]>(
        [],
        "categories",
        "sessionStorage"
    );

    const n = useNavigate();

    useEffect(() => {
        document.title = "Todo App - Add Task";
    },[]);

    useEffect(() => {
        if(name.length > TASK_NAME_MAX_LENGTH) {
            setNameError(`Name should be less than or equal to ${TASK_NAME_MAX_LENGTH} characters`);
        } else {
            setNameError("");
        }

        if( description.length > DESCRIPTION_MAX_LENGTH) {
            setDescriptionError(
                `Description should be less than or qual to ${DESCRIPTION_MAX_LENGTH} characters`
            );
        } else {
            setDescriptionError("");
        }
    }, [description.length, name.length]);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setName(newName);
        if(newName.length > TASK_NAME_MAX_LENGTH) {
            setNameError(`Name should be less than or equal to ${TASK_NAME_MAX_LENGTH} characters`);
        } else {
            setNameError("");
        }
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDescription = event.target.value;
        setDescription(newDescription);
        if (newDescription.length > DESCRIPTION_MAX_LENGTH) {
            setDescriptionError(
                `Description should be less than or equal to ${DESCRIPTION_MAX_LENGTH} characters`
            );
        } else {
            setDescriptionError("");
        }
    };

    const handleDeadlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeadline(event.target.value);
    };

    const handleAddTask = () => {
        if(name === "") {
            showToast("Task name is required.", {type: "error"});
            return;
        }

        if( nameError !== "" || descriptionError !== "") {
            return;
        }

        const newTask : Task = {
            id: crypto.randomUUID(),
            done: false,
            pinned: false,
            name,
            description: description !== "" ? description: undefined,
            emoji: emoji ? emoji : undefined,
            color,
            date: new Date(),
            deadline: deadline !== "" ? new Date(deadline) : undefined,
            category: selectedCategories ? selectedCategories : [],
        };

        setUser((prevUser) => ({
            ...prevUser,
            tasks: [...prevUser.tasks, newTask],
        }));

        n("/");

        showToast(
            <div>
                Added task - <b>{newTask.name}</b>
            </div>,
            {
                icon: <AddAPhotoRounded />,
            }
        );

        const itemsToRemove = ["name", "color", "description", "emoji", "deadline", "categories"];
        itemsToRemove.map((item) => sessionStorage.removeItem(item));
    }; 

    return (
        <>
            <TopBar title="Add New Task" />
            <Container>
                <CustomEmojiPicker
                    emoji={typeof emoji === "string" ? emoji : undefined}
                    setEmoji={setEmoji}
                    color={color}
                    name={name}
                />
                <StyledInput 
                    label="Task Name"
                    name="name"
                    placeholder="Enter task name"
                    autoComplete="off"
                    value={name}
                    onChange={handleNameChange}
                    focused
                    required
                    error={nameError !== ""}
                    // helpercolor={nameError && ColorPalette.red}
                />
                <StyledInput 
                    label="Task Description (Optional)"
                    name="name"
                    placeholder="Enter task description"
                    autoComplete="off"
                    multiline
                    rows={4}
                    value=""
                    focused
                />
                <StyledInput 
                    label="Task Deadline (optional)"
                    name="name"
                    placeholder="Enter deadline date"
                    type="datetime-local"
                    defaultValue=""
                    value=""
                    focused
                    required
                />
                <AddTaskButton>Create Task</AddTaskButton>
            </Container>
            
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledInput = styled(TextField)`
    margin: 12px;
    & .MuiOutlinedInput-root {
        border-radius: 16px;
        transition: 0.3s all;
        width: 400px;
    }
    .MuiFormHelperText-root {
        opacity: 0.8;
    }
`

const AddTaskButton = styled(Button)`
    margin-top: 4px;
    border: none;
    padding: 16px 32px;
    font-size: 24px;
    border-radius: 999px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s all;
    margin: 20px;
    width: 400px;
    text-tramsform: capitalize;
    &:hover {
        box-shadow: 0px 0px 24px 0px;
    }
    &:disabled {
        box-shadow: none;
        cursor: not-allowd;
        opacity: 0.7;
    }
`
export default AddTask;