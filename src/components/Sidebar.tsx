import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  AddRounded,
  CategoryRounded,
  DeleteForeverRounded,
  GetAppRounded,
  GitHub,
} from "@mui/icons-material"
import { 
    MenuItem, 
    Divider,
    Tooltip,
    IconButton,
    Avatar,
    SwipeableDrawer,
 } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo256.png";


export const ProfileSidebar = () => {
    const [anchorE1, setanchoreE1] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorE1);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setanchoreE1(event.currentTarget);
    }
    
    const handleClose = () => {
        setanchoreE1(null);
    }
    return(
        <Container>
            <Tooltip title="">
                <IconButton
                     aria-label="Sidebar"
                     aria-controls={open ? "true" : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? "true" : undefined}
                     onClick={handleClick}
                     sx={{zIndex: 1}}
                >
                    <Avatar 
                        sx={{
                            width: "52px",
                            height: "52px",
                            backgound: "#ffffff1c",
                            transition: ".2s all",
                            fontSize: "26px"
                        }}
                    >
                       S
                    </Avatar>  
                </IconButton>
            </Tooltip>
            <StyledSwipeableDrawer
                id="basic-menu"
                anchor="right"
                open={open}
                onOpen={(e) => e.preventDefault()}
                onClose={handleClose}
            >
                <LogoContainer>
                    <Logo src={logo} alt="logo"/>
                    <LogoText>
                        <span>Todo</span>
                        <span>.</span>
                    </LogoText>
                </LogoContainer>

                <MenuLink to="">
                    <StyledMenuItem>
                        <AddRounded /> &nbsp; Add Task
                    </StyledMenuItem>
                </MenuLink>

                <MenuLink to="">
                    <StyledMenuItem >
                        <DeleteForeverRounded /> &nbsp; Purge Tasks
                    </StyledMenuItem>
                </MenuLink>

                <MenuLink to="">
                    <StyledMenuItem>
                        <CategoryRounded /> &nbsp; Categories
                    </StyledMenuItem>
                </MenuLink>

                <MenuLink to="">
                    <StyledMenuItem>
                        <GetAppRounded /> &nbsp; Transfer
                    </StyledMenuItem>
                </MenuLink>

            <StyledDivider />

            <MenuLink to="https://github.com/me-safwan-07">
                <StyledMenuItem>
                    <GitHub />  &nbsp; Github
                </StyledMenuItem>
            </MenuLink>
            </StyledSwipeableDrawer>
            
        </Container>
    )
};


const MenuLink = ({ to, children }: { to: string; children:React.ReactNode }) => {
    const styles: React.CSSProperties = { borderRadius: "14px"};
    if(to.startsWith("/")) {
        return(
            <Link to={to} style={styles}>
                {children}
            </Link>
        );
    }

    return (
        <a href={to} target="_blank" style={styles}>
            {children}
        </a>
    );
};

const Container = styled.div`
    position: absolute;
    right: 16vw;
    top: 14px;
    z-index: 900;
    @media(max-width: 1024px) {
        right: 16px;
    }
`

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
    & .MuiPaper-root {
        border-radius: 24px 0 0 0;
        min-width: 300px;
        box-shadow: none;
        padding: 4px 12px;
        color: "#101727";
        z-index: 999;

        @media (min-width: 1920px) {
            min-width: 310px;
        }

        @media (min-width: 1024px) {
            min-width: 270px;
        }

        @media (max-width: 600px) {
            min-width: 55vw;
        }
    }
`
const LogoContainer = styled.div`
    display: flex;
    align-item: center;
    flex-direction: row;
    margin-top: 8px;
    margin-bottom: 16px;
    gap: 12px;
    cursor: pointer;
`;

const Logo = styled.img`
    width: 52px;
    height: 52px;
    margin-left: 12px;
    border-radius: 14px;
`;

const LogoText = styled.div`
    & span {
        color: #232e58; //my color;
    }
`;

const StyledDivider = styled(Divider)`
    margin: 8px 4px;
`
const StyledMenuItem = styled(MenuItem)`
    padding: 0px 8px;
    border-radius: 14px;
    box-shadow: none;
    font-weight: 500;
    gap: 6px;

    & svg {
        transition: 0.4s transform;
    }

    &:hover {
        & svg[data-testid="GitHubIcon"] {
            transform: rotateY(${2 * Math.PI}rad);
        }
    }
`;
