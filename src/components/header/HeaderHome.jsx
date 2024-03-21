import React from 'react';
import {Image, Text, View, Dimensions} from 'react-native';
import {commonImages} from '../../constant/images';

const {width} = Dimensions.get('window');

export const HeaderHome = () => {
  return (
    <>
      <View className="flex-col justify-center items-center">
        <Image
          resizeMode="contain"
          style={{
            width: width * 0.5,
            height: 38,
            overflow: 'visible',
          }}
          source={commonImages.logoFITM}
        />
        <Text className="text-gray_new text-lg">Header</Text>
      </View>
    </>
  );
};

export default HeaderHome;
