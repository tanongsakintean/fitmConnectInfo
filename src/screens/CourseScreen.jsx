import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  BackHandler,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';

const CourseScreen = ({navigation}) => {
  function handleBackButtonClick() {
    navigation.navigate('Home');
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
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('ITCourse')}>
        <View className=" flex flex-row my-2  p-5">
          <View className=" flex w-full py-5 justify-center items-center  rounded-md shadow-md  bg-[#336ac6]">
            <Text
              className=" text-6xl text-white   "
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}>
              IT
            </Text>
            <Text
              className="  text-white   "
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
                fontSize: 13,
              }}>
              ระดับปริญญาตรี 4 ปี (IT)
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('INECourse')}>
        <View className=" flex flex-row my-2  p-5">
          <View className=" flex w-full py-5 justify-center items-center  rounded-md shadow-md  bg-[#336ac6]">
            <Text
              className=" text-6xl text-white   "
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}>
              INE
            </Text>
            <Text
              className="  text-white   "
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
                fontSize: 13,
              }}>
              ระดับปริญญาตรี 4 ปี (INE)
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ITICourse')}>
        <View className=" flex flex-row my-2  p-5">
          <View className=" flex w-full py-5 justify-center items-center  rounded-md shadow-md  bg-[#336ac6]">
            <Text
              className=" text-6xl text-white   "
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}>
              ITI
            </Text>
            <Text
              className="  text-white   "
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
                fontSize: 13,
              }}>
              ระดับปริญญาตรี 2 ปี (ITI) (ต่อเนื่อง 2 ปี)
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CourseScreen;
