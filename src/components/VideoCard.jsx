import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

export const VideoCard = () => {
  return (
    <WebView
      source={{
        html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZHPTn9yrJig?si=ll5G708ud_D_YLbk&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      }}
      style={{height: 400, width: 500}}
    />
  );
};
