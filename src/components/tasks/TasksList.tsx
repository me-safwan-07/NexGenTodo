import styled from "@emotion/styled";
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TaskContext } from "../../contexts/TaskContext";
import { Category, UUID } from "../../types/user";

import {
    TaskContainer,
    DialogBtn,
    NoTasks,
    SearchInput, 
    SearchClear,  
    CategoriesListContainer, 
    // DialogBtn,
    SelectedTasksContainer,
    StyledRadio,
    RadioUnchecked,
    RadioChecked,
    EmojiContainer,
    Pinned,
    TaskInfo,

} from "./Tasks.styled";
import {
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    InputAdornment,
    Tooltip
} from "@mui/material";
import { 
    Close, 
    Search,
    Delete,
    DeleteRounded,
    RadioButtonChecked,
    DoneAll,
    CancelRounded,
    DoneRounded,
    Task,
    PushPinRounded, 
} from "@mui/icons-material";

import { Categories, Emoji } from "emoji-picker-react";
import { CategoryBadge } from "../CategoryBadge";
import { getFontColor } from "../../utils";
import { TaskIcon } from "../TaskIcon";
import { TaskMenu } from "./TaskMenu";

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
        // setDeleteDialogOpen,
        handleCloseMoreMenu
    } = useContext(TaskContext);
    const open = Boolean(anchorE1);

    const [deleteSelectedOpen, setDeleteDialogOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<Category[] | undefined>(undefined);
    const [ categoryCounts, setCategoryCounts] = useState<{
        [categoryId: UUID]: number;
    }>({});
    return (
        <>
            <TaskMenu />
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
                    {categories?.map((cat) => (
                        <CategoryBadge 
                            key={cat.id}
                            category={cat}
                            emojiSizes={[24,20]}
                            list={"true"}
                            label={
                                <div>
                                    <span style={{ fontWeight: "bold" }}>
                                        {cat.name}
                                    </span>
                                    <span 
                                        style={{
                                            fontSize: "14px",
                                            opacity: 0.9,
                                            marginLeft: "4px"
                                        }}
                                    >
                                        ({categoryCounts[cat.id]})
                                    </span>
                                </div>
                            }
                        />
                    ))}
                    {/* <CategoryBadge 
                        category={cat}
                        emojiSizes={[24, 20]}
                        list={"true"}
                    /> */}
                </CategoriesListContainer>
                <SelectedTasksContainer>
                    <div className="">
                        <h3>
                            <RadioButtonChecked /> &nbsp; Selected {""} task   
                        </h3>
                        <span></span>   
                    </div>
                    {/* TODO: add more features */}
                    <div>
                        <Tooltip title="Mark selected as done">
                            <IconButton 
                                // sx={{ color: getFontColor(theme.secondary)}}
                                size="large"
                                onClick={(e) => {e}}
                            >
                               <DoneAll />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete selected">
                            <IconButton color="error" size="large" >
                                <Delete />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="cancel">
                            <IconButton size="large" >
                                <CancelRounded />
                            </IconButton>
                        </Tooltip>
                    </div>
                </SelectedTasksContainer>
                <div
                        style={{
                            textAlign: "center",
                            fontSize: "18px",
                            opacity: 0.9,
                            marginTop: "12px",
                        }}
                    >
                        <b>Found {""} task</b>
                    </div>
                    <TaskContainer>
                        <StyledRadio 
                            checked
                            icon={<RadioUnchecked />}
                            checkedIcon={ <RadioChecked />}
                        />
                        <EmojiContainer>
                            <DoneRounded fontSize="large" />
                            {/* <Emoji 
                                unified={task.emoji || ""}
                                emojiStyle={user.emojisStyle}
                                lazyLoad
                            /> */}
                        </EmojiContainer>
                        <TaskInfo translate="no">
                            <Pinned translate="yes">
                                <PushPinRounded fontSize="small"/> &nbsp; Pinned
                            </Pinned>
                            {/* <TaskHeader>
                                <TaskName></TaskName>
                                <Tooltip title={new Intl.DateTimeFormat(navigator.language, {
                                    dateStyle: "full",
                                    timeStyle: "medium",
                                }).format(new Date(task.date))}>
                                    <TaskDate>{formatDate(new Date(task.date))} 
                                    </TaskDate>
                                </Tooltip>
                            </TaskHeader> */}
                        </TaskInfo>
                    </TaskContainer>
                    <NoTasks>
                        <b>You don't have any taskss yet</b>
                        <br />
                        Click on the <b>+</b> button to add one
                    </NoTasks>
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "20px",
                            opacity: 0.9,
                            marginTop: "18px"
                        }}
                    >
                        <b>NO tasks found</b>
                        <br />
                        Try searching with diffrent keywords.
                        <div style={{ marginTop: "14px"}}>
                            <TaskIcon scale={0.8} />
                        </div>
                    </div>
                    {/* <EditTask /> */}
            </TaskContainer>
            <Dialog open={deleteDialogOpen}>
                <DialogContent>
                    <p>
                        <b>Emoji:</b>{" "}
                        {/* <Emoji /> */}
                    </p>
                    <p>
                        <b>Task Name:</b> <span></span>
                    </p>
                </DialogContent>
                <DialogActions>
                    <DialogBtn color="primary">
                        Cancel
                    </DialogBtn>
                    <DialogBtn>
                    <DeleteRounded /> &nbsp; Delete
                    </DialogBtn>
                </DialogActions>
            </Dialog>
        </>
    );
};

