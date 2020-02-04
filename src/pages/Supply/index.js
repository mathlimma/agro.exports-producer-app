import React from 'react';
import { Feather } from '@expo/vector-icons';
import AppBar from '../../components/AppBar';
import {
  Container,
  Content,
  CreateSupplyButton,
  CreateSupplyText,
  SupplyText,
} from './styles';

export default function Login() {
  return (
    <Container>
      <AppBar title="Faça o login" />
      <CreateSupplyButton>
        <CreateSupplyText>Adicionar Oferta</CreateSupplyText>
      </CreateSupplyButton>
      <Content>
        <SupplyText>Suas Ofertas</SupplyText>
      </Content>
    </Container>
  );
}
