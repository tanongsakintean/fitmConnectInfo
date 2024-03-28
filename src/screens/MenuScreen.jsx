import React from 'react';
import {
  Dimensions,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MenuContectScreen from './MenuContectScreen';

const MenuScreen = ({navigation}) => {
  const {width} = Dimensions.get('window');
  return (
    <ScrollView>
      <View className=" py-6  flex justify-around">
        <View className=" my-5 flex flex-row justify-evenly">
          <TouchableOpacity
            className="bg-white shadow-md rounded-xl p-5  flex justify-center items-center"
            onPress={() => {
              Linking.openURL('https://reg.kmutnb.ac.th/registrar/');
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: width - 300,
                height: 50,
                overflow: 'visible',
              }}
              source={require('../assets/img/menu/regLogo.png')}
            />
            <View className=" flex flex-row justify-center items-center ">
              <Text
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}
                className="mt-2">
                Reg KMUTNB
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white shadow-md rounded-xl p-5  flex justify-center items-center"
            onPress={() => {
              Linking.openURL(
                'https://acdserv.kmutnb.ac.th/downloads-for-students',
              );
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: width - 300,
                height: 50,
                overflow: 'visible',
              }}
              source={require('../assets/img/menu/service_logo.png')}
            />
            <View className=" flex flex-row justify-center items-center  ">
              <Text
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}
                className=" mt-2">
                เอกสารนักศึกษา
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className=" my-5 flex flex-row justify-evenly">
          <TouchableOpacity
            className="bg-white shadow-md rounded-xl p-5  flex justify-center items-center"
            onPress={() => {
              Linking.openURL('https://acdserv.kmutnb.ac.th/academic-calendar');
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: width - 300,
                height: 50,
                overflow: 'visible',
              }}
              source={require('../assets/img/menu/calendar.png')}
            />
            <View className=" flex flex-row justify-center items-center ">
              <Text
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}
                className="mt-2">
                ปฏิทินการศึกษา
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white shadow-md rounded-xl p-6  flex justify-center items-center"
            onPress={() => {
              Linking.openURL('http://202.28.17.14/stdcheck/');
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: width - 300,
                height: 50,
                overflow: 'visible',
              }}
              source={require('../assets/img/menu/user.png')}
            />
            <View className=" flex flex-row justify-center items-center  ">
              <Text
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}
                className=" mt-2">
                ตรวจสอบผู้จบ
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className=" my-5 flex flex-row justify-evenly">
          <TouchableOpacity
            className="bg-white shadow-md rounded-xl p-5  flex justify-center items-center"
            onPress={() => {
              Linking.openURL('https://acdserv.kmutnb.ac.th/academic-calendar');
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: width - 300,
                height: 50,
                overflow: 'visible',
              }}
              source={require('../assets/img/menu/end.png')}
            />
            <View className=" flex flex-row justify-center items-center ">
              <Text
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}
                className="mt-2">
                แจ้งจบการศึกษา
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white shadow-md rounded-xl p-6  flex justify-center items-center"
            onPress={() => {
              Linking.openURL(
                'http://e-service.acdserv.kmutnb.ac.th/regReqDoc/login/',
              );
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: width - 300,
                height: 50,
                overflow: 'visible',
              }}
              source={require('../assets/img/menu/documentStudent.png')}
            />
            <View className=" flex flex-row justify-center items-center  ">
              <Text
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}
                className=" mt-2">
                ตรวจสอบผู้จบ
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className=" my-5 flex flex-row justify-evenly">
          <TouchableOpacity
            className="bg-white shadow-md rounded-xl p-5  flex justify-center items-center"
            onPress={() => {
              Linking.openURL(
                'https://rco.kmutnb.ac.th/?fbclid=IwAR3yGZdTsAoXls8YSmj19QlxbNCyv95H0tOzTAKk0UFh1-bD0obqzBxWCbc',
              );
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: width - 300,
                height: 50,
                overflow: 'visible',
              }}
              source={require('../assets/img/menu/bill.png')}
            />
            <View className=" flex flex-row justify-center items-center ">
              <Text
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}
                className="mt-2">
                พิมพ์ใบเสร็จออนไลน์
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white shadow-md rounded-xl p-6  flex justify-center items-center"
            onPress={() => {
              Linking.openURL('https://software.kmutnb.ac.th/');
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: width - 300,
                height: 50,
                overflow: 'visible',
              }}
              source={require('../assets/img/menu/launch.png')}
            />
            <View className=" flex flex-row justify-center items-center  ">
              <Text
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}
                className=" mt-2">
                บริการซอฟต์แวร์
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className=" my-5 flex flex-row justify-evenly">
          <TouchableOpacity
            className="bg-white shadow-md rounded-xl p-5  flex justify-center items-center"
            onPress={() => {
              Linking.openURL(
                'https://rco.kmutnb.ac.th/?fbclid=IwAR3yGZdTsAoXls8YSmj19QlxbNCyv95H0tOzTAKk0UFh1-bD0obqzBxWCbc',
              );
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: width - 300,
                height: 50,
                overflow: 'visible',
              }}
              source={require('../assets/img/menu/picture.png')}
            />
            <View className=" flex flex-row justify-center items-center ">
              <Text
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}
                className="mt-2">
                ภาพบรรยากาศ
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white shadow-md rounded-xl p-6  flex justify-center items-center"
            onPress={() => {
              navigation.navigate('MenuContect');
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: width - 300,
                height: 50,
                overflow: 'visible',
              }}
              source={require('../assets/img/menu/customer-service.png')}
            />
            <View className=" flex flex-row justify-center items-center  ">
              <Text
                style={{fontFamily: 'Kanit-Medium', fontSize: 12}}
                className=" mt-2">
                ติดต่อสอบถาม
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MenuScreen;
