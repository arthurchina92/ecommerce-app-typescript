import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import countrylist from 'country-list';
import Button from '../../components/Button';

const countries = countrylist.getData();

const AdressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line1Error, setLine1Error] = useState('Invalid address');
  const [line2Error, setLine2Error] = useState('Invalid address');

  const onCheckout = () => {
    if (!name) {
      Alert.alert('Please fill in the fullname field');
      return;
    } else if (!phone) {
      Alert.alert('Please fill in the phone number field');
      return;
    } else if (!line1 || !line2) {
      Alert.alert('Please fill in the Adress field');
      return;
    }
    console.warn('Checked out baby!');
  };
  const validateLine1 = () => {
    if (line1.length < 4) {
      setLine1Error('Address is too short');
    } else if (line1.length > 30) {
      setLine1Error('Address is too long');
    }
  };
  const validateLine2 = () => {
    if (line2.length < 4) {
      setLine2Error('Address is too short');
    } else if (line2.length > 30) {
      setLine2Error('Address is too long');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}>
      <ScrollView style={styles.root}>
        <View style={styles.container}>
          <Text style={{...styles.label, marginTop: 20}}>
            {' '}
            Select a country
          </Text>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map(country => (
              <Picker.Item
                value={country.code}
                label={country.name}
                key={country.code}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Full name (First and last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Line 1"
            value={line1}
            onEndEditing={validateLine1}
            onChangeText={text => {
              setLine1(text);
              setLine1Error('');
            }}
          />
          {!!line1Error && <Text style={styles.errorLabel}>{line1Error}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Line 2"
            value={line2}
            onEndEditing={validateLine2}
            onChangeText={text => {
              setLine2(text);
              setLine2Error('');
            }}
          />
          {!!line2Error && <Text style={styles.errorLabel}>{line2Error}</Text>}
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>
        <View style={{marginBottom: 30}}>
          <Button text="Checkout" onPress={onCheckout} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AdressScreen;
