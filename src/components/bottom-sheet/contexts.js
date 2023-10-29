import { createContext } from 'react';

export const BottomSheetContext = createContext(null);
export const BottomSheetProvider = BottomSheetContext.Provider;

export const BottomSheetGestureContext = createContext(null)
export const BottomSheetGestureProvider = BottomSheetGestureContext.Provider;

export const BottomSheetInternalContext = createContext(null);
export const BottomSheetInternalProvider = BottomSheetInternalContext.Provider;
