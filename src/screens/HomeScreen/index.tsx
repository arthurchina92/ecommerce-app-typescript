import {View} from 'react-native';
import React from 'react';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View>
      <ProductItem item={products[0]} />
    </View>
  );
};

export default HomeScreen;
