import styled from "@emotion/styled";
import { AddRounded, TaskAlt } from "@mui/icons-material";
import { Badge, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
// import { useResponsiveDisplay } from "../hooks/useResponsiveDisplay"

export const BottomNav = (): JSX.Element | null => {
    // const mobile = useResponsiveDisplay();
    const n = useNavigate();
    const smallIconSize = "29px";
    return (
        <Container>
            <StyledBottomNavigation >
                <NavigationButton
                    onClick={() => n("/")}
                    label="Tasks"
                    icon={
                        <Badge >
                            <TaskAlt sx={{ fontsize: smallIconSize}} />
                        </Badge>
                    }
                />
                <NavigationButton 
                    onClick={() => n('add')}
                    icon={
                        // <AddIcon 
                        //     fontSize="large";
                        // />
                        <AddRounded />
                    }
                />
            </StyledBottomNavigation>
        </Container>
    )   
};

const AddIcon = styled(AddRounded)``;
const Container = styled(Box)`
    position: fixed;
    bottom: 0;
    width: 100%;
    margin: 0;
    
    z-index: 999;
`;
const StyledBottomNavigation = styled(BottomNavigation)`
    border-radius: 24px 24px 0 0;
    background: purple;
    backdrop-filter: blur(20px);
    margin: 0px 20px 0px -20px;
    padding: 18px 10px 32px 10px;

`;
const NavigationButton = styled(BottomNavigationAction)`
    border-radius: 18px;
    margin: 4px;
    color: #edeef6;

    &:disabled {
        opacity: 0.6;
        & .MuiBottomNavigationAction-label {
            text-shadow: none;
        }
    }
    
    & .MuiBottomNavigationAction-label {
        font-size: 13px !important;
    }
`;

