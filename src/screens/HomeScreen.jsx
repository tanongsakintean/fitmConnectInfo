import {View, Text} from 'react-native';
import React from 'react';
import HeaderHome from '../components/header/HeaderHome';

const HomeScreen = () => {
  return (
    <View>
      <HeaderHome />
      <Text className="text-blue-500">HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
