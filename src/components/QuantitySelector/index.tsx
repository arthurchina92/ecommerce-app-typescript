import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

const QuantitySelector = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.root}>
      <Pressable style={styles.button} onPress={onMinus}>
        <Text>-</Text>
      </Pressable>
      <Text>{quantity}</Text>
      <Pressable style={styles.button} onPress={onPlus}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;
