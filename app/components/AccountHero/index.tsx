import React, { useCallback, useRef, useState } from 'react';

import {
  Container,
  DetailTitle,
  BalanceContainer,
  Balance,
  Cover,
  BalanceText,
  EyeIcon,
  FooterDetail,
  QDetail,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { Easing } from 'react-native-reanimated';
import { formatBRL } from '../../utils/methods';

interface props {
  balance: string;
}

const AccountHero: React.FC<props> = ({ balance }) => {
  const [seeBalance, setSeeBalance] = useState(false);

  const balanceController = useRef(new Animated.Value(0)).current;

  const toggleSeeBalance = useCallback(() => {
    Animated.timing(balanceController, {
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      toValue: seeBalance ? 0 : 1,
    }).start();
    setSeeBalance(!seeBalance);
  }, [seeBalance, balanceController]);

  const coverOpacity = balanceController.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 0],
  });

  return (
    <>
      <Container>
        <DetailTitle>Meu saldo:</DetailTitle>
        <BalanceContainer>
          <Balance>
            <Cover
              as={Animated.View}
              style={{ transform: [{ translateX: coverOpacity }] }}
            />
            <BalanceText>{formatBRL(balance)}</BalanceText>
          </Balance>
          <TouchableOpacity activeOpacity={0.6} onPress={toggleSeeBalance}>
            <EyeIcon canSee={seeBalance} />
          </TouchableOpacity>
        </BalanceContainer>

        <QDetail />
      </Container>
      <FooterDetail />
    </>
  );
};

export default AccountHero;
