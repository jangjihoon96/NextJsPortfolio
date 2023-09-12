"use client";
import { ReactNode } from "react";
import styled from "styled-components";

export default function AboutImage({ children }: { children: ReactNode }) {
  return <StyledAboutImage>{children}</StyledAboutImage>;
}
const StyledAboutImage = styled.div`
  width: 27.5rem;
  height: 27.5rem;
  background-color: #191919;
  border-radius: 30px;
  overflow: hidden;
  @media screen and (max-width: 1280px) {
    width: 26.25rem;
    height: 26.25rem;
    flex-shrink: 0;
  }
  @media screen and (max-width: 968px) {
    width: 22rem;
    height: 24rem;
    img {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 16rem;
  }
`;
