import { Global, css } from "@emotion/react"

 const GlobalStyles = () => {
    // const theme = useTheme();

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

export default GlobalStyles;