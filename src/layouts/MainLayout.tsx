import { ReactNode } from "react";
import { ProfileSidebar } from "../components";

interface MainLayoutProps {
    children: ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <ProfileSidebar />
            {children}
            <div style={{ marginTop: "128px"}} />
        </>
    )
}

export default MainLayout;