"use client";
import styled from "styled-components";

export default function LoadingSpinner({ children }: { children: string }) {
  return <StyledLoadingSpinner>{children}</StyledLoadingSpinner>;
}

const StyledLoadingSpinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 102;
  width: 100%;
  height: 100vh;
  background-color: #333333;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
`;
