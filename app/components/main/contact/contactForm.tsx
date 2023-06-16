import styled from "styled-components";
import ContactSubTitle from "./contactSubTitle";
import ContactInput from "./contactInput";
import ContactSendButton from "./contactSendButton";

export default function ContactForm() {
  return (
    <StyledContactForm method="GET">
      <ContactSubTitle>Write me your project</ContactSubTitle>
      <ContactInput
        labelTitle="Name"
        type="text"
        id="name"
        htmlfor="name"
        name="userName"
        placeholder="Insert your name"
      />
      <ContactInput
        labelTitle="Email"
        type="email"
        id="email"
        htmlfor="email"
        name="userEmail"
        placeholder="Insert your email"
      />
      <ContactInput
        labelTitle="Project"
        type="textarea"
        id="project"
        htmlfor="project"
        name="userProject"
        placeholder="Insert your Project"
      />
      <ContactSendButton type="submit">Send Message</ContactSendButton>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.form``;
