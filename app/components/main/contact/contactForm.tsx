"use client";
import styled from "styled-components";
import ContactSubTitle from "./contactSubTitle";
import ContactInput from "./contactInput";
import ContactSendButton from "./contactSendButton";
import React, { useRef, useState } from "react";
import { sendEmail } from "@/pages/api/email/email";

export default function ContactForm() {
  const form = React.useRef(null);
  const [nameValue, setNameValue] = useState("");
  const [eamilValue, setEamilValue] = useState("");
  const [projectValue, setProjectValue] = useState("");
  const handleSendReset = () => {
    setNameValue("");
    setEamilValue("");
    setProjectValue("");
  };

  return (
    <StyledContactForm method="GET" ref={form} onSubmit={sendEmail}>
      <ContactSubTitle>Write me your project</ContactSubTitle>
      <ContactInput
        labelTitle="Name"
        type="text"
        id="name"
        htmlfor="name"
        name="userName"
        placeholder="Insert your name"
        value={nameValue}
        setValue={setNameValue}
      />
      <ContactInput
        labelTitle="Email"
        type="email"
        id="email"
        htmlfor="email"
        name="userEmail"
        placeholder="Insert your email"
        value={eamilValue}
        setValue={setEamilValue}
      />
      <ContactInput
        labelTitle="Project"
        type="textarea"
        id="project"
        htmlfor="project"
        name="userProject"
        placeholder="Insert your Project"
        value={projectValue}
        setValue={setProjectValue}
      />
      <ContactSendButton type="submit" handleSendReset={handleSendReset}>
        Send Message
      </ContactSendButton>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.form``;
