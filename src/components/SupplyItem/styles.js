import styled from 'styled-components/native';

export const Container = styled.View`
  height: 20px;
  border-color: ${props =>
    props.active ? 'rgba(1, 166, 67, 1)' : 'rgba(239, 98, 98, 1)'};
  background-color: ${props =>
    props.active ? 'rgba(1, 166, 67, 1)' : 'rgba(239, 98, 98, 1)'};
`;

export const ProductNameText = styled.Text`
  height: 20px;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40;
`;
