import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const LoadingText = memo(
  ({ text = 'Loading...', containerStyle, textStyle }) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  },
});
