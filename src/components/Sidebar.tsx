import styled from "@emotion/styled";
import {
    AddRounded
} from "@mui/icons-material"
import { MenuItem } from "@mui/material"
import logo from "../assets/logo256.png";

const profileSidebar = () => {
    return(
        <Container>
            <LogoContainer>
                <Logo src={logo} alt="logo"/>
                <LogoText>
                    <span>Todo</span>
                    <span>.</span>
                </LogoText>
            </LogoContainer>
            <StyledMenuItem>
                <AddRounded /> &nbsp; Add Task
            </StyledMenuItem>
           
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    right: 16vw;
    top: 14px;
    z-index: 900;
    @media(max-width: 1024px) {
        right: 16px;
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
        color: #232e58}; //my color;
    }
`;

const StyledMenuItem = styled(MenuItem)`
    padd
`

export default profileSidebar;