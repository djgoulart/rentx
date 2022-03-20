import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface DotIndicatorProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const NavigationIndicator = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding: 24px;
`;

export const DotIndicator = styled.View<DotIndicatorProps>`
  width: 6px;
  height: 6px;
  background-color: ${({ theme, active }) => active ? theme.colors.title : theme.colors.shape};
  border-radius: 3px;
  margin-left: 8px;
`;

export const ImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;

export const ImageItem = styled.Image`
  width: 280px;
  height: 132px;
`;
