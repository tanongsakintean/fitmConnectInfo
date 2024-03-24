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

const CourseItiScreen = ({navigation}) => {
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
              className=" m-2 text-black  text-md"
              style={{fontFamily: 'Kanit-Medium'}}>
              หลักสูตรอุตสาหกรรมศาสตรบัณฑิต (อส.บ.)
            </Text>
          </View>
          <View className=" px-2 flex -mt-3 flex-row justify-center items-center">
            <Text
              className=" text-black text-md"
              style={{fontFamily: 'Kanit-Medium'}}>
              สาขาวิชาเทคโนโลยีสารสนเทศ
            </Text>
          </View>
        </View>

        <View className="my-5">
          <TouchableOpacity onPress={() => navigation.navigate('ITICoursePDF')}>
            <LinearGradient
              start={{x: -1, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#62cff4', '#2c67f2']}
              className=" flex flex-row justify-center  items-center mx-6 rounded-md   px-3 py-6  ">
              <Text
                className=" text-white"
                style={{fontFamily: 'Kanit-Medium', fontSize: 11}}>
                เล่มหลักสูตรอุตสาหกรรมศาสตรบัณฑิต {'           '} (ฉบับปรับปรุง
                พ.ศ. 2566)
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseItiScreen;
