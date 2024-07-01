import styled from "@emotion/styled";
import { TopBar } from "../components"
import { TextField, Button } from "@mui/material";

const AddTask = () => {

    return (
        <>
            <Container>
                <TopBar title="Add New Task" />
                <StyledInput 
                    label="Task Name"
                    name="name"
                    placeholder="Enter task name"
                    autoComplete="off"
                    value=""
                    focused
                    required
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