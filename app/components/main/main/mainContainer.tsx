"use client";
import { ReactNode } from "react";
import styled from "styled-components";

export default function MainContainer({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return <StyledMainContainer id={id}>{children}</StyledMainContainer>;
}

const StyledMainContainer = styled.main`
  width: 100%;
  height: 60.5rem;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
    height: 54rem;
    padding: 0 1.5rem;
  }
  @media screen and (max-width: 968px) {
    height: auto;
    padding: 0 1.5rem;
    padding-bottom: 21.25rem;
  }
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    padding-bottom: 12.5rem;
  }
  @media screen and (max-width: 540px) {
    padding-bottom: 0;
    margin-bottom: 12.5rem;
  }
  @media screen and (max-width: 414px) {
    height: 100vh;
    max-height: 41.6875rem;
  }
`;
