import styled from "@emotion/styled";
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TaskContext } from "../../contexts/TaskContext";
import { Category } from "../../types/user";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Close, Search } from "@mui/icons-material";
import { Categories } from "emoji-picker-react";
import { CategoryBadge } from "../CategoryBadge";

export const TasksList : React.FC = () => {
    const { user, setUser } = useContext(UserContext); 
    const {
        selectedTaskId,
        setSelectedTaskId,
        anchorE1,
        setAnchorE1,
        anchorPosition,
        setAnchorPosition,
        expandedTasks,
        setExpandedTasks,
        toggleShowMore,
        search,
        setSearch,
        highlightMatchingText,
        multipleSelectedTasks,
        setMultipleSelectedTasks,
        handleSelectTask,
        editModalOpen,
        setEditModalOpen,
        handleDeleteTask,
        deleteDialogOpen,
        setDeleteDialogOpen,
        handleCloseMoreMenu
    } = useContext(TaskContext);

    const open = Boolean(anchorE1);

    // const [deleteSelectedOpen, setDeleteDialogOpen] = useState<boolean>(false);
    // const [categories, setCategories] = useState<Category([] | undefined>)(undefined);

    return (
        <>
            {/* <TaskMenu /> */}
            <TaskContainer>
                <SearchInput 
                    focused
                    color="primary"
                    placeholder="Search for task..."
                    autoComplete="off"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search sx={{ color: "white" }} />
                            </InputAdornment>
                        ),
                        endAdornment: search ? (
                            <InputAdornment position="end">
                                <SearchClear 
                                    color={
                                        user.tasks.length > 0
                                        ? "error"
                                        : "default"
                                    }
                                >
                                    <Close />
                                </SearchClear>
                            </InputAdornment>
                        ) : undefined,
                    }}
                />
                <CategoriesListContainer>
                    <CategoryBadge 
                        category={}
                        emojiSizes={[24, 20]}
                        list={"true"}
                    />
                </CategoriesListContainer>
            </TaskContainer>
        </>
    );
};

const TaskContainer = styled.div``;
const SearchInput = styled(TextField)``;
const SearchClear = styled(IconButton)``;
const CategoriesListContainer = styled.div``;