"use client";
import styled from "styled-components";
import Image from "next/image";
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
  return (
    <StyledMain>
      <StyledMainText>
        <h2>
          J.Jihoon<span>🐈</span>
        </h2>
        <strong>
          <span>Frontend Develop</span>
        </strong>
        <p>
          I&apos;m creative designer based in New York, and I&apos;m very
          passionate and dedicated to my work
        </p>
        <button>Say Hello</button>
      </StyledMainText>
      <StyledMainImage>이미지 들어갈 장소</StyledMainImage>
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
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  height: 60.5rem;
  /* background-color: red; */
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
  button {
    width: 15.625rem;
    height: 5.625rem;
    margin-top: 4.25rem;
    border: none;
    background-color: var(--black);
    font-size: var(--text-lg);
    color: var(--white);
    border-radius: 1.5rem;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--dark);
      background-color: var(--white);
      color: var(--dark);
    }
  }
`;

const StyledMainImage = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #191919;
  top: 172px;
  right: 72px;
`;

const StyledSnsList = styled.ul`
  position: absolute;
  top: 280px;
  left: 0;
  li + li {
    margin-top: 30px;
  }
  a {
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
`;
