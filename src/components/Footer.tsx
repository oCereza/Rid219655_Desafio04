import React from 'react';
import styled from 'styled-components';
import FigmaIcon from '../assets/Figma.svg';
import GitHubIcon from '../assets/GitHub.svg';
import LinkedInIcon from '../assets/Linkedin.svg';

const FooterContainer = styled.footer`
  padding: 5rem 0 3rem 0;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    padding: 4rem 0 2.5rem 0;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
    padding: 3rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0 1.5rem 0;
    gap: 2rem;
    margin-top: 1.5rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 992px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
  }
`;

const ContactItem = styled.div``;

const ContactLabel = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 992px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.375rem;
  }
`;

const ContactInfo = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 992px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;
  }

  @media (max-width: 768px) {
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    
    img {
      width: 40px !important;
      height: 40px !important;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContactDetails>
        <ContactItem>
          <ContactLabel>Meu contato:</ContactLabel>
          <ContactInfo>51 98915-1717</ContactInfo>
        </ContactItem>
        <ContactItem>
          <ContactLabel>Email:</ContactLabel>
          <ContactInfo>andersoncereza@hotmail.com</ContactInfo>
        </ContactItem>
      </ContactDetails>
      <SocialLinks>
        <a href="https://github.com/oCereza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={GitHubIcon} style={{ width: '50px', height: '50px' }} />
        </a>
        <a href="https://www.linkedin.com/in/anderson-cereza/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={LinkedInIcon} style={{ width: '50px', height: '50px' }} />
        </a>
        <a href="https://www.figma.com/design/O2j7uVVhXUnV6dadZc2MMw/Desafio-03--Desenvolva-um-portf%C3%B3lio-com-React-hooks?node-id=0-1&p=f&t=0LzW0dth4h1yjpEr-0" target="_blank" rel="noopener noreferrer" aria-label="Figma">
          <img src={FigmaIcon} style={{ width: '50px', height: '50px' }} />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
