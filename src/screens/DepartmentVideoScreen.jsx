import React from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';
import WebView from 'react-native-webview';
import {VideoCard} from '../components/VideoCard';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const DepartmentVideoScreen = () => {
  return (
    <>
      <View className="bg-white h-full">
        <View style={{height: height * 0.25}} className="ml-2 mt-2">
          <VideoCard />
        </View>
        <View className="m-3">
          <Text style={{fontFamily: 'Kanit-Medium'}}>พาทัวร์คณะเทคโนฯ</Text>
        </View>
      </View>
    </>
  );
};

export default DepartmentVideoScreen;
