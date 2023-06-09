import styled from "styled-components";
import Description from "../../text/description";
import Title from "../../text/title";
import AboutList from "./aboutList";
import BigButton from "../bigButton";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <section>
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
          <BigButton>
            Download CV <FontAwesomeIcon icon={faPaperclip} className="icon" />
          </BigButton>
        </StyledAboutContents>
      </StyledAboutContainer>
    </section>
  );
}

const StyledAboutContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const StyledAboutImage = styled.div`
  width: 440px;
  height: 440px;
  background-color: #191919;
  border-radius: 30px;
`;
const StyledAboutContents = styled.div`
  width: 550px;
  height: 440px;
  p {
    margin-top: 2rem;
    line-height: 1.5;
    font-size: var(--text-md);
    color: var(--gray);
  }
`;
