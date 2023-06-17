import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ProductScreen from '../../screens/ProductScreen';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}
const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    console.warn('Item pressed');
    navigation.navigate('ProductDetails', {id: item.id});
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <View style={styles.rating}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${item.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}

            <Text>{item.ratings}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}> from ${item.price}</Text>
            {item.oldPrice && (
              <Text style={styles.oldPrice}>${item.oldPrice}</Text>
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;
