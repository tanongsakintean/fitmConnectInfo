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

const Project2Screen = ({navigation}) => {
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
            โครงงานสหกิจศึกษา
          </Text>
        </View>
      </View>

      <View className="my-5">
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://drive.google.com/drive/folders/1xNJOOR6v1TYWZ_aVgrYFgOmYBDHgn1E_',
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
              ส่งเล่มให้ภาควิชาตรวจ
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View className="my-5">
        <TouchableOpacity onPress={() => navigation.navigate('Project3PDF')}>
          <LinearGradient
            start={{x: -1, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#62cff4', '#2c67f2']}
            className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
            <Text
              className=" text-white "
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                fontSize: Platform.OS === 'ios' ? 14 : 14,
              }}>
              แบบฟอร์มส่งรูปเล่มโครงงานสหกิจ
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Project2Screen;
