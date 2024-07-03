import { Global, css } from "@emotion/react"
export const GlobalStyles = () => {
    return (
        <Global styles={css`
            * {
                font-weight: "Poppins, sans-serif !important;
            }  
        `} />
    )
}