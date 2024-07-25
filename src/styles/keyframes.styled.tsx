import { keyframes } from "@emotion/react";

export const pulseAnimation = (clr?: string, shadowBlur: number = 12) => keyframes`
0% {
   transform: scale(0.95);
   box-shadow: 0 0 0 0 ${clr}b2;
}
70% {
    transform: scale(1);
    box-shadow: 0 0 0 ${shadowBlur}00;
}
100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 ${clr}00;
}
`;