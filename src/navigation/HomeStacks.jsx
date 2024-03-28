import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dimensions, Platform, TouchableOpacity} from 'react-native';
import {AcademicCapIcon, ArrowLeftIcon} from 'react-native-heroicons/outline';
import HomeScreen from '../screens/HomeScreen';
import DetailEventScreen from '../screens/DetailEventScreen';

const Stack = createNativeStackNavigator();
const {width} = Dimensions.get('window');

const HomeStacks = ({navigation}) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerShown: false,
            headerTintColor: '#fff',
            tabBarIcon: ({color, size}) => (
              <AcademicCapIcon color={color} size={size} />
            ),
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="DetailEvent"
          component={DetailEventScreen}
          options={({navigation}) => ({
            tabBarLabel: 'รายละเอียด',
            headerShown: true,
            headerTitle: 'รายละเอียด',
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
        {/* <Stack.Screen
          name="CapitalNew1"
          component={CourseItiScreen}
          options={({navigation}) => ({
            tabBarLabel: 'หลักสูตร',
            headerShown: true,
            headerTitle: 'หลักสูตร',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#336ac6',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              width: width,
            },
            tabBarIcon: ({color, size}) => (
              <AcademicCapIcon color={color} size={size} />
            ),
            headerLeft: ({}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Course')}>
                <ArrowLeftIcon
                  style={{marginLeft: -5}}
                  color="#fff"
                  size="23"
                />
              </TouchableOpacity>
            ),
          })}
        /> */}
      </Stack.Navigator>
    </>
  );
};

export default HomeStacks;
