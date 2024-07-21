import { useTheme } from "@emotion/react";
import { useResponsiveDisplay } from "../hooks/useResponsiveDisplay"
import { Toaster } from "react-hot-toast";
import { ColorPalette } from "../theme/themeConfig";
// import { getFontColor } from "../utils/getFontColor";
export const CustomToaster = () => {
    const isMobile = useResponsiveDisplay();
    const theme = useTheme;

    return (
        <Toaster 
            position="top-center"
            reverseOrder={false}
            gutter={12}
            containerStyle={{
                marginBottom: isMobile ? "96px" : "12px",
            }}
            toastOptions={{
                position: "bottom-center",
                duration: 4000,
                style: {
                    padding: "14px 22px",
                    borderRadius: "18px",
                    fontSize: "17px",
                    border: "2px solid",
                    background: "#ffffff99",
                    color: ColorPalette.fontDark,
                    WebkitBackdropFilter: `blur(14px)`,
                    backdropFilter: "blur(14px)"
                },
                success: {
                    iconTheme: {
                        primary: ColorPalette.purple,
                        secondary: "white",
                    },
                },
                error: {
                    iconTheme: {
                        primary: ColorPalette.red,
                        secondary: "white",
                    },
                    style: {
                        borderColor: ColorPalette.red,
                    },
                },
            }}
        />
    );
};