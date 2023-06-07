import styled from "styled-components";

export default function Title({ children }: { children: string }) {
  return <StyledTitle>{children}</StyledTitle>;
}

const StyledTitle = styled.h2`
  font-size: var(--text-xxxlg);
  font-weight: 600;
  color: var(--dark);
  text-align: center;
`;
