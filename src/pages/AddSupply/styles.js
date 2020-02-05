import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Content = styled.View`
  align-items: center;
`;

export const ProductView = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #707070;
`;

export const ProductListView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProductTextView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 5px;
`;

export const AddSupplyText = styled.Text`
  margin-top: 30px;
  font-size: 20px;
  color: #000000;
`;

export const ProductText = styled.Text`
  font-size: 20px;
  margin-left: 20px;
`;

export const ProductList = styled(FlatList).attrs({
  showVerticalScrollIndicator: false,
})`
  padding: 20px;
`;
