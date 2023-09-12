"use client";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AboutList from "./aboutList";
import DownloadButton from "./downloadButton";

export default function AboutContents() {
  const downloadButtonClickHandler = (e: any) => {
    e.preventDefault();
    alert("관리자에게 문의해주세요.");
  };
  return (
    <StyledAboutContents>
      <AboutList />
      <p>
        개발자가 되기 이전에 웹 퍼블리셔로 다양한 프로젝트 경험을 쌓았습니다.
        이러한 경험은 팀원 간 소통 능력을 향상시키는 데에 기여했으며, 또한
        사용자를 위한 UI 개발 능력을 향상시켜 좋은 개발자로 성장하는데 도움이
        되었습니다.
      </p>
      <DownloadButton
        href="/"
        downloadButtonClickHandler={downloadButtonClickHandler}
      >
        Download CV <FontAwesomeIcon icon={faPaperclip} className="icon" />
      </DownloadButton>
    </StyledAboutContents>
  );
}

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
