import React from 'react';
import {Dimensions, View} from 'react-native';
import WebView from 'react-native-webview';
import Video from 'react-native-video';
const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export const VideoRoom = () => {
  return (
    <Video
      source={require('../assets/video/room.mp4')} // Can be a URL or a local file.
      ref={ref => {
        this.player = ref;
      }}
      onBuffer={this.onBuffer}
      onError={this.videoError}
      resizeMode={'contain'}
      repeat={true}
      style={{
        aspectRatio: 1,
        width: '100%',
      }}
    />
  );
};
