'use client';
import { useThemeChange } from '@/context/ThemeChangeProvider';
import { GlobalTheme } from '@/style/theme';
import { FC } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  scroll-margin-top: 6.4rem;
`;

export const StyledTitle = styled.div<{ color: GlobalTheme }>`
  position: sticky;
  top: 0;
  z-index: 20;
  margin: 0 -2.4rem 1.6rem -2.4rem;
  width: 100vw;
  background-color: ${({ color }) => color['background-full-transparent']};
  padding: 2rem 2.4rem;
  backdrop-filter: blur(10px);
  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: -4.8rem;
    margin-right: -4.8rem;
    padding-left: 4.8rem;
    padding-right: 4.8rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
    position: relative;
    top: auto;
    margin: auto;
    width: 100%;
    padding: 0;
    opacity: 0;
  }
`;
export const StyledH2 = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media ${(props) => props.theme.breakpoints.lg} {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const StyledContentItem = styled.p<{ color: GlobalTheme }>`
  margin: 0;
  text-align: start;
  font-size: 1.6rem;
  color: ${({ color }) => color['muted-foreground']};
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
`;
const StyledSkills = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin: 20px 0 0;
  overflow: hidden;
  list-style: none;
`;
const SkillsList = styled.li`
  position: relative;
  margin-bottom: 1rem;
  padding-left: 2rem;
  font-size: 1.3rem;

  &&::before {
    content: '▹';
    position: absolute;
    left: 0px;
    color: hsl(221.2, 83.2%, 53.3%);
    font-size: 1.3rem;
    line-height: 12px;
  }
`;
export const About: FC = () => {
  const { colortheme } = useThemeChange();
  return (
    <StyledSection id="about">
      <StyledTitle color={colortheme}>
        <StyledH2>About me</StyledH2>
      </StyledTitle>
      <StyledContent>
        <StyledContentItem color={colortheme}>
          Hi there! I&#39;m Linda, a senior software engineer based in Sydney, Australia, with a
          strong grasp of both frontend and backend technologies to complement my core expertise.
        </StyledContentItem>
        <StyledContentItem color={colortheme}>
          As a senior software engineer engineer, I excel at understanding the underlying systems to
          create top-notch web and mobile applications. I worked more than 15 years experiences as
          software engineer in industries across hospitality, financial, e-commerce and
          semiconductor, and many successful commercial projects.
        </StyledContentItem>
        <StyledContentItem color={colortheme}>
          Here are a few technologies I&#39;ve been working with recently:
        </StyledContentItem>
        <StyledSkills>
          <SkillsList>Typescript</SkillsList>
          <SkillsList>Node.js</SkillsList>
          <SkillsList>NextJS</SkillsList>
          <SkillsList>Python</SkillsList>
          <SkillsList>React (ES6+) & React Native</SkillsList>
          <SkillsList>GraphQL</SkillsList>
          <SkillsList>AWS & GCP</SkillsList>
          <SkillsList>SQL</SkillsList>
          <SkillsList>HTML5 & CSS</SkillsList>
          <SkillsList>Express</SkillsList>
          <SkillsList>Django</SkillsList>
        </StyledSkills>
      </StyledContent>
    </StyledSection>
  );
};
