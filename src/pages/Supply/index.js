import React from 'react';
import AppBar from '../../components/AppBar';
import SupplyItem from '../../components/SupplyItem';
import AddSupply from '../AddSupply';

import {
  Container,
  Content,
  CreateSupplyButton,
  CreateSupplyText,
  SupplyList,
  SupplyText,
  Separator,
  ButtonView,
  Icon,
} from './styles';

const produto = {
  nome: 'abacate',
  foto: 'foto.com',
  active: 'true',
};

export default function Supply({ navigation }) {
  return (
    <Container>
      <AppBar title="Oferta" size="22" />
      <Content>
        <ButtonView>
          <CreateSupplyButton onpress={() => navigation.push('AddSupply')}>
            <Icon name="plus" size={25} color="#fff" />
            <CreateSupplyText>Adicionar Oferta</CreateSupplyText>
          </CreateSupplyButton>
        </ButtonView>
        <SupplyText>Suas Ofertas</SupplyText>
        <SupplyList
          data={produto}
          renderItem={({ item }) => <SupplyItem {...item} key={item.id} />}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <Separator />}
        />
      </Content>
    </Container>
  );
}
