import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import BeginScreen from '../screens/BeginScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Begin"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Begin" component={BeginScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Department" component={TabNavigator} />
        <Stack.Screen name="Menu" component={TabNavigator} />
        <Stack.Screen name="Course" component={TabNavigator} />
        <Stack.Screen name="Personal" component={TabNavigator} />
      </Stack.Navigator>
    </>
  );
};

export default AppStack;
