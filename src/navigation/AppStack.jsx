import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';
// import HeaderStack from '../components/HeaderStack';
// import CarScreen from '../screens/CarScreen';
// import BookingRoomScreen from '../screens/BookingRoomScreen';
// import ChooseLocation from '../screens/ChooseLocation';
// import RoomListScreen from '../screens/RoomListScreen';
// import CarEmgcyScreen from '../screens/CarEmgcyScreen';
// import DetailRoomScreen from '../screens/DetailRoomScreen';
// import SearchRoomScreen from '../screens/SearchRoomScreen';
// import EquipmentListScreen from '../screens/EquipmentListScreen';
// import BorrowEqList from '../screens/BorrowEqList';
// import ActivityList from '../screens/ActivityList';
// import DetailActivityScreen from '../screens/DetailActivityScreen';
// import MyActivityScreen from '../screens/MyActivityScreen';
// import ReportActivity from '../screens/ReportActivity';
// import CancelUrgentDetail from '../screens/CancelUrgentDetail';
// import EditAccountScreen from '../screens/EditAccountScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Department" component={TabNavigator} />
        <Stack.Screen name="Menu" component={TabNavigator} />
        <Stack.Screen name="Course" component={TabNavigator} />
        <Stack.Screen name="Personal" component={TabNavigator} />
        {/* <Stack.Group
          screenOptions={() => ({
            // presentation: 'modal',
            headerShown: true,
          })}></Stack.Group> */}
      </Stack.Navigator>
    </>
  );
};

export default AppStack;
