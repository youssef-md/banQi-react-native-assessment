import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Paragraph, Strong } from '../../styles/Typography';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TransactionSection = styled.View`
  flex: 1;
`;

export const TransactionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 0 20px;
`;

export const TransactionTitle = styled(Strong)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ShowMore = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ShowMoreText = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.secondaryLighter};
  margin-right: 5px;
`;

export const More = styled(AntDesign).attrs({
  name: 'pluscircleo',
  size: 15,
})`
  color: ${({ theme }) => theme.colors.secondaryLighter};
`;

export const Less = styled(AntDesign).attrs({
  name: 'minuscircleo',
  size: 15,
})`
  color: ${({ theme }) => theme.colors.secondaryLighter};
`;

export const TransactionList = styled(FlatList).attrs({
  contentContainerStyle: { paddingBottom: 20 },
})`
  flex: 1;
`;
