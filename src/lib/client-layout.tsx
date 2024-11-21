'use client';
import { ThemeChangeProvider } from '@/context/ThemeChangeProvider';
import { GlobalStyle, theme } from '@/style/global';
import { PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const LayoutContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;
export const ClientLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <ThemeChangeProvider>
        <GlobalStyle />
        <LayoutContainer>{children}</LayoutContainer>
      </ThemeChangeProvider>
    </ThemeProvider>
  );
};
