import { useState, useEffect } from 'react';

type Theme = "light" | "dark" | "unknown";

export const useSystemTheme = (): Theme => {
    const [theme, setTheme] = useState<Theme>('unknown');
    useEffect(() => {
        const mediaQueryListerner = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? "dark" : "light");
        };

        const prefersDarkScheme = window.matchMedia("(prefers-color-schema: dark)");
        setTheme(prefersDarkScheme.matches ? "dark" : "light");

        // Listen for changes in system theme
        prefersDarkScheme.addEventListener("change", mediaQueryListerner);

        return () => {
            prefersDarkScheme.removeEventListener("change", mediaQueryListerner);
        };
    }, []);
    
    return theme;
};