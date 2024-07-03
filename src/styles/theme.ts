import { createTheme } from "@mui/material";
import { Theme } from "@mui/material";

export const ColorPalette = {
    fontDark: "#101727",
    fontLight: "#f0f0f0",
    purple: "#b624ff",
    red: "#ff3131",
    orange: "#ff9318",
} as const;

export type AppTheme = string;

type ThemeConfig = {
    [key: AppTheme]: {
        primaryColor: string;
        secondaryColor: string;
    };
};

const themeConfig: ThemeConfig = {
    Purple: {
        // Default dark theme
        primaryColor: ColorPalette.purple,
    },
    "Light Purple": {
        // Default light theme
        primaryColor: ColorPalette.purple,
        secondaryColor: '#edeef6',
    },
    Blue: {
        // Default light theme
        primaryColor: "#2a93d5",
    },
    "Minty Fresh": {
        primaryColor: "#26C6DA";
    }
}