import React, { useState } from 'react';

import AppBar from '../../components/AppBar';
import {
  Container,
  Content,
  TextContent,
  Input,
  InputWrapper,
  CreateSupplyButton,
  CreateSupplyButtonText,
  SupplyActiveButton,
  SupplyActiveButtonView,
  SupplyActiveButtonText,
  SupplyDisabledButton,
  SupplyDisabledButtonText,
  ProductButton,
  ProductImage,
  ProductTextView,
  ProductText,
} from './styles';

export default function CreateSupply({ navigation }) {
  const [active, setActive] = useState(false);

  function ProductItem(item) {
    return (
      <ProductButton>
        <ProductImage source={{ uri: item.url }} />
        <ProductTextView>
          <ProductText> {item.name}</ProductText>
        </ProductTextView>
      </ProductButton>
    );
  }

  return (
    <Container>
      <AppBar title="Criar Oferta" />
      <Content>
        <TextContent>Preencha os Dados</TextContent>
        {ProductItem(navigation.getParam('item', null))}
        <InputWrapper>
          <Input placeholder="Descrição" />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Localização" />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Quantidade (kg)" />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Preço (R$)" />
        </InputWrapper>

        <SupplyActiveButtonView>
          <SupplyActiveButton onPress={() => setActive(true)} active={active}>
            <SupplyDisabledButtonText active={active}>
              Ativo
            </SupplyDisabledButtonText>
          </SupplyActiveButton>
          <SupplyDisabledButton
            onPress={() => setActive(false)}
            active={active}
          >
            <SupplyActiveButtonText active={active}>
              Inativo
            </SupplyActiveButtonText>
          </SupplyDisabledButton>
        </SupplyActiveButtonView>

        <CreateSupplyButton>
          <CreateSupplyButtonText>Criar Oferta</CreateSupplyButtonText>
        </CreateSupplyButton>
      </Content>
    </Container>
  );
}
