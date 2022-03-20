import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';

import Logo from './../../assets/logo.svg';

import {
  Container,
  HeaderContent,
  Header,
  CarsCounter,
  CarsList,
} from './styles';

export function Home() {
  const carData = {
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: '1 dia',
      price: 120
    },
    thumbnail: "https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png"
  };

  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <CarsCounter>
            12 carros encontrados
          </CarsCounter>
        </HeaderContent>
      </Header>
      <CarsList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={item => String(item)}
        renderItem={(item) => <Car data={carData} />}
      />

    </Container>
  );
}
