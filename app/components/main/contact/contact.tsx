import Title from "../../text/title";
import Description from "../../text/description";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";
import {
  StyledContactContainer,
  StyledContactForm,
  StyledContactInfo,
} from "./StyledContact";

export default function Contact() {
  return (
    <section id="contact">
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
