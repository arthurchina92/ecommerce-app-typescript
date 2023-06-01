import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default Button;
