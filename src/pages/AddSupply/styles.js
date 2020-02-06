import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const ProductButton = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #707070;
`;

export const ProductTextView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border-width: 1px;
  border-color: #707070;
`;

export const AddSupplyView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-bottom-color: #707070;
  border-bottom-width: 1px;
`;

export const AddSupplyText = styled.Text`
  font-size: 20px;
  color: #000000;
  align-self: center;
  font-weight: bold;
`;

export const ProductText = styled.Text`
  font-size: 20px;
  margin-left: 20px;
`;

export const ProductList = styled(FlatList)``;
