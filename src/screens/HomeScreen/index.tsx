import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.root}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
          }}
          style={styles.image}
        />
        <View>
          <Text>
            {' '}
            Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
          </Text>
          <Text> 13.67</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
    marginLeft: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#959696',
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default HomeScreen;
