// import { useContext, useEffect } from "react";

import MainLayout from "./layouts/MainLayout";
import AppRouter from "./router";
// import { UserContext } from "./contexts/UserContext";
// import { useResponsiveDisplay } from "./hooks/useResponsiveDisplay" 
import { GlobalStyles } from "./styles";
// import { defaultUser } from "./constants/defaultUser";


const App = () => {

  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </>
    
  );
};

export default App;
