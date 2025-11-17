import React from 'react';
import styled from 'styled-components';

interface TimelineItem {
  year: string;
  text: string;
}

const timelineData: TimelineItem[] = [
  { year: '2021', text: 'Iniciei minha trajetória profissional no universo da programação, explorando os fundamentos da lógica computacional e das linguagens de desenvolvimento.' },
  { year: '2022', text: 'Iniciei minha formação em Analise e Desenvolvimento de Sistemas na Anhanguera, complementando meus estudos com diversos outros cursos.' },
  { year: '2024', text: 'Concluí a faculdade de Analise e Desenvolvimento de Sistemas na Anhanguera.' },
  { year: '2025', text: 'Iniciei minha formação em Arquiteto de Software na DNC.' },
];

const AboutContainer = styled.section`
  padding: 6rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem; 
  margin-bottom: 5rem; 
  text-align: left;

  @media (max-width: 992px) {
    font-size: 2rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 44px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.line};
    width: calc(100% - (100% / 4));
    left: calc(100% / 8);
    z-index: 0;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
    &::before {
      display: none;
    }
  }

  @media (max-width: 768px) {
    gap: 2.5rem 1.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    &::before {
      display: none;
    }
  }

  @media (max-width: 480px) {
    gap: 3rem;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.line};
    border-radius: 50%;
    z-index: 1;
  }

  @media (max-width: 576px) {
    text-align: left;
    &::after {
      display: none;
    }
  }
`;

const TimelineYear = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  margin-top: 0;

  @media (max-width: 992px) {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const TimelineText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
  display: inline-block;
  max-width: 230px;

  @media (max-width: 992px) {
    font-size: 1.125rem;
    max-width: 200px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 180px;
  }

  @media (max-width: 576px) {
    display: block;
    max-width: 100%;
    text-align: left;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.6;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <SectionTitle>Sobre mim</SectionTitle>
      <TimelineWrapper>
        {timelineData.map((item) => (
          <TimelineItem key={item.year}>
            <TimelineYear>{item.year}</TimelineYear>
            <TimelineText>{item.text}</TimelineText>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </AboutContainer>
  );
};

export default About;
