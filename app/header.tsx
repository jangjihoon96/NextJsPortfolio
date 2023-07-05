"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const hamBar = document.querySelector(".ham-bar");
    const mobileGnb = document.querySelector(".mobile-gnb") as HTMLElement;
    const menuOpen = () => {
      if (!toggle) {
        mobileGnb.style.right = "0rem";
        setToggle(true);
      } else if (toggle) {
        mobileGnb.style.right = "-8.75rem";
        setToggle(false);
      }
    };
    hamBar?.addEventListener("click", menuOpen);
    return () => {
      hamBar?.removeEventListener("click", menuOpen);
    };
  }, [toggle]);
  useEffect(() => {
    const handleResize = () => {
      const home = document.getElementById("home")?.offsetTop;
      const about = document.getElementById("about")?.offsetTop;
      const skills = document.getElementById("skills")?.offsetTop;
      const qualification = document.getElementById("qualification")?.offsetTop;
      const portfolio = document.getElementById("portfolio")?.offsetTop;
      const contact = document.getElementById("contact")?.offsetTop;
      const moveHome = document.querySelectorAll(".moveHome");
      const moveAbout = document.querySelectorAll(".moveAbout");
      const moveSkills = document.querySelectorAll(".moveSkills");
      const moveQualification = document.querySelectorAll(".moveQualification");
      const movePortfolio = document.querySelectorAll(".movePortfolio");
      const moveContact = document.querySelectorAll(".moveContact");
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
      moveHome.forEach((link) => {
        link?.addEventListener("click", (e) => {
          e.preventDefault();
          homeScroll();
        });
      });
      moveAbout.forEach((link) => {
        link?.addEventListener("click", (e) => {
          e.preventDefault();
          aboutScroll();
        });
      });
      moveSkills.forEach((link) => {
        link?.addEventListener("click", (e) => {
          e.preventDefault();
          skillsScroll();
        });
      });
      moveQualification.forEach((link) => {
        link?.addEventListener("click", (e) => {
          e.preventDefault();
          qualificationScroll();
        });
      });
      movePortfolio.forEach((link) => {
        link?.addEventListener("click", (e) => {
          e.preventDefault();
          portfolioScroll();
        });
      });
      moveContact.forEach((link) => {
        link?.addEventListener("click", (e) => {
          e.preventDefault();
          contactScroll();
        });
      });
    };
    let delayHandler = setTimeout(() => {
      handleResize();
    }, 2500);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(delayHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledHeader>
      <div className="inner">
        <h1>
          <a href="/">Jihoon 🐾</a>
        </h1>
        <ul className="gnb">
          <li>
            <a href="/" className="moveHome">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="moveAbout">
              About
            </a>
          </li>
          <li>
            <a href="/" className="moveSkills">
              Skills
            </a>
          </li>
          <li>
            <a href="/" className="moveQualification">
              Qualification
            </a>
          </li>
          <li>
            <a href="/" className="movePortfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/" className="moveContact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button type="button" className="ham-bar">
        <FontAwesomeIcon icon={faBars} />
        <span className="a11yHidden">메뉴바</span>
      </button>
      <ul className="mobile-gnb">
        <li>
          <a href="/" className="moveHome">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="moveAbout">
            About
          </a>
        </li>
        <li>
          <a href="/" className="moveSkills">
            Skills
          </a>
        </li>
        <li>
          <a href="/" className="moveQualification">
            Qualification
          </a>
        </li>
        <li>
          <a href="/" className="movePortfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/" className="moveContact">
            Contact
          </a>
        </li>
      </ul>
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
  button.ham-bar {
    display: none;
  }
  ul.mobile-gnb {
    display: none;
  }
  @media screen and (max-width: 1280px) {
    .inner {
      box-sizing: border-box;
      width: 100%;
      padding: 0 1.5rem;
    }
  }
  @media screen and (max-width: 968px) {
    ul.gnb li {
      padding-left: 1.875rem;
    }
    ul.gnb a {
      font-size: var(--text-xsm);
    }
  }
  @media screen and (max-width: 768px) {
    height: 3.75rem;
    .inner {
      height: 100%;
    }
    ul.gnb {
      display: none;
    }
    button.ham-bar {
      display: block;
      position: absolute;
      top: 50%;
      right: 1.25rem;
      transform: translate(0, -50%);
      border: none;
      background-color: transparent;
      padding: 0.25rem;
      color: var(--dark);
      font-size: var(--text-xsm);
      cursor: pointer;
    }
    ul.mobile-gnb {
      position: absolute;
      top: 3.75rem;
      right: -8.75rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: start;
      background-color: var(--bgColor);
      align-items: flex-end;
      width: 8.75rem;
      height: calc(100vh - 3.75rem);
      box-sizing: border-box;
      padding: 0 1.25rem;
      border-left: 1px solid var(--lightgray);
      transition: all 0.3s ease-in-out;
    }
    ul.mobile-gnb li {
      width: 100%;
      padding: 0.625rem 0;
    }
    ul.mobile-gnb li a {
      display: block;
      font-size: var(--text-xsm);
      color: var(--dark);
      padding: 0.25rem 0;
      text-align: right;
    }
  }
`;
