'use client';
import styled from 'styled-components';
import { H1, H2, P } from '../ui/font';
import { useThemeChange } from '@/context/ThemeChangeProvider';
import { GlobalTheme } from '@/style/theme';
import useActiveNav from '@/hooks/useActiveNav';
import { useCallback } from 'react';
import { StyledButton } from '../ui/Button';
import { Dropdown } from '../ui/dropdown';
// import Github from '../../assets/github.svg';
// import LinkedIn from '../../assets/linkedin.svg';

interface NavigationItem {
  name: string;
  href: string;
}
const StyledContainer = styled.header`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media ${(props) => props.theme.breakpoints.lg} {
    position: sticky;
    top: 0;
    height: 100vh;
    max-height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.6rem;
    padding: 9.6rem 0;
  }
`;
const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 2.4rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-right: 9.6rem;
    margin-top: 0;
  }
`;
const StyledH1 = styled(H1)`
  margin: 0;
  font-size: 4.2rem;
  font-weight: 700;
  text-align: start;
`;
const StyledH2 = styled(H2)`
  margin: 0;
  font-size: 2rem;
  text-align: start;
  line-height: 2.8rem;
`;
const StyledP = styled(P)`
  margin: 0;
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: start;
`;
const StyledNav = styled.nav`
  ${(props) => {
    console.log(props.theme);
    return ``;
  }}
  display: none;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
  }
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: max-content;
  text-align: start;
  gap: 2.4rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 500;
`;
const StyledLi = styled.li<{ color: GlobalTheme }>`
  &:hover {
    .indicator {
      width: 6.4rem;
      height: 0.1rem;
      background-color: ${({ color }) => color.foreground};
    }
    .text {
      color: ${({ color }) => color.foreground};
    }
  }
`;
const StyledIndicator = styled.span<{ color: GlobalTheme; active: boolean }>`
  display: inline-block;
  margin-right: 1.6rem;
  height: 0.1rem;
  width: 3.2rem;
  background-color: rgb(71, 85, 105);
  transition: all;
  ${({ active, color }) =>
    active ? `width:6.4rem;height:2px; background-color:${color.foreground}` : ``}
`;
const StyledText = styled.span<{ active: boolean; color: GlobalTheme }>`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ active, color }) => (active ? `${color.foreground}` : `rgb(71,85,105)`)};
`;
const StyledIconContainer = styled.ul`
  display: flex;
  gap: 2.4rem;
  margin-top: 2.4rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 0;
  }
`;
const GithubComp = ({ fill }: { fill: string }) => (
  <svg
    role="img"
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1.9rem"
    height="1.9rem"
  >
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
const LinkedInComp = () => (
  <svg
    role="img"
    width="1.9rem"
    height="1.9rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>LinkedIn</title>
    <path
      fill="#0A66C2"
      d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3V9.42h3ZM6.59,8.12a1.73,1.73,0,1,1,1.73-1.73A1.73,1.73,0,0,1,6.59,8.12ZM18.91,18.74h-3V13.91c0-1.12,0-2.56-1.56-2.56s-1.8,1.22-1.8,2.48v4.91h-3V9.42h2.89v1.32h0a3.16,3.16,0,0,1,2.84-1.56c3,0,3.6,2,3.6,4.58Z"
    />
  </svg>
);
export default function Navigation() {
  const [activeSection] = useActiveNav(['about', 'experience', 'projects', 'contact']);
  const navigationItems: NavigationItem[] = [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Experience',
      href: '#experience',
    },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
  const isNavActive = useCallback((navId: string) => !!(navId === activeSection), [activeSection]);
  const { colortheme } = useThemeChange();
  return (
    <StyledContainer>
      <StyledHeroContainer>
        <StyledH1>Hi, I&#39;m Linda 👋</StyledH1>
        <StyledH2> Senior Frontend developer</StyledH2>
        <StyledP color={colortheme}>
          {' '}
          I build user-first, captivating applications and provide seemless user experience
        </StyledP>
      </StyledHeroContainer>
      <StyledNav>
        <StyledUl>
          {navigationItems.map(({ name, href }) => {
            const active = isNavActive(href.substring(1));
            return (
              <StyledLi key={name} color={colortheme}>
                <a href={href} style={{ padding: '1.2rem 0', textDecoration: 'none' }}>
                  <StyledIndicator
                    color={colortheme}
                    active={active}
                    className="indicator"
                  ></StyledIndicator>
                  <StyledText color={colortheme} active={active} className="text">
                    {name}
                  </StyledText>
                </a>
              </StyledLi>
            );
          })}
        </StyledUl>
      </StyledNav>
      <StyledIconContainer>
        <StyledButton variant="outline" size="icon" color={colortheme}>
          <a href="https://github.com/MayWei" target="_blank" rel="noopener noreferrer">
            <GithubComp fill={colortheme['foreground']} />
          </a>
        </StyledButton>
        <StyledButton variant="outline" size="icon" color={colortheme}>
          <a
            href="https://www.linkedin.com/in/linda-wei-010/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInComp />
          </a>
        </StyledButton>
        <Dropdown />
      </StyledIconContainer>
    </StyledContainer>
  );
}
