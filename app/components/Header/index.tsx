import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  IconButton,
  LogoTitle,
  LogoText,
  LogoImage,
} from './styles';
import { useTheme } from '../../hooks/theme';
import { pink } from '../../styles/colors';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <LogoTitle>
        <LogoText>meu</LogoText>
        <LogoImage />
      </LogoTitle>
      <IconButton onPress={toggleTheme}>
        <Feather
          name={theme.type === 'light' ? 'moon' : 'sun'}
          size={30}
          color={pink}
        />
      </IconButton>
    </Container>
  );
};

export default Header;
