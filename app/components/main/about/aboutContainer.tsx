"use client";
import { ReactNode } from "react";
import styled from "styled-components";

export default function AboutContainer({ children }: { children: ReactNode }) {
  return <StyledAboutContainer>{children}</StyledAboutContainer>;
}

const StyledAboutContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
    gap: 2rem;
    padding: 0 1.5rem;
  }
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  }
  @media screen and (max-width: 540px) {
    gap: 0.75rem;
  }
`;
