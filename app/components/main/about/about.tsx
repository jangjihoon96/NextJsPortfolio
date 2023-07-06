"use client";
import styled from "styled-components";
import Description from "../../text/description";
import Title from "../../text/title";
import AboutList from "./aboutList";
import BigButton from "../bigButton";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "./downloadButton";
import { MouseEventHandler } from "react";
import Image from "next/image";

export default function About() {
  const downloadButtonClickHandler = (e: any) => {
    e.preventDefault();
    alert("관리자에게 문의해주세요.");
  };
  return (
    <section id="about">
      <Title>About Me</Title>
      <Description>My introduction</Description>
      <StyledAboutContainer>
        <StyledAboutImage>
          <Image
            src="/images/profile/about_profile.jpg"
            alt="프로필"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          ></Image>
        </StyledAboutImage>
        <StyledAboutContents>
          <AboutList />
          <p>
            개발자가 되기 이전에 웹 퍼블리셔로 다양한 프로젝트 경험을
            쌓았습니다. 이러한 경험은 팀원 간 소통 능력을 향상시키는 데에
            기여했으며, 또한 사용자를 위한 UI 개발 능력을 향상시켜 좋은 개발자로
            성장하는데 도움이 되었습니다.
          </p>
          <DownloadButton
            href="/"
            downloadButtonClickHandler={downloadButtonClickHandler}
          >
            Download CV <FontAwesomeIcon icon={faPaperclip} className="icon" />
          </DownloadButton>
        </StyledAboutContents>
      </StyledAboutContainer>
    </section>
  );
}

const StyledAboutContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
    gap: 2rem;
    padding: 0 1.5rem;
  }
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  }
  @media screen and (max-width: 540px) {
    gap: 0.75rem;
  }
`;

const StyledAboutImage = styled.div`
  width: 27.5rem;
  height: 27.5rem;
  background-color: #191919;
  border-radius: 30px;
  overflow: hidden;
  @media screen and (max-width: 1280px) {
    width: 26.25rem;
    height: 26.25rem;
    flex-shrink: 0;
  }
  @media screen and (max-width: 968px) {
    width: 22rem;
    height: 24rem;
    img {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 16rem;
  }
`;
const StyledAboutContents = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 34.375rem;
  height: 27.5rem;
  p {
    margin-top: 2rem;
    line-height: 1.5;
    font-weight: 300;
    font-size: var(--text-md);
    color: var(--gray);
  }
  @media screen and (max-width: 1280px) {
    width: auto;
    height: 26.25rem;
    p {
      font-weight: 300;
    }
  }
  @media screen and (max-width: 968px) {
    height: 24rem;
    p {
      font-size: var(--text-sm);
    }
  }
  @media screen and (max-width: 768px) {
    p {
      margin-top: 0;
    }
    height: auto;
    gap: 2rem;
  }
  @media screen and (max-width: 540px) {
    p {
      font-size: var(--text-xsm);
    }
    gap: 1.5rem;
  }
`;
