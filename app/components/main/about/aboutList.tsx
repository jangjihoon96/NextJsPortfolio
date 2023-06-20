import styled from "styled-components";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutList() {
  return (
    <StyledList>
      <li>
        <span className="icon">
          <FontAwesomeIcon icon={faPaw} className="icon" />
        </span>
        <span className="title">Experience</span>
        <span className="desc">8 + Years</span>
      </li>
      <li>
        <span className="icon">
          <FontAwesomeIcon icon={faPaw} className="icon" />
        </span>
        <span className="title">Completed</span>
        <span className="desc">8 + Projects</span>
      </li>
      <li>
        <span className="icon">
          <FontAwesomeIcon icon={faPaw} className="icon" />
        </span>
        <span className="title">Support</span>
        <span className="desc">Online 24/7</span>
      </li>
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 0.625rem;
  li {
    width: calc(100% / 3);
    border: 1px solid var(--lightgray);
    box-sizing: border-box;
    background-color: var(--white);
    border-radius: 1rem;
    padding: 1.875rem 0;
    span {
      display: block;
      color: var(--dark);
      text-align: center;
    }
    .title {
      font-size: var(--text-md);
      padding: 1rem 0;
    }
    .desc {
      font-size: var(--text-xxsm);
      color: var(--gray);
    }
  }
  @media screen and (max-width: 968px) {
    li {
      padding: 1.5rem 0;
      .title {
        font-size: var(--text-xsm);
      }
    }
  }
`;
