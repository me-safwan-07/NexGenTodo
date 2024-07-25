import  styled  from "@emotion/styled";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
    title: string;
}

export const TopBar = ({ title }: TopBarProps) => {
    // const n = useNavigate();

    return (
        <Container>
            <BakBtn size="large" aria-label="Back" >
                <ArrowIcon />
            </BakBtn>
            <Title>
                {title}
            </Title>
        </Container>
    )
}


const Container = styled.div`
    margin: 0;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 99;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: background 0.3s, color 0.3s;
    margin-bottom: 48px;
`;

const ArrowIcon = styled(ArrowBackIosNewRounded)`
    color: black;
`;

const  Title = styled.h2`
    font-size: 28px;
    margin: 0 auto;
    text-align: center;
    padding: 4px 0 8px 0;
    text-shadow: 0 0 24px #00000068;
`;

const BakBtn = styled(IconButton)`
    position: absolute;
    color:  #000000;
    @media (max-width: 1024px) {
        margin-top: 4px;
    }
`;