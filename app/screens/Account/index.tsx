import React, { useCallback, useState } from 'react';
import {
  Container,
  TransactionSection,
  TransactionTitle,
  TransactionList,
  ShowMore,
  ShowMoreText,
  More,
  Less,
  TransactionHeader,
} from './styles';
import AccountHero from '../../components/AccountHero';
import Transaction from '../../components/Transaction';
import data from './data.json';

const Account: React.FC = () => {
  const { balance, transactions } = data;
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = useCallback(() => {
    setShowMore(!showMore);
  }, [showMore]);

  return (
    <Container>
      <AccountHero balance={balance} />
      <TransactionSection>
        <TransactionHeader>
          <TransactionTitle>Transações</TransactionTitle>
          <ShowMore onPress={toggleShowMore}>
            <ShowMoreText>Mostrar {showMore ? 'menos' : 'mais'}</ShowMoreText>
            {showMore ? <Less /> : <More />}
          </ShowMore>
        </TransactionHeader>
        <TransactionList
          data={showMore ? transactions : transactions.slice(0, 3)}
          keyExtractor={({ _id }) => _id}
          renderItem={({ item: { _id, amount, date, description }, index }) => (
            <Transaction
              key={_id}
              date={date}
              description={description}
              amount={amount}
              isLast={
                showMore ? index === transactions.length - 1 : index === 2
              }
            />
          )}
        />
      </TransactionSection>
    </Container>
  );
};

export default Account;
