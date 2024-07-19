import styled from "@emotion/styled"

import { Alarm, RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { Button, Checkbox, IconButton, TextField, css } from "@mui/material";
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
    opacity: 1;
    border-left: 1px solid transparent;
    padding: 16px 16px 16px 20px;
    border-radius: 28px;
    
    @media (max-width: 768px) {
        padding: 14px 14px 14px 18px;
        margin-top: 12px;
    }
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


export const SearchInput = styled(TextField)`
    margin: 8px 0 0 0;
    border-radius: 16px;
    transition: 0.3s all;
    width: 100%;
    & .MuiOutlinedInput-notchedOutline {
        border: 1px solid $44479cb7;
    }
    & .MuiOutlinedInput-root {
        padding: 2px 16px;
        border-radius: 16px;
        transition: 0.3s all;
        background-color: #ffffff3e;
    }
`;

export const SearchClear = styled(IconButton)`
    transition: 0.3s all;
`;
export const CategoriesListContainer = styled.div`
    postion: sticky;
    background: transition;
    backdrop-filter: blur(24px);
    z-index: 2;
    top: 0;
    display: flex;
    justify-content: left;
`;
export const SelectedTasksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0;
    padding: 16px 20px;
    border-radius: 18px;
    position: sticky;
    & h3 {
        margin: 0;
        display: flex;
        align-center: center;
    }
    & font {
        margin: 0 1px;
    }
`;
export const StyledRadio = styled(Checkbox)`
    margin-left: -8px;
    margin-right: 4px;
`;

const radioIconStyles = css`
    font-size: 24px;
    @media (max-width: 768px) {
        font-size: 26px;
    }
`
export const RadioUnchecked = styled(RadioButtonChecked)`
    ${radioIconStyles}
`;
export const RadioChecked = styled(RadioButtonChecked)`
    ${radioIconStyles}
`;
export const EmojiContainer = styled.span`
    text-decoration: none;
    margin-right: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    padding: 14px;
    width: 42px;
    height: 42px;
    border-radius: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const Pinned = styled.div``;
export const TaskInfo = styled.div``;
export const TaskHeader = styled.div``;
export const TaskName = styled.div``;
export const TaskDate = styled.p``;