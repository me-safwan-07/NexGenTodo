import { GreetingHeader, TaskCompletionText, TaskCountTextContainer} from "../styles";
// import { } from "@mui/icons-material";
import { 
    displayGreeting,
    getRandomGreeting, 
    getTaskCompletionText
} from "../utils";
import { Emoji } from "emoji-picker-react";
import { UserContext } from "../"

const Home = () => {
    const { user } = useContext(UseContext);
    const { tasks, emojiStyle, setting, name } = user;
    const completedTaskPercentage = 100;
    // const isMobile = useResponsiveDisplay();
    return (
        <>
            <GreetingHeader>
                <Emoji unified="1f446" /> &nbsp; {displayGreeting()}
                {name && (
                    <span translate="no">
                        , <span> {name} </span>
                    </span>
                )}
                {/* <span>{displayGreeting()} safwan</span>
                <p>{getRandomGreeting()}</p> */}
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

