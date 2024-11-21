'use client';

import styled from 'styled-components';
import { H2, P } from '../ui/font';
import { Card, CardHeader } from '../ui/card';
import { useThemeChange } from '@/context/ThemeChangeProvider';
import { Badge } from '../ui/badge';
import { GlobalTheme } from '@/style/theme';
import { useMemo } from 'react';
interface EXPERIENCE {
  timeline: string;
  position: string;
  company: string;
  responsibility: string;
  skills: Array<string>;
}
export const StyledSection = styled.section`
  scroll-margin-top: 6.4rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 6.4rem;
  }
`;
export const StyledTitle = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  margin: 0 -2.4rem 1rem -2.4rem;
  width: 100vw;
  background-color: hsl(0 0% 100% 0);
  backdrop-filter: blur();
  padding: 2.4rem 2rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    position: relative;
    top: auto;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    opacity: 0;
    display: none;
  }
`;
export const StyledCard = styled(Card)<{ darkmode: boolean }>`
  margin-bottom: 1.6rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-height: fit-content;
  gap: 0;
  border-color: transparent;
  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: row;
    padding: 2.4rem;
    gap: 2rem;
    ${({ darkmode }) =>
      !darkmode
        ? `&:hover {
      border-top-color: rgb(191, 219, 254);
      background-color: rgba(248, 250, 252, 0.5);
      box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
      filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) 
             drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));  
    }`
        : `&:hover {
      border-top-color:rgb(30, 58, 138);
      background-color: rgba(30, 41, 59, 0.5);
      box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
      filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) 
             drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));  
    }`}
  }
`;
const StyledCardHeader = styled(CardHeader)`
  font-size: 1.6rem;
  color: #94a3b8;
  white-space: nowrap;
`;
export const StyledContent = styled.p<{ color: GlobalTheme }>`
  margin: 0;
  padding: 0;
  color: ${({ color }) => color.foreground};
  font-size: 1.6rem;
  font-weight: 700;
`;
export const StyledDescription = styled(P)`
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 1.2rem 0;
`;
export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  gap: 0.8rem;
`;
const Experience: EXPERIENCE[] = [
  {
    timeline: 'Oct 2022 — Present',
    position: 'Senior Frontend developer',
    company: 'Quantaco(part of PKF)',
    responsibility:
      'Spearheaded the development of the Frontend, utilizing React Native and ReactJS, built an automated Daily Taking Sheet (DTS), and a analytical product to help hospitality venues understand trends in their business activities and optimize the efficiency of staff costs and sale. Architected and built products from scratch, adhering to Test-Driven Development (TDD) principles. Configured CI/CD pipelines with Bitbucket, facilitating rapid development',
    skills: [
      'Typescript',
      'Styled-components',
      'React',
      'React-native',
      'GraphQL',
      'Netlify',
      'GCP',
      'Jest',
      'Django',
      'Python',
      'Bitbucket',
    ],
  },
  {
    timeline: 'Jan 2022 — Oct 2022',
    position: 'Frontend developer',
    company: 'Basepair',
    responsibility:
      'Developed an bank account and loan management app for Prospa with React Native and ReactJS,Adhering to Test-Driven Development (TDD) principles,Utilized a diverse set of technologies to deliver versatile and scalable solutions ',
    skills: ['ReactJS', 'React Native', 'GraphQL', 'Storybook', 'Jest', 'AWS', 'Nodejs'],
  },
  {
    timeline: 'Jan 2021 - Dec 2021',
    position: 'Frontend developer',
    company: 'Newscorps',
    responsibility:
      'Developed a new website(codesports),Implemented a set of new features for the News Corps website with  Vanilla Javascript',
    skills: ['HTML', 'CSS', 'SCSS', 'Vanilla Javascript'],
  },
];

export const ExpComponent = () => {
  const { colortheme } = useThemeChange();
  const darkmode = useMemo(() => !!(colortheme.theme == 'dark'), [colortheme]);
  return (
    <StyledSection id="experience">
      <StyledTitle>
        <H2>EXPERIENCE</H2>
      </StyledTitle>
      <>
        {Experience.map(({ timeline, position, company, responsibility, skills }, index) => (
          <StyledCard key={index} darkmode={darkmode} color={colortheme}>
            <CardHeader>
              <StyledCardHeader>{timeline}</StyledCardHeader>
            </CardHeader>
            <div style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
              <StyledContent color={colortheme}>
                {position} • {company}
              </StyledContent>
              <StyledDescription color={colortheme}>{responsibility}</StyledDescription>
              <StyledFooter>
                {skills.map((skill, index) => (
                  <Badge key={index} color={colortheme}>
                    {skill}
                  </Badge>
                ))}
              </StyledFooter>
            </div>
          </StyledCard>
        ))}
      </>
    </StyledSection>
  );
};
