import styled from "styled-components";

export const ImageWrapper = styled.img`
  width: ${(props) => (props?.width ? props?.width : "40px")};
  height: ${(props) => (props?.height ? props?.height : "40px")};
  object-fit: cover;
`;
