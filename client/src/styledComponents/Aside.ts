import styled from "styled-components";

export const Aside = styled.aside<{ $dark?: boolean }>`
  padding: 0.1rem 1rem;
  background: ${(props) =>
    props.$dark ? "rgba(26, 26, 36, 0.95)" : props.theme.PRIMARY_0};
  height: 100vh;
  width: 320px;
  position: fixed;
  top: 0;
  left: 0;
  transition: ${(props) => props.theme.TRANSITION};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  translate: -100% 0;

  nav {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;

    .navlink {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: ${(props) =>
        props.$dark ? props.theme.WHITE : props.theme.BLACK};
      transition: ${(props) => props.theme.TRANSITION};

      &:not(.active):hover {
        opacity: 0.7;
        scale: 1.01;
      }

      &.active {
        color: ${(props) => props.theme.PRIMARY_6};
        text-shadow: 0 0 4px black;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    translate: 0 0;
  }
`;
