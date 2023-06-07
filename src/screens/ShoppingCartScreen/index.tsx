import {FlatList, View} from 'react-native';
import React from 'react';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';

const ShoppingCartScreen = () => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ShoppingCartScreen;
