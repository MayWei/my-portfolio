'use client';

import styled from 'styled-components';
import { H2 } from '../ui/font';
import {
  StyledCard,
  StyledContent,
  StyledDescription,
  StyledFooter,
  StyledSection,
  StyledTitle,
} from './Experience';
import { useThemeChange } from '@/context/ThemeChangeProvider';
import { CardHeader } from '../ui/card';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
import { Badge } from '../ui/badge';

const ProjectsData = [
  {
    imagePath: '/swoop-og-banner.webp',
    title: 'Swoop Exchange - Landing Page',
    description:
      "Swoop's landing page highlights the platform's use cases and solutions. Swoop Exchange is a Meta-DEX Aggregator that automatically sources, ranks and routes quotes from the best DEX Aggregators and Bridges, ensuring the best prices for on-chain and cross-chain swaps. Swoop Exchange has achieved millions in USD volume and currently has around 4000 monthly users with 0 paid marketing.",
    skills: ['Next.js', 'Framer', 'Shadcn/ui', 'Typescript', 'JavaScript', 'Vercel', 'Figma'],
    link: 'https://swoop.exchange',
  },
  {
    imagePath: '/app-front-1.png',
    title: 'Swoop Exchange - Application',
    description:
      'Swoop Exchange is a next generation Meta Decentralized Exchange and Bridge Aggregator. By Aggregating the Aggregators, Bridges, and Liquidity across chains, and off-chain it solves protocol and liquidity fragmentation, significantly improving UX. Provides access to: 450,000+ Tokens, 7+ Aggregators, 13+ Bridges, 50+ DEXs, 280+ Liquidity Sources and 16+ Blockchains.',
    skills: ['Next.js', 'Typescript', 'JavaScript', 'MUI', 'Tailwind CSS', 'Vercel', 'Figma'],
    link: 'https://app.mtopswap.com',
  },
  {
    imagePath: '/meikopoulos.com_PC.png',
    title: 'meikopoulos.com',
    description:
      "The portfolio webpage you are looking at right now. Based on Brittany Chiang's website (they awesome). Coded in Visual Studio Code.",
    skills: ['Typescript', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://github.com/0xAlexander/my-website',
  },
];

export const StyledLink = styled.a`
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
export default function Projects() {
  const { colortheme } = useThemeChange();
  return (
    <StyledSection id="projects">
      <StyledTitle>
        <H2>EXPERIENCE</H2>
      </StyledTitle>
      <>
        {ProjectsData.map((project, index) => (
          <StyledLink key={index} href={project.link} target="_blank" rel="noopener noreferrer">
            <StyledCard key={index} darkmode={true} color={colortheme}>
              <StyledCardHeader>
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
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
                    <Badge key={index}>{skill}</Badge>
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
