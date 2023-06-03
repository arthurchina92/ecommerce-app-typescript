import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import styles from './styles';

const ImageCarousel = ({images}: {images: [string]}) => {
  const windowWith = useWindowDimensions().width;
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWith - 20}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWith - 20}
        snapToAlignment="center"
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default ImageCarousel;
