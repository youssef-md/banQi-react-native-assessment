import React, { useCallback, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { Easing } from 'react-native-reanimated';
import { formatBRL, formatDate } from '../../utils/methods';

import {
  Container,
  IconCol,
  Line,
  MoneyOut,
  MoneyIn,
  TransactionCol,
  Description,
  Amount,
  Date,
  Arrow,
  ActiveBackground,
} from './styles';

interface props {
  date: string;
  description: string;
  amount: string;
}

const Transaction: React.FC<props> = ({ amount, description, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openController = useRef(new Animated.Value(0)).current;

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
    Animated.timing(openController, {
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      toValue: isOpen ? 0 : 1,
    }).start();
  }, [isOpen, openController]);

  const rotate = openController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  const height = openController.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 100],
  });

  return (
    <TouchableOpacity onPress={toggleIsOpen} activeOpacity={0.8}>
      <Container as={Animated.View} style={{ height }}>
        <IconCol>
          {amount.includes('-') ? <MoneyOut /> : <MoneyIn />}
          <Line />
        </IconCol>

        <TransactionCol as={Animated.View}>
          <Description>{description}</Description>
          <Amount>{formatBRL(amount.replace('-', ''))}</Amount>
          <Animated.View style={{ opacity: openController }}>
            <Date>Data: {formatDate(date)}</Date>
          </Animated.View>
        </TransactionCol>

        <Animated.View style={{ transform: [{ rotate }] }}>
          <Arrow />
        </Animated.View>

        <ActiveBackground
          as={Animated.View}
          style={{ opacity: openController }}
        />
      </Container>
    </TouchableOpacity>
  );
};

export default Transaction;
