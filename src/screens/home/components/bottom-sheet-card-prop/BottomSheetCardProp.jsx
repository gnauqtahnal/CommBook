import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import BottomSheetItemPressable from './BottomSheetItemPressable';

const BottomSheetCardPropComponent = forwardRef((props, ref) => {
  const refBottomSheet = useRef(null);
  const [visible, setVisible] = useState(false);

  const openBottomSheet = useCallback(() => {
    setVisible(true);
    refBottomSheet.current?.present();
  }, [refBottomSheet]);

  useImperativeHandle(ref, () => ({
    open: openBottomSheet,
  }));

  const onAnimate = useCallback((fromIndex, toIndex) => {
    if (toIndex === -1) {
      setVisible(false);
    }
  }, []);

  const onPress = useCallback(() => {
    refBottomSheet.current?.dismiss();
  }, []);

  const snapPoints = useMemo(() => ['25%'], []);

  const onPressCameraPicker = useCallback(() => {}, []);

  return (
    <>
      {visible ? (
        <Pressable
          onPress={onPress}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            ...StyleSheet.absoluteFillObject,
          }}
        />
      ) : null}

      <BottomSheetModal
        ref={refBottomSheet}
        index={0}
        snapPoints={snapPoints}
        onAnimate={onAnimate}
      >
        <BottomSheetView>
          <BottomSheetItemPressable onPress={onPressCameraPicker}>
            <View
              style={{
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <View
                style={{
                  padding: 5,
                  marginHorizontal: 5,
                  borderRadius: 9999,
                  backgroundColor: 'rgba(64,64,64,1.0)',
                }}
              >
                <Ionicons name="ios-camera-outline" size={22} color="white" />
              </View>
              <View>
                <Text>Chọn ảnh từ Camera</Text>
              </View>
            </View>
          </BottomSheetItemPressable>

          <BottomSheetItemPressable onPress={onPressCameraPicker}>
            <View
              style={{
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <View
                style={{
                  padding: 5,
                  marginHorizontal: 5,
                  borderRadius: 9999,
                  backgroundColor: 'rgba(64,64,64,1.0)',
                }}
              >
                <Ionicons name="ios-image-outline" size={22} color="white" />
              </View>
              <View>
                <Text>Chọn ảnh từ thư viện</Text>
              </View>
            </View>
          </BottomSheetItemPressable>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
});

const BottomSheetCardProp = memo(BottomSheetCardPropComponent);

export default BottomSheetCardProp;
