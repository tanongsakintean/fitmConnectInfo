import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  BackHandler,
  Platform,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const ProjectScreen = ({navigation}) => {
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
      <TouchableOpacity onPress={() => navigation.navigate('Project1')}>
        <View className=" flex flex-row my-2  p-5">
          <View className=" flex w-full py-5 justify-center items-center  rounded-md shadow-md  bg-[#336ac6]">
            <Text
              className=" text-2xl text-white   "
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}>
              ระบบโครงงานพิเศษ
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Project2')}>
        <View className=" flex flex-row my-2  p-5">
          <View className=" flex w-full py-5 justify-center items-center  rounded-md shadow-md  bg-[#336ac6]">
            <Text
              className=" text-2xl text-white   "
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}>
              โครงงานสหกิจศึกษา
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Project3')}>
        <View className=" flex flex-row my-2  p-5">
          <View className=" flex w-full py-5 justify-center items-center  rounded-md shadow-md  bg-[#336ac6]">
            <Text
              className=" text-2xl text-white   "
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}>
              ฝึกงาน
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProjectScreen;
