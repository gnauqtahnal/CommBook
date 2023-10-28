import React, { memo } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const LoadingSpinner = memo(
  ({
    containerStyle,
    spinnerStyle,
    spinnerColor = '#ffffff',
    spinnerSize = 'small',
  }) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <ActivityIndicator
          style={[spinnerStyle]}
          color={spinnerColor}
          size={spinnerSize}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
