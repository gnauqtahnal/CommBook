import React, { useCallback, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { CardComm } from '../../../components/card';
import BottomSheetCardProp, {
  BottomSheetCardPropProvider,
} from './bottom-sheet-card-prop';

const HomeScreen = () => {
  const refBottomSheet = useRef(null);

  const openBottomSheetCardProp = useCallback(() => {
    refBottomSheet.current?.open();
  }, []);

  return (
    <BottomSheetCardPropProvider>
      <View style={styles.container}>
        <CardComm
          onPress={openBottomSheetCardProp}
          imageUri="https://picsum.photos/256/256"
          audioUri={undefined}
          label="Lorem Picsum"
        />
      </View>

      <BottomSheetCardProp ref={refBottomSheet} />
    </BottomSheetCardPropProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
