"use client";
import { ReactNode } from "react";
import styled from "styled-components";
export default function MainContainerInner({
  children,
}: {
  children: ReactNode;
}) {
  return <StyledMainContainerInner>{children}</StyledMainContainerInner>;
}
const StyledMainContainerInner = styled.div`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
`;
