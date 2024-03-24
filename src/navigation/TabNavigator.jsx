import React from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CommnityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen';
import DepartmentScreen from '../screens/DepartmentScreen';
import CourseScreen from '../screens/CourseScreen';
import PersonnalScreen from '../screens/PersonnalScreen';
import MenuScreen from '../screens/MenuScreen';
import CourseItScreen from '../screens/CourseItScreen';
import CourseStack from './CourseStack';
// import DepartmentStack from './DepartmentStack';
import DepartmentStacks from './DepartmentStacks';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const {height, width} = Dimensions.get('window');

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={route => ({
        tabBarActiveTintColor: '#336ac6',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          backgroundColor: '#FFF',
          shadowOpacity: 0.2,
          // opacity: 0.3,
          height: Platform.OS === 'ios' ? height * 0.1 : 60,
        },
        tabBarLabelStyle: {
          fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
          fontSize: 13,
        },
      })}>
      <Tab.Screen
        name="Department"
        component={DepartmentStacks}
        options={({navigation}) => ({
          tabBarLabel: 'ภาควิชา',
          headerShown: false,
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
            width: 200,
          },
          tabBarIcon: ({color, size}) => (
            <AcademicCapIcon color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen
        name="Course"
        component={CourseStack}
        options={({navigation}) => ({
          tabBarLabel: 'หลักสูตร',
          headerShown: false,
          headerTitle: 'หลักสูตร',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#336ac6',
          },
          headerTitleStyle: {
            fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            width: 200,
          },
          tabBarIcon: ({color, size}) => (
            <AcademicCapIcon color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'หน้าหลัก',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <View style={style.radius_out}>
              <View style={style.radius_in}>
                <HomeIcon name="scan1" color="#FFF" size={size} />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Personal"
        component={PersonnalScreen}
        options={({navigation}) => ({
          tabBarLabel: 'บุคลากร',
          headerShown: true,
          headerTitle: 'อาจารย์ในภาควิชา',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#336ac6',
          },
          headerTitleStyle: {
            fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            width: 260,
          },
          tabBarIcon: ({color, size}) => (
            <IdentificationIcon color={color} size={size} />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <ArrowLeftIcon style={{marginLeft: 10}} color="#fff" size="23" />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={({navigation}) => ({
          tabBarLabel: 'เมนู',
          headerShown: true,
          headerTitle: 'เมนู',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#336ac6',
          },
          headerTitleStyle: {
            fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            width: 260,
          },
          tabBarIcon: ({color, size}) => (
            <Bars3Icon color={color} size={size} />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <ArrowLeftIcon style={{marginLeft: 10}} color="#fff" size="23" />
            </TouchableOpacity>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const style = StyleSheet.create({
  radius_in: {
    backgroundColor: '#336ac6',
    width: 50,
    height: 50,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radius_out: {
    // shadowOpacity: 0.2,
    backgroundColor: '#FFFF',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    top: -10,
  },
});
