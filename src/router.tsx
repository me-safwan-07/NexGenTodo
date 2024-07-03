import { ReactElement, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components"
 
const Home = lazy(() => import('./pages/Home'));
const AddTask = lazy(() => import('./pages/AddTask'));
const TaskDetails = lazy(() => import('./pages/TaskDetails'));

const AppRouter = () : ReactElement => {
    return(
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/task" element={<TaskDetails />} />
                <Route path="/add" element={<AddTask />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;