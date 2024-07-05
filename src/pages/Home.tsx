// import { GreetingHeader, TaskCompletionText, TaskCountTextContainer} from "../styles";
// import { } from "@mui/icons-material";
import { useContext } from "react";
import { 
    displayGreeting,
    getRandomGreeting, 
    getTaskCompletionText
} from "../utils";
import { Emoji } from "emoji-picker-react";
// import { UserContext } from "../contexts/UserContext"

const Home = () => {
    // const { user } = useContext(UseContext);
    // const { tasks, emojiStyle, setting, name } = user;
    const completedTaskPercentage = 100;
    // const isMobile = useResponsiveDisplay();
    return (
        <>
            <GreetingHeader>
                <Emoji unified="1f446" /> &nbsp; {displayGreeting()}
                {/* {name && (
                    <span translate="no">
                        , <span> {name} </span>
                    </span>
                )} */}
                <span>{displayGreeting()} safwan</span>
                <p>{getRandomGreeting()}</p>
            </GreetingHeader>
            <TaskCountTextContainer>
                <TaskCompletionText>
                    {getTaskCompletionText(completedTaskPercentage)}
                </TaskCompletionText>
            </TaskCountTextContainer>
        </>
    )
}

 export default Home;

import styled from "@emotion/styled";
// import { Button } from "@mui/material";

export const TaskCountTextContainer = styled.div`
    line-height: 1.7;
    margin-left: 6px;
`
 const GreetingHeader = styled.div`
    display: flex;
    margin-top: 12px;
    font-size: 26px;
    font-weight: bold;
    margin-top: 16px;
    margin-left: 8px;
    color: white;
    @media (max-width: 550px) {
        font-size: 22px;
    }
`;

//  const AddButton = styled(Button)<{ animate?: boolean; glow: boolean }>`
//     cursor: pointer;
//     border: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: fixed;
//     bottom: 24px;
//     width: 72px;
//     border-radius: 100%;
// `;

 const TaskCompletionText = styled.p`
    margin: 0;
    font-size: 16px;
`