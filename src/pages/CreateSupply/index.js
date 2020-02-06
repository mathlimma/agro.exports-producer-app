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

export default function CreateSupply({ navigation }) {
  const { item } = navigation.state.params;
  const [active, setActive] = useState(true);
  const [description, setDescription] = useState('');
  const [check, setCheck] = useState(false);
  const [location, setLocation] = useState(null);

  const [price, setPrice] = useState('');

  async function getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Alert.alert(
        'Localização',
        'Permissão negada',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
    const locationReq = await Location.getCurrentPositionAsync({});
    return locationReq;
  }

  function ProductItem() {
    return (
      <ProductButton>
        <ProductImage source={{ uri: item.photo_id.url }} />
        <ProductTextView>
          <ProductText> {item.name}</ProductText>
        </ProductTextView>
      </ProductButton>
    );
  }

  async function handleCreateSupply() {
    try {
      const { coords } = await getLocationAsync();
      console.log(item._id);
      const priceNum = Number(price);
      const newSupply = {
        product_id: item._id,
        active,
        description,
        price: priceNum,
        latitude: coords.latitude,
        longitude: coords.longitude,
      };

      const request = await api.post('/supply', newSupply);
      setCheck(true);
      setTimeout(() => navigation.popToTop(), 1200);
    } catch (err) {
      console.log(err.request);
    }
  }

  return (
    <Container>
      <AppBar title="Criar Oferta" />
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

          <CreateSupplyButton onPress={handleCreateSupply}>
            <CreateSupplyButtonText>Criar Oferta</CreateSupplyButtonText>
          </CreateSupplyButton>
        </Content>
      )}
    </Container>
  );
}
