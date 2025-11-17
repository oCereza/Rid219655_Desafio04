import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  text-align: left;
  padding: 6rem 0;
  max-width: 650px;

  @media (max-width: 768px) {
    padding: 3rem 0;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  white-space: nowrap;
  font-weight: 600;

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    white-space: normal;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  line-height: 1.6;
  margin-left: 4rem;

  @media (max-width: 992px) {
    margin-left: 2rem;
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const GradientButton = styled.a`
  display: inline-block;
  padding: 12px 35px;
  border-radius: 50px;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(90deg, #945DD6, #6978D1, #13ADC7);
  transition: background-position 0.5s ease;
  margin-left: 6rem;

  @media (max-width: 992px) {
    margin-left: 2rem;
    padding: 10px 28px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px 25px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 8px 20px;
    font-size: 0.85rem;
  }
`;

const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HeroContainer>
      <Title>Olá, sou Anderson Cereza</Title>
      <Subtitle>
        Desenvolvedor full stack, criando soluções inovadoras a partir de ideias complexas, com paixão pelo desenvolvimento de software.
      </Subtitle>
      <GradientButton href="#projects" onClick={handleScrollToProjects}>Saber mais</GradientButton>
    </HeroContainer>
  );
};

export default Hero;
