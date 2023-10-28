import { useContext } from 'react';
import { LoadingVisibleContext } from './contexts';

export const useLoadingVisible = () => {
  return useContext(LoadingVisibleContext);
};
