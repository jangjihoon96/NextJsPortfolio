"use client";
import { ReactNode } from "react";
import styled from "styled-components";

export default function ScrollAniContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <StyledScrollAniContainer>{children}</StyledScrollAniContainer>;
}

const StyledScrollAniContainer = styled.div`
  position: absolute;
  top: 45rem;
  left: 11.75rem;
  display: flex;
  align-items: center;
  .text {
    margin-left: 1.125rem;
    font-weight: 500;
    font-size: var(--text-md);
    letter-spacing: 0.1875rem;
    color: var(--dark);
  }
  @media screen and (max-width: 1280px) {
    top: 38rem;
    .text {
      font-size: var(--text-sm);
    }
  }
  @media screen and (max-width: 968px) {
    bottom: 14rem;
    left: 8.5rem;
    .text {
      font-size: var(--text-sm);
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
