import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import product from '../../data/product';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [selectColor, setSelectColor] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  const route = useRoute();
  console.log(route.params);
  console.log('hello world');

  console.log(selectColor);
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text>{product.title}</Text>
        <ImageCarousel images={product.images} key={product.id} />
        <View style={styles.priceContainer}>
          <Text style={styles.price}> from ${product.price}</Text>
          {product.oldPrice && (
            <Text style={styles.oldPrice}>${product.oldPrice}</Text>
          )}
        </View>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectColor}
            onValueChange={(itemValue, itemIndex) => setSelectColor(itemValue)}>
            {product.options.map(option => (
              <Picker.Item label={option} value={option} key={product.id} />
            ))}
          </Picker>
        </View>
        <Text>{product.description}</Text>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Button
          text={'Add to cart'}
          onPress={() => {
            console.warn('Add to cart');
          }}
          containerStyles={{backgroundColor: '#e3c905'}}
        />
        <Button
          text={'Buy now'}
          onPress={() => {
            console.warn('Buuy now');
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
