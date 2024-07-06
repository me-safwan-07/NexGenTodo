import { useEffect, useContext, useState} from 'react';
import { useTheme } from "@emotion/react";
import { UserContext } from "../contexts/UserContext";
import { useStorageState } from "../hooks/useStrorageState";
import { useNavigate } from "react-router-dom";
import { CATEGORY_NAME_MAX_LENGTH } from '../constants';
import { TopBar, CustomEmojiPicker } from '../components';
import { Category } from '@mui/icons-material';
import styled from '@emotion/styled';
import { Emoji } from 'emoji-picker-react';
import { Tooltip } from '@mui/material';

const Categories = () => {
    const { user, setUser } = useContext(UserContext);
    const theme  = useTheme();

    const [name, setName] = useStorageState<string>("", "catName", "sessionStorage");
    const [nameError, setNameError] = useState<string>("");
    const [emoji, setEmoji] = useStorageState<string | null>(null, "catEmoji", "sessionStorage");
    const [color, setColor] = useStorageState<string | null>(null, "catColor", "sessionStorage");

    const n = useNavigate();

    useEffect(() => {
        document.title = "Todo App - Categories";
        if(!user.settings[0].enableCategories) {
            n("/");
        }
        if(name.length > CATEGORY_NAME_MAX_LENGTH)  {
            setNameError(`Name is too long maximum ${CATEGORY_NAME_MAX_LENGTH} character`);
        }
    }, [n, name.length, user.settings]);

    return (
        <>
            <TopBar title='Category' />
            <CategoriesContainer>
                {user.categories.length > 0 ? (
                    <CategoryElementsContainer>
                        {user.categories.map((category) => {
                            const categoryTasks = user.tasks.filter((task) => {
                                task.category?.some((cat) => cat.id === category.id)
                            });

                            const completedTaskCount = categoryTasks.reduce(
                                (count, task) => (task.done ? count + 1 : count),0
                            );
                            const totalTaskCount = categoryTasks.length;

                            const completionPercentage = 
                                totalTaskCount > 0 ? Math.floor((completedTaskCount / totalTaskCount) * 100): 0;

                            const displayPercentage = totalTaskCount > 0 ? `(${completionPercentage}%)` : "";
                            return (
                                <CategoryElement key={category.id} clr={category.color}>
                                    <CategoryContent translate="no">
                                        <span>
                                            {category.emoji && (
                                                <Emoji unified={category.emoji} emojiStyle={user.emojisStyle} />
                                            )}
                                        </span>
                                        &nbsp;
                                        <span style={{ wordBreak: "break-all", fontWeight: 600 }}>{category.name}</span>
                                        {totalTaskCount > 0 && (
                                            <Tooltip title="The percentage of completion of tasks assigned to this category">
                                                <span style={{ opacity: 0.8, fontStyle: "italic"}}>
                                                    {displayPercentage}
                                                </span>
                                            </Tooltip>
                                        )}
                                    </CategoryContent>
                                </CategoryElement>
                            )
                        })}
                    </CategoryElementsContainer>
                ) : (
                    <p> You don't have any categories</p>
                )}
                <AddContainer>
                    <h2>Add New Category</h2>
                    <CustomEmojiPicker
                        // emoji={typeof emoji === "string" ? emoji : undefined}
                        // setEmoji={setEmoji}
                        // color={color}
                    />
                </AddContainer>
            </CategoriesContainer>
        </>
    )
};

export default Categories;

const CategoriesContainer = styled.div``;
const CategoryElement = styled.div<{ clr: string }>``;
const CategoryElementsContainer = styled.div``;
const CategoryContent = styled.div``;
const AddContainer = styled.div``