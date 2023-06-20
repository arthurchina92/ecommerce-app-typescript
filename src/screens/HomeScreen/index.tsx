import {FlatList, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductItem from '../../components/ProductItem';
import {DataStore} from 'aws-amplify';
import {Product} from '../../models';
import 'core-js/full/symbol/async-iterator';

// import products from '../../data/products';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
  }, []);

  console.log(searchValue);
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
