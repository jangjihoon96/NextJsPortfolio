"use client";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <div className="inner">
        <h1>
          <a href="#">Jihoon 🐾</a>
        </h1>
        <ul className="gnb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
  background-color: #fff;
  .inner {
    display: flex;
    align-items: center;
    width: var(--container-width);
    height: 4.375rem;
    margin: 0 auto;
  }
  h1 {
    flex-grow: 1;
    font-size: 1.25rem;
  }
  ul.gnb {
    display: flex;
  }
  ul.gnb li {
    padding-left: 3.125rem;
  }
  ul.gnb a {
    font-size: 1.25rem;
    color: #555;
  }
  ul.gnb a:hover {
    color: #191919;
  }
`;
