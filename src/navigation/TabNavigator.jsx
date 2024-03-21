import React from 'react';
import {Dimensions, View, StyleSheet, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  ClockIcon,
  QrCodeIcon,
  BellAlertIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen';
// import HistoryScreen from '../screens/HistoryScreen';
// import NotificationScreen from '../screens/NotificationScreen';
// import AccountScreen from '../screens/AccountScreen';
// import ScanQrScreen from '../screens/ScanQrScreen';
// import HeaderStack from '../components/HeaderStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const {height} = Dimensions.get('window');

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
      screenOptions={route => ({
        tabBarActiveTintColor: '#F37234',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          backgroundColor: '#FFF',
          shadowOpacity: 0.2,
          // opacity: 0.3,
          height: Platform.OS === 'ios' ? height * 0.1 : 60,
        },
        tabBarLabelStyle: {
          fontFamily: 'Kanit-Medium',
          fontSize: 13,
        },
      })}>
      <Tab.Screen
        name="hometab"
        component={HomeStack}
        options={{
          tabBarLabel: 'หน้าหลัก',
          headerShown: false,
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
        }}
      />
      {/* <Tab.Screen
        name="history"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'ประวัติ',
          // headerStyle: {
          //   backgroundColor: '#F37234',
          //   height: 110,
          // },
          // headerTitleStyle: {
          //   fontFamily: 'Kanit-Bold',
          //   fontSize: 20,
          //   color: '#FFFF',
          // },
          unmountOnBlur: true,
          header: () => <HeaderStack goBackClose title="ประวัติ" />,
          tabBarIcon: ({color, size}) => (
            <ClockIcon color={color} size={size} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="scan"
        component={ScanQrScreen}
        options={{
          tabBarLabel: 'ScanQR',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <View style={style.radius_out}>
              <View style={style.radius_in}>
                <AntDesign name="scan1" color="#FFF" size={size} />
              </View>
            </View>
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'แจ้งเตือน',
          // tabBarBadge: 3,
          // tabBarBadgeStyle: {backgroundColor: 'red'},
          unmountOnBlur: true,
          header: () => <HeaderStack goBackClose title="แจ้งเตือน" />,
          tabBarIcon: ({color, size}) => (
            <BellAlertIcon color={color} size={size} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'บัญชี',
          unmountOnBlur: true,
          header: () => <HeaderStack goBackClose title="บัญชี" />,
          tabBarIcon: ({color, size}) => <UserIcon color={color} size={size} />,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const style = StyleSheet.create({
  radius_in: {
    backgroundColor: '#F37234',
    width: 50,
    height: 50,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radius_out: {
    shadowOpacity: 0.2,
    backgroundColor: '#FFFF',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    top: -10,
  },
});
