import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: Object;
}

const Button = ({text, onPress, containerStyles}: ButtonProps) => {
  return (
    <Pressable style={[styles.button, containerStyles]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
