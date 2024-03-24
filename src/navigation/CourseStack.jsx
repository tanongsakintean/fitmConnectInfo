import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CourseItScreen from '../screens/CourseItScreen';
import CourseScreen from '../screens/CourseScreen';
import {Dimensions, Platform, TouchableOpacity} from 'react-native';
import {AcademicCapIcon, ArrowLeftIcon} from 'react-native-heroicons/outline';
import CourseItiScreen from '../screens/CourseItiScreen';
import CourseIneScreen from '../screens/CourseIneScreen';
import ItPDF from '../pdf/ItPDF';
import ItStuPDF from '../pdf/ItStuPDF';
import ItOldPDF from '../pdf/ItOldPDF';
import ItStationPDF from '../pdf/ItStationPDF';
import ItManagePDF from '../pdf/ItManagePDF';
import It62 from '../pdf/It62';
import InePDF from '../pdf/InePDF';
import INEStuPDF from '../pdf/INEStuPDF';
import ITIPDF from '../pdf/ITIPDF';

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

        <Stack.Screen
          name="ITStuCoursePDF"
          component={ItStuPDF}
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

        <Stack.Screen
          name="ITOldCoursePDF"
          component={ItOldPDF}
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

        <Stack.Screen
          name="ITStationCoursePDF"
          component={ItStationPDF}
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

        <Stack.Screen
          name="ITManageCoursePDF"
          component={ItManagePDF}
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

        <Stack.Screen
          name="IT62CoursePDF"
          component={It62}
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

        <Stack.Screen
          name="INECoursePDF"
          component={InePDF}
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
              <TouchableOpacity
                onPress={() => navigation.navigate('INECourse')}>
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
          name="INEStuCoursePDF"
          component={INEStuPDF}
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
              <TouchableOpacity
                onPress={() => navigation.navigate('INECourse')}>
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
          name="ITICoursePDF"
          component={ITIPDF}
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
              <TouchableOpacity
                onPress={() => navigation.navigate('ITICourse')}>
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
