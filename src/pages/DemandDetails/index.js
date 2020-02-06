import React, { useState, useEffect, useMemo } from 'react';
import { Linking, Alert } from 'react-native';
import AppBar from '../../components/AppBar';
import api from '../../services/api';
import Loading from '../../components/Loading';
import {
  Container,
  Content,
  ProductView,
  ProductPhoto,
  ProductName,
  EceDetailsView,
  EcePhoto,
  EceInfoView,
  EceName,
  EceDescription,
  DemandDetailsView,
  DemandTextView,
  DemandCityText,
  DemandAmountText,
  DemandPriceText,
  NegociationButton,
  NegociationButtonText,
  SimpleText,
} from './styles';

export default function DemandDetails({ navigation }) {
  const [demand, setDemand] = useState({});
  const [loading, setLoading] = useState(true);
  const { demand_id } = navigation.state.params;
  useEffect(() => {
    async function getDemand() {
      try {
        const response = await api.get(`demand/${demand_id}`);
        setDemand(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    getDemand();
  }, []);

  const sendOnWhatsApp = (mobileNum, companyName) => {
    if (mobileNum) {
      const url = `whatsapp://send?&phone=55${mobileNum}&text=Ola+${companyName}+!+Vim+pelo+AgroExports,+gostaria+de+conversar+sobre+os+detalhes+da+sua+demanda.`;
      try {
        Linking.openURL(url);
      } catch (err) {
        Alert.alert('Make sure Whatsapp installed on your device');
      }
    } else {
      Alert.alert('Please insert mobile no');
    }
  };

  const priceFormatted = useMemo(() => String(demand.price).replace('.', ','), [
    demand.price,
  ]);

  async function handleNegociation(accept) {
    try {
      const response = await api.delete('negociation', {
        data: { demand_id },
        params: { accept },
        headers: {
          'content-type': 'application/json',
        },
      });
      console.log(response.data);
      navigation.pop();
      if (accept) sendOnWhatsApp(demand.ece_id.tel, demand.ece_id.name);
    } catch (err) {
      console.log(err.request);
    }
  }

  return (
    <Container>
      <AppBar title="Detalhes da demanda" />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <ProductView>
            <ProductPhoto
              source={{
                uri: demand.product_id.photo_id.url,
              }}
            />
            <ProductName>{demand.product_id.name}</ProductName>
          </ProductView>

          <EceDetailsView>
            <EcePhoto
              source={{
                uri: demand.ece_id.avatar_id.url,
              }}
            />
            <EceInfoView>
              <EceName>{demand.ece_id.name}</EceName>
              <EceDescription>
                {demand.ece_id.description || 'Sem Descrição'}
              </EceDescription>
            </EceInfoView>
          </EceDetailsView>

          <DemandDetailsView>
            <DemandTextView>
              <SimpleText>Localização: </SimpleText>
              <DemandCityText>
                {demand.ece_id.city || 'Não Informado'}
              </DemandCityText>
            </DemandTextView>
            <DemandTextView>
              <SimpleText>Quantidade: </SimpleText>
              <DemandAmountText>{demand.kg_amount}kg</DemandAmountText>
            </DemandTextView>
            <DemandTextView>
              <SimpleText>Preço: </SimpleText>
              <DemandPriceText>R${priceFormatted}</DemandPriceText>
            </DemandTextView>
          </DemandDetailsView>

          <NegociationButton
            color="#01A643"
            onPress={() => handleNegociation(true)}
          >
            <NegociationButtonText color="#01A643">
              Aceitar Negociação
            </NegociationButtonText>
          </NegociationButton>

          <NegociationButton
            color="#FB0909"
            onPress={() => handleNegociation(false)}
          >
            <NegociationButtonText color="#FB0909">
              Recusar Negociação
            </NegociationButtonText>
          </NegociationButton>
        </Content>
      )}
    </Container>
  );
}
