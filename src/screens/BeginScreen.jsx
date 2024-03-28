import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Video from 'react-native-video';
import React, {useState} from 'react';
const BeginScreen = ({navigation}) => {
  return (
    <>
      <Video
        source={require('../assets/video/begin.mp4')} // Can be a URL or a local file.
        ref={ref => {
          this.player = ref;
        }}
        onBuffer={this.onBuffer}
        onError={this.videoError}
        resizeMode={'cover'}
        repeat={true}
        muted
        style={{
          height: '100%',
          width: '100%',
        }}
      />
      <View className=" w-full absolute  bottom-16  ">
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className=" flex bg-[#336ac6] mx-16 py-3 rounded-md shadow-md opacity-90 flex-row justify-center items-center">
          <Text
            style={{
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
              color: '#FFF',
            }}>
            เริ่มใช้งาน
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default BeginScreen;
