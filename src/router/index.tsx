import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

export default function Router() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}
