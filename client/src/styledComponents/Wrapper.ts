import styled from "styled-components";

export const Wrapper = styled.body<{ $dark?: boolean }>`
  background: ${(props) => (props.$dark ? "#0e0e13" : "#fff")};
  color: ${(props) => (props.$dark ? "#fff" : "#0e0e13")};
  font-family: "Cascadia Mono", sans-serif;
  font-weight: 400;
  line-height: 1.75rem;
`;
