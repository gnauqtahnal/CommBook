import React from 'react';
import { StyleSheet, View } from 'react-native';

export const LoadingScrim = ({ containerStyle, children }) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    ...StyleSheet.absoluteFillObject,
  },
});
