'use client';

import { Mail } from 'lucide-react';
import { StyledButton } from '../ui/Button';
import { useThemeChange } from '@/context/ThemeChangeProvider';
import { StyledDescription, StyledSection, StyledTitle } from './Experience';
import { H2 } from '../ui/font';
import styled from 'styled-components';
import { StyledLink } from './Projects';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3.2rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
`;
export default function Contact() {
  const { colortheme } = useThemeChange();
  return (
    <StyledSection id="contact">
      <StyledTitle>
        <H2>Get In Touch</H2>
      </StyledTitle>

      <StyledContainer>
        <H2>Get In Touch</H2>
        <StyledDescription color={colortheme}>
          Sounds like I&#39;d be a good fit for a position or project? Now is the time to reach out!
        </StyledDescription>
      </StyledContainer>
      <StyledLink
        href="mailto:alexander@meikopoulos.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: '100%' }}
      >
        <StyledButton
          variant={'default'}
          color={colortheme}
          style={{ width: '100%', height: '100%' }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Mail style={{ color: 'black', width: '2.4rem', height: '2.4rem' }} />
            <p
              style={{
                marginLeft: '12px',
                fontSize: '2.4rem',
                lineHeight: '3.2rem',
                color: 'black',
              }}
            >
              Say hello
            </p>
          </div>
        </StyledButton>
      </StyledLink>
    </StyledSection>
  );
}
