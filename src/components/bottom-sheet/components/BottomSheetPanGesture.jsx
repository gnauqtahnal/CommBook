import React from 'react';

const { GestureDetector, Gesture } = require('react-native-gesture-handler');

const BottomSheetPanGesture = (props) => {
  const { children } = props;

  const pan = Gesture.Pan();

  return <GestureDetector gesture={pan}>{children}</GestureDetector>;
};

export default BottomSheetPanGesture;
