import React from 'react';
import { Container, ProductNameText, ProductImage } from './styles';

export default function SupplyItem() {
  return (
    <Container>
      <ProductNameText>Brocolis</ProductNameText>
      <ProductImage
        source={{
          uri: 'colocar aqui a foto',
        }}
      />
    </Container>
  );
}
