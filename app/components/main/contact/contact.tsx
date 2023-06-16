import styled from "styled-components";
import Title from "../../text/title";
import Description from "../../text/description";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <section>
      <Title>Contact Me</Title>
      <Description>Get in touch</Description>
      <StyledContactContainer>
        <StyledContactInfo>
          <ContactInfo />
        </StyledContactInfo>
        <StyledContactForm>
          <ContactForm />
        </StyledContactForm>
      </StyledContactContainer>
    </section>
  );
}

const StyledContactContainer = styled.div`
  max-width: var(--container-width);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 100px;
`;

const StyledContactInfo = styled.div`
  width: 30%;
`;

const StyledContactForm = styled.div`
  width: 35%;
`;
