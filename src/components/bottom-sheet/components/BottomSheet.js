import React, { forwardRef } from 'react';
import { View } from 'react-native';

const BottomSheetComponent = forwardRef((props, ref) => {
  return <View></View>;
});

const BottomSheet = memo(BottomSheetComponent);

export default BottomSheet;
