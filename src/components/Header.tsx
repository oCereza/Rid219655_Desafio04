import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '../assets/GitHub.svg';
import LinkedInIcon from '../assets/Linkedin.svg';

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0;
    gap: 1.25rem;
  }
`;

const Nav = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2.5rem;
  
  a {
    margin-right: 2.5rem;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;
  }

  @media (max-width: 992px) {
    gap: 1.5rem;
    
    a {
      margin-right: 1.5rem;
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    width: 100%;
    order: 2;
    justify-content: center;
    margin-top: 0;
    gap: 1rem;
    
    a {
      margin-right: 1rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    margin-top: 0;
    
    a {
      margin-right: 0.75rem;
      font-size: 0.9rem;
    }
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    order: 1;
    gap: 1rem;
    margin-bottom: 0;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    margin-bottom: 0;
    
    img {
      width: 24px !important;
      height: 24px !important;
    }
  }
`;

const HeaderSpacer = styled.div`
  width: 80px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderSpacer />
      <Nav>
        <a href="#projects">Projetos</a>
        <a href="#technologies">Tecnologias</a>
        <a href="#about">Sobre mim</a>
      </Nav>
      <Socials>
        <a href="https://github.com/oCereza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={GitHubIcon} style={{ width: '30px', height: '30px' }} />
        </a>
        <a href="https://www.linkedin.com/in/anderson-cereza/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={LinkedInIcon} style={{ width: '30px', height: '30px' }} />
        </a>
      </Socials>
    </HeaderContainer>
  );
};

export default Header;
