import { Ionicons } from '@expo/vector-icons';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICON_COLOR, ICON_SIZE } from '../constants';
import BottomSheetItemPressable from './BottomSheetItemPressable';

const BottomSheetItem = (props) => {
  const {
    onPress: onPressProvided = () => {},
    text: textProvided,
    children,
  } = props;

  return (
    <BottomSheetItemPressable onPress={onPressProvided}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>{children}</View>
        <Text>{textProvided}</Text>
      </View>
    </BottomSheetItemPressable>
  );
};

export const BottomSheetItemCamera = memo((props) => {
  const { onPress } = props;

  return (
    <BottomSheetItem onPress={onPress} text="Chọn ảnh từ camera">
      <Ionicons name="ios-camera-outline" size={ICON_SIZE} color={ICON_COLOR} />
    </BottomSheetItem>
  );
});

export const BottomSheetItemImage = memo((props) => {
  const { onPress } = props;

  return (
    <BottomSheetItem onPress={onPress} text="Chọn ảnh từ thư viện">
      <Ionicons name="ios-image-outline" size={ICON_SIZE} color={ICON_COLOR} />
    </BottomSheetItem>
  );
});

export const BottomSheetItemMic = memo((props) => {
  const { onPress } = props;

  return (
    <BottomSheetItem onPress={onPress} text="Ghi âm">
      <Ionicons name="mic-outline" size={ICON_SIZE} color={ICON_COLOR} />
    </BottomSheetItem>
  );
});

export const BottomSheetItemText = memo((props) => {
  const { onPress } = props;

  return (
    <BottomSheetItem onPress={onPress} text="Nhập nhãn cho thẻ">
      <Ionicons name="ios-text-outline" size={ICON_SIZE} color={ICON_COLOR} />
    </BottomSheetItem>
  );
});

export const BottomSheetItemTrashBin = memo((props) => {
  const { onPress } = props;

  return (
    <BottomSheetItem onPress={onPress} text="Xoá thẻ">
      <Ionicons
        name="ios-trash-bin-outline"
        size={ICON_SIZE}
        color={ICON_COLOR}
      />
    </BottomSheetItem>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerIcon: {
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 9999,
    backgroundColor: 'rgba(64,64,64,1.0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
