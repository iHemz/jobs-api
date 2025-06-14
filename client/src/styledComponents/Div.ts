import type { JobStatus } from "@/types/jobs";
import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
`;

export const StatusBox = styled.div<{ $status?: JobStatus }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.$status === "pending"
      ? "#ffeb3b"
      : props.$status === "interview"
      ? "#ff9800"
      : "#f44336"};
  color: ${(props) =>
    props.$status === "pending"
      ? "#20202c"
      : props.$status === "interview"
      ? "#20202c"
      : "white"};
`;
