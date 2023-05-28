import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: string;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}
const ProductItem = ({item}: ProductItemProps) => {
  return (
    <View>
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
    </View>
  );
};

export default ProductItem;
