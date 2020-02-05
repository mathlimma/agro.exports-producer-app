import React from 'react';
import { Container, ProductNameText, ProductImage, StatusText } from './styles';

export default function SupplyItem({ name, url, active }) {
  return (
    <Container active={active}>
      <ProductNameText>{name}</ProductNameText>
      <ProductImage
        source={{
          uri: url,
        }}
      />
      <StatusText>Ativo</StatusText>
    </Container>
  );
}
