import styled from "styled-components";
import ContactSubTitle from "./contactSubTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactData } from "./data";

export default function ContactInfo() {
  return (
    <StyledContactInfoContents>
      <ContactSubTitle>Talk to me</ContactSubTitle>
      <ul>
        {contactData.map((contact) => {
          return (
            <li key={contact.id}>
              <FontAwesomeIcon icon={contact.icon} className="icon" />
              <h4>{contact.title}</h4>
              <p>{contact.content}</p>
              <a href={contact.href} className="contactLink">
                Contact me <span className="rightarrow">&rarr;</span>
              </a>
            </li>
          );
        })}
      </ul>
    </StyledContactInfoContents>
  );
}

const StyledContactInfoContents = styled.div`
  width: 100%;
  ul {
    li {
      width: 100%;
      box-sizing: border-box;
      padding: 3rem 0.75rem;
      background-color: var(--white);
      border: 1px solid var(--lightgray);
      border-radius: 1.5rem;
      text-align: center;
      .icon {
        display: block;
        margin: 0 auto;
        margin-bottom: 0.75rem;
        font-size: var(--text-lg);
      }
      h4 {
        text-align: center;
        font-weight: 500;
        font-size: var(--text-sm);
        color: var(--dark);
        margin-bottom: 0.75rem;
      }
      p {
        text-align: center;
        font-weight: 400;
        font-size: var(--text-xxsm);
        color: var(--gray);
        margin-bottom: 1.25rem;
      }
      a {
        position: relative;
        padding-right: 1rem;
        text-align: center;
        font-weight: 400;
        font-size: var(--text-xxsm);
        color: var(--gray);
        .rightarrow {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(0, -50%);
        }
      }
    }
    li + li {
      margin-top: 1.5rem;
    }
  }
`;
