import styled from 'styled-components/native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Paragraph, Strong, Small } from '../../styles/Typography';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 20px;
  margin: 1px 0;
`;

export const IconCol = styled.View`
  align-items: center;
  position: relative;
  height: 100%;
`;

export const Line = styled.View`
  width: 2px;
  height: 45px;
  position: absolute;
  top: 28px;
  background-color: ${({ theme }) => theme.colors.secondaryDetail};
`;

export const MoneyOut = styled(AntDesign).attrs({
  name: 'creditcard',
  size: 26,
})`
  color: ${({ theme }) => theme.colors.secondaryLighter};
  margin-top: 1px;
`;

export const MoneyIn = styled(AntDesign).attrs({
  name: 'wallet',
  size: 26,
})`
  color: ${({ theme }) => theme.colors.secondaryLighter};
  margin-top: 1px;
`;

export const TransactionCol = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Description = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Amount = styled(Strong)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 6px;
`;

export const Date = styled(Small)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Arrow = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-down',
  size: 35,
})`
  color: ${({ theme }) => theme.colors.accent};
`;

export const ActiveBackground = styled.View`
  position: absolute;
  right: 6px;
  left: 6px;
  bottom: 0;
  top: 0;
  z-index: -1;
  background-color: ${({ theme }) => theme.colors.accentDetail};
  border-radius: 16px;
`;
