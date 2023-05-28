import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    margin: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#959696',
    borderRadius: 10,
  },
  textView: {
    flex: 3,
    margin: 10,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    height: 150,
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: '#000000',
  },
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
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default styles;
