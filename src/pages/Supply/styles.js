import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View``;

export const Content = styled.View``;

export const CreateSupplyButton = styled.TouchableOpacity``;

export const SupplyText = styled.Text``;

export const SupplyList = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  position: absolute;
  flex: 1;
`;

export const Separator = styled.View`
  height: 280px;
  width: 10px;
`;
