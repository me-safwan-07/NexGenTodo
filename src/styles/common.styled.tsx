import styled  from "@emotion/styled";
import { Avatar } from "@mui/material";
import { CSSProperties } from "react";

export const StyledLink = styled.a`
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s all;
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        // background-color:
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        border-radius: 100px;
    }
    &:hover::after,
    &:focus-visible::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    &:hover {
        text-shadow: 0px 0px 20px 
    }
    &:focus,
    &:focus-visible {
        outline: none;
        box-shadow: none;
    }
`;

export const UserAvatar = styled(Avatar)<{ hasimage: boolean; size: CSSProperties["height"] }>`
    color: #ffffff;
    background: ${({ hasimage }) => 
        hasimage ? "#ffffff" : "#000000" ? "#5e5e6" : "#8c919c"} !important;
    transition: 0.3s background;
    font-weight: 500;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    font-size: ${({ size }) => `calc(${size} / 20`};
`;