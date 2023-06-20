import styled from "styled-components";
import Description from "../../text/description";
import Title from "../../text/title";
import AboutList from "./aboutList";
import BigButton from "../bigButton";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "./downloadButton";

export default function About() {
  return (
    <section id="about">
      <Title>About Me</Title>
      <Description>My introduction</Description>
      <StyledAboutContainer>
        <StyledAboutImage></StyledAboutImage>
        <StyledAboutContents>
          <AboutList />
          <p>
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>
          <DownloadButton
            href="/downloads/resume_jihoon.pdf"
            download="resume_jihoon_2023"
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
`;

const StyledAboutImage = styled.div`
  width: 27.5rem;
  height: 27.5rem;
  background-color: #191919;
  border-radius: 30px;
  @media screen and (max-width: 1280px) {
    width: 26.25rem;
    height: 26.25rem;
    flex-shrink: 0;
  }
  @media screen and (max-width: 968px) {
    width: 22rem;
    height: 24rem;
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
  @media screen and (max-width: 768px) {
    p {
      font-size: var(--text-xsm);
    }
  }
`;
