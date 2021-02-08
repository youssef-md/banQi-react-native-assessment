import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ec008c;
  padding: 14px 20px;
`;

export const Text = styled.Text`
  font-size: 16px;
  margin-right: 4px;
`;

export const BankIcon = styled(MaterialIcons).attrs({
  name: 'account-balance',
  size: 20,
})``;
