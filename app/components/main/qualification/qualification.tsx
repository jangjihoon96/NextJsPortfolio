import styled from "styled-components";
import Title from "../../text/title";
import Description from "../../text/description";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Curriculum from "./curriculum";

export default function Qualification() {
  return (
    <section>
      <Title>Qualification</Title>
      <Description>My personel journey</Description>
      <StyledQualificationContents>
        <h3>
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          Education &middot; Experience
        </h3>
        <Curriculum />
      </StyledQualificationContents>
    </section>
  );
}

const StyledQualificationContents = styled.div`
  /* background-color: red; */
  h3 {
    font-weight: 600;
    font-size: var(--text-lg);
    text-align: center;
    color: var(--dark);
    .icon {
      margin-right: 12px;
    }
  }
`;
