"use client";
import styled from "styled-components";
export default function MainContainer({ children }: { children: JSX.Element }) {
  return (
    <>
      <StyledMainContainer>{children}</StyledMainContainer>
    </>
  );
}
const StyledMainContainer = styled.div`
  width: 100%;
  margin-top: 4.375rem;
`;
