import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from './../../assets/logo.svg';

import {
  Container,
  HeaderContent,
  Header,
  CarsCounter,
} from './styles';

export function Home() {
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
    </Container>
  );
}
