import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CheckBox, RadioButtonChecked } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";


export const TasksContainer = styled.main`
    display: flex;
    justify-content: center;
    max-width: 700px;
    margin: 0 auto;
    flex-direction: column;
    gap: 6px;
`;
export const TaskContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
    transition: 0.3 all !important;
    background-color: #b624ff;
    opacity: 1;
    color: #edeef6;
    border-left: 1px solid transparent;
    box-shadow: none;
    padding: 16px 16px 16px 20px;
    border-radius: 28px;

    
    @media (max-width: 768px) {
        padding: 14px 14px 14px 18px;
        margin-top: 12px;
    }
`;
export const StyledRadio = styled(CheckBox)`
    margin-left: -8px;
    margin-right: 4px;
    color: #b624ff;
    &.mui-checked {
        color: #b624ff;
    }
`;

const radioIConStyles = css`
    font-size: 24px;
    @media (min-width: 768px) {
        font-size: 26px;
    }
`;
export const RadioUnchecked = styled(RadioButtonChecked)`
    ${radioIConStyles}
`;
export const RadioChecked = styled(RadioButtonChecked)`
    ${radioIConStyles}
`;
export const TaskName = styled.h3`
    font-size: 20px;
    margin: 0;
    text-decoration: none;
    word-break: break-word;
    white-space: pre-line;
`;

export const TaskInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const TaskHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const TaskDate = styled.p`
    margin: 0 6px;
    text-align: right;
    margin-left: auto;
`;

export const SearchInput = styled(TextField)`
    margin: 8px 0 0 0;
    border-radius: 16px;
    transition: 0.3s all;
    width: 100%;
    & .MuiOutlinedInput-notchedOutline {
        border: 1px solid #44479cb7; 
    }
    & .MuiOutlinedInput-root {
        padding: 2px 16px;
        border-radius: 16px;
        transition: 0.3s all;
        background: #f0f0f0;
        color: #333;
        & .MuiSvgIcon-root {
            color: #333;
        }
    }
`;

export const SearchClear = styled(IconButton)``;