import React from 'react';
import AppBar from '../../components/AppBar';

import {
  Container,
  Content,
  ProductList,
  AddSupplyText,
  Separator,
  ProductView,
  ProductImage,
  ProductText,
} from './styles';

const produto = [
  {
    nome: 'abacate',
    foto: 'foto.com',
  },
  {
    nome: 'banana',
    foto: 'foto.com',
  },
];

function ProductItem() {
  return (
    <ProductView>
      <ProductImage source={{}} />
      <ProductText> Brócolis</ProductText>
    </ProductView>
  );
}

export default function AddSupply() {
  return (
    <Container>
      <AppBar title="Adicionar Oferta" size="22" />
      <Content>
        <AddSupplyText>Selecione o Produto</AddSupplyText>
        <ProductList
          data={produto}
          renderItem={({ item }) => <ProductItem {...item} key={item.id} />}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <Separator />}
        />
      </Content>
    </Container>
  );
}
