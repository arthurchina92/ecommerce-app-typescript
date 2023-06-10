import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import countrylist from 'country-list';

const countries = countrylist.getData();

const AdressScreen = () => {
  console.log(countries);

  return (
    <View>
      <View style={styles.row}>
        <Picker>
          {countries.map(country => (
            <Picker.Item value={country.code} label={country.name} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default AdressScreen;
