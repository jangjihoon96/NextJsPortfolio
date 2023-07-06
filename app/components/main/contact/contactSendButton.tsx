"use client";
import styled from "styled-components";
import { faEnvelope, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactSendButton({
  type,
  children,
}: {
  type: "submit" | "reset" | "button" | undefined;
  children: string;
}) {
  return (
    <StyledContactSendButton type={type}>
      {children}
      <FontAwesomeIcon icon={faRocket} className="icon" />
    </StyledContactSendButton>
  );
}

const StyledContactSendButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  border: none;
  margin-top: 1.5rem;
  padding: 1.75rem 0;
  background-color: var(--dark);
  border-radius: 0.75rem;
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--white);
  cursor: pointer;
  &:hover {
    background-color: var(--black);
  }
  .icon {
    margin-left: 0.5rem;
  }
`;
