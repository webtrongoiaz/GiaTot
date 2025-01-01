import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CouponsScreen from '../screens/CouponsScreen';
import BlogScreen from '../screens/BlogScreen';
import ContactScreen from '../screens/ContactScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Coupons" component={CouponsScreen} />
      <Tab.Screen name="Blog" component={BlogScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}
