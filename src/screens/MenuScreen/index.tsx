import {SafeAreaView, Pressable, Text, StyleSheet, View} from 'react-native';
import Button from '../../components/Button';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';

const userSelector = context => [context.user];

const SignOutButton = () => {
  const {user, signOut} = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        Hello, {user.username}! Click here to sign out!
      </Text>
    </Pressable>
  );
};

const MenuScreen = () => {
  const signOut = () => {
    Auth.signOut();
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View>
          <Text style={styles.phrase}>Find what you look for</Text>
        </View>
        <Button text="Home" onPress={() => navigation.navigate('Home')} />
        <Button
          text="Shopping cart"
          onPress={() => navigation.navigate('Shopping')}
        />
        <Button text="Sign out" onPress={signOut} />
        <SignOutButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#abdbe3',
  },
  phrase: {
    fontSize: 60,
    textAlign: 'center',
    margin: 40,
    color: '#000000',
  },
  container: {
    marginTop: 100,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
    marginTop: 150,
  },
  buttonText: {color: 'white', padding: 16, fontSize: 18},
});

export default withAuthenticator(MenuScreen);
