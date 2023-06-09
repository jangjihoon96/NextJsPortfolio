import { ReactNode } from "react";
import styled from "styled-components";

export default function BigButton({ children }: { children: ReactNode }) {
  return <StyledBigButton>{children}</StyledBigButton>;
}

const StyledBigButton = styled.button`
  padding: 0 3rem;
  height: 5.625rem;
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
