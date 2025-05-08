import styled from "styled-components";

export const Header = styled.header<{ $dark?: boolean }>`
  padding: 0 2rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;
  backdrop-filter: blur(5px);

  div {
    display: flex;
    gap: 8px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 8px;
  }

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
`;
