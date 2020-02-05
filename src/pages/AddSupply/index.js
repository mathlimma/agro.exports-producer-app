import React, { useState, useEffect } from 'react';
import AppBar from '../../components/AppBar';
import api from '../../services/api';

import {
  Container,
  Content,
  ProductList,
  AddSupplyText,
  ProductButton,
  ProductImage,
  ProductText,
  ProductTextView,
  AddSupplyView,
} from './styles';

export default function AddSupply({ navigation }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getSupplies() {
      try {
        const response = await api.get('/producer/supplies');

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getSupplies();
  }, []);
  function handlePress(item) {
    navigation.push('CreateSupply', { item });
  }

  function ProductItem(item) {
    console.log(item);
    return (
      <ProductButton onPress={() => handlePress(item)}>
        <ProductImage source={{ uri: item.product_id.photo_id.url }} />
        <ProductTextView>
          <ProductText> {item.product_id.name}</ProductText>
        </ProductTextView>
      </ProductButton>
    );
  }

  return (
    <Container>
      <AppBar title="Adicionar Oferta" />
      <Content>
        <AddSupplyView>
          <AddSupplyText>Selecione o Produto</AddSupplyText>
        </AddSupplyView>

        <ProductList
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={({ item }) => ProductItem(item)}
          keyExtractor={item => String(item._id)}
        />
      </Content>
    </Container>
  );
}
