import React from "react";
import styled from "styled-components";

import Container from "../Container";
import thatsme from "../../assets/images/ThatsMe.jpg";

const About = () => {
  return (
    <Container>
      <h1>About</h1>
      <p>
        <Image src={thatsme} alt="Kevin Smith" title="Photo of Kevin Smith" />
        Hello! My name is Kevin Smith and I am a JavaScript Engineer. I like to
        make fun and creative front end interfaces as well as working on complex
        algorithms. Mentoring junior engineers is a hobby of mine - feel free to
        reach out if you're working on anything and need some help!
      </p>
      <h2>Other Things I Enjoy</h2>
      <ul style={{ marginBottom: "50px" }}>
        <Li bullet=" 🎤 ">
          Karaoke (Ask me which songs I love to sing, I have a long list!)
        </Li>
        <Li bullet=" 🎮 ">Gaming (I usually play single player)</Li>
        <Li bullet=" 🧀 ">Green Bay Packers</Li>
        <Li bullet=" 🍺 ">A nice, cold brewski</Li>
      </ul>
    </Container>
  );
};

export default About;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: 0 -5px;
  float: right;
  border: 5px solid #fff;
`;

const Li = styled.li`
  list-style: ${({ bullet }) => `"${bullet}"`} inside;
  font-size: 1.6rem;
  margin-bottom: 5px;
`;
