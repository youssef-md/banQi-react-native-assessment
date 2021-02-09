import styled from 'styled-components/native';

import { Strong } from '../../styles/Typography';
import { pink } from '../../styles/colors';
import banQiLogo from '../../../assets/banqi.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 14px 20px;
  background: ${({ theme }) => theme.colors.primary};
  elevation: 2;
`;

export const IconButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;

export const LogoTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoText = styled(Strong)`
  color: ${pink};
  margin-right: 2px;
`;

export const LogoImage = styled.Image.attrs({
  source: banQiLogo,
})``;
