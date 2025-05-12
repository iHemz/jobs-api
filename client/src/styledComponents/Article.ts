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

export const JobDetailWrapper = styled.article<{ $dark?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  background: ${(props) => (props.$dark ? "#20202c" : "inherit")};

  .detail-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: fit-content;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  .avatar {
    background: ${(props) => (props.$dark ? props.theme.BLACK_8 : "#20202c")};
    color: white;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .btns {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .title-with-icon {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: fit-content;
  }

  .detail-body {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;
