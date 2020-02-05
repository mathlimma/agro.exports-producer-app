import React, { useEffect, useState } from 'react';
import DemandItem from '../../components/DemandItem';
import { Container, DemandsList, Content } from './styles';
import AppBar from '../../components/AppBar';
import api from '../../services/api';

export default function Demand({ navigation }) {
  const [demands, setDemands] = useState([]);
  useEffect(() => {
    async function getDemands() {
      try {
        const response = await api.get('producer/demands');

        setDemands(response.data.demands_id);
      } catch (error) {
        console.log(error);
      }
    }

    getDemands();
  }, []);

  return (
    <Container>
      <AppBar title="Demandas" />
      <Content>
        <DemandsList
          data={demands}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <DemandItem {...item} navigation={navigation} />
          )}
        />
      </Content>
    </Container>
  );
}
