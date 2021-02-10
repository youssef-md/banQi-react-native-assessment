import styled from 'styled-components/native';
import { Strong } from '../../styles/Typography';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Transactions = styled.View`
  padding: 0 20px;
`;

export const TransactionTitle = styled(Strong)`
  margin: 25px 0 12px 0;
  color: ${({ theme }) => theme.colors.secondary};
`;
