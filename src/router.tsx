import { ReactElement, Suspense } from "react";
import { Route, Routes} from "react-router-dom";
import { BottomNav } from "./components/BottomNav";

const AppRouter = (): ReactElement => {
    return (
        <Suspense >
            <Routes>
                <Route path="/home" element={<BottomNav />} />
            </Routes>
        </Suspense>
    )
};

export default AppRouter;