import { ThemeProvider as EmotionTheme } from "@emotion/react";
import { ThemeProvider, type Theme } from "@mui/material";
import { createCustomTheme, Themes } from "./theme/theme";
import { useCallback, useContext } from "react";
import { useSystemTheme } from "./hooks/useSystemTheme";
import { UserContext } from "./contexts/UserContext";
import { ColorPalette } from "./theme/themeConfig";
import { getFontColor } from "./utils/getFontColor";
import { GlobalStyles } from "./styles/globalStyles";
import { CustomToaster } from "./components/Toaster";
function App() {
  const { user, setUser } = useContext(UserContext);
  const systemTheme = useSystemTheme();

  // const getMuiTheme = useCallback((): Theme => {
  //   if (systemTheme === "unknown") {
  //     return Themes[0].MuiTheme;
  //   }
  //   if (user.theme === "system") {
  //     return systemTheme === "dark" ? Themes[0].MuiTheme : Themes[1].MuiTheme;
  //   }
  //   const selectedTheme = Themes.find((theme) => theme.name === user.theme);
  //   return selectedTheme ? selectedTheme.MuiTheme : Themes[0].MuiTheme;
  // }, [systemTheme, user.theme]);

  const isDarkMode = (): boolean => {
    switch (user.darkmode) {
      case "light":
          return false;
      case "dark":
        return true;
      case "system":
        return systemTheme === "dark";
      case "auto":
          // return getFontColor(getMuiTheme().palette.secondary.main) === ColorPalette.fontLight;
          return false;
    }
  };

  return (
    <ThemeProvider
      theme={createCustomTheme(
        // getMuiTheme().palette.primary.main,
        // getMuiTheme().palette.secondary.main,
        isDarkMode() ? "dark" : "light"
      )}
    >
      <EmotionTheme
        theme={createCustomTheme(
          // getMuiTheme().palette.primary.main,
          // getMuiTheme().palette.secondary.main,
          isDarkMode()? "dark" : "light"
        )}
      >
        <GlobalStyles />
        <CustomToaster />
      </EmotionTheme>
    </ThemeProvider>
  )
}

export default App;