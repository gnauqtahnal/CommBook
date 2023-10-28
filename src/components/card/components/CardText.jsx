import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardTextComponent = (props) => {
  const {
    containerStyle: providedContainerStyle,
    textStyle: providedTextStyle,
    text: providedText,
  } = props;

  const containerStyle = useMemo(
    () => [styles.container, providedContainerStyle],
    [providedContainerStyle]
  );

  const textStyle = useMemo(
    () => [styles.text, providedTextStyle],
    [providedTextStyle]
  );

  return (
    <View style={containerStyle}>
      <Text style={textStyle} numberOfLines={1}>
        {providedText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // fontSize: 11,
  },
});

const CardText = memo(CardTextComponent);

export default CardText;
