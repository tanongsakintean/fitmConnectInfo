import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Video from 'react-native-video';
import WebView from 'react-native-webview';
import {VideoCard} from '../components/VideoCard';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const MenuContectScreen = () => {
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
            }}>
            ติดต่อสอบถาม
          </Text>
        </View>
        <View className="mt-10 ml-3">
          <Text>เบอร์โทร</Text>
        </View>
        <View className="m-3">
          <Text>Email</Text>
        </View>
        <View className="m-3">
          <Text>ที่อยู่</Text>
        </View>
      </View>
    </>
  );
};

export default MenuContectScreen;
