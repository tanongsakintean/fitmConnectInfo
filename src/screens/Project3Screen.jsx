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

const Project3Screen = ({navigation}) => {
  function handleBackButtonClick() {
    navigation.navigate('Project');
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
            ฝึกงาน
          </Text>
        </View>
      </View>

      <View className="my-5">
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/spreadsheets/d/1vWyogkCLceV3lqNK-KXmI2ObyVTwVSXcYpb7CtYQ5Sw/edit#gid=0',
            )
          }>
          <LinearGradient
            start={{x: -1, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#62cff4', '#2c67f2']}
            className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
            <Text
              className=" text-white"
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                fontSize: Platform.OS === 'ios' ? 14 : 14,
              }}>
              รายชื่อนักศึกษาขอออกฝึกงาน ภาคเรียนที่ 3/2566
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View className="my-5">
        <TouchableOpacity onPress={() => navigation.navigate('Project3-1')}>
          <LinearGradient
            start={{x: -1, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#62cff4', '#2c67f2']}
            className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
            <Text
              className=" text-white"
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                fontSize: Platform.OS === 'ios' ? 14 : 14,
              }}>
              แบบฟอร์มขอเอกสารฝึกงาน
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Project3Screen;
