import React from 'react';
import { LoadingVisibleProvider } from './LoadingVisibleProvider';

export const LoadingProvider = ({ children }) => {
  return <LoadingVisibleProvider>{children}</LoadingVisibleProvider>;
};
