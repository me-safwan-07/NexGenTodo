// import React from "react"
// import AppRouter from "./router";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
const App = () => {
  return(
    <>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  )
}

export default App;