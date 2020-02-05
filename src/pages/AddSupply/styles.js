import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View``;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProductView = styled.View`
  padding-top: 20px;
`;

export const ProductImage = styled.Image`
  height: 85px;
  width: 85px;
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

export const AddSupplyText = styled.Text`
  font-size: 20px;
  color: white;
`;

export const ProductText = styled.Text`
  padding-top: 50px;
  font-size: 20px;
`;

export const ProductList = styled(FlatList)`
  position: absolute;
  flex: 1;
`;

export const Separator = styled.View`
  height: 280px;
  width: 10px;
`;
