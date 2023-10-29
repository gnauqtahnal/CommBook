import Animated from 'react-native-reanimated';
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useBottomSheetInternal } from '../hooks';

const BottomSheetScrim = memo((props) => {
  const { onPress: onPressProvided } = props;

  const { state, dispatch } = useBottomSheetInternal();

  const onPress = useCallback(() => {
    dispatch({ visibleScrim: false });
  }, []);

  if (!state.visibleScrim) {
    return null;
  }

  return (
    <Animated.Pressable
      onPress={onPressProvided || onPress}
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        ...StyleSheet.absoluteFillObject,
      }}
    />
  );
});

export default BottomSheetScrim;
