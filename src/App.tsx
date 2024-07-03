import React, { useContext } from "react";

import MainLayout from "./layouts/MainLayout";
import AppRouter from "./router";
import { UserContext } from "./contexts/UserContext";
import { useResponsiveDisplay } from "./hooks/useResponsiveDisplay" 
import { GlobalStyles } from "./styles";
const App = () => {
  // const { user, setUser } = useContext(UserContext);
  const isMobile = useResponsiveDisplay();
  // const sysytemTheme = useSystemTheme();
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
};

export default App;
