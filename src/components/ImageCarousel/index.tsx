import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import React, {useState, useCallback} from 'react';
import styles from './styles';

const ImageCarousel = ({images}: {images: [string]}) => {
  const windowWith = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleViewableItemsChanged = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
    console.log(viewableItems);
  }, []);

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
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={handleViewableItemsChanged}
      />
      <View style={styles.dots}>
        {images.map((map, index) => (
          <View
            style={[
              styles.dot,
              {backgroundColor: index === activeIndex ? '#C9C9C9' : '#ededed'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
