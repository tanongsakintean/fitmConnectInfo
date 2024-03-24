import {View, Text, Platform, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {AcademicCapIcon, PlayIcon} from 'react-native-heroicons/solid';
import Video from 'react-native-video';
import {commonImages} from '../constant/images';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const DepartmentScreen = () => {
  return (
    <>
      <ScrollView>
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
            className="ml-3 mr-3 mt-3"
            style={{
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
              fontSize: Platform.OS === 'ios' ? 20 : 14,
              color: Platform.OS === 'ios' ? '#336ac6' : '#336ac6',
            }}>
            รายละเอียดภาควิชา
          </Text>
          <TouchableOpacity>
            <View
              className="bg-white m-3 rounded-lg shadow-lg"
              style={{width: width * 0.9, height: height * 0.05}}>
              <View className="flex flex-row justify-between">
                <View className="flex-row">
                  <View
                    className=" items-center justify-center"
                    style={{width: width * 0.13, height: height * 0.05}}>
                    <Text
                      style={{
                        fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                        fontSize: Platform.OS === 'ios' ? 25 : 20,
                        color: '#73848C',
                      }}>
                      1
                    </Text>
                  </View>
                  <View
                    className="justify-center"
                    style={{
                      width: width * 0.6,
                      height: height * 0.05,
                    }}>
                    <Text
                      style={{
                        fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                        fontSize: Platform.OS === 'ios' ? 16 : 14,
                        color: '#000',
                      }}>
                      วีดีโอแนะนำ
                    </Text>
                  </View>
                </View>
                <View
                  className="rounded-full justify-center "
                  style={{
                    backgroundColor: '#336ac6',
                    width: Platform.OS === 'ios' ? width * 0.065 : width * 0.07,
                    marginTop: Platform.OS === 'ios' ? height * 0.01 : height * 0.01,
                    marginBottom:
                      Platform.OS === 'ios' ? height * 0.01 : height * 0.009,
                    marginRight: Platform.OS === 'ios' ? width * 0.03 : width * 0.03,
                  }}>
                  <View
                    className="ml-1.5"
                    style={{
                      marginLeft:
                        Platform.OS === 'ios' ? width * 0.015 : width * 0.014,
                    }}>
                    <PlayIcon className="ml-1" color="#ffffff" size={16} />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              className="bg-white mr-3 ml-3 mb-3 rounded-lg shadow-lg"
              style={{width: width * 0.9, height: height * 0.05}}>
              <View className="flex flex-row justify-between">
                <View className="flex-row">
                  <View
                    className=" items-center justify-center"
                    style={{width: width * 0.13, height: height * 0.05}}>
                    <Text
                      style={{
                        fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                        fontSize: Platform.OS === 'ios' ? 25 : 20,
                        color: '#73848C',
                      }}>
                      2
                    </Text>
                  </View>
                  <View
                    className="justify-center"
                    style={{
                      width: width * 0.6,
                      height: height * 0.05,
                    }}>
                    <Text
                      style={{
                        fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                        fontSize: Platform.OS === 'ios' ? 16 : 14,
                        color: '#000',
                      }}>
                      หลักสูตรภาควิชา
                    </Text>
                  </View>
                </View>
                <View
                  className="rounded-full justify-center "
                  style={{
                    backgroundColor: '#336ac6',
                    width: Platform.OS === 'ios' ? width * 0.065 : width * 0.07,
                    marginTop: Platform.OS === 'ios' ? height * 0.01 : height * 0.01,
                    marginBottom:
                      Platform.OS === 'ios' ? height * 0.01 : height * 0.009,
                    marginRight: Platform.OS === 'ios' ? width * 0.03 : width * 0.03,
                  }}>
                  <View
                    className="ml-1.5"
                    style={{
                      marginLeft:
                        Platform.OS === 'ios' ? width * 0.015 : width * 0.014,
                    }}>
                    <PlayIcon className="ml-1" color="#ffffff" size={16} />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default DepartmentScreen;
