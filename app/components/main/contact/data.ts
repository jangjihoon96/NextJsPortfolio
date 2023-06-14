import {
  faEnvelope,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type ContactDataType = {
  id: number;
  title: string;
  content: string;
  icon: FontAwesomeIconProps["icon"];
  href: string;
};

export const contactData: ContactDataType[] = [
  {
    id: 1,
    title: "Email",
    content: "jangna96@gmail.com",
    icon: faEnvelope,
    href: "mailto:jangna96@gmail.com",
  },
  {
    id: 2,
    title: "Phone",
    content: "010-3594-8965",
    icon: faMobileScreenButton,
    href: "tel:010-3594-8965",
  },
];
