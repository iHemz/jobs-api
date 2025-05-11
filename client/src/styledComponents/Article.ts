import styled from "styled-components";

export const JobCardWrapper = styled.article<{ $dark?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  background: ${(props) => (props.$dark ? "#20202c" : "inherit")};
  height: 12rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
  }
`;
