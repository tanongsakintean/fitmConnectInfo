import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dimensions, Platform, TouchableOpacity} from 'react-native';
import {AcademicCapIcon, ArrowLeftIcon} from 'react-native-heroicons/outline';
import HomeScreen from '../screens/HomeScreen';
import DetailEventScreen from '../screens/DetailEventScreen';
import MenuScreen from '../screens/MenuScreen';
import MenuContectScreen from '../screens/MenuContectScreen';
import MenuRoomScreen from '../screens/MenuRoomScreen';

const Stack = createNativeStackNavigator();
const {width} = Dimensions.get('window');

const MenuStacks = ({navigation}) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={({navigation}) => ({
            headerShown: true,
            headerTintColor: '#fff',
            tabBarIcon: ({color, size}) => (
              <AcademicCapIcon color={color} size={size} />
            ),
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="MenuContect"
          component={MenuContectScreen}
          options={({navigation}) => ({
            tabBarLabel: 'ติดต่อสอบถาม',
            headerShown: true,
            headerTitle: 'ติดต่อสอบถาม',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#336ac6',
            },
            headerTitleStyle: {
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
            },
            tabBarIcon: ({color, size}) => (
              <AcademicCapIcon color={color} size={size} />
            ),
            headerTitleAlign: 'center',
            headerLeft: ({}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <ArrowLeftIcon
                  style={{marginLeft: -5}}
                  color="#fff"
                  size="23"
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="MenuRoom"
          component={MenuRoomScreen}
          options={({navigation}) => ({
            tabBarLabel: '',
            headerShown: true,
            headerTitle: 'ห้องเรียน',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#336ac6',
            },
            headerTitleStyle: {
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
            },
            tabBarIcon: ({color, size}) => (
              <AcademicCapIcon color={color} size={size} />
            ),
            headerTitleAlign: 'center',
            headerLeft: ({}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <ArrowLeftIcon
                  style={{marginLeft: -5}}
                  color="#fff"
                  size="23"
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </>
  );
};

export default MenuStacks;
