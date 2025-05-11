import { rotateAnim } from "@/styledComponents";
import styled from "styled-components";

export const Section = styled.section<{ $dark?: boolean }>`
  min-height: calc(100vh - 5rem);
`;

export const HeroSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
  text-align: center;

  div {
    padding: 20px;
    place-content: center;
    place-items: center;
    overflow: hidden;
  }

  img {
    object-fit: fill;
    scale: 0.85;
    animation: ${rotateAnim} 5s linear infinite;
  }

  button {
    padding: 12px;
  }
`;

export const FeaturesSection = styled(Section)`
  min-height: auto;
  padding-bottom: 120px;
  place-items: center;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 5rem;

  .features-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    div {
      place-items: center;
      text-align: center;
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
`;

export const ActionCallSection = styled(Section)`
  min-height: 30vw;
  place-content: center;
  place-items: center;
  text-align: center;

  button {
    margin-top: 20px;
  }
`;

export const ErrorSection = styled(Section)`
  height: 100vh;
  place-content: center;
  place-items: center;

  .content-wrapper {
    height: fit-content;
    width: fit-content;
    place-items: center;

    div {
      display: flex;
      gap: 8px;
    }
  }

  img {
    height: auto;
    width: 400px;
  }
`;

export const DashboardWrapper = styled(Section)`
  min-height: inherit;
  flex-grow: 1;
  height: 100%;

  & > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media screen and (min-width: 768px) {
    & > div {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 1440px) {
    & > div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
