import { Global, css, useTheme } from "@emotion/react"

export const GlobalStyles = () => {
    const theme = useTheme();

    return(
        <Global 
            styles={css`
                * {
                    font-family: "Poppins", sans-serif !important;
                    -webkit-tap-highlight-color: transparent;
                }
            `}
        />
    );
};