import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import api from '../../services/api';
import Check from '../../components/Check';

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

export default function EditSupply({ navigation }) {
  const { item } = navigation.state.params;
  const [active, setActive] = useState(item.active);
  const [price, setPrice] = useState(String(item.price));

  const [description, setDescription] = useState(item.description);
  const [check, setCheck] = useState(false);

  function ProductItem() {
    return (
      <ProductButton>
        <ProductImage source={{ uri: item.product_id.photo_id.url }} />
        <ProductTextView>
          <ProductText> {item.product_id.name}</ProductText>
        </ProductTextView>
      </ProductButton>
    );
  }

  async function handleEditSupply() {
    try {
      const priceNum = Number(price);
      const newSupply = {
        active,
        description,
        price: priceNum,
      };

      const request = await api.put(`/supply/${item._id}`, newSupply);
      setCheck(true);
      setTimeout(() => navigation.popToTop(), 1200);
    } catch (err) {
      console.log(err.request);
    }
  }

  return (
    <Container>
      <AppBar title="Editar Oferta" />
      {check ? (
        <Check />
      ) : (
        <Content>
          <TextContent>Preencha os Dados</TextContent>
          {ProductItem()}
          <InputWrapper>
            <Input
              placeholder="Descrição"
              onChangeText={setDescription}
              value={description}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Preço/kg (R$)"
              onChangeText={setPrice}
              value={price}
              keyboardType="decimal-pad"
            />
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

          <CreateSupplyButton onPress={handleEditSupply}>
            <CreateSupplyButtonText>Editar Oferta</CreateSupplyButtonText>
          </CreateSupplyButton>
        </Content>
      )}
    </Container>
  );
}
