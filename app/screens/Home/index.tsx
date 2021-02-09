import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { Container, Button, Text, BankIcon } from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToAccount = useCallback(() => {
    navigate('Account');
  }, [navigate]);

  return (
    <Container>
      <Button onPress={navigateToAccount}>
        <BankIcon />
        <Text>Entrar na conta</Text>
      </Button>
    </Container>
  );
};

export default Home;
