import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}
const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, item} = cartItem;
  const [quantity, setQuantity] = useState(quantityProp);
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: cartItem.item.image,
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
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;
