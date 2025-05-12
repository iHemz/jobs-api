import styled from "styled-components";

export const Button = styled.button<{ $isIcon?: boolean }>`
  padding: 8px 12px;
  text-decoration: none;
  background: ${(props) => props.theme.PRIMARY_6};
  color: ${(props) => props.theme.BLACK};
  transition: ${(props) => props.theme.TRANSITION};
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.$isIcon && "1.2rem"};

  &:hover {
    background: ${(props) => props.theme.PRIMARY_3};
    scale: 1.05;
  }
`;

export const SuccessButton = styled(Button)`
  background: ${(props) => props.theme.GREEN_LIGHT};
  color: ${(props) => props.theme.GREEN_DARK};

  &:hover {
    background: ${(props) => props.theme.GREEN_DARK};
    color: ${(props) => props.theme.GREEN_LIGHT};
  }
`;

export const DangerButton = styled(Button)`
  background: ${(props) => props.theme.RED_LIGHT};
  color: ${(props) => props.theme.RED_DARK};

  &:hover {
    background: ${(props) => props.theme.RED_DARK};
    color: ${(props) => props.theme.RED_LIGHT};
  }
`;
