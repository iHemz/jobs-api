import styled from "styled-components";

export const Main = styled.main<{
  $dark?: boolean;
  $isApp?: boolean;
  $isAuth?: boolean;
}>`
  padding: 2rem;
  width: 100%;
  margin-top: ${(props) => (props.$isAuth ? "5rem" : 0)};
`;
