"use client";
import { ReactNode } from "react";
import styled from "styled-components";

export default function MainText({ children }: { children: ReactNode }) {
  return <StyledMainText>{children}</StyledMainText>;
}

const StyledMainText = styled.div`
  padding-top: 10.75rem;
  padding-left: 11.75rem;
  h2 {
    font-size: 5rem;
    font-weight: 600;
    color: var(--dark);
    span {
      font-size: 3.375rem;
      margin-left: 1.25rem;
    }
  }
  strong {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    font-weight: 400;
    font-size: var(--text-lg);
    color: var(--dark);
    &::before {
      content: "";
      flex-grow: 1;
      background: rgba(0, 0, 0, 0.35);
      height: 0.0625rem;
      font-size: 0;
      line-height: 0;
      margin-right: 1rem;
    }
  }
  p {
    margin-top: 1.5rem;
    font-weight: 300;
    font-size: var(--text-md);
    max-width: 33.75rem;
    line-height: 1.5;
    color: var(--gray);
  }
  @media screen and (max-width: 1280px) {
    padding-top: 8rem;
    padding-left: 10rem;
    h2 {
      font-size: 4rem;
      span {
        font-size: var(--text-xxlg);
      }
    }
    strong {
      font-size: var(--text-md);
    }
    p {
      font-size: var(--text-md);
    }
  }
  @media screen and (max-width: 968px) {
    padding-top: 6rem;
    padding-left: 7rem;
    h2 {
      font-size: 3.2rem;
      span {
        font-size: var(--text-xlg);
      }
    }
    strong {
      font-size: var(--text-sm);
    }
    p {
      font-size: var(--text-sm);
    }
  }
  @media screen and (max-width: 768px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  @media screen and (max-width: 540px) {
    padding-top: 4rem;
    padding-left: 5rem;
    padding-right: 1rem;
    h2 {
      font-size: 2.875rem;
      span {
        font-size: var(--text-xlg);
      }
    }
    strong {
      font-size: var(--text-xxsm);
    }
    p {
      font-size: var(--text-xxsm);
    }
  }
  @media screen and (max-width: 414px) {
    padding-top: 3rem;
    padding-left: 5rem;
    padding-right: 1rem;
    h2 {
      font-size: 2.5rem;
      span {
        font-size: var(--text-lg);
        margin-left: 0.625rem;
      }
    }
  }
`;
