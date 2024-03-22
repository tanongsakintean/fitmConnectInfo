import React from 'react';
import {Image, Text, View, Dimensions} from 'react-native';
import {commonImages} from '../../constant/images';

const {width} = Dimensions.get('window');

export const HeaderHome = () => {
  return (
    <>
      <View className="flex flex-row w-full h-20 bg-blue">
        <View className="bg-yellow">
          <Image
            className="w-20"
            resizeMode="fit"
            style={{
              width: width / 3,
              height: 85,
              margin: 'left',
              // overflow: 'visible',
            }}
            source={commonImages.logoFITMWhite}
          />
        </View>
        <View className="justify-center">
          <Text
            className="text-white "
            style={{
              fontFamily: 'Kanit-Bold',
              fontSize: 11,
            }}>
            คณะเทคโนโลยีและการจัดการอุตสาหกรรม
          </Text>
          <Text
            className="text-white "
            style={{
              fontFamily: 'Kanit',
              fontSize: 9,
            }}>
            Faculty of Industrial Technology and Management
          </Text>
        </View>
      </View>
    </>
  );
};

export default HeaderHome;
