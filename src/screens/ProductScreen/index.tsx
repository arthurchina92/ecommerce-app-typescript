import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
// import product from '../../data/product';
import {DataStore, Auth} from 'aws-amplify';
import {Product, CartProduct} from '../../models';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectColor, setSelectColor] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);

  const route = useRoute();
  console.log(route.params);

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct);
  }, [route.params?.id]);

  useEffect(() => {
    if (product?.options) {
      setSelectColor(product.options[0]);
    }
  }, [product]);

  const onAddToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    console.log(userData);

    if (!product || !userData) {
      return;
    }

    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity,
      option: selectColor || null,
      id: product.id,
    });
    DataStore.save(newCartProduct);
  };

  if (!product) {
    return <ActivityIndicator />;
  }

  console.log(selectColor);
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text>{product.title}</Text>
        <ImageCarousel images={product.images} key={product.id} />
        <View style={styles.priceContainer}>
          <Text style={styles.price}> from ${product.price.toFixed(2)}</Text>
          {product.oldPrice && (
            <Text style={styles.oldPrice}>${product.oldPrice.toFixed(2)}</Text>
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
          onPress={onAddToCart}
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
