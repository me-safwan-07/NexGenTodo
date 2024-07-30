import styled from "@emotion/styled";
import { Button, css } from "@mui/material";
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

`