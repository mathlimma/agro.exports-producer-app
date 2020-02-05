import React from 'react';
import DemandItem from '../../components/DemandItem';
import { Container, DemandsList, Content } from './styles';
import AppBar from '../../components/AppBar';

const demands = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Demand() {
  return (
    <Container>
      <AppBar title="Demandas" />
      <Content>
        <DemandsList
          data={demands}
          renderItem={({ item }) => <DemandItem {...item} key={item._id} />}
          keyExtractor={item => String(item._id)}
        />
      </Content>
    </Container>
  );
}
