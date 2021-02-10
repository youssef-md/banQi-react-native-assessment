import React from 'react';

import { Container, Transactions, TransactionTitle } from './styles';
import AccountHero from '../../components/AccountHero';
import Transaction from '../../components/Transaction';
import data from './data.json';

const Account: React.FC = () => {
  const { balance, transactions } = data;

  return (
    <Container>
      <AccountHero balance={balance} />
      <Transactions>
        <TransactionTitle>Histórico de transações</TransactionTitle>
        {transactions.slice(0, 3).map(({ _id, date, description, amount }) => (
          <Transaction
            key={_id}
            date={date}
            description={description}
            amount={amount}
          />
        ))}
      </Transactions>
    </Container>
  );
};

export default Account;
