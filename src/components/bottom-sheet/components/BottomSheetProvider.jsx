import { useSharedValue } from 'react-native-reanimated';
import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { BottomSheetProvider } from '../contexts';

const BottomSheetProviderWrapper = (props) => {
  const { children } = props;
  const window = useWindowDimensions();

  const animatedY = useSharedValue(window.height);

  const valueBottomSheet = useMemo(
    () => ({
      animatedY,
    }),
    []
  );

  return (
    <BottomSheetProvider value={valueBottomSheet}>
      {children}
    </BottomSheetProvider>
  );
};

export default BottomSheetProviderWrapper;
