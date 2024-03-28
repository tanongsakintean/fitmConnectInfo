import React from 'react';
import {
  Dimensions,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import WebView from 'react-native-webview';
import {VideoCard} from '../components/VideoCard';
import {
  ChatBubbleOvalLeftIcon,
  InboxIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from 'react-native-heroicons/solid';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const MenuContectScreen = () => {
  const phoneNumber = '085-2850606';
  const emailAddress = 'it@itm.kmutnb.ac.th';

  const handleCallPress = () => {
    const url = `tel:${phoneNumber}`;
    if (Platform.OS === 'ios') {
      Linking.openURL(url);
    } else if (Platform.OS === 'android') {
      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      console.log('error');
    }
  };

  const handleEmailPress = () => {
    const url = `mailto:${emailAddress}`;
    Linking.openURL(url);
  };

  return (
    <>
      <View className="bg-white flex h-full">
        <View className=" items-center mr-3 ml-3 mt-5">
          <Image
            className="rounded-full"
            style={{width: 100, height: 100}}
            source={require('../assets/img/IT_logo.jpeg')}
          />
        </View>
        <View className="mt-3 items-center">
          <Text
            className=""
            style={{
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
              fontSize: Platform.OS === 'ios' ? 18 : 14,
              color: '#000',
            }}>
            ติดต่อสอบถาม
          </Text>
        </View>

        <View className="mt-10 ml-3">
          <View className="flex flex-row justify-between">
            <View className="flex flex-row">
              <View>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assets/img/phone-call.png')}
                />
              </View>
              <View className="ml-5">
                <Text className="text-gray-400">เบอร์โทร</Text>
                <Text style={{color: '#000'}}>085-2850606</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={handleCallPress}
              className="bg-gray-200 justify-center items-center rounded-full mr-5 w-10">
              <PhoneIcon color={'#333232'} size={15} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-5 ml-3">
          <View className="flex flex-row justify-between">
            <View className="flex flex-row">
              <View>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assets/img/communication.png')}
                />
              </View>
              <View className="ml-5">
                <Text className="text-gray-400">E-mail</Text>
                <Text style={{color: '#000'}}>it@itm.kmutnb.ac.th</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={handleEmailPress}
              className="bg-gray-200 justify-center items-center rounded-full mr-5 w-10">
              <ChatBubbleOvalLeftIcon color={'#333232'} size={15} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          className="mt-5 ml-3 mr-3"
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}></View>
        <View className="mt-5 ml-3  h-40">
          <View className="flex flex-row justify-between">
            <View className="flex flex-row">
              <View className="">
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assets/img/map.png')}
                />
              </View>
              <View className="ml-5 h-40 w-full">
                <Text className="text-gray-400">ที่อยู่</Text>
                <Text className="flex-1 " style={{color: '#000'}}>
                  ภาควิชาเทคโนโลยีสารสนเทศ {'\n'}
                  คณะเทคโนโลยีและการจัดการอุตสาหกกรรม {'\n'}
                  มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ {'\n'}
                  129 ม. 21 ต. เนินหอม อ.เมือง จ.ปราจีนบุรี 25230 {'\n'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default MenuContectScreen;
