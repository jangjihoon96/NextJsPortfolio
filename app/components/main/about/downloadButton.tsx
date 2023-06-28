import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

export default function DownloadButton({
  href,
  // download,
  downloadButtonClickHandler,
  children,
}: {
  href: string;
  // download: string;
  downloadButtonClickHandler: (e: any) => void;
  children: ReactNode;
}) {
  return (
    <StyledDownloadButton href={href} onClick={downloadButtonClickHandler}>
      {children}
    </StyledDownloadButton>
  );
}

const StyledDownloadButton = styled.a`
  display: inline-block;
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border: none;
  margin-top: auto;
  padding: 1.75rem 0;
  background-color: var(--dark);
  border-radius: 0.75rem;
  font-weight: 500;
  font-size: var(--text-sm);
  text-align: center;
  color: var(--white);
  cursor: pointer;
  &:hover {
    background-color: var(--black);
  }
  .icon {
    margin-left: 0.5rem;
  }
`;
