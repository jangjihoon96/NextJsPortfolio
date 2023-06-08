import styled from "styled-components";

export default function DownloadButton({ children }: { children: string }) {
  return <StyledDownloadButton>{children}</StyledDownloadButton>;
}

const StyledDownloadButton = styled.button`
  padding: 0 3rem;
  height: 5.625rem;
  margin-top: 4.25rem;
  border: none;
  background-color: var(--black);
  font-size: var(--text-lg);
  color: var(--white);
  border-radius: 1.5rem;
  cursor: pointer;
`;
