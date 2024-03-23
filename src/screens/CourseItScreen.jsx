import React, {useEffect} from 'react';
import {
  View,
  Text,
  BackHandler,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

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
    <SafeAreaView>
      <ScrollView>
        <View>
          <View className=" flex mt-4 flex-row justify-center items-center">
            <Text
              className=" m-2 text-black  text-2xl"
              style={{fontFamily: 'Kanit-Medium'}}>
              ระดับปริญญาตรี 4 ปี (IT)
            </Text>
          </View>
          <View className=" px-2 flex -mt-3 flex-row justify-center items-center">
            <Text
              className=" text-black text-xs"
              style={{fontFamily: 'Kanit-Medium'}}>
              Bachelor of Science Program in Information Technology{' '}
            </Text>
          </View>
        </View>
        <View className="my-5">
          <TouchableOpacity>
            <LinearGradient
              start={{x: -1, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#9DCAEB', '#AFD5F0', '#C3EEFA']}
              className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
              <Text
                className=" text-white font-lg"
                style={{fontFamily: 'Kanit-Medium'}}>
                ข้อมูลหลักสูตรวิทยาศาสตรบัณฑิตสำหรับนักเรียน
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View className="my-5">
          <TouchableOpacity>
            <View className=" flex flex-row justify-center  items-center mx-6 rounded-md  shadow-md px-3 py-6 bg-[#9DCAEB]">
              <Text
                className=" text-white font-lg"
                style={{fontFamily: 'Kanit-Medium'}}>
                ข้อมูลหลักสูตรวิทยาศาสตรบัณฑิตสำหรับนักศึกษา
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="my-5">
          <TouchableOpacity>
            <View className=" flex flex-row justify-center  items-center mx-6 rounded-md  shadow-md px-3 py-6 bg-[#AFD5F0]">
              <Text
                className=" text-white font-lg"
                style={{fontFamily: 'Kanit-Medium'}}>
                ข้อมูลหลักสูตรวิทยาศาสตรบัณฑิตสำหรับศิษย์เก่า
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="my-5">
          <TouchableOpacity>
            <View className=" flex flex-row justify-center  items-center mx-6 rounded-md  shadow-md px-3 py-6 bg-[#b7dcf7]">
              <Text
                className=" text-white"
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}>
                ข้อมูลหลักสูตรวิทยาศาสตรบัณฑิตสำหรับสถานประกอบการ
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="my-5">
          <TouchableOpacity>
            <View className=" flex flex-row justify-center  items-center mx-6 rounded-md  shadow-md px-3 py-6 bg-[#badef7]">
              <Text
                className=" text-white"
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}>
                ข้อมูลหลักสูตรวิทยาศาสตรบัณฑิตสำหรับอาจารย์และผู้บริหาร
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="my-5">
          <TouchableOpacity>
            <View className=" flex flex-row justify-center  items-center mx-6 rounded-md  shadow-md px-3 py-6 bg-[#bee0f8]">
              <Text
                className=" text-white"
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}>
                เล่มหลักสูตรวิทยาศาสตรบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2562)
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseItScreen;
