// import { AddTask } from "@mui/icons-material";
// import { useContext } from "react";
// import { ProfileSidebar } from "./components/Sidebar";
// import  AddTask  from "./pages/AddTask";
// import Home from "./pages/Home";
// import { UserProfile } from "./pages/UserProfile";
// import { UserContext } from "./contexts/UserContext";
// import  TasksList  from "./components/tasks/TasksList";
import AppRouter from "./router";

function App() {
  // const { user, setUser } = useContext(UserContext);
  // const { tasks } = user;
  return (
    <>
      {/* <ProfileSi/debar /> */}

      {/* <div className="">
        {/* {user.tasks.length > 0 && (
          
        )} */}
      {/* </div> */}
      {/* <Home />
      <UserProfile /> */}
      {/* <AddTask />
      <TasksList /> */}
      <AppRouter />
    </>
    
  )
}

export default App;