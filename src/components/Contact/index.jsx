import { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import linkedinIcon from "@iconify/icons-logos/linkedin";
import emailIcon from "@iconify/icons-carbon/email";

import Container from "../Container";

const Contact = () => {
  const [text, setText] = useState("");

  const handleEmailClick = async () => {
    const email = ["i.am", "kevinsmith.dev"].join("@");
    try {
      const result = await navigator.permissions.query({
        name: "clipboard-write",
      });
      if (result.state === "granted" || result.state === "prompt") {
        await navigator.clipboard.writeText(email);
        setText("Email address copied to clipboard!");
      }
    } catch {
      setText(`Email address (${email}) could not be copied to clipboard`);
    }
  };
  return (
    <Container>
      <h1>Contact</h1>
      <Link
        href="https://www.linkedin.com/in/keveightysev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={linkedinIcon} width="100%" />
      </Link>
      <Email onClick={handleEmailClick}>
        Email
        <Icon icon={emailIcon} width="20%" color="#000" />
      </Email>
      <Confirm>{text}</Confirm>
    </Container>
  );
};

const Confirm = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const Link = styled.a`
  display: block;
  background: #fff;
  width: 30%;
  padding: 2%;
  border-radius: 5px;
  margin-bottom: 10px;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

const Email = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  font-size: 3rem;
  font-weight: 600;
  color: #000;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 2%;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 80%;
  }

  svg {
    margin-left: 10px;
  }
`;

export default Contact;
