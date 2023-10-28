import React, { forwardRef, memo, useImperativeHandle, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import CardContainerComm from './CardContainerComm';
import CardImage from './CardImage';
import CardPressable from './CardPressable';
import CardText from './CardText';

const CardCommComponent = forwardRef((props, ref) => {
  const {
    containerStyle: providedContainerStyle,
    imageStyle: providedImageStyle,
    textStyle: providedTextStyle,
    imageUri: providedImageUri,
    audioUri: providedAudioUri,
    label: providedLabel,
    onPress: providedOnPress,
  } = props;

  useImperativeHandle(ref, () => ({}));

  const containerStyle = useMemo(
    () => [styles.container, providedContainerStyle],
    [providedContainerStyle]
  );

  const imageStyle = useMemo(
    () => [styles.image, providedImageStyle],
    [providedImageStyle]
  );

  const textStyle = useMemo(() => [providedTextStyle], [providedTextStyle]);

  return (
    <CardPressable onPress={providedOnPress}>
      <View style={containerStyle}>
        <CardImage imageStyle={imageStyle} source={providedImageUri} />
        <CardText
          containerStyle={styles.textContainer}
          textStyle={textStyle}
          text={providedLabel}
        />
      </View>
    </CardPressable>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 128 * 1.2,
    padding: 5,
    borderRadius: 9,
    backgroundColor: 'rgba(255,255,255,1.0)',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
  },
  textContainer: {
    flex: 1,
  },
});

const CardComm = memo(CardCommComponent);

export default CardComm;
