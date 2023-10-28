import React, { memo, useMemo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const CardPressableComponent = (props) => {
  const {
    containerStyle: providedConatinerStyle,
    onPress: providedOnPress,
    children,
  } = props;

  const containerStyle = useMemo(
    () => [styles.container, providedConatinerStyle],
    [providedConatinerStyle]
  );

  return (
    <TouchableOpacity onPress={providedOnPress} style={containerStyle}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const CardPressable = memo(CardPressableComponent);

export default CardPressable;
