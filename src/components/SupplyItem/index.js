import React from 'react';
import { Container, ProductNameText, ProductImage, StatusText } from './styles';

export default function SupplyItem(item) {
  function handleEdit() {
    item.navigation.push('EditSupply', { item });
  }
  return (
    <Container active={item.active} onPress={handleEdit}>
      <ProductNameText>{item.product_id.name}</ProductNameText>
      <ProductImage
        source={{
          uri: item.product_id.photo_id.url,
        }}
      />
      <StatusText>{item.active ? 'Ativo' : 'Inativo'}</StatusText>
    </Container>
  );
}
