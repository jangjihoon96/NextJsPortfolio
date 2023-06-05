"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <StyledTitle>안녕</StyledTitle>
    </>
  );
}
const StyledTitle = styled.h1`
  font-size: 30px;
`;
