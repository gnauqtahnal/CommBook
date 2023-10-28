import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const BottomSheetCardPropProviderProvider = (props) => {
  const { children } = props;

  return <BottomSheetModalProvider>{children}</BottomSheetModalProvider>;
};

export default BottomSheetCardPropProviderProvider;
