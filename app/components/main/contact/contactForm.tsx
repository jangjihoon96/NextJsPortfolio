"use client";
import styled from "styled-components";
import ContactSubTitle from "./contactSubTitle";
import ContactInput from "./contactInput";
import ContactSendButton from "./contactSendButton";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { serviceId, templateId, userId } from "./emailData";
// import { sendEmail } from "@/pages/api/email/email";

export default function ContactForm() {
  const form = React.useRef(null);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [projectValue, setProjectValue] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameValue && emailValue && projectValue) {
      emailjs.sendForm(serviceId, templateId, e.currentTarget, userId).then(
        (result) => {
          console.log(result.text);
          alert("성공적으로 메일을 전송하였습니다.");
          setNameValue("");
          setEmailValue("");
          setProjectValue("");
        },
        (error) => {
          console.log(error.text);
          alert("메일 전송에 실패하였습니다.");
        }
      );
    } else {
      alert("빈칸을 모두 입력해주세요.");
    }
  };

  return (
    <StyledContactForm method="GET" ref={form} onSubmit={sendEmail}>
      <ContactSubTitle>Write me your message</ContactSubTitle>
      <ContactInput
        labelTitle="Name"
        type="text"
        id="name"
        htmlfor="name"
        name="userName"
        placeholder="이름을 입력해주세요."
        value={nameValue}
        setValue={setNameValue}
      />
      <ContactInput
        labelTitle="Email"
        type="email"
        id="email"
        htmlfor="email"
        name="userEmail"
        placeholder="이메일을 입력해주세요."
        value={emailValue}
        setValue={setEmailValue}
      />
      <ContactInput
        labelTitle="Message"
        type="textarea"
        id="project"
        htmlfor="project"
        name="userProject"
        placeholder="내용을 입력해주세요."
        value={projectValue}
        setValue={setProjectValue}
      />
      <ContactSendButton type="submit">Send Message</ContactSendButton>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.form``;
