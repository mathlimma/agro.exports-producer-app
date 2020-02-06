import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonView = styled.View`
  padding-top: 20px;
`;

export const CreateSupplyButton = styled.TouchableOpacity`
  height: 54px;
  width: 300px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  justify-content: flex-start;
  background-color: #01a643;
`;

export const CreateSupplyText = styled.Text`
  font-size: 20px;
  color: white;
`;

export const SupplyText = styled.Text`
  padding-top: 50px;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const SupplyList = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 0 10px;
`;

export const Separator = styled.View`
  height: 280px;
  width: 10px;
`;

export const Icon = styled(Feather)`
  margin-right: 5px;
`;
