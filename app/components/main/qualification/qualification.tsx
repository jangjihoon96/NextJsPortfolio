import Title from "../../text/title";
import Description from "../../text/description";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Curriculum from "./curriculum";
import QualificationContent from "./qualificationContent";

export default function Qualification() {
  return (
    <section id="qualification">
      <Title>Qualification</Title>
      <Description>My personel journey</Description>
      <QualificationContent>
        <h3>
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          Education &middot; Experience
        </h3>
        <Curriculum />
      </QualificationContent>
    </section>
  );
}
