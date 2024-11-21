'use client';

import styled from 'styled-components';
import {
  StyledCard,
  StyledContent,
  StyledDescription,
  StyledFooter,
  StyledSection,
} from './Experience';
import { useThemeChange } from '@/context/ThemeChangeProvider';
import { CardHeader } from '../ui/card';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import cashupImage from '@/assets/Cashup.png';
import { GlobalTheme } from '@/style/theme';
import { useMemo } from 'react';
import { StyledH2, StyledTitle } from './About';
// import saleslineImage from '@/assets/Salesline.png';

const ProjectsData = [
  {
    imagePath: '../../assets/Cashup.png',
    title: 'Cashup - Application',
    description:
      'Cashup is automated Daily Taking Sheet (DTS) which streamlining operation in hospitality industry and improving user experience',
    skills: [
      'Typescript',
      'Styled-components',
      'React',
      'React-native',
      'GraphQL',
      'Netlify',
      'GCP',
      'Jest',
      'Figma',
      'Django',
      'Python',
      'Bitbucket',
    ],
    link: 'https://cashup.quantaco.co',
  },
  {
    imagePath: '../../assets/Salesline.png',
    title: 'Salesline - Application',
    description:
      'Salesline is an analytical product to help hospitality venues understand trends in their business activities and optimize the efficiency of staff costs and sales, driving data-driven decision-making.',
    skills: ['Next.js', 'Typescript', 'Antd', 'Netlify', 'Figma'],
    link: 'https://salesline.quantaco.co',
  },
  {
    imagePath: '/meikopoulos.com_PC.png',
    title: 'Prospa',
    description:
      'Prospa is a bank account and loan management app, which implements all the common features including adding funds, bank transactions, loans, payees management',
    skills: ['React', 'React Native', 'Nodejs', 'GraphQL', 'Jest', 'Storybook', 'AWS'],
    link: 'https://online.prospa.com',
  },
];

export const StyledLink = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
const StyledCardHeader = styled(CardHeader)`
  padding: 0;
  margin-bottom: 1.6rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 33%;
  }
`;
const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 67%;
  }
`;
const StyledImage = styled(Image)<{ color: GlobalTheme }>`
  background-color: #141414;
  margin-top: 0.8rem;
  border: 1 solid;
  border-color: ${(props) => props.color['muted-foreground']};
  border-radius: 0.8rem;
  width: 100%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  max-width: 100%;
  box-sizing: border-box;
`;
export default function Projects() {
  const { colortheme } = useThemeChange();
  const darkmode = useMemo(() => !!(colortheme.theme == 'dark'), [colortheme]);
  return (
    <StyledSection id="projects">
      <StyledTitle color={colortheme}>
        <StyledH2>Projects</StyledH2>
      </StyledTitle>
      <>
        {ProjectsData.map((project, index) => (
          <StyledLink key={index} href={project.link} target="_blank" rel="noopener noreferrer">
            <StyledCard key={index} darkmode={darkmode} color={colortheme}>
              <StyledCardHeader>
                <StyledImage
                  src={cashupImage}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  color={colortheme}
                />
              </StyledCardHeader>
              <StyledContentContainer>
                <StyledContent color={colortheme}>
                  {project.title}{' '}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </StyledContent>
                <StyledDescription color={colortheme}>{project.description}</StyledDescription>
                <StyledFooter>
                  {project.skills.map((skill, index) => (
                    <Badge key={index} color={colortheme}>
                      {skill}
                    </Badge>
                  ))}
                </StyledFooter>
              </StyledContentContainer>
            </StyledCard>
          </StyledLink>
        ))}
      </>
    </StyledSection>
  );
}
