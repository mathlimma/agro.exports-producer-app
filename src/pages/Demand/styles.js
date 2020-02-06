import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;
export const Content = styled.View`
  align-items: center;
`;

export const EmptyText = styled.Text`
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
  color: #ef6262;
`;

export const DemandsList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})``;
