import React, {useEffect} from 'react';
import {View, Text, BackHandler} from 'react-native';

const CourseItScreen = ({navigation}) => {
  function handleBackButtonClick() {
    navigation.navigate('Course');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  });
  return (
    <View>
      <Text>IT</Text>
    </View>
  );
};

export default CourseItScreen;
