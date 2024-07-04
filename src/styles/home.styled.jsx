import styled from "@emotion/styled";
// import { Button } from "@mui/material";

export const TaskCountTextContainer = styled.div`
    line-height: 1.7;
    margin-left: 6px;
`
export const GreetingHeader = styled.div`
    display: flex;
    margin-top: 12px;
    font-size: 26px;
    font-weight: bold;
    margin-top: 16px;
    margin-left: 8px;
    color: white;
    @media (max-width: 550px) {
        font-size: 22px;
    }
`;

// export const AddButton = styled(Button)<{ animate?: boolean; glow: boolean }>`
//     cursor: pointer;
//     border: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: fixed;
//     bottom: 24px;
//     width: 72px;
//     border-radius: 100%;
// `;

export const TaskCompletionText = styled.p`
    margin: 0;
    font-size: 16px;
`