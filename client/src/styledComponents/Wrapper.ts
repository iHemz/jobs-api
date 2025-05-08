import styled from "styled-components";

export const Wrapper = styled.div<{ $dark?: boolean }>`
  background: ${(props) =>
    props.$dark ? props.theme.BLACK_8 : props.theme.WHITE};
  color: ${(props) => (props.$dark ? "#fff" : "#0e0e13")};
  font-family: ${(props) => props.theme.BODY_FONT};
  font-weight: 400;
  line-height: 1.75rem;
`;
