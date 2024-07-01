import styled from "@emotion/styled";
import { ArrowBackIosNewRounded } from "@mui/icons-material"
interface TopBarProps {
    title: string;
}

export const TopBar = ({ title}: TopBarProps) => {
    
    return (
        <Container>
            <BackBtn>
                <ArrowBackIosNewRounded />
            </BackBtn>
            <TiTle>{title}</TiTle>
        </Container>
    )
}

const Container = styled.div`
    margin: 0;
    width: 100%;
    position: sticky;
    top:0;
`
const TiTle = styled.h2`
    font-size: 28px;
    margin: 0 auto;
    text-align: center;
    padding: 4px 0 px 0;
`
const BackBtn = styled.div`
    posotion: absolute;
    @media (max-width: 1024px) {
        margin-top: 4px;
    }
`