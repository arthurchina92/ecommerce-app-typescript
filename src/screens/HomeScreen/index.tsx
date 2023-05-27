import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.title} numberOfLines={3}>
            {' '}
            Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
          </Text>
          <View style={styles.rating}>
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star-half-empty"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star-o"
              size={18}
              color={'#e47911'}
            />
            <Text>13,032</Text>
          </View>
          <Text style={styles.price}> from 13.67 </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#959696',
    borderRadius: 10,
  },
  textView: {
    flex: 3,
    margin: 10,
  },
  imageContainer: {
    flex: 2,
    backgroundColor: 'green',
  },
  image: {
    height: 150,
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
    fontSize: 18,
    color: '#000000',
  },
  price: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default HomeScreen;
