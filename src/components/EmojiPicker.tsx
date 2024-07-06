import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Badge } from "@mui/material"
import { Edit } from "@mui/icons-material"
import { Avatar } from "@mui/material";
import { CSSProperties, Dispatch, lazy, SetStateAction, useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";


const EmojiPicker = lazy(() => import("emoji-picker-react"));
interface EmojipiPickerProps {
    emoji?: string;
    setEmoji: Dispatch<SetStateAction<any>>;
    color?: string;
    width?: CSSProperties["width"];
}

export const CustomEmojiPicker = ({ emoji, setEmoji, color, width }: EmojipiPickerProps) => {
    const { user, setUser } = useContext(UserContext);
    // const { emojisStyle, settings } = user;
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    // const [currentEmoji, setCurrentEmoji] = usestate<string | null>(emoji || null);

    // const isOnline = useOnlineStaus();
    const emotionTheme = useTheme();

    interface EmojiItem {
        unified: string;
        original: string;
        count: number;
    }

    const getFrequentlyUsedEmojis = (): string[] => {
        const frequentlyUsedEmojis: EmojiItem[] | null = JSON.parse(
            localStorage.getItem("epr_suggested") || "null"
        );

        if(!frequentlyUsedEmojis) {
            return [];
        }

        frequentlyUsedEmojis.sort((a: EmojiItem, b: EmojiItem) => b.count - a.count);
        const topEmojis: EmojiItem[] = frequentlyUsedEmojis.slice(0,6);
        const topUnified: string[] = topEmojis.map((item: EmojiItem) => item.unified);

        return topUnified;
    }
    return (
        <>
            <EmojiContainer>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={
                        <Avatar 
                            sx={{
                                background: "#9c9c9c81",
                                backdropFilter: "blur(6px)",
                                cursor: "pointer",
                            }}
                        >
                            <Edit />
                        </Avatar>
                    }
                >
                    <Avatar 
                        sx={{
                            width: "960px",
                            height: "96px",
                            // background: color || emotionTheme.primary,
                            transition: ".3s all",
                            cursor: "pointer",
                        }}
                    >
                        {/* {renderAvatarContent()} */}
                    </Avatar>
                </Badge>
                
            </EmojiContainer>
        </>
    )
};

const EmojiContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 14px;
`;