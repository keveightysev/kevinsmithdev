import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import projects from "../projects";
import techIcons from "../techIcons";
import Container from "../Container";

const Project = ({ history }) => {
  const [project, setProject] = useState({});
  const { slug } = useParams();
  useEffect(() => {
    const project = projects.find((p) => p.slug === slug);
    if (project === undefined) history.push("/");
    setProject(project);
  }, [slug, history]);
  return (
    <Container>
      <Title background={project.image}>{project.title}</Title>
      <p>{project.abstract}</p>
      <h2>Stack</h2>
      <Stack>
        {project.tech &&
          project.tech.map((tech) => (
            <div role="img" key={tech} title={tech}>
              {techIcons[tech]}
            </div>
          ))}
      </Stack>
      <h2>Links</h2>
      <Links>
        {project.links &&
          project.links.map((link) => (
            <a
              href={link.url}
              key={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
      </Links>
    </Container>
  );
};

export default Project;

const Stack = styled.section`
  display: flex;
  align-items: center;
  svg {
    margin-right: 20px;
  }
`;

const Links = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;
  a {
    color: #fff;
    line-height: 1.5;
  }
`;

const Title = styled.h1`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.73)
    ),
    url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
