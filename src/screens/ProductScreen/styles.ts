import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default styles;
