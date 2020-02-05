import React from 'react';
import AppBar from '../../components/AppBar';
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
  DemandDetailsText,
  NegociationButton,
  NegociationButtonText,
} from './styles';

export default function DemandDetails() {
  return (
    <Container>
      <AppBar title="Detalhes da demanda" />
      <Content>
        <ProductView>
          <ProductPhoto
            source={{
              uri:
                'data:image/jpeg;base64,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',
            }}
          />
          <ProductName>Brocolis</ProductName>
        </ProductView>

        <EceDetailsView>
          <EcePhoto
            source={{
              uri:
                'https://i.pinimg.com/originals/da/a5/38/daa5384ccf3fc8d92fd79b880010435c.png',
            }}
          />
          <EceInfoView>
            <EceName>Empresa 1</EceName>
            <EceDescription>Uma empresa legal</EceDescription>
          </EceInfoView>
        </EceDetailsView>

        <DemandDetailsView>
          <DemandDetailsText>Localização: João Pessoa - PB</DemandDetailsText>
          <DemandDetailsText>Quantidade: 120kg</DemandDetailsText>
          <DemandDetailsText>Preço: R$850,00</DemandDetailsText>
        </DemandDetailsView>

        <NegociationButton color="#01A643">
          <NegociationButtonText color="#01A643">
            Aceitar Negociação
          </NegociationButtonText>
        </NegociationButton>

        <NegociationButton color="#FB0909">
          <NegociationButtonText color="#FB0909">
            Recusar Negociação
          </NegociationButtonText>
        </NegociationButton>
      </Content>
    </Container>
  );
}
