import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { useBottomSheetInternal } from '../hooks';
import {
  BottomSheetItemCamera,
  BottomSheetItemImage,
  BottomSheetItemMic,
  BottomSheetItemText,
  BottomSheetItemTrashBin,
} from './BottomSheetItem';
import BottomSheetScrim from './BottomSheetScrim';

const BottomSheetCardPropContainer = (props) => {
  return (
    <BottomSheetView>
      <BottomSheetItemCamera />
      <BottomSheetItemImage />
      <BottomSheetItemMic />
      <BottomSheetItemText />
      <BottomSheetItemTrashBin />
    </BottomSheetView>
  );
};

const BottomSheetCardPropComponent = forwardRef((props, ref) => {
  const refBottomSheet = useRef(null);

  const { dispatch } = useBottomSheetInternal();

  const onPressOpen = useCallback(() => {
    refBottomSheet.current?.present();
  }, [refBottomSheet]);

  const onPressClose = useCallback(() => {
    refBottomSheet.current?.dismiss();
    dispatch({ visibleScrim: false });
  }, []);

  useImperativeHandle(ref, () => ({
    open: onPressOpen,
  }));

  const onAnimate = useCallback((fromIndex, toIndex) => {}, []);

  const snapPoints = useMemo(() => [300], []);

  return (
    <>
      <BottomSheetScrim onPress={onPressClose} />
      <BottomSheetModal
        ref={refBottomSheet}
        index={0}
        snapPoints={snapPoints}
        onAnimate={onAnimate}
      >
        <BottomSheetCardPropContainer />
      </BottomSheetModal>
    </>
  );
});

const BottomSheetCardProp = memo(BottomSheetCardPropComponent);

export default BottomSheetCardProp;
