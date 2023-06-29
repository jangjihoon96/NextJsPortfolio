"use client";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import styled from "styled-components";

export default function ScrollTopButton() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const topButton = document.getElementById("topButton");

      if (topButton) {
        if (scrollTop > 500) {
          topButton.style.display = "block";
        } else {
          topButton.style.display = "none";
        }
      }
    };
    handleScroll(); // 이걸 그냥 실행시켜도 문제없는가, 실행해야되는 이유 첫 로딩시 버튼이 보임
    const goToTopScroll = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    const topButton = document.getElementById("topButton");
    if (topButton) {
      topButton.addEventListener("click", goToTopScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (topButton) {
        topButton.removeEventListener("click", goToTopScroll);
      }
    };
  }, []);

  return (
    <StyledScrollTopButton id="topButton">
      <FontAwesomeIcon icon={faArrowUp} aria-label="맨위로" />
    </StyledScrollTopButton>
  );
}

const StyledScrollTopButton = styled.button`
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  z-index: 99;
  width: 3rem;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  font-size: var(--text-xsm);
  color: var(--white);
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  @media screen and (max-width: 768px) {
    right: 3rem;
    bottom: 3rem;
  }
  @media screen and (max-width: 540px) {
    right: 2rem;
    bottom: 2rem;
  }
  @media screen and (max-width: 414px) {
    right: 1.5rem;
    bottom: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: var(--text-xxsm);
  }
`;
