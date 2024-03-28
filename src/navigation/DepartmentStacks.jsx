import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CourseScreen from '../screens/CourseScreen';
import {Dimensions, Platform, TouchableOpacity} from 'react-native';
import {AcademicCapIcon, ArrowLeftIcon} from 'react-native-heroicons/outline';
import DepartmentScreen from '../screens/DepartmentScreen';
import DepartmentVideoScreen from '../screens/DepartmentVideoScreen';
import ProjectScreen from '../screens/ProjectScreen';
import Project1Screen from '../screens/Project1Screen';
import Project1PDF from '../pdf/Project1PDF';
import Project2PDF from '../pdf/Project2PDF';
import Project2Screen from '../screens/Project2Screen';
import Project3PDF from '../pdf/Project3PDF';
import Project3Screen from '../screens/Project3Screen';
import Project4Screen from '../screens/Project4Screen';
import Project3_1PDF from '../pdf/Project3_1PDF';
import Project3_2PDF from '../pdf/Project3_2PDF';
import Project3_3PDF from '../pdf/Project3_3PDF';
import Project3_4PDF from '../pdf/Project3_4PDF';
import Project3_5PDF from '../pdf/Project3_5PDF';
import Project3_6PDF from '../pdf/Project3_6PDF';
import Project3_7PDF from '../pdf/Project3_7PDF';
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
          name="Project"
          component={ProjectScreen}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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

        <Stack.Screen
          name="Project2"
          component={Project2Screen}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
              <TouchableOpacity onPress={() => navigation.navigate('Project')}>
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
          name="Project1"
          component={Project1Screen}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
              <TouchableOpacity onPress={() => navigation.navigate('Project')}>
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
          name="Project3"
          component={Project3Screen}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
              <TouchableOpacity onPress={() => navigation.navigate('Project')}>
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
          name="Project3-1"
          component={Project4Screen}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
              <TouchableOpacity onPress={() => navigation.navigate('Project3')}>
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
          name="Project1PDF"
          component={Project1PDF}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
              <TouchableOpacity onPress={() => navigation.navigate('Project1')}>
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
          name="Project2PDF"
          component={Project2PDF}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
              <TouchableOpacity onPress={() => navigation.navigate('Project1')}>
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
          name="Project3PDF"
          component={Project3PDF}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
              <TouchableOpacity onPress={() => navigation.navigate('Project2')}>
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
          name="Project3_1PDF"
          component={Project3_1PDF}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
                onPress={() => navigation.navigate('Project3-1')}>
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
          name="Project3_2PDF"
          component={Project3_2PDF}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
                onPress={() => navigation.navigate('Project3-1')}>
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
          name="Project3_3PDF"
          component={Project3_3PDF}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
                onPress={() => navigation.navigate('Project3-1')}>
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
          name="Project3_4PDF"
          component={Project3_4PDF}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
                onPress={() => navigation.navigate('Project3-1')}>
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
          name="Project3_5PDF"
          component={Project3_5PDF}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
                onPress={() => navigation.navigate('Project3-1')}>
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
          name="Project3_6PDF"
          component={Project3_6PDF}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
                onPress={() => navigation.navigate('Project3-1')}>
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
          name="Project3_7PDF"
          component={Project3_7PDF}
          options={({navigation}) => ({
            tabBarLabel: 'ภาควิชา',
            headerShown: true,
            headerTitle: 'โครงงานศึกษาต่างๆ',
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
                onPress={() => navigation.navigate('Project3-1')}>
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
