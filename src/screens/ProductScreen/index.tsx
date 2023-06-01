import {View, Text} from 'react-native';
import React, {useState} from 'react';
import product from '../../data/product';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';

const ProductScreen = () => {
  const [selectColor, setSelectColor] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);
  console.log(selectColor);
  return (
    <View>
      <Text>ProductScreen</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}> from ${product.price}</Text>
        {product.oldPrice && (
          <Text style={styles.oldPrice}>${product.oldPrice}</Text>
        )}
      </View>
      <View>
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
      />
      <Button
        text={'Buy now'}
        onPress={() => {
          console.warn('Buuy now');
        }}
      />
    </View>
  );
};

export default ProductScreen;