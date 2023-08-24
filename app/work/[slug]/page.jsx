'use client';
import { redirect } from 'next/navigation';
import styled from 'styled-components';
import projects from '../../../data/projects';
import techIcons from '../../../components/techIcons';

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

export default function Page({ params }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) {
    redirect('/work');
  }
  return (
    <>
      <Title background={project.image}>{project.title}</Title>
      <p>{project.abstract}</p>
      <h2>Stack</h2>
      <Stack>
        {project.tech &&
          project.tech.map(tech => (
            <div role='img' key={tech} title={tech}>
              {techIcons[tech]}
            </div>
          ))}
      </Stack>
      <h2>Links</h2>
      <Links>
        {project.links &&
          project.links.map(link => (
            <a
              href={link.url}
              key={link.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {link.text}
            </a>
          ))}
      </Links>
    </>
  );
}
