import React from 'react';
import { Feather } from '@expo/vector-icons';
import AppBar from '../../components/AppBar';
import SupplyItem from '../../components/SupplyItem';

import {
  Container,
  Content,
  CreateSupplyButton,
  CreateSupplyText,
  SupplyList,
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
        <SupplyList
          data={data}
          renderItem={({ item }) => (
            <SupplyItem onPress={onPress} {...item} key={item.id} />
          )}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <Separator />}
        />
      </Content>
    </Container>
  );
}
