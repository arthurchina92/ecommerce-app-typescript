import {FlatList, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';
import Button from '../../components/Button';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );
  return (
    <>
      <View style={styles.page}>
        <FlatList
          data={products}
          renderItem={({item}) => <CartProductItem cartItem={item} />}
          showsVerticalScrollIndicator={true}
          // eslint-disable-next-line react/no-unstable-nested-components
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text style={styles.subtotal}>
                Subtotal({products.length}items):{''}
                <Text style={styles.totalPrice}> ${totalPrice.toFixed(2)}</Text>
              </Text>
              <Button
                text="Proceed to checkout"
                onPress={() => console.warn('go to checkout')}
                containerStyles={styles.buttonContainer}
              />
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  header: {
    marginBottom: 10,
  },
  subtotal: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#e47911',
  },
  buttonContainer: {
    backgroundColor: '#f7e300',
    marginTop: 10,
    borderColor: '#c7b702',
  },
});
export default ShoppingCartScreen;
