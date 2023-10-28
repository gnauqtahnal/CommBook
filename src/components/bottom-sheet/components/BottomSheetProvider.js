import React, { useMemo } from 'react';
import { BottomSheetProvider } from '../contexts';

const BottomSheetProviderWrapper = (props) => {
  const { children } = props;

  const valueBottomSheet = useMemo(() => ({}), []);

  return (
    <BottomSheetProvider value={valueBottomSheet}>
      {children}
    </BottomSheetProvider>
  );
};

export default BottomSheetProviderWrapper;
