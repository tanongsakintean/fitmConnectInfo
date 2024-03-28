import React from 'react';
import {Image, Text, View, Dimensions, Platform} from 'react-native';
import {commonImages} from '../../constant/images';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export const HeaderHome = () => {
  return (
    <>
      <View
        className="flex flex-row w-full"
        style={{backgroundColor: '#336ac6'}}>
        <View
          className="bg-yellow"
          style={{height: Platform.OS === 'ios' ? height * 0.15 : 70}}>
          <Image
            className=""
            resizeMode="contain"
            style={{
              width: Platform.OS === 'ios' ? width * 0.3 : 70,
              height: Platform.OS === 'ios' ? height * 0.091 : 70,
              marginTop: Platform.OS === 'ios' ? 50 : 0,
            }}
            source={commonImages.logoIT}
          />
        </View>
        <View
          className="justify-center w-full "
          style={{marginTop: Platform.OS === 'ios' ? 50 : 0}}>
          <Text
            className="text-white"
            style={{
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
              fontSize: Platform.OS === 'ios' ? 18 : 13,
            }}>
            ภาควิชาเทคโนโลยีสารสนเทศ
          </Text>
          <Text
            className="text-white "
            style={{
              fontFamily: 'Kanit',
              fontSize: Platform.OS === 'ios' ? 14 : 13,
            }}>
            คณะเทคโนโลยีและการจัดการอุตสาหกรรม
          </Text>
        </View>
      </View>
    </>
  );
};

export default HeaderHome;
