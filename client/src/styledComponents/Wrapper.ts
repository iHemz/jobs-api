import styled from "styled-components";

export const Wrapper = styled.div<{
  $dark?: boolean;
  $aside?: boolean;
  $asideWidth?: number;
}>`
  background: ${(props) =>
    props.$dark ? props.theme.BLACK_8 : props.theme.WHITE};
  color: ${(props) => (props.$dark ? "#fff" : "#0e0e13")};
  font-family: ${(props) => props.theme.BODY_FONT};
  font-weight: 400;
  line-height: 1.75rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: ${(props) => props.theme.TRANSITION};

  .logo {
    font-family: ${(props) => props.theme.HEADING_FONT};
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${(props) => props.theme.PRIMARY_6};
    text-shadow: 0 0 4px black;
    font-size: 1.2rem;
    transition: ${(props) => props.theme.TRANSITION};

    &:hover {
      filter: blur(1px);
      opacity: 0.95;
      scale: 1.01;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      margin-left: ${(props) => (props.$aside ? props.$asideWidth : 0)}px;
    }

    .logo.app {
      display: none;
    }
  }
`;
