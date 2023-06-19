import styled from "styled-components";
import Image from "next/image";
import ScrollAni from "./scrollAni";
import BigButton from "../bigButton";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect } from "react";
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
      href: "https://www.notion.so/Design-Develop-f1f9c340de144a2ca9e2e90cd2b8ef27?pvs=4",
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
          I&apos;m creative designer based in New York, and I&apos;m very
          passionate and dedicated to my work
        </p>
        <BigButton>
          Say Hello <FontAwesomeIcon icon={faPaperPlane} className="icon" />
        </BigButton>
      </StyledMainText>
      <StyledMainImage id="animationProfile">
        <Image
          src="/images/profile/main_profile.jpeg"
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
`;
const StyledMainText = styled.div`
  position: absolute;
  top: 10.75rem;
  left: 11.75rem;
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
    width: 25rem;
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
    font-size: var(--text-lg);
    width: 33.75rem;
    line-height: 1.5;
    color: var(--gray);
  }
`;

const StyledMainImage = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: #191919;
  overflow: hidden;
  top: 172px;
  right: 72px;
  img {
    vertical-align: middle;
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
`;
