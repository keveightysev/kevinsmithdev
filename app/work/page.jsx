'use client';
import styled from 'styled-components';
import Link from 'next/link';
import projects from '../../data/projects';

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

export default function Page() {
  return (
    <>
      <h1>Work</h1>
      <p>
        Here is a selection of projects that I have worked on or am currently
        working on.
      </p>
      <h2>Team Projects</h2>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {projects
          .filter(p => p.type === 'team')
          .map(p => {
            return (
              <ProjectLink href={`/work/${p.slug}`} key={p.slug}>
                <ProjectLi background={p.image}>{p.title}</ProjectLi>
              </ProjectLink>
            );
          })}
      </ul>
      <h2>Personal Projects</h2>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {projects
          .filter(p => p.type === 'personal')
          .map(p => {
            return (
              <ProjectLink href={`/work/${p.slug}`} key={p.slug}>
                <ProjectLi background={p.image}>{p.title}</ProjectLi>
              </ProjectLink>
            );
          })}
      </ul>
    </>
  );
}
