'use client';

import styled from 'styled-components';
import { H2, P } from '../ui/font';
import { Card, CardHeader } from '../ui/card';
import { useThemeChange } from '@/context/ThemeChangeProvider';
import { Badge } from '../ui/badge';
import { GlobalTheme } from '@/style/theme';
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
  padding: 2.4rem;
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: fit-content;
  gap: 0;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;

    border: 1px solid transparent;

    &:hover {
      border-top-color: rgb(17 24 39 / 0.5);
      background-color: rgba(30 41 59 / 0.5);
      box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
      background-color: rgba(248 250 252 / 0.5);
      border-top-color: rgb(191 219 254 / 1);
    }
  }
`;
const StyledCardHeader = styled(CardHeader)`
  font-size: 1.6rem;
  color: #94a3b8;
  white-space: nowrap;
`;
export const StyledContent = styled.p<{ color: GlobalTheme }>`
  padding: 0;
  color: ${({ color }) => color.primary};
  font-weight: 700;
`;
export const StyledDescription = styled(P)`
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
    company: 'Quantaco',
    responsibility:
      "Co-founded Swoop Exchange and led its Engineering & Development, guiding the project's technical execution and strategic vision. My role was hands-on, involving the development, design, and coding of essential components. Simultaneously, I focused on directing the project's technical path.",
    skills: [
      'Typescript',
      'JavaScript',
      'CSS',
      'Tailwind CSS',
      'MUI',
      'HTML',
      'Figma',
      'UI/UX Design',
      'Blockchain tech',
      'Project Management',
      'Planning',
      'Leadership',
      'Testing & QA',
    ],
  },
  {
    timeline: 'Jan 2022 — Oct 2022',
    position: 'Frontend developer',
    company: 'Basepair',
    responsibility: 'Quality Assurance Engineer',
    skills: [
      'ISO Compliance',
      'Quality Assurance',
      'Engineering Management',
      'ISO 9001',
      'ISO 45001',
      'ISO 14001',
      'Requirement Assessment',
      'Auditing',
    ],
  },
  {
    timeline: 'Jan 2021 - Dec 2021',
    position: 'Frontend developer',
    company: 'Newscorps',
    responsibility:
      'Gained valuable experience in digital systems administration, focusing on the management of contractors and capital.',
    skills: [
      'SQL',
      'Administration',
      'Problem-Solving',
      'Computer Systems',
      'System documentation',
      'Networking',
      'Cloud Computing',
      'Automation',
      'Scripting',
    ],
  },
];

export const ExpComponent = () => {
  const { colortheme } = useThemeChange();
  return (
    <StyledSection id="experience">
      <StyledTitle>
        <H2>EXPERIENCE</H2>
      </StyledTitle>
      <>
        {Experience.map(({ timeline, position, company, responsibility, skills }, index) => (
          <StyledCard key={index} darkmode={true} color={colortheme}>
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
                  <Badge key={index}>{skill}</Badge>
                ))}
              </StyledFooter>
            </div>
          </StyledCard>
        ))}
      </>
    </StyledSection>
  );
};
