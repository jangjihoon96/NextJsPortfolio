"use client";
import { ReactNode, useEffect } from "react";
import styled from "styled-components";

export default function BigButton({
  className = "",
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  useEffect(() => {
    const handleResize = () => {
      const about = document.getElementById("about")?.offsetTop;
      const helloButton = document.querySelector(".helloButton");
      const helloScroll = () => {
        if (about) {
          window.scrollTo({ top: about - 200, behavior: "smooth" });
        }
      };
      if (helloButton) {
        helloButton.addEventListener("click", (e) => {
          e.preventDefault();
          helloScroll();
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <StyledBigButton className={className}>{children}</StyledBigButton>;
}

const StyledBigButton = styled.button`
  padding: 0 3rem;
  height: 5.625rem;
  margin-top: 4.25rem;
  border: none;
  background-color: var(--dark);
  font-size: var(--text-lg);
  color: var(--white);
  border-radius: 1.5rem;
  cursor: pointer;
  .icon {
    margin-left: 0.5rem;
  }
  &:hover {
    background-color: var(--black);
  }
  @media screen and (max-width: 1280px) {
    padding: 0 3rem;
    height: 4rem;
    margin-top: 4.25rem;
    font-size: var(--text-md);
    border-radius: 0.75rem;
  }
  @media screen and (max-width: 540px) {
    padding: 0 3rem;
    height: 3.375rem;
    margin-top: 3rem;
    font-size: var(--text-sm);
  }
`;
