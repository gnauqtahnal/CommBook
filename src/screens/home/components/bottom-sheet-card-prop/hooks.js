import { useContext } from 'react';
import { BottomSheetInternalContext } from './contexts';

export const useBottomSheetInternal = () => {
  return useContext(BottomSheetInternalContext);
};
