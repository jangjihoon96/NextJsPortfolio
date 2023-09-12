"use client";
import styled from "styled-components";
import { useLayoutEffect } from "react";
import { Power0, gsap } from "gsap";

export default function MainImage({ children }: { children: JSX.Element }) {
  useLayoutEffect(() => {
    let profileTl = gsap.timeline();
    profileTl.to("#animationProfile", {
      duration: 3,
      repeat: -1,
      yoyo: true,
      keyframes: {
        "0%": {
          borderRadius: "60% 30% 70% 30% / 60% 30% 40% 70%",
          ease: Power0.easeNone,
        },
        "50%": {
          borderRadius: "50%",
          ease: Power0.easeNone,
        },
        "100%": {
          borderRadius: "30% 60% 30% 70% / 30% 60% 70% 40%",
          ease: Power0.easeNone,
        },
      },
      stagger: {
        each: 1,
      },
    });
  }, []);
  return <StyledMainImage id="animationProfile">{children}</StyledMainImage>;
}

const StyledMainImage = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: 25rem;
  height: 25rem;
  background-color: #191919;
  overflow: hidden;
  margin-top: 10.75rem;
  margin-left: 4rem;
  text-align: center;
  img {
    vertical-align: middle;
  }
  @media screen and (max-width: 1280px) {
    width: 22rem;
    height: 22rem;
    margin-top: 8rem;
    margin-left: 4rem;
  }
  @media screen and (max-width: 968px) {
    width: 20rem;
    height: 20rem;
    margin-top: 6rem;
    margin-left: 4rem;
  }
  @media screen and (max-width: 768px) {
    order: -1;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    width: 24rem;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
  }
  @media screen and (max-width: 414px) {
    width: 80%;
    height: 15.625rem;
    margin-top: 3.25rem;
  }
`;
