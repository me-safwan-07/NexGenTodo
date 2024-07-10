// import { GreetingHeader, TaskCompletionText, TaskCountTextContainer} from "../styles";
// import { } from "@mui/icons-material";
import React, { useContext,lazy, ReactNode, useState, Suspense } from "react";
import { 
    displayGreeting,
    // getRandomGreeting, 
    getTaskCompletionText
} from "../utils";
import { Emoji } from "emoji-picker-react";
import { UserContext } from "../contexts/UserContext";
// import { TasksList } from "../components";
import styled from "@emotion/styled";
// import { TaskProvider } from "../contexts/TaskContext";
import { TasksList } from "../components";
// // import { Button } from "@mui/material";

// const TasksList = lazy(() => 
//     import("../components/tasks/TasksList").then((module) => ({ default: module.TasksList}))
// );
const Home = () => {
    const { user } = useContext(UserContext);
    const { name } = user;
    const [randomGreeting, setRandomGreetin] = useState<string | ReactNode>("");
    const [greetingKey, setGreetingKey] = useState<number>(0);

    const completedTaskPercentage = 100;
    // const isMobile = useResponsiveDisplay();

    const replaceEmojiCodes = (text: string) : ReactNode[] => {
        const emojiRegex = /\*\*(.*?)\*\*/g;
        const parts = text.split(emojiRegex);

        return parts.map((part, index) => {
            if(index % 2 === 1) {
                // It's an emoji code, render, Emoji component
                const emojiCode = part.trim();
                return <Emoji key={index} size={20} unified={emojiCode} />;
            } else {
                // It's regular text
                return part;
            }
        });
    };

    const renderGreetingWithEmojis = (text: string | ReactNode) => {
        if(typeof text === "string") {
            return replaceEmojiCodes(text);
        } else {
            return text;
        }
    }
    return (
        <>
            <GreetingHeader>
                <Emoji unified="1f446" /> &nbsp; {displayGreeting()}
                {name && (
                    <span translate="no">
                        , <span> {name} </span>
                    </span>
                )}
            </GreetingHeader>
            <GreetingText key={greetingKey}>{renderGreetingWithEmojis(randomGreeting)}</GreetingText>
                {/* <span>{displayGreeting()} safwan</span>
                <p>{getRandomGreeting()}</p> */}
            
            <TaskCountTextContainer>
                <TaskCompletionText>
                    {getTaskCompletionText(completedTaskPercentage)}
                </TaskCompletionText>
            </TaskCountTextContainer>

            <Suspense fallback={<div>Loading...</div>}>
                        <TasksList />
            </Suspense>
        </>
    )
}

 export default Home;



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

const GreetingText = styled.div``