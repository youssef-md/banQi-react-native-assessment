import React from 'react';
import AccountHero from '../../components/AccountHero';

import data from './data.json';

import { Container } from './styles';

const Account: React.FC = () => {
  const { balance, transactions } = data;

  return (
    <Container>
      <AccountHero balance={balance} />
    </Container>
  );
};

export default Account;
