import { useEffect, useState } from "react"

export const useResponsiveDisplay = (breakpoint = 768): boolean => {
    const [isSmallerDevice, setIsSmallerDevice] = useState<boolean>((false));

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallerDevice(window.innerWidth < breakpoint);
        };

        checkScreenSize();
        const handleResize = () => checkScreenSize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [breakpoint]);

    return isSmallerDevice;
};