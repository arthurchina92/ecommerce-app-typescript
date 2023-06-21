import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 30,
    backgroundColor: '#cce7e8',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    marginTop: 30,
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  price: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  picker: {
    marginVertical: 35,
  },
});

export default styles;
