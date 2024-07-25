import { IconButton, SwipeableDrawer, Tooltip } from "@mui/material";
import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useTheme } from "@emotion/react";
import { UserAvatar } from "../styles";
import { SystemSecurityUpdate } from "@mui/icons-material";
import { systemInfo } from "../utils";
import { useNavigate } from "react-router-dom";
import  logo  from ".././assets/logo256.png";
export const ProfileSidebar = () => {
    const { user, setUser } = useContext(UserContext);
    const { name, profilePicture, tasks, settings } = user;
    const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorE1);
    const [logoutConfirmationOpen, setOpenSettings] = useState<boolean>(false);
    // const [openSettings, setOpenSettings] = useState<boolean>(false);

    const [stars, setStars] = useState<number | null>(null);
    const [lastUpdate, setLastUpdate] = useState<String | null>(null);
    const [issuesCount, setIssuesCount] = useState<number | null>(null);

    const [bmcSupporters, setBmcSupport] = useState<number | null>(null);

    const theme = useTheme();
    // const n = useNavigate();

    // useEffect(() => { 
    //     // const fetchRepoInfo: () => Promise<void> = async () => {

    //     // }

    //     // const handleClose = () => {
    //     //     return setAnchorE1(null);
            
    //     };
        
    // })

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
                        <span>Todo</span> App
                        <span>.</span>
                    </LogoText>
                </LogoContainer>
            </StyledSwipeableDrawer>
       </Container>
    )
};

const Container = styled.div``;
const StyledSwipeableDrawer = styled(SwipeableDrawer)``;
const LogoContainer = styled.div``;
const Logo = styled.img``;
const LogoText = styled.h2``;