import * as styled from 'styled-components';
export const GlobalStyle = styled.createGlobalStyle`
  html {
    font-size: 62.5%;
  }
`;

export const theme: styled.DefaultTheme = {
  breakpoints: {
    sm: 'screen and (min-width: 640px)',
    md: 'screen and (min-width: 768px)',
    lg: 'screen and (min-width: 1024px)',
    xl: 'screen and (min-width: 1280px)',
  },
  borderradius: {
    lg: '0.8rem',
    md: '0.4rem',
    sm: '0.2rem',
  },
  boxshadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  },
};
