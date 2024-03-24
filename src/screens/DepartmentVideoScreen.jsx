import React from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';

const {height} = Dimensions.get('window');

const DepartmentVideoScreen = () => {
  return (
    <>
      <View
        className="justify-end items-center"
        style={{
          width: '100%',
          height: height * 0.2,
        }}>
        <Text
          className="mb-4"
          style={{
            fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
            fontSize: Platform.OS === 'ios' ? 20 : 14,
          }}>
          แนะนำมหาวิทยาลัย
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Video
          source={require('../assets/video/prajinburi.mp4')} // Can be a URL or a local file.
          // ref={ref => {
          //   this.player = ref;
          // }} // Store reference
          //   onBuffer={this.onBuffer} // Callback when remote video is buffering
          //   onError={this.videoError} // Callback when video cannot be loaded
          style={{
            width: Platform.OS === 'ios' ? '100%' : '100%',
            height: height * 0.3,
          }}
        />
      </View>
    </>
  );
};

export default DepartmentVideoScreen;
