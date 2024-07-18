// import { useContext, useEffect } from "react";

import MainLayout from "./layouts/MainLayout";
import AppRouter from "./router";
// import { UserContext } from "./contexts/UserContext";
// import { useResponsiveDisplay } from "./hooks/useResponsiveDisplay" 
import { GlobalStyles } from "./styles";
// import { defaultUser } from "./constants/defaultUser";
import { BottomNav } from "./components"
import { TaskIcon } from "./components";
const App = () => {

  return (
    <>
      <GlobalStyles />
      
      <BottomNav />
      <MainLayout>
        <TaskIcon scale={0.8}/>
        <TaskIcon scale={0.6} variant="error" />
        <TaskIcon scale={0.18} variant="success" />
        <AppRouter />
        
      </MainLayout>
    </>
    
  );
};

export default App;
