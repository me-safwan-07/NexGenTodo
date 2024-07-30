import { IconButton, MenuItem, SwipeableDrawer, Tooltip } from "@mui/material";
import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useTheme } from "@emotion/react";
import { UserAvatar } from "../styles";
import { AddRounded, SystemSecurityUpdate, TaskAltRounded } from "@mui/icons-material";
import { systemInfo } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import  logo  from ".././assets/logo256.png";
export const ProfileSidebar = () => {
    const { user, setUser } = useContext(UserContext);
    const { name, profilePicture, tasks, settings } = user;
    const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorE1);
    const [stars, setStars] = useState<number | null>(null);
    const [lastUpdate, setLastUpdate] = useState<String | null>(null);
    const [issuesCount, setIssuesCount] = useState<number | null>(null);

    const [bmcSupporters, setBmcSupport] = useState<number | null>(null);

    const theme = useTheme();
    const n = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorE1(event.currentTarget);
    }
    const handleClose = () => {
                return setAnchorE1(null);
    }
    return (
       <Container>
            <Tooltip title={<div translate={name ? "no" : "yes"}>{name || "User"}</div>}>
                <IconButton 
                    aria-label="sidebar"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{ zIndex: 1}}
                >
                    <UserAvatar 
                        src={(profilePicture as string) || undefined}
                        alt={name || "User"}
                        hasimage={profilePicture !== null}
                        size="52px"
                        // onError={() => {
                        //         // 
                        // }}
                        
                    >
                        {name ? name[0].toUpperCase() : undefined}
                    </UserAvatar>
                </IconButton>
            </Tooltip>
            <StyledSwipeableDrawer
                disableBackdropTransition={systemInfo.os !== "iOS"}
                disableDiscovery={systemInfo.os === "iOS"}
                id="basic-menu"
                anchor="right"
                open={open}
                onOpen={(e) => e.preventDefault()}
                onClose={handleClose}
            >
                <LogoContainer
                    translate="no"
                    onClick={() => {
                        handleClose();
                    }}
                >
                    <Logo src={logo} alt="logo" />
                    <LogoText>
                        <span>NextGen</span>Todo
                        <span>.</span>
                    </LogoText>
                </LogoContainer>
                <MenuLink to="/">
                    <StyledMenuItem onClick={handleClose}>
                        <TaskAltRounded /> &nbsp; Tasks
                    </StyledMenuItem>
                </MenuLink>
                <MenuLink to="/add">
                    <StyledMenuItem onClick={handleClose}>
                        <AddRounded /> &nbsp; Add Task
                    </StyledMenuItem>
                </MenuLink>
                
                
            </StyledSwipeableDrawer>
       </Container>
    )
};

const MenuLink = ({ to, children}: { to: string, children: React.ReactNode }) => {
    const styles: React.CSSProperties = { borderRadius: "14px" };
    if(to.startsWith("/")) {
        return (
            <Link to={to} style={styles}>{children}</Link>
        )
    }
}
const Container = styled.div`
    position: absolute;
    right: 16vw;
    top: 14px;
    z-index: 900;
    @media (max-width: 1024px) {
        right: 16px;
    }
`;
const StyledSwipeableDrawer = styled(SwipeableDrawer)`
    & .MuiPaper-root {
        border-radius: 24px 0 0 0;
        min-width: 300px;
        box-shadow: none;
        padding: 4px 12px;
        color: white;
        background: #383838;
        z-index: 999;
        
        @media (max-width: 1920px) {
            min-width: 310px;
        }
        @media (max-width: 1024px) {
            min-width: 270px;
        }

        @media (max-width: 600px) {
            min-width: 55vw;
        }
    }
`;
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
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
const LogoText = styled.h2`
    & span {
        color: #b624ff;
    }
`;
const StyledMenuItem = styled(MenuItem)`
    padding: 16px 12px;
    border-radius: 14px;
    box-shadow: none;
    font-weight: 500;
    gap: 6px;

    & svg,
    .bmc-icon {
        transition: 0.4s transform;
    }
`;