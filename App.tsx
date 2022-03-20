import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
} from 'expo-font';

import theme from './src/styles/theme';
import { Home } from './src/Screens/Home';
import { CarDetails } from './src/Screens/CarDetails';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Inter_400Regular': require("./src/assets/fonts/Inter/ttf/Inter-Regular.ttf"),
    'Inter_500Medium': require("./src/assets/fonts/Inter/ttf/Inter-Medium.ttf"),
    'Archivo_400Regular': require("./src/assets/fonts/Archivo/ttf/Archivo-Regular.ttf"),
    'Archivo_500Medium': require("./src/assets/fonts/Archivo/ttf/Archivo-Medium.ttf"),
    'Archivo_600SemiBold': require("./src/assets/fonts/Archivo/ttf/Archivo-SemiBold.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <CarDetails />
    </ThemeProvider>
  );
}
