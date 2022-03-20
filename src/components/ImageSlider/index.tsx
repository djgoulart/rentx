import React from 'react';

import {
  Container,
  NavigationIndicator,
  DotIndicator,
  ImageWrapper,
  ImageItem,
} from './styles';

interface ImageSliderProps {
  imageItems: string[];
}

export function ImageSlider({ imageItems }: ImageSliderProps) {
  return (
    <Container>
      <NavigationIndicator>
        <DotIndicator active={true} />
        <DotIndicator active={false} />
        <DotIndicator active={false} />
        <DotIndicator active={false} />
      </NavigationIndicator>

      <ImageWrapper>
        <ImageItem
          source={{ uri: imageItems[0] }}
          resizeMode="contain"
        />
      </ImageWrapper>

    </Container>
  );
}
