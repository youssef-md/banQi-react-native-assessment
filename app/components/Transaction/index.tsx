import React from 'react';
import { formatBRL } from '../../utils/methods';

import {
  Container,
  IconCol,
  Line,
  MoneyOut,
  MoneyIn,
  TransactionCol,
  Description,
  Amount,
  Arrow,
} from './styles';

interface props {
  date: string;
  description: string;
  amount: string;
}

const Transaction: React.FC<props> = ({ amount, description, date }) => {
  const isDebt = amount.includes('-');

  return (
    <Container>
      <IconCol>
        {isDebt ? <MoneyOut /> : <MoneyIn />}
        <Line />
      </IconCol>

      <TransactionCol>
        <Description>{description}</Description>
        <Amount>{formatBRL(amount.replace('-', ''))}</Amount>
      </TransactionCol>

      <Arrow />
    </Container>
  );
};

export default Transaction;
