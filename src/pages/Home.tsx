import { GreetingHeader, TaskCompletionText, TaskCountTextContainer} from "../styles";
// import { } from "@mui/icons-material";
import { displayGreeting, getRandomGreeting, getTaskCompletionText} from "../utils";

const Home = () => {
    const completedTaskPercentage = 100;
    // const isMobile = useResponsiveDisplay();
    return (
        <>
            <GreetingHeader>
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

