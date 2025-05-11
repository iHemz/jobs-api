import styled from "styled-components";

export const Main = styled.main<{ $dark?: boolean; $isApp?: boolean }>`
  padding: 2rem;
  width: 100%;
  margin-top: ${(props) => (props.$isApp ? 0 : "5rem")};
`;
