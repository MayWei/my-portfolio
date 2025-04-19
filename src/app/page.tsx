'use client';
import { About } from '@/components/container/About';
import Contact from '@/components/container/Contact';
import { ExpComponent } from '@/components/container/Experience';
import Navigation from '@/components/container/Navigation';
import Projects from '@/components/container/Projects';
import { useThemeChange } from '@/context/ThemeChangeProvider';
import { GlobalTheme } from '@/style/theme';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import styled from 'styled-components';
const StyledContainer = styled.div<{ color: Global Theme }>`
  margin: 0 auto;
  min-height: 100vh;
  max-width: ${(props) => props.theme.breakpoints.xl};
  padding: 4.8rem 2.4rem;
  background-color: ${({ color }) => color.background};
  color: ${({ color }) => color.foreground};
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 8rem 4.8rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 9.6rem;
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
  }
`;
const inter = Inter({ subsets: ['latin'] });
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 2.4rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-top: 9.6rem;
    padding-bottom: 9.6rem;
    width: 50%;
    gap: 3.2rem;
  }
`;
export default function Page() {
  const { colortheme } = useThemeChange();
  return (
    <>
      <Head>
        <style jsx global>{`
          body {
            font-family: '${inter.style.fontFamily}';
          }
        `}</style>
        <title>Linda</title>
      </Head>
      <StyledContainer color={colortheme}>
        <Navigation />
        <StyledMain>
          <About />
          <ExpComponent />
          <Projects />
          <Contact />
        </StyledMain>
      </StyledContainer>
    </>
  );
}
