import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './container/Home'
import Profile from './container/Profile'
import Settings from './container/Settings'
import Notifications from './container/Notifications'

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Notifications" component={Notifications} />
  </Tab.Navigator>
);

export default () => (
  <NavigationNativeContainer>
    <Stack.Navigator screenOptions={{ presentation: 'push', headerBackTitleVisible: false, headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  </NavigationNativeContainer>
)
