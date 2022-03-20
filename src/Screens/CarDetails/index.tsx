import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BackButton } from '../../components/BackButton';

import Logo2 from './../../assets/logo.svg';

import {
  Container,
  Header,
} from './styles';

export function CarDetails() {
  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <BackButton color='' onPress={() => { }} />
      </Header>
    </Container>
  );
}
