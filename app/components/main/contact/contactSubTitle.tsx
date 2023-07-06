"use client";
import styled from "styled-components";

export default function ContactSubTitle({ children }: { children: string }) {
  return <StyledContactSubTitle>{children}</StyledContactSubTitle>;
}

const StyledContactSubTitle = styled.h3`
  font-weight: 500;
  font-size: var(--text-md);
  color: var(--dark);
  text-align: center;
  margin-bottom: 1.75rem;
`;
