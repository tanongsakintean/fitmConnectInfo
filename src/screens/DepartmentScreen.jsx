import {View, Text, Platform, Image, Dimensions} from 'react-native';
import React from 'react';
import {AcademicCapIcon} from 'react-native-heroicons/solid';
import {commonImages} from '../constant/images';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const DepartmentScreen = () => {
  return (
    <View>
      <View className="bg-white mt-3 mr-3 ml-3 items-center shadow-xl rounded-t-lg">
        <Image
          resizeMode="contain"
          style={{width: width * 1, height: height * 0.3}}
          source={commonImages.IT}
        />
      </View>

      <View className="bg-white mr-3 ml-3 shadow-xl rounded-b-lg">
        <View className="mt-3 flex-row">
          <AcademicCapIcon color="#000" size={25} />
          <Text
            className="ml-2"
            style={{
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
              fontSize: Platform.OS === 'ios' ? 20 : 14,
            }}>
            แนะนำภาควิชา
          </Text>
        </View>
        <View className="mt-4">
          <Text>⭐️ Department of Information Technology (IT)</Text>
          <Text className="mt-3">💥 “พัฒนาคน เพื่อพัฒนาเทคโนโลยีสารสนเทศ”</Text>
          <Text className="mt-3">
            ปัจจุบันภาควิชาเทคโนโลยีสารสนเทศ
            มีการจัดการเรียนการสอนในระดับปริญญาตรี จำนวน 3 หลักสูตร
          </Text>
          <Text className="divide-y"></Text>
        </View>
      </View>
    </View>
  );
};

export default DepartmentScreen;
