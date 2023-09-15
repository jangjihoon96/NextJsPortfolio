"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

export default function QualificationContent({
  children,
}: {
  children: ReactNode;
}) {
  return <StyledQualificationContents>{children}</StyledQualificationContents>;
}

const StyledQualificationContents = styled.div`
  h3 {
    font-weight: 600;
    font-size: var(--text-lg);
    text-align: center;
    color: var(--dark);
    .icon {
      margin-right: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    padding: 0 1.5rem;
  }
  @media screen and (max-width: 540px) {
    h3 {
      font-size: var(--text-md);
    }
  }
`;
