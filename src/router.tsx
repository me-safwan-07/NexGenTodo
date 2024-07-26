import { lazy, ReactElement, Suspense } from "react";
import { Route, Routes} from "react-router-dom";

// const UserProfile = lazy(() => import("./pages/UserProfile.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const AddTask = lazy(() => import("./pages/AddTask.tsx"));

const AppRouter = (): ReactElement => {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                {/* <Route path="/user" element={<UserProfile />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddTask /> } />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;