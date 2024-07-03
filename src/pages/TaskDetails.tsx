import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
// import { PathName } from "../styles";
import { TopBar } from "../components"
import { Task } from "@mui/icons-material";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
const TaskDetails = () => {
    const { user } = useContext(UserContext);
    const { tasks, emojisStyle } = user;
    const { id } = useParams();
    const formattedId = id?.replace('.',"");
    const task = tasks.find((task) => task.id.toString().replace(".", "") === formattedId);
    useEffect(() => {
        document.title = `Todo App - ${task?.name || "Task Details"}`;
    }, [task?.name]);

    // if(!task) {
    //     return (
    //         <NotFound 
    //             message={
    //                 <div>
    //                     Task with id <PathName>{formattedId}</PathName> was not found.
    //                 </div>
    //             }
    //     )
    // }
    return (
        <>
            <TopBar title="Task Details" />
            <Container>
                <TaskName>
                    Task: <span translate="no">{Task.name}</span>
                </TaskName>
                <TaskTable>
                    <tbody>
                        <TableRow>
                            <TableHeader>Emoji</TableHeader>
                            <TableData><i>none</i></TableData>
                        </TableRow>
                        <TableRow>
                            <TableHeader>ID:</TableHeader>
                            <TableData></TableData>
                        </TableRow>
                        <TableRow>
                            <TableHeader>Description:</TableHeader>
                            <TableData></TableData>
                        </TableRow>
                        <TableRow>
                            <TableHeader>Color:</TableHeader>
                            <TableData></TableData>
                        </TableRow>
                        <TableRow>
                            <TableHeader>Created:</TableHeader>
                            <TableData></TableData>
                        </TableRow>

                        <TableRow>
                            <TableHeader>Last edited:</TableHeader>
                            <TableData></TableData>
                        </TableRow>
                        <TableRow>
                            <TableHeader>Task deadline</TableHeader>
                            <TableData></TableData>
                        </TableRow>
                        <TableRow>
                            <TableHeader>Done:</TableHeader>
                            <TableData></TableData>
                        </TableRow>
                        <TableRow>
                            <TableHeader>Pinned:</TableHeader>
                            <TableData></TableData>
                        </TableRow>
                        <TableRow>
                            <TableHeader>Shared by:</TableHeader>
                            <TableData></TableData>
                        </TableRow>
                        <TableRow>
                            <TableHeader>Categories</TableHeader>
                            <TableData></TableData>
                        </TableRow>
                    </tbody>
                </TaskTable>
            </Container>
        </>
    )
}

export default TaskDetails;

const Container = styled.div`
    display: flex;
`
const TaskName = styled.h2`
    margin: 8px;
    text-align: center;
    font-size: 1.5em;

    @media (min-width: 768px) {
        font-size: 1.8em;
    }
`;

const TaskTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
`

const TableRow = styled.tr`
    border-bottom: 2px solid;

    &:last-child {
        border-bottom: none;
    }
`;

const TableHeader = styled.th`
    text-align: left;
    padding: 8px;
    font-size: 1em;

    @media (min-width: 768px) {
        font-size: 1.2em;
    }
`;

const TableData = styled.td`
    text-align: left;
    padding: 8px;
    display: flex;
    align-tems: center;
    gap: 6px;
    font-size: 1em;
    word-break: break-all;
    @media (min-width: 768px) {
        font-size: 1.1em;
    }
`;