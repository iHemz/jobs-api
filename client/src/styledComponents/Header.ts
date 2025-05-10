import styled from "styled-components";

export const Header = styled.header<{ $dark?: boolean; $isApp?: boolean }>`
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

  @media screen and (min-width: 1024px) {
    & {
      justify-content: ${(props) =>
        props.$isApp ? "flex-end" : "space-between"};
    }
  }
`;
