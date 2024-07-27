import { ReactNode } from "react";
import { ProfileSidebar } from "../components/Sidebar";
import { BottomNav } from "../components/BottomNav";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return(
        <>
            {/* <ProfileSidebar /> */}
            {children}
            <div style={{ marginTop: "128px"}}/>
            <BottomNav />
        </>
    )
};

export default MainLayout;