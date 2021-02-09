import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Small, H1 } from '../../styles/Typography';
import Qs from '../../../assets/qs.png';

interface EyeIconProps {
  canSee: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 38px 20px;
  justify-content: center;
`;

export const DetailTitle = styled(Small)`
  color: ${({ theme }) => theme.colors.textOnAccent};
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Balance = styled.View`
  margin-right: 10px;
  position: relative;
  overflow: hidden;
`;

export const Cover = styled.View`
  background: ${({ theme }) => theme.colors.accentDarker};
  border-radius: 4px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const BalanceText = styled(H1)`
  color: ${({ theme }) => theme.colors.textOnAccent};
  z-index: -1;
`;

export const EyeIcon = styled(MaterialCommunityIcons).attrs(({ canSee }) => ({
  size: 30,
  name: canSee ? 'eye-outline' : 'eye-off-outline',
}))<EyeIconProps>`
  color: ${({ theme }) => theme.colors.textOnAccent};
`;

export const FooterDetail = styled.View`
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.accentDarker};
`;

export const QDetail = styled.Image.attrs({
  source: Qs,
})`
  position: absolute;
  right: 5px;
`;
