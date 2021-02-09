import React, { createContext, useCallback, useContext, useState } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';

import { light, dark } from '../styles/themes';

interface ThemeContextShape {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextShape>({} as ThemeContextShape);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.type === 'light' ? dark : light);
  }, [theme.type]);

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

function useTheme(): ThemeContextShape {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
