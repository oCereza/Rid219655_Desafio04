import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import blog from '../assets/blog.png';
import sitednc from '../assets/sitednc.png';
import caferaiz from '../assets/caferaiz.png';
import tarefas from '../assets/tarefas.png';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projectsData: Project[] = [
  { id: 1, title: 'BLOG', description: 'Página de um blog responsivo para desenvolvedores e criado para o curso da DNC.', imageUrl: blog, link: 'https://stirring-snickerdoodle-83334d.netlify.app/' },
  { id: 2, title: 'BOARD DE TAREFAS', description: 'Um gerenciador de tarefas responsivo com funcionalidades de adicionar, editar e excluir tarefas.', imageUrl: tarefas, link: 'https://gerenciadotarefas.netlify.app/' },
  { id: 3, title: 'LANDING PAGE', description: 'Bem-vindo ao projeto Landing Page, um site simples para capturar novos clientes via formulario.', imageUrl: sitednc, link: 'https://landingpagetest.netlify.app/' },
  { id: 4, title: 'CAFÉ RAIZ', description: 'Café Raiz, um site simples e elegante para promover cafés premium e produtos relacionados.', imageUrl: caferaiz, link: 'https://ocereza.github.io/cafe__raiz/' },]
  

const ProjectsContainer = styled.section`
  padding: 4rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: left;
  font-weight: 600;

  @media (max-width: 992px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rem;
  margin-left: 5rem;

  @media (max-width: 992px) {
    gap: 5rem;
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projetos</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
