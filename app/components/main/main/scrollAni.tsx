"use client";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import styled from "styled-components";

export default function ScrollAni() {
  useLayoutEffect(() => {
    gsap.to(".wheel", { duration: 1, y: 10, yoyo: true, repeat: -1 });
  }, []);
  return (
    <StyledScrollAni>
      <StyledWheel className="wheel">
        <span className="a11yHidden">마우스 휠</span>
      </StyledWheel>
    </StyledScrollAni>
  );
}

const StyledScrollAni = styled.span`
  position: relative;
  display: inline-block;
  width: 1.5rem;
  height: 2.375rem;
  border: 3px solid var(--dark);
  border-radius: 0.875rem;
  @media screen and (max-width: 1280px) {
    width: 1.25rem;
    height: 2rem;
  }
`;

const StyledWheel = styled.span`
  width: 2px;
  height: 0.75rem;
  background-color: var(--dark);
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 1px;
  @media screen and (max-width: 1280px) {
    height: 0.5rem;
    top: 0.375rem;
  }
`;
