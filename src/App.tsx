// import { AddTask } from "@mui/icons-material";
// import { useContext } from "react";
// import { ProfileSidebar } from "./components/Sidebar";
// import ErrorBoundary from "./components/ErrorBoundary";
// import  AddTask  from "./pages/AddTask";
// import Home from "./pages/Home";
// import { UserProfile } from "./pages/UserProfile";
// import { UserContext } from "./contexts/UserContext";
// import  TasksList  from "./components/tasks/TasksList";
import MainLayout from "./layouts/MainLayout";
import AppRouter from "./router";

function App() {
  // const { user, setUser } = useContext(UserContext);
  // const { tasks } = user;
  return (
    <>
    <MainLayout>
      <AppRouter />
    </MainLayout>
      
    </>
    
  )
}

export default App;