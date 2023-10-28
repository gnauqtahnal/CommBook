import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useLoadingVisible } from './hooks';
import { LoadingScrim } from './LoadingScrim';
import { LoadingSpinner } from './LoadingSpinner';
import { LoadingText } from './LoadingText';

export const BaseLoadingModal = ({ text }) => {
  const { visible } = useLoadingVisible();
  const { width, height } = useWindowDimensions();

  if (!visible) {
    return null;
  }

  return (
    <LoadingScrim containerStyle={{ width, height }}>
      <LoadingSpinner containerStyle={styles.spinner} />
      <LoadingText text={text} />
    </LoadingScrim>
  );
};

const styles = StyleSheet.create({
  scrim: {},
  spinner: {
    margin: 5,
  },
});
