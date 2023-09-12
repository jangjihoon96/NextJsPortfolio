import Image from "next/image";
import Title from "../../text/title";
import Description from "../../text/description";
import AboutContainer from "./aboutContainer";
import AboutContents from "./aboutContents";
import AboutImage from "./aboutImage";

export default function About() {
  return (
    <section id="about">
      <Title>About Me</Title>
      <Description>My introduction</Description>
      <AboutContainer>
        <AboutImage>
          <Image
            src="/images/profile/about_profile.jpg"
            alt="프로필"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          ></Image>
        </AboutImage>
        <AboutContents />
      </AboutContainer>
    </section>
  );
}
