import styled from "styled-components";

export const Form = styled.form<{ $isDark?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    margin-top: 20px;
    padding-block: 14px;
    border-radius: 8px;
  }

  button:hover {
    scale: 1;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  }

  p {
    text-align: center;

    a {
      margin-left: 4px;
      text-decoration: none;
      color: ${(props) => props.theme.PRIMARY_9};
      transition: ${(props) => props.theme.TRANSITION};
      position: relative;
    }

    a:active {
      color: ${(props) => props.theme.PRIMARY_9};
    }

    a:hover {
      color: ${(props) => props.theme.PRIMARY_8};
    }
  }

  fieldset {
    border-color: ${(props) =>
      props.$isDark ? "rgba(255,255,255, 0.2)" : props.theme.BLACK};
  }

  .auth-input,
  input,
  .auth-input ul li {
    color: ${(props) =>
      props.$isDark ? props.theme.WHITE : props.theme.BLACK};
  }

  label {
    color: ${(props) =>
      props.$isDark ? "rgba(255,255,255, 0.2)" : "rgba(0, 0, 0, 0.4)"};
  }

  &.form-center {
    width: 100%;
    place-self: center;
  }

  @media screen and (min-width: 640px) {
    &.form-center {
      width: 80%;
    }
  }

  @media screen and (min-width: 1024px) {
    &.form-center {
      width: 60%;
    }
  }

  @media screen and (min-width: 1440px) {
    &.form-center {
      width: 40%;
    }
  }
`;
