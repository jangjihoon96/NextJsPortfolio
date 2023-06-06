"use client";
import styled from "styled-components";
import Main from "./components/main/main/main";
import About from "./components/main/about/about";
import Skills from "./components/main/skills/skills";
import Portfolio from "./components/main/portfolio/portfolio";
import Contact from "./components/main/contact/contact";

export default function Home() {
  return (
    <>
      <StyledContainer>
        <StyledContainerInner>
          <Main />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </StyledContainerInner>
      </StyledContainer>
    </>
  );
}
const StyledContainer = styled.div`
  width: 100%;
  margin-top: 4.375rem;
`;
const StyledContainerInner = styled.div`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
`;
