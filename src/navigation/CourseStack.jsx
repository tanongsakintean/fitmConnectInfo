import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CourseItScreen from '../screens/CourseItScreen';
import CourseScreen from '../screens/CourseScreen';
import {Dimensions, TouchableOpacity} from 'react-native';
import {
  HomeIcon,
  ClockIcon,
  QrCodeIcon,
  BellAlertIcon,
  UserIcon,
  AcademicCapIcon,
  IdentificationIcon,
  Bars3Icon,
  BuildingOffice2Icon,
  ArrowLeftIcon,
} from 'react-native-heroicons/outline';
import CourseItiScreen from '../screens/CourseItiScreen';
import CourseIneScreen from '../screens/CourseIneScreen';
import ItPDF from '../pdf/ItPDF';

const Stack = createNativeStackNavigator();
const {width} = Dimensions.get('window');

const CourseStack = ({navigation}) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Course"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen
          name="Course"
          component={CourseScreen}
          options={({navigation}) => ({
            tabBarLabel: 'หลักสูตร',
            headerShown: true,
            headerTitle: 'หลักสูตร',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#336ac6',
            },
            headerTitleStyle: {
              fontFamily: 'Kanit-Medium',
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
          name="ITCourse"
          component={CourseItScreen}
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
              fontFamily: 'Kanit-Medium',
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
        />

        <Stack.Screen
          name="ITICourse"
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
              fontFamily: 'Kanit-Medium',
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
        />

        <Stack.Screen
          name="INECourse"
          component={CourseIneScreen}
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
              fontFamily: 'Kanit-Medium',
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
        />

        <Stack.Screen
          name="ITCoursePDF"
          component={ItPDF}
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
              fontFamily: 'Kanit-Medium',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              width: width,
            },
            tabBarIcon: ({color, size}) => (
              <AcademicCapIcon color={color} size={size} />
            ),
            headerLeft: ({}) => (
              <TouchableOpacity onPress={() => navigation.navigate('ITCourse')}>
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

export default CourseStack;
