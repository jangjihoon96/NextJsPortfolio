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
  width: 24px;
  height: 38px;
  border: 3px solid var(--dark);
  border-radius: 14px;
`;

const StyledWheel = styled.span`
  width: 2px;
  height: 12px;
  background-color: var(--dark);
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 1px;
`;
