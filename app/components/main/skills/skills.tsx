import styled from "styled-components";
import Title from "../../text/title";
import Description from "../../text/description";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  type SkillDataType = {
    id: number;
    name: string;
    level: "Basic" | "Intermediate" | "Advanced";
  };
  const skillData: SkillDataType[] = [
    { id: 1, name: "HTML", level: "Advanced" },
    { id: 2, name: "CSS", level: "Intermediate" },
    { id: 3, name: "Sass", level: "Basic" },
    { id: 4, name: "JavaScript", level: "Intermediate" },
    { id: 5, name: "React", level: "Intermediate" },
    { id: 6, name: "TypeScript", level: "Basic" },
    { id: 7, name: "Node.js", level: "Intermediate" },
    { id: 8, name: "Next.js", level: "Basic" },
    { id: 9, name: "GSAP", level: "Basic" },
    { id: 10, name: "MongoDB", level: "Basic" },
    { id: 11, name: "Firebase", level: "Basic" },
  ];
  return (
    <section id="skills">
      <Title>Skills</Title>
      <Description>My technical level</Description>
      <StyledSkillsContents>
        <ul>
          {skillData.map((skill) => {
            return (
              <li key={skill.id}>
                <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                <strong>{skill.name}</strong>
                <span>{skill.level}</span>
              </li>
            );
          })}
        </ul>
      </StyledSkillsContents>
    </section>
  );
}

const StyledSkillsContents = styled.div`
  ul {
    margin: 0 auto;
    max-width: 64rem;
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: var(--white);
    border: 1px solid var(--lightgray);
    border-radius: 1.875rem;
    padding: 3rem 3.75rem;
    gap: 40px 20px;
  }
  li {
    position: relative;
    box-sizing: border-box;
    width: calc(25% - 20px);
    padding-left: 40px;
  }
  strong,
  span {
    display: block;
  }
  strong {
    font-weight: 500;
    font-size: var(--text-md);
    color: var(--dark);
  }
  span {
    margin-top: 0.75rem;
    font-weight: 400;
    font-size: var(--text-xxsm);
    color: var(--gray);
  }
  .icon {
    position: absolute;
    left: 0.5rem;
    top: 3px;
    font-size: var(--text-sm);
    color: var(--dark);
  }
  @media screen and (max-width: 1280px) {
    box-sizing: border-box;
    padding: 0 1.5rem;
  }
  @media screen and (max-width: 768px) {
    li {
      width: auto;
    }
  }
  @media screen and (max-width: 540px) {
    strong {
      font-size: var(--text-sm);
    }
    span {
      margin-top: 0.5rem;
      font-size: var(--text-xxxsm);
    }
    .icon {
      font-size: var(--text-xsm);
    }
  }
  @media screen and (max-width: 414px) {
    ul {
      justify-content: space-between;
    }
  }
`;
