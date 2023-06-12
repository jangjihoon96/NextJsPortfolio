import styled from "styled-components";

export default function Description({ children }: { children: string }) {
  return <StyledDescription>{children}</StyledDescription>;
}

const StyledDescription = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 4rem;
  font-size: var(--text-md);
  font-weight: 400;
  color: var(--gray);
  text-align: center;
`;
