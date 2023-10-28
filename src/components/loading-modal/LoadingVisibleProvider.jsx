import React, { useCallback, useMemo, useState } from 'react';
import { LoadingVisibleContext } from './contexts';

export const LoadingVisibleProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    setVisible((value) => !value);
  }, [setVisible]);

  const value = useMemo(() => {
    return { visible, setVisible, toggleVisible };
  }, [visible]);

  return (
    <LoadingVisibleContext.Provider value={value}>
      {children}
    </LoadingVisibleContext.Provider>
  );
};
