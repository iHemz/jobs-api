import { keyframes } from "styled-components";

export const rotateAnim = keyframes`
  from {
    rotate: 0deg;
    scale: 1
  }

  25% {
    scale: 0.7
  }

  to {
    rotate: 360deg;
    scale: 1
  }
`;
