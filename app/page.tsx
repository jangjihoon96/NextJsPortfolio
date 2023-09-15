import Main from "./components/main/main/main";
import About from "./components/main/about/about";
import Skills from "./components/main/skills/skills";
import Portfolio from "./components/main/portfolio/portfolio";
import Contact from "./components/main/contact/contact";
import Qualification from "./components/main/qualification/qualification";
import ScrollTopButton from "./components/button/scrollTopButton";
import MainContainer from "./container/mainContainer";
import MainContainerInner from "./container/mainContainerInner";

export default function Home() {
  return (
    <>
      <MainContainer>
        <MainContainerInner>
          <Main />
          <About />
          {/* @ts-expect-error Async Server Component */}
          <Skills />
          <Qualification />
          {/* @ts-expect-error Async Server Component */}
          <Portfolio />
          <Contact />
          <ScrollTopButton />
        </MainContainerInner>
      </MainContainer>
    </>
  );
}
