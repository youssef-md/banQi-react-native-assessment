import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Strong } from '../../styles/Typography';
import { pink } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${pink};
  padding: 14px 20px;
  border-radius: 4px;
`;

export const Text = styled(Strong)`
  margin-left: 6px;
  color: ${({ theme }) => theme.colors.textOnAccent};
`;

export const BankIcon = styled(MaterialIcons).attrs({
  name: 'account-balance',
  size: 20,
})`
  color: ${({ theme }) => theme.colors.textOnAccent};
`;
