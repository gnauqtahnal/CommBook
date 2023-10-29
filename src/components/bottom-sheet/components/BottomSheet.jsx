import Animated from 'react-native-reanimated';
import React, { forwardRef, memo } from 'react';
import { View } from 'react-native';
import BottomSheetPanGesture from './BottomSheetPanGesture';

const BottomSheetComponent = forwardRef((props, ref) => {
  const { children } = props;

  return (
    <BottomSheetPanGesture>
      <Animated.View>{children}</Animated.View>;
    </BottomSheetPanGesture>
  );
});

const BottomSheet = memo(BottomSheetComponent);

export default BottomSheet;
