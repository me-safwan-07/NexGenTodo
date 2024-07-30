import styled from "@emotion/styled";
import { Box, Button, CircularProgress, css } from "@mui/material";
import { pulseAnimation } from ".";
import { ColorPalette } from "../theme/themeConfig";

export const AddButton = styled(Button)<{ animate?: boolean; glow: boolean }>`
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 24px;
    width: 72px;
    height: 72px;
    border-radius: 100%;
    background-color: #b624ff;
    color: #f0f0f0;
    right: 16vw;
    
    transition: background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s;

    &:hover {
        box-shadow: none;
        background-color: #b624ff;
        backdrop-filter: blur(6px);
    }

    @media (max-width: 1024px) {
        right: 24px;
    }

`;

export const TasksCountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const TasksCount = styled.div`
    color: purple;
    background: #090b2258;
    transition: 0.3s all;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 8px 16px;
    padding: 20px 24px;
    margin: 24px 0 12px 0;
    border-radius: 24px;
    width: 650px;
    border: 1px solid purple;
    @media (min-width: 1024px) {
        padding: 24px;
    }
`;
export const StyledProgress = styled(CircularProgress)`
    z-index: 1;
    margin: 2px;
    filter: none;
    transition: 0.3s filter;
`;

export const ProgressPercentageContainer = styled(Box)`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #090b2287;
    border-radius: 100px;
    margin: -5px;
    border: 1px solid purple;
`;

export const TaskCountTextContainer = styled.div`
    line-height: 1.7;
    margin-left: 6px;
`;

export const TaskCounterHeader = styled.h4`
    margin: 0;
    font-size: 16px;
    @media (max-width: 1024px) {
        font-size: 17px;
    }
`;

export const TaskCompletionText  = styled.p`
    margin: 0;
    font-size: 16px;
`