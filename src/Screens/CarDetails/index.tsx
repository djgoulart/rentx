import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';


import {
  Container,
  Header,
  CarImages,
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
    </Container>
  );
}
