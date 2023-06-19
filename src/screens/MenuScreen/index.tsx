import {SafeAreaView, Pressable, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import React from 'react';
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
  return (
    <SafeAreaView>
      <Button text="Sign out" onPress={signOut} />
      <SignOutButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: {color: 'white', padding: 16, fontSize: 18},
});

export default withAuthenticator(MenuScreen);
