import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CourseScreen from '../screens/CourseScreen';
import {Dimensions, Platform, TouchableOpacity} from 'react-native';
import {AcademicCapIcon, ArrowLeftIcon} from 'react-native-heroicons/outline';
import DepartmentScreen from '../screens/DepartmentScreen';
import DepartmentVideoScreen from '../screens/DepartmentVideoScreen';
const Stack = createNativeStackNavigator();
const {width} = Dimensions.get('window');

const DepartmentStacks = ({navigation}) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Department"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen
          name="Department"
          component={DepartmentScreen}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'ภาควิชา',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#336ac6',
            },
            headerTitleStyle: {
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
            },
            tabBarIcon: ({color, size}) => (
              <AcademicCapIcon color={color} size={size} />
            ),
            headerTitleAlign: 'center',
            headerLeft: ({}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
          name="VideoDepartment"
          component={DepartmentVideoScreen}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'ภาควิชา',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#336ac6',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              width: width,
            },
            tabBarIcon: ({color, size}) => (
              <AcademicCapIcon color={color} size={size} />
            ),
            headerLeft: ({}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Department')}>
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

export default DepartmentStacks;
