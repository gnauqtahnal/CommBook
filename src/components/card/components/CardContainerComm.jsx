import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

const CardContainerCommComponent = (props) => {
  const { containerStyle: providedContainerStyle, children } = props;

  const containerStyle = useMemo(
    () => [styles.container, providedContainerStyle],
    [providedContainerStyle]
  );

  return <View styles={containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 128 * 1.2,
    borderWidth: 1,
    borderRadius: 9,
    backgroundColor: 'rgba(255,255,255,1.0)',
    overflow: 'hidden',
  },
});

const CardContainerComm = memo(CardContainerCommComponent);

export default CardContainerComm;
