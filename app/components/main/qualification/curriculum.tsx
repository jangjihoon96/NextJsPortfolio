import React from "react";
import styled from "styled-components";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Curriculum() {
  type CurriculumDataType = {
    id: number;
    title: string;
    place: string;
    start: number;
    end: number;
  };
  const curriculumData: CurriculumDataType[] = [
    {
      id: 1,
      title: "웹퍼블리셔 교육 이수",
      place: "더조은IT아카데미",
      start: 2019,
      end: 2019,
    },
    {
      id: 2,
      title: "웹디자인 및 퍼블리셔 근무",
      place: "한국가상현실(주)",
      start: 2019,
      end: 2022,
    },
    {
      id: 3,
      title: "프론트엔드 교육 이수",
      place: "멋쟁이사자처럼",
      start: 2022,
      end: 2023,
    },
  ];

  return (
    <StyledCurriculum>
      <ul>
        {curriculumData.map((item) => {
          return (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <em>{item.place}</em>
              <span>
                <FontAwesomeIcon icon={faCalendarDays} /> {item.start} -{" "}
                {item.end}
              </span>
            </li>
          );
        })}
      </ul>
      <StyledLine aria-hidden="true">
        {curriculumData.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <span className="dot"></span>
              <span className="line"></span>
            </React.Fragment>
          );
        })}
      </StyledLine>
    </StyledCurriculum>
  );
}

const StyledCurriculum = styled.div`
  position: relative;
  width: 31.25rem;
  margin: 0 auto;
  ul {
    margin-top: 4.5rem;
  }
  li {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    max-width: 13.25rem;
    min-height: 7rem;
    strong {
      font-weight: 500;
      font-size: var(--text-md);
      color: var(--dark);
    }
    em {
      margin-top: 0.625rem;
      font-weight: 400;
      font-size: var(--text-xsm);
      color: var(--gray);
    }
    span {
      margin-top: 1rem;
      font-weight: 400;
      font-size: var(--text-xsm);
      color: var(--gray);
    }
  }
  li:nth-child(odd) {
    left: 2.5rem;
  }
  li:nth-child(even) {
    left: 18.75rem;
  }
`;

const StyledLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .dot {
    width: 0.75rem;
    height: 0.75rem;
    background-color: var(--gray);
    border-radius: 50%;
  }
  .line {
    width: 1px;
    height: 6.25rem;
    background-color: var(--gray);
  }
`;
