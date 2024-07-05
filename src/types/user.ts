import { EmojiStyle } from "emoji-picker-react";
import { AppTheme } from "../styles/theme";

export type UUID = ReturnType<typeof crypto.randomUUID>;

export type DarkModeOptions = "system" | "auto" | "light" | "dark";
export interface User {
    name: string | null;
    createdAt: Date;
    profilePicture: string | null;
    emojisStyle: EmojiStyle;
    tasks: Task[];
    categories: Category[];
    colorList: string[];
    settings: AppSettings[];
    theme: AppTheme;
    darkmode: DarkModeOptions;
}

export interface Task {
    id: UUID;
    done: boolean;
    pinned: boolean;
    name: string;
    description?: string;
    emoji?: string;
    color: string;
    date: Date;
    deadline?: Date;
    category?: Category[];
    lastSave?: Date;
    sharedBy?: string;
}

export interface Category {
    id: UUID;
    name: string;
    emoji?: string;
    color?: string;
}

export interface AppSettings {
    enableCategories: boolean;
    doneToBottom: boolean;
    enableGlow: boolean;
    simpleEmojiPicker: boolean;
    enableReadAloud: boolean;
    appBadge: boolean;
    voice: string;
    voiceVolume: number;
}