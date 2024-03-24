import {View, Text, Platform, Image, Dimensions} from 'react-native';
import React from 'react';
import {AcademicCapIcon} from 'react-native-heroicons/solid';
import Video from 'react-native-video';
import {commonImages} from '../constant/images';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const DepartmentScreen = () => {
  return (
    <View>
      <View className="m-3">
        <Text
          className="ml-2"
          style={{
            fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
            fontSize: Platform.OS === 'ios' ? 20 : 14,
            color: Platform.OS === 'ios' ? '#336ac6' : '#336ac6',
          }}>
          แนะนำภาควิชา
        </Text>
        <Text
          className="ml-2"
          style={{
            fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
            fontSize: Platform.OS === 'ios' ? 16 : 14,
            color: '#73848C',
          }}>
          By IT
        </Text>
      </View>
      <View className="mr-3 ml-3 items-center">
        <Image
          resizeMode="fit"
          className="rounded-xl"
          style={{width: width * 0.94, height: height * 0.2}}
          source={commonImages.IT_01}
        />
      </View>
      <Text
        className="m-3"
        style={{
          fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
          fontSize: Platform.OS === 'ios' ? 20 : 14,
          color: Platform.OS === 'ios' ? '#336ac6' : '#336ac6',
        }}>
        ประวัติภาควิชา
      </Text>
      <Text
        className="ml-3 mr-3 indent-8"
        style={{
          fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
          fontSize: Platform.OS === 'ios' ? 16 : 14,
          // color: Platform.OS === 'ios' ? '#336ac6' : '#336ac6',
        }}>
        {'\t'}
        ภาควิชาเทคโนโลยีสารสนเทศได้ดำเนินการจัดการเรียนการสอนจนถึงปัจจุบัน
        นับเป็นปีที่ 25 ซึ่งต้องขอขอบคุณอาจารย์ ดร.สมพัตร์ เบ็ญจชัยพร
        (ปัจจุบันอาจารย์ท่านเกษียณอายุราชการแล้ว) เป็นอย่างสูง
        ที่ท่านได้ริเริ่มสร้างหลักสูตรของภาควิชา และให้คำแนะนำ แนวคิดต่าง ๆ
        ในการดำเนินงานที่ผ่านมาของภาควิชามาโดยตลอด
      </Text>
      <Text
        className="m-3"
        style={{
          fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
          fontSize: Platform.OS === 'ios' ? 20 : 14,
          color: Platform.OS === 'ios' ? '#336ac6' : '#336ac6',
        }}>
        รายละเอียดภาควิชา
      </Text>
      {/* <View className="mr-3 ml-3 shadow-xl rounded-b-lg">
        <View className="mt-4">
          <Text>⭐️ Department of Information Technology (IT)</Text>
          <Text className="mt-3">💥 “พัฒนาคน เพื่อพัฒนาเทคโนโลยีสารสนเทศ”</Text>
          <Text className="mt-3">
            ปัจจุบันภาควิชาเทคโนโลยีสารสนเทศ
            มีการจัดการเรียนการสอนในระดับปริญญาตรี จำนวน 3 หลักสูตร
          </Text>
          <Text className="divide-y"></Text>
        </View>
      </View> */}
    </View>
  );
};

export default DepartmentScreen;
