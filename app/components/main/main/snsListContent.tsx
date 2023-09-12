"use client";
import { ReactNode } from "react";
import styled from "styled-components";

export default function SnsListContent({ children }: { children: ReactNode }) {
  return <StyledSnsList>{children}</StyledSnsList>;
}
const StyledSnsList = styled.ul`
  position: absolute;
  top: 17.5rem;
  left: 0;
  li + li {
    margin-top: 1.875rem;
  }
  a {
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1280px) {
    top: 12rem;
    left: 1.5rem;
  }
  @media screen and (max-width: 968px) {
    top: 10rem;
  }
  @media screen and (max-width: 540px) {
    top: 32rem;
  }
  @media screen and (max-width: 414px) {
    top: 25rem;
  }
`;
