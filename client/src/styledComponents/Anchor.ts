import styled from "styled-components";

export const Anchor = styled.a`
  padding: 8px 12px;
  text-decoration: none;
  background: ${(props) => props.theme.PRIMARY_6};
  color: ${(props) => props.theme.BLACK};
  transition: ${(props) => props.theme.TRANSITION};
  border: none;

  &:hover {
    background: ${(props) => props.theme.PRIMARY_3};
    scale: 1.05;
  }
`;
