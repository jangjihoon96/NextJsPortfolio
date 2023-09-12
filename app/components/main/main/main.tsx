import Image from "next/image";
import ScrollAni from "./scrollAni";
import BigButton from "../bigButton";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainImage from "./mainImage";
import MainText from "./mainText";
import SnsListContent from "./snsListContent";
import MainContainer from "./mainContainer";
import ScrollAniContainer from "./scrollAniContainer";
export default function Main() {
  const snsList = [
    {
      id: 1,
      src: "icon-instagram.png",
      alt: "인스타그램",
      href: "https://www.instagram.com/ji.hooon2/",
    },
    {
      id: 2,
      src: "icon-github.png",
      alt: "깃허브",
      href: "https://github.com/jangjihoon96",
    },
    {
      id: 3,
      src: "icon-writing.png",
      alt: "이력서",
      href: "https://www.notion.so/Next-js-Typescript-0986f193e0d74ec8ae0e18a77352e551?pvs=4",
    },
  ];

  return (
    <MainContainer id="home">
      <MainText>
        <h2>
          J.Jihoon<span>🐈</span>
        </h2>
        <strong>
          <span>Frontend Developer</span>
        </strong>
        <p>
          안녕하세요. 프론트엔드 개발자 장지훈입니다. 항상 사용자 중심적으로
          생각하며, 직관적이고 효율적인 인터페이스를 구현하기 위해 노력하는
          개발자입니다.
        </p>
        <BigButton className="helloButton">
          Say Hello <FontAwesomeIcon icon={faPaperPlane} className="icon" />
        </BigButton>
      </MainText>
      <MainImage>
        <Image
          src="/images/profile/mainbig_profile.jpg"
          alt="프로필"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        ></Image>
      </MainImage>
      <SnsListContent>
        {snsList.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.href} target="_blank">
                <Image
                  src={`/icons/${item.src}`}
                  alt={item.alt}
                  width={24}
                  height={24}
                />
              </a>
            </li>
          );
        })}
      </SnsListContent>
      <ScrollAniContainer>
        <ScrollAni />
        <span className="text">Scroll down &darr;</span>
      </ScrollAniContainer>
    </MainContainer>
  );
}
