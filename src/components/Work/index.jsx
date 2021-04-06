import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import projects from "../projects";
import Container from "../Container";

const Work = () => {
  const [teamProjects, setTeamProjects] = useState([]);
  const [personalProjects, setPersonalProjects] = useState([]);
  useEffect(() => {
    const teams = projects.filter((p) => p.type === "team");
    setTeamProjects(teams);
    const pers = projects.filter((p) => p.type === "personal");
    setPersonalProjects(pers);
  }, [setPersonalProjects, setTeamProjects]);
  return (
    <Container>
      <h1>Work</h1>
      <p>
        Here is a selection of projects that I have worked on or am currently
        working on.
      </p>
      <h2>Team Projects</h2>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {teamProjects.map((p) => {
          return (
            <ProjectLink to={`/project/${p.slug}`} key={p.slug}>
              <ProjectLi background={p.image}>{p.title}</ProjectLi>
            </ProjectLink>
          );
        })}
      </ul>
      <h2>Personal Projects</h2>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {personalProjects.map((p) => {
          return (
            <ProjectLink to={`/project/${p.slug}`} key={p.slug}>
              <ProjectLi background={p.image}>{p.title}</ProjectLi>
            </ProjectLink>
          );
        })}
      </ul>
    </Container>
  );
};

export default Work;

const ProjectLink = styled(Link)`
  width: 45%;
  height: 150px;
  margin: 10px;
  text-decoration: none;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ProjectLi = styled.li`
  list-style-type: none;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.73)
    ),
    url(${({ background }) => background});
  background-size: cover;
  width: 100%;
  height: 100%;
  padding: 10px 2%;
  font-size: 1.6rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  user-select: none;
  color: #fff;
`;
