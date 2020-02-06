import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import DemandItem from '../../components/DemandItem';
import { Container, DemandsList, Content, EmptyText } from './styles';
import AppBar from '../../components/AppBar';
import api from '../../services/api';
import Loading from '../../components/Loading';

function Demand({ navigation, isFocused }) {
  const [demands, setDemands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [demandsEmpty, setDemandsEmpty] = useState(false);

  useEffect(() => {
    async function getDemands() {
      try {
        const response = await api.get('producer/demands');

        setDemands(response.data.demands_id);
        demands.length === 0 ? setDemandsEmpty(true) : setDemandsEmpty(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getDemands();
  }, [isFocused]);

  return (
    <Container>
      <AppBar title="Demandas" />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          {demandsEmpty ? (
            <EmptyText>Você não possui demandas no momento!</EmptyText>
          ) : (
            <DemandsList
              data={demands}
              keyExtractor={item => item._id}
              renderItem={({ item }) => (
                <DemandItem {...item} navigation={navigation} />
              )}
            />
          )}
        </Content>
      )}
    </Container>
  );
}

export default withNavigationFocus(Demand);
