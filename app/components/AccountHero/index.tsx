import React from 'react';

import {
  Container,
  DetailTitle,
  BalanceContainer,
  Balance,
  EyeIcon,
  FooterDetail,
  QDetail,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface props {
  balance: string;
}

const AccountHero: React.FC<props> = ({ balance }) => {
  return (
    <>
      <Container>
        <DetailTitle>Meu saldo:</DetailTitle>
        <BalanceContainer>
          <Balance>{balance}</Balance>
          <TouchableOpacity activeOpacity={0.6}>
            <EyeIcon canSee />
          </TouchableOpacity>
        </BalanceContainer>

        <QDetail />
      </Container>
      <FooterDetail />
    </>
  );
};

export default AccountHero;
