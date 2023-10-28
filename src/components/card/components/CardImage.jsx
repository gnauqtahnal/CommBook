import { Image } from 'expo-image';
import React, { memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';

const ImageComponent = (props) => {
  const { imageStyle: providedImageStyle, source: providedSource } = props;

  const imageStyle = useMemo(
    () => [styles.image, providedImageStyle],
    [providedImageStyle]
  );

  return <Image style={imageStyle} source={providedSource} />;
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    overflow: 'hidden',
  },
});

const CardImage = memo(ImageComponent);

export default CardImage;
