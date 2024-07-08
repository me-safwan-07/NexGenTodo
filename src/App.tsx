// import { useContext, useEffect } from "react";

import MainLayout from "./layouts/MainLayout";
import AppRouter from "./router";
// import { UserContext } from "./contexts/UserContext";
// import { useResponsiveDisplay } from "./hooks/useResponsiveDisplay" 
import { GlobalStyles } from "./styles";
// import { defaultUser } from "./constants/defaultUser";
import { BottomNav } from "./components"

const App = () => {

  return (
    <>
      <GlobalStyles />
      <BottomNav />
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </>
    
  );
};

export default App;
