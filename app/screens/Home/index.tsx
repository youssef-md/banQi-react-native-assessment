import React from 'react';

import { Container, Button, Text, BankIcon } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Button>
        <Text>Entrar na conta</Text>
        <BankIcon />
      </Button>
    </Container>
  );
};

export default Home;
