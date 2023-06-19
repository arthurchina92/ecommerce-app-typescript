import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';

import {Amplify} from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

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

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router />
      <SignOutButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: {color: 'white', padding: 16, fontSize: 18},
});

export default withAuthenticator(App);
