import React, { memo, useMemo } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

const BottomSheetItemPressableComponent = (props) => {
  const {
    onPress: providedOnPress,
    containerStyle: providedContainerStyle,
    children,
  } = props;

  const containerStyle = useMemo(
    () => [styles.container, providedContainerStyle],
    [providedContainerStyle]
  );

  return (
    <TouchableHighlight
      onPress={providedOnPress}
      style={containerStyle}
      underlayColor="rgba(0,0,0,0.1)"
    >
      {children}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const BottomSheetItemPressable = memo(BottomSheetItemPressableComponent);

export default BottomSheetItemPressable;
