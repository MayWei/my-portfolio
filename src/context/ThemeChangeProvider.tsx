'use client';
import { globalTheme, Theme } from '@/style/theme';
import { createSafeContext, useSafeContext } from './ContextHelper';
import { PropsWithChildren, useCallback, useState } from 'react';

interface ThemeChangeProps {
  colortheme: Theme;
  togglecolortheme: () => void;
}
interface ThemeChangeProviderProps {}

const ThemeChangeContext = createSafeContext<ThemeChangeProps>();

export const ThemeChangeProvider = (props: PropsWithChildren<ThemeChangeProviderProps>) => {
  const { children } = props;
  const [colortheme, setColortheme] = useState<Theme>({ ...globalTheme.light, theme: 'light' });
  const togglecolortheme = useCallback(() => {
    colortheme.theme === 'light'
      ? setColortheme({ ...globalTheme.dark, theme: 'dark' })
      : setColortheme({ ...globalTheme.light, theme: 'light' });
  }, [colortheme]);
  return (
    <ThemeChangeContext.Provider value={{ colortheme, togglecolortheme }}>
      {children}
    </ThemeChangeContext.Provider>
  );
};

export const useThemeChange = () => useSafeContext(ThemeChangeContext);
