import { ReactNode } from "react";
import styled from "styled-components";

export default function DownloadButton({
  href,
  download,
  children,
}: {
  href: string;
  download: string;
  children: ReactNode;
}) {
  return (
    <StyledDownloadButton href={href} download={download}>
      {children}
    </StyledDownloadButton>
  );
}

const StyledDownloadButton = styled.a`
  display: inline-block;
  padding: 2rem 3rem;
  margin-top: 4.25rem;
  border: none;
  background-color: var(--dark);
  font-size: var(--text-lg);
  color: var(--white);
  border-radius: 1.5rem;
  cursor: pointer;
  .icon {
    margin-left: 0.5rem;
  }
  &:hover {
    background-color: var(--black);
  }
`;
