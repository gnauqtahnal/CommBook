import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useMemo, useReducer } from 'react';
import { BottomSheetInternalProvider } from '../contexts';

const BottomSheetCardPropProviderProvider = (props) => {
  const { children } = props;

  const [stateInternal, dispatchInternal] = useReducer(
    (state, action) => {
      if (action.visibleScrim) {
        state.visibleScrim = action.visibleScrim;
      }
    },
    {
      visibleScrim: false,
    }
  );

  const valueInternal = useMemo(
    () => ({
      state: stateInternal,
      dispatch: dispatchInternal,
    }),
    [stateInternal, dispatchInternal]
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetInternalProvider value={valueInternal}>
        {children}
      </BottomSheetInternalProvider>
    </BottomSheetModalProvider>
  );
};

export default BottomSheetCardPropProviderProvider;
