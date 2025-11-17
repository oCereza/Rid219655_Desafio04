import React from 'react';
import styled from 'styled-components';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const Card = styled.div`
  background-color: #0E1628;
  border: 1px solid #1E293B;
  border-radius: 50px 0 50px 0;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  transition: transform 0.3s, filter 0.3s;
  color: #FFFFFF;
  filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 1));

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 30px 0 30px 0;
  }

  @media (max-width: 480px) {
    padding: 0.875rem;
    border-radius: 20px 0 20px 0;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
  }
`;

const Title = styled.h3`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 992px) {
    font-size: 1.875rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const Description = styled.p`
  color: #FFFFFF;
  flex-grow: 1;
  margin-bottom: 2rem;
  line-height: 1.4;
  font-size: 1.75rem;
  font-weight: 600;

  @media (max-width: 992px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const GradientButton = styled.a`
  display: inline-block;
  padding: 14px 32px;
  border-radius: 50px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(90deg, #945DD6, #6978D1, #13ADC7);
  transition: background-position 0.5s ease;
  align-self: flex-start;

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 0.9rem;
    align-self: center;
    width: 100%;
    max-width: 200px;
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 0.85rem;
    max-width: 180px;
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <ProjectImage src={project.imageUrl} alt={`Imagem do ${project.title}`} />
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <GradientButton href={project.link} target="_blank" rel="noopener noreferrer">
        Clique aqui
      </GradientButton>
    </Card>
  );
};

export default ProjectCard;
