import styled from "styled-components";

export const Footer = styled.footer<{ $dark?: boolean }>`
  padding: 0.75rem 2rem;
  place-items: center;

  nav {
    display: flex;
    gap: 8px;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;
