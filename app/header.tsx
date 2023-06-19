"use client";
import { useEffect } from "react";
import styled from "styled-components";

export default function Header() {
  useEffect(() => {
    const home = document.getElementById("home")?.offsetTop;
    const about = document.getElementById("about")?.offsetTop;
    const skills = document.getElementById("skills")?.offsetTop;
    const qualification = document.getElementById("qualification")?.offsetTop;
    const portfolio = document.getElementById("portfolio")?.offsetTop;
    const contact = document.getElementById("contact")?.offsetTop;
    const moveHome = document.querySelector(".moveHome");
    const moveAbout = document.querySelector(".moveAbout");
    const moveSkills = document.querySelector(".moveSkills");
    const moveQualification = document.querySelector(".moveQualification");
    const movePortfolio = document.querySelector(".movePortfolio");
    const moveContact = document.querySelector(".moveContact");
    const homeScroll = () => {
      if (home) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    const aboutScroll = () => {
      if (about) {
        window.scrollTo({ top: about - 200, behavior: "smooth" });
      }
    };
    const skillsScroll = () => {
      if (skills) {
        window.scrollTo({ top: skills - 200, behavior: "smooth" });
      }
    };
    const qualificationScroll = () => {
      if (qualification) {
        window.scrollTo({ top: qualification - 200, behavior: "smooth" });
      }
    };
    const portfolioScroll = () => {
      if (portfolio) {
        window.scrollTo({ top: portfolio - 200, behavior: "smooth" });
      }
    };
    const contactScroll = () => {
      if (contact) {
        window.scrollTo({ top: contact - 200, behavior: "smooth" });
      }
    };
    moveHome?.addEventListener("click", (e) => {
      e.preventDefault();
      homeScroll();
    });
    moveAbout?.addEventListener("click", (e) => {
      e.preventDefault();
      aboutScroll();
    });
    moveSkills?.addEventListener("click", (e) => {
      e.preventDefault();
      skillsScroll();
    });
    moveQualification?.addEventListener("click", (e) => {
      e.preventDefault();
      qualificationScroll();
    });
    movePortfolio?.addEventListener("click", (e) => {
      e.preventDefault();
      portfolioScroll();
    });
    moveContact?.addEventListener("click", (e) => {
      e.preventDefault();
      contactScroll();
    });
  }, []);

  return (
    <StyledHeader>
      <div className="inner">
        <h1>
          <a href="#">Jihoon 🐾</a>
        </h1>
        <ul className="gnb">
          <li>
            <a href="#" className="moveHome">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="moveAbout">
              About
            </a>
          </li>
          <li>
            <a href="#" className="moveSkills">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="moveQualification">
              Qualification
            </a>
          </li>
          <li>
            <a href="#" className="movePortfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="moveContact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: var(--bgColor);
  .inner {
    display: flex;
    align-items: center;
    width: var(--container-width);
    height: 4.375rem;
    margin: 0 auto;
  }
  h1 {
    flex-grow: 1;
    font-size: var(--text-sm);
  }
  ul.gnb {
    display: flex;
  }
  ul.gnb li {
    padding-left: 3.125rem;
  }
  ul.gnb a {
    font-size: var(--text-sm);
    color: #555;
  }
  ul.gnb a:hover {
    color: #191919;
  }
`;
