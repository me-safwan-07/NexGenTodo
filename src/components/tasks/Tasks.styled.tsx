import styled from "@emotion/styled"
import { Button } from "@mui/material";

// interface TaskComponentProps {
//     backgroundColor: string;
//     done: boolean;
//     glow?: boolean;
//     blur?: boolean;
// }


export const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 14px;
    transition: 0.3s all !important;
`
export const NoTasks = styled.div`
    text-align: center;
`;

export const HighlightedText = styled.span`
    background-color: #6829ef;
    color: #fff;
    padding: 2px 0;
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    margin: 0;
    font-weight: bold;
    border: 1px solid #ffffff5f;
    transition: 0.3s all;
`;

// change to ./../styles file 
export const DialogBtn = styled(Button)`
    padding: 10px 16px;
    border-radius: 16px;
    font-size: 16px;
    margin: 8px;
`;