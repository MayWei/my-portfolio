'use client';

import { Mail } from 'lucide-react';
import { StyledButton } from '../ui/Button';
import { useThemeChange } from '@/context/ThemeChangeProvider';
import { StyledDescription, StyledSection, StyledTitle } from './Experience';
import { H2 } from '../ui/font';
import styled from 'styled-components';
import { StyledLink } from './Projects';
import { GlobalTheme } from '@/style/theme';
import { useMemo, useRef, useState } from 'react';
import { Modal } from '../ui/Modal';

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
const StyledH2 = styled.h2`
  font-size: 4.8rem;
  line-height: 1;
  font-weight: 700;
  display: none;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: block;
    text-align: start;
  }
`;
const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
`;
const StyledP = styled.p<{ darkmode: boolean; color: GlobalTheme }>`
  margin: 0;
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin-left: 1.2rem;
  ${({ darkmode, color }) => (darkmode ? `color:white;` : `color:${color.muted};`)}
`;
export default function Contact() {
  const { colortheme } = useThemeChange();
  const darkmode = useMemo(() => !!(colortheme.theme == 'dark'), [colortheme]);
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <StyledSection id="contact">
      <StyledTitle>
        <H2>Get In Touch</H2>
      </StyledTitle>

      <StyledContainer>
        <StyledH2>Get In Touch</StyledH2>
        <StyledDescription color={colortheme}>
          Sounds like I&#39;d be a good fit for a position or project? Now is the time to reach out!
        </StyledDescription>
      </StyledContainer>
      <StyledButtonContainer>
        <StyledLink
          href="mailto:weiminlcb@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: '100%' }}
        >
          <StyledButton
            variant="default"
            size="default"
            color={colortheme}
            style={{ width: '100%', height: '100%' }}
            onClick={() => setIsOpen(true)}
          >
            <Mail style={{ color: 'white', width: '2.4rem', height: '2.4rem' }} />
            <StyledP darkmode={darkmode} color={colortheme}>
              Say hello
            </StyledP>
          </StyledButton>
        </StyledLink>
      </StyledButtonContainer>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Open email client"
        ref={videoRef}
      >
        <>
          <StyledDescription color={colortheme}>
            This site is attempting to open your email client so you can contact me. If nothing
            happens, it means there is no email client configured on your device.
          </StyledDescription>
          <StyledDescription color={colortheme}>
            You can contact me at{' '}
            <span style={{ color: 'hsl(221.2, 83.2%, 53.3%)' }}>weiminlcb@gmail.com</span>
          </StyledDescription>
        </>
      </Modal>
    </StyledSection>
  );
}
