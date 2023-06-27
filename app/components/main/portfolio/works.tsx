import styled from "styled-components";
import Image from "next/image";
import { PortfolioDataType } from "./data";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Works({
  worksData,
}: {
  worksData: PortfolioDataType[];
}) {
  return (
    <WorksContainer>
      {worksData.map((item) => {
        if (item.cartagorize == "team") {
          return (
            <li key={item.id}>
              <Image
                src={`/images/works/${item.img}`}
                alt={item.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.demo ? (
                <a href={item.demo} target="_blank">
                  <FontAwesomeIcon icon={faLink} className="icon" /> Demo
                </a>
              ) : null}
              <a href={item.github} target="_blank">
                <FontAwesomeIcon icon={faLink} className="icon" /> Github
              </a>
              <span className="filter team">Team</span>
            </li>
          );
        } else if (item.cartagorize == "individual") {
          return (
            <li key={item.id}>
              <Image
                src={`/images/works/${item.img}`}
                alt={item.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.demo ? (
                <a href={item.demo} target="_blank">
                  <FontAwesomeIcon icon={faLink} className="icon" /> Demo
                </a>
              ) : null}
              <a href={item.github} target="_blank">
                <FontAwesomeIcon icon={faLink} className="icon" /> Github
              </a>
              <span className="filter individual">Individual</span>
            </li>
          );
        } else {
          return (
            <li key={item.id}>
              <Image
                src={`/images/works/${item.img}`}
                alt={item.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.demo ? (
                <a href={item.demo} target="_blank">
                  <FontAwesomeIcon icon={faLink} className="icon" /> Demo
                </a>
              ) : null}
              <a href={item.github} target="_blank">
                <FontAwesomeIcon icon={faLink} className="icon" /> Github
              </a>
              <span className="filter toy">Toy</span>
            </li>
          );
        }
      })}
    </WorksContainer>
  );
}

const WorksContainer = styled.ul`
  box-sizing: border-box;
  padding: 0 1rem;
  display: flex;
  flex-flow: row wrap;
  max-width: 67.5rem;
  margin: 0 auto;
  justify-content: space-around;
  gap: 1.5rem;
  li {
    box-sizing: border-box;
    max-width: 31.25rem;
    margin-top: 0.75rem;
    padding: 1.875rem;
    background-color: var(--white);
    border: 1px solid var(--lightgray);
    border-radius: 1.875rem;
    height: auto;
    img {
      border-radius: 1.5rem;
    }
    h3 {
      margin-top: 1rem;
      font-size: var(--text-sm);
      font-weight: 600;
      color: var(--dark);
    }
    p {
      margin-top: 0.5rem;
      margin-bottom: 1.25rem;
      line-height: 1.5;
      font-size: var(--text-xxsm);
      font-weight: 400;
      color: var(--gray);
    }
    a {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      background-color: var(--dark);
      border-radius: 0.25rem;
      font-size: var(--text-xxsm);
      font-weight: 400;
      color: var(--white);
      &:hover {
        background-color: var(--black);
      }
      .icon {
        font-size: var(--text-xxxsm);
        font-weight: 400;
      }
    }
    a + a {
      margin-left: 0.5rem;
    }
    .filter {
      margin-left: 0.5rem;
      display: inline-block;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: var(--text-xxsm);
      font-weight: 400;
      color: var(--white);
    }
    .team {
      background-color: rgb(28, 119, 255);
    }
    .individual {
      background-color: rgb(255, 62, 62);
    }
    .toy {
      background-color: rgb(33, 171, 65);
    }
  }
  @media screen and (max-width: 1280px) {
    padding: 0 1.5rem;
    gap: 1.2rem;
    li {
      max-width: 28rem;
    }
  }
  @media screen and (max-width: 968px) {
    padding: 0 1.5rem;
    gap: 1.2rem;
    li {
      width: calc(100% / 2 - 1.2rem);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem;
    gap: 1.2rem;
    li {
      width: 100%;
    }
  }
`;
