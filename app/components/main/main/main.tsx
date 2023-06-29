import styled from "styled-components";
import Image from "next/image";
import ScrollAni from "./scrollAni";
import BigButton from "../bigButton";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useLayoutEffect } from "react";
import { Power0, gsap } from "gsap";
export default function Main() {
  const snsList = [
    {
      id: 1,
      src: "icon-instagram.png",
      alt: "인스타그램",
      href: "https://www.instagram.com/ji.hooon2/",
    },
    {
      id: 2,
      src: "icon-github.png",
      alt: "깃허브",
      href: "https://github.com/jangjihoon96",
    },
    {
      id: 3,
      src: "icon-writing.png",
      alt: "이력서",
      href: "https://www.notion.so/Next-js-Typescript-0986f193e0d74ec8ae0e18a77352e551?pvs=4",
    },
  ];
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
  useEffect(() => {
    const handleResize = () => {
      const about = document.getElementById("about")?.offsetTop;
      const helloButton = document.querySelector(".helloButton");
      const helloScroll = () => {
        if (about) {
          window.scrollTo({ top: about - 200, behavior: "smooth" });
        }
      };
      if (helloButton) {
        helloButton.addEventListener("click", (e) => {
          e.preventDefault();
          helloScroll();
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <StyledMain id="home">
      <StyledMainText>
        <h2>
          J.Jihoon<span>🐈</span>
        </h2>
        <strong>
          <span>Frontend Developer</span>
        </strong>
        <p>
          안녕하세요. 프론트엔드 개발자 장지훈입니다. 항상 사용자 중심적으로
          생각하며, 직관적이고 효율적인 인터페이스를 구현하기 위해 노력하는
          개발자입니다.
        </p>
        <BigButton className="helloButton">
          Say Hello <FontAwesomeIcon icon={faPaperPlane} className="icon" />
        </BigButton>
      </StyledMainText>
      <StyledMainImage id="animationProfile">
        <Image
          src="/images/profile/mainbig_profile.jpg"
          alt="프로필"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        ></Image>
      </StyledMainImage>
      <StyledSnsList>
        {snsList.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.href} target="_blank">
                <Image
                  src={`/icons/${item.src}`}
                  alt={item.alt}
                  width={24}
                  height={24}
                />
              </a>
            </li>
          );
        })}
      </StyledSnsList>
      <StyledScrollDown>
        <ScrollAni />
        <span className="text">Scroll down &darr;</span>
      </StyledScrollDown>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  height: 60.5rem;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
    height: 54rem;
    padding: 0 1.5rem;
  }
  @media screen and (max-width: 968px) {
    height: auto;
    padding: 0 1.5rem;
    padding-bottom: 21.25rem;
  }
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    padding-bottom: 12.5rem;
  }
  @media screen and (max-width: 540px) {
    padding-bottom: 0;
    margin-bottom: 12.5rem;
  }
  @media screen and (max-width: 414px) {
    height: 100vh;
    max-height: 41.6875rem;
  }
`;
const StyledMainText = styled.div`
  padding-top: 10.75rem;
  padding-left: 11.75rem;
  h2 {
    font-size: 5rem;
    font-weight: 600;
    color: var(--dark);
    span {
      font-size: 3.375rem;
      margin-left: 1.25rem;
    }
  }
  strong {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    font-weight: 400;
    font-size: var(--text-lg);
    color: var(--dark);
    &::before {
      content: "";
      flex-grow: 1;
      background: rgba(0, 0, 0, 0.35);
      height: 0.0625rem;
      font-size: 0;
      line-height: 0;
      margin-right: 1rem;
    }
  }
  p {
    margin-top: 1.5rem;
    font-weight: 300;
    font-size: var(--text-md);
    max-width: 33.75rem;
    line-height: 1.5;
    color: var(--gray);
  }
  @media screen and (max-width: 1280px) {
    padding-top: 8rem;
    padding-left: 10rem;
    h2 {
      font-size: 4rem;
      span {
        font-size: var(--text-xxlg);
      }
    }
    strong {
      font-size: var(--text-md);
    }
    p {
      font-size: var(--text-md);
    }
  }
  @media screen and (max-width: 968px) {
    padding-top: 6rem;
    padding-left: 7rem;
    h2 {
      font-size: 3.2rem;
      span {
        font-size: var(--text-xlg);
      }
    }
    strong {
      font-size: var(--text-sm);
    }
    p {
      font-size: var(--text-sm);
    }
  }
  @media screen and (max-width: 768px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  @media screen and (max-width: 540px) {
    padding-top: 4rem;
    padding-left: 5rem;
    padding-right: 1rem;
    h2 {
      font-size: 2.875rem;
      span {
        font-size: var(--text-xlg);
      }
    }
    strong {
      font-size: var(--text-xxsm);
    }
    p {
      font-size: var(--text-xxsm);
    }
  }
  @media screen and (max-width: 414px) {
    padding-top: 3rem;
    padding-left: 5rem;
    padding-right: 1rem;
    h2 {
      font-size: 2.5rem;
      span {
        font-size: var(--text-lg);
        margin-left: 0.625rem;
      }
    }
  }
`;

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

const StyledSnsList = styled.ul`
  position: absolute;
  top: 17.5rem;
  left: 0;
  li + li {
    margin-top: 1.875rem;
  }
  a {
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1280px) {
    top: 12rem;
    left: 1.5rem;
  }
  @media screen and (max-width: 968px) {
    top: 10rem;
  }
  @media screen and (max-width: 540px) {
    top: 32rem;
  }
  @media screen and (max-width: 414px) {
    top: 25rem;
  }
`;

const StyledScrollDown = styled.div`
  position: absolute;
  top: 45rem;
  left: 11.75rem;
  display: flex;
  align-items: center;
  .text {
    margin-left: 1.125rem;
    font-weight: 500;
    font-size: var(--text-md);
    letter-spacing: 0.1875rem;
    color: var(--dark);
  }
  @media screen and (max-width: 1280px) {
    top: 38rem;
    .text {
      font-size: var(--text-sm);
    }
  }
  @media screen and (max-width: 968px) {
    bottom: 14rem;
    left: 8.5rem;
    .text {
      font-size: var(--text-sm);
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
