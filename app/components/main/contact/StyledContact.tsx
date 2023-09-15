'use client'
import styled from "styled-components";

export const StyledContactContainer = styled.div`
  max-width: var(--container-width);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 6.25rem;
  @media screen and (max-width: 1280px) {
    box-sizing: border-box;
    gap: 3.75rem;
    padding: 0 1.5rem;
  }
  @media screen and (max-width: 768px) {
    gap: 4rem;
    flex-flow: column nowrap;
  }
`;

export const StyledContactInfo = styled.div`
  width: 30%;
  @media screen and (max-width: 1280px) {
    width: 21.25rem;
    flex-shrink: 0;
  }
  @media screen and (max-width: 968px) {
    width: 16rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-shrink: 1;
  }
`;

export const StyledContactForm = styled.div`
  width: 35%;
  @media screen and (max-width: 1280px) {
    width: 50%;
  }
  @media screen and (max-width: 968px) {
    width: auto;
    flex-grow: 1;
  }
`;
