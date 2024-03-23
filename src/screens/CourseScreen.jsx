import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  BackHandler,
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
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('ITCourse')}>
          <View className=" flex flex-row my-2  p-5">
            <View className=" flex w-full py-5 justify-center items-center  rounded-md shadow-md  bg-[#6495ED]">
              <Text
                className=" text-6xl text-white   "
                style={{fontFamily: 'Kanit-Medium'}}>
                IT
              </Text>
              <Text
                className="  text-white   "
                style={{fontFamily: 'Kanit-Medium', fontSize: 13}}>
                ระดับปริญญาตรี 4 ปี (IT)
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('INECourse')}>
          <View className=" flex flex-row my-2  p-5">
            <View className=" flex w-full py-5 justify-center items-center  rounded-md shadow-md  bg-[#6495ED]">
              <Text
                className=" text-6xl text-white   "
                style={{fontFamily: 'Kanit-Medium'}}>
                INE
              </Text>
              <Text
                className="  text-white   "
                style={{fontFamily: 'Kanit-Medium', fontSize: 13}}>
                ระดับปริญญาตรี 4 ปี (INE)
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ITICourse')}>
          <View className=" flex flex-row my-2  p-5">
            <View className=" flex w-full py-5 justify-center items-center  rounded-md shadow-md  bg-[#6495ED]">
              <Text
                className=" text-6xl text-white   "
                style={{fontFamily: 'Kanit-Medium'}}>
                ITI
              </Text>
              <Text
                className="  text-white   "
                style={{fontFamily: 'Kanit-Medium', fontSize: 13}}>
                ระดับปริญญาตรี 2 ปี (ITI) (ต่อเนื่อง 2 ปี)
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseScreen;
