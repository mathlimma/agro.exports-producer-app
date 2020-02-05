import React from 'react';

import AppBar from '../../components/AppBar';
import {
  Container,
  Content,
  TextContent,
  Input,
  InputWrapper,
  CreateSupplyButton,
  CreateSupplyButtonText,
} from './styles';

export default function CreateSupply() {
  return (
    <Container>
      <AppBar title="Criar Oferta" />
      <Content>
        <TextContent>Preencha os Dados</TextContent>
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

        <CreateSupplyButton>
          <CreateSupplyButtonText>Criar Oferta</CreateSupplyButtonText>
        </CreateSupplyButton>
      </Content>
    </Container>
  );
}
