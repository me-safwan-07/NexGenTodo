import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Avatar, Chip, ChipProps, styled } from "@mui/material";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { Category } from "../types/user";
// import { categoryFromCategoryConfig } from "emoji-picker-react/dist/config/categoryConfig";

interface CategoryBadgeProps extends ChipProps, StyledBadgeProps {
    category: Category;
    emojiSizes?: [number, number]
}
export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, emojiSizes, ...props}) => {
    	const { user } = useContext(UserContext);
        const { emojisStyle, settings } = user;

        return(
            <StyledCategoryBadge
                key={category.id}
                label={category.name}
                variant="outlined"
                backgroundclr={category.color}
                glow={settings[0].enableGlow}
                translate="no"
                avatar={
                    category.emoji ? (
                        <Avatar 
                            alt={category.name}
                            sx={{
                                background: "transparant",
                                borderRadius: "0px",
                            }}
                        >
                            <Emoji 
                                lazyLoad
                                size={
                                    emojiSizes
                                    ? emojisStyle !== EmojiStyle.NATIVE
                                        ? emojiSizes[0]
                                        : emojiSizes[1]
                                    : 20                                    
                                }
                                unified={category.emoji}
                                emojiStyle={emojisStyle}
                            />
                        </Avatar>
                    ) : undefined
                }
                { ...props}
            />
        );
};

interface StyledBadgeProps {
    backgroundclr?: string;
    borderclr?: string;
    glow?: boolean;
    list?:boolean | string;
}

export const StyledCategoryBadge = styled(Chip)<StyledBadgeProps>``;