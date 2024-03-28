import React, {useEffect} from 'react';
import {
  View,
  Text,
  BackHandler,
  TouchableOpacity,
  ScrollView,
  Platform,
  Linking,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const Project4Screen = ({navigation}) => {
  function handleBackButtonClick() {
    navigation.navigate('Project3');
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
      <View>
        <View
          className=" flex flex-row justify-center items-center"
          style={{marginTop: Platform.os === 'ios' ? 0 : 10}}>
          <Text
            className=" m-2 text-black  text-xl"
            style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium'}}>
            แบบฟอร์มขอเอกสารฝึกงาน
          </Text>
        </View>
      </View>

      <View className="my-5">
        <TouchableOpacity onPress={() => navigation.navigate('Project3_1PDF')}>
          <LinearGradient
            start={{x: -1, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#62cff4', '#2c67f2']}
            className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
            <Text
              className=" text-white"
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                fontSize: Platform.OS === 'ios' ? 11 : 11,
              }}>
              หน้าปกเล่มบันทึกการปฏิบัติงาน (ฝึกงาน)
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View className="my-5">
        <TouchableOpacity onPress={() => navigation.navigate('Project3_2PDF')}>
          <LinearGradient
            start={{x: -1, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#62cff4', '#2c67f2']}
            className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
            <Text
              className=" text-white"
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                fontSize: Platform.OS === 'ios' ? 11 : 11,
              }}>
              ฟอร์มประวัตินักศึกษาฝึกงาน
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View className="my-5">
        <TouchableOpacity onPress={() => navigation.navigate('Project3_3PDF')}>
          <LinearGradient
            start={{x: -1, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#62cff4', '#2c67f2']}
            className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
            <Text
              className=" text-white"
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                fontSize: Platform.OS === 'ios' ? 11 : 11,
              }}>
              แบบฟอร์มตรวจสอบรายวิชาเกณฑ์ก่อนออกฝึกงาน (it 62)
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View className="my-5">
        <TouchableOpacity onPress={() => navigation.navigate('Project3_4PDF')}>
          <LinearGradient
            start={{x: -1, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#62cff4', '#2c67f2']}
            className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
            <Text
              className=" text-white"
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                fontSize: Platform.OS === 'ios' ? 11 : 11,
              }}>
              แบบฟอร์มตรวจสอบรายวิชาเกณฑ์ก่อนออกฝึกงาน (ine 62)
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View className="my-5">
        <TouchableOpacity onPress={() => navigation.navigate('Project3_5PDF')}>
          <LinearGradient
            start={{x: -1, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#62cff4', '#2c67f2']}
            className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
            <Text
              className=" text-white"
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                fontSize: Platform.OS === 'ios' ? 11 : 11,
              }}>
              แบบฟอร์มตรวจสอบรายวิชา-เกณฑ์-ก่อนออกฝึกงาน (ITI)
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View className="my-5">
        <TouchableOpacity onPress={() => navigation.navigate('Project3_6PDF')}>
          <LinearGradient
            start={{x: -1, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#62cff4', '#2c67f2']}
            className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
            <Text
              className=" text-white"
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                fontSize: Platform.OS === 'ios' ? 11 : 11,
              }}>
              แบบฟอร์มตรวจสอบรายวิชา-เกณฑ์-ก่อนออกฝึกงาน (ITI 66)
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View className="my-5">
        <TouchableOpacity onPress={() => navigation.navigate('Project3_7PDF')}>
          <LinearGradient
            start={{x: -1, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#62cff4', '#2c67f2']}
            className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
            <Text
              className=" text-white"
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                fontSize: Platform.OS === 'ios' ? 11 : 11,
              }}>
              แบบบันทึกการปฏิบัติงานฝึกงาน
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Project4Screen;
