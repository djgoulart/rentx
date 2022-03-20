import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About
} from './styles';

export function CarDetails() {
  const imageUrls = ["https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png"];
  return (
    <Container>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <BackButton color='' onPress={() => { }} />
      </Header>

      <CarImages>
        <ImageSlider imageItems={imageUrls} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>AUDI</Brand>
            <Name>RS 5 Coupé</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <About>
          Audi RS5 Sportback pesa 182 kg. O “coração” vai conectado ao câmbio
          automático de oito marchas para descarregar uma potência de 450 cv de
          5.700 a 6.700 rpm e uma mesa de torque plano de 61,18 kgfm entre 1.900
          e 5.000 rpm.
        </About>
      </Content>
    </Container>
  );
}
