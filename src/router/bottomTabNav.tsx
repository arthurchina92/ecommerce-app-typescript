import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdressScreen from '../screens/AdressScreen';
import MenuScreen from '../screens/MenuScreen';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
import Entypo from 'react-native-vector-icons/Entypo';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#ffbd7d',
        tabBarActiveTintColor: '#e47911',
      }}>
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="menu" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Address"
        component={AdressScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MCIcons name="post-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={ShoppingCartStack}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNav;
