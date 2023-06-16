"use client";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <strong>Jihoon 🐾</strong>
      <p className="copyright">
        Copyright&copy;. Jihoon Jang All rights reserved.
      </p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  margin-top: 10rem;
  padding: 6.25rem 0;
  background-color: var(--white);
  border-top: 1px solid var(--lightgray);
  text-align: center;
  strong {
    font-weight: 600;
    font-size: var(--text-xlg);
    color: var(--dark);
  }
  .copyright {
    font-weight: 400;
    font-size: var(--text-xxsm);
    color: var(--gray);
    margin-top: 1.5rem;
  }
`;
