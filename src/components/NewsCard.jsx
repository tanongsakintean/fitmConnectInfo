import React from 'react';
import {View, Text, Image} from 'react-native';
import {ClockIcon} from 'react-native-heroicons/outline';

export const NewsCard = ({news}) => {
  return (
    <View className="mr-4 relative">
      <View className="">
        <Image
          resizeMode="fit"
          source={news.image}
          className="w-56 h-28 rounded-t-3xl"
        />
      </View>
      <View className="w-56 bg-white rounded-b-xl h-20">
        <Text
          numberOfLines={2}
          className="ml-2 mt-1"
          style={{fontFamily: 'Kanit-Bold', fontSize: 13}}>
          รับสมัครนักศึกษาใหม่ โครงการรับตรง สอบข้อเขียน ปีการศึกษา 2567
          สำหรับผู้มีวุฒิ ม.3 ม.6
        </Text>
        <View className="flex-row justify-between h-full">
          <View className="bg-blue rounded-lg h-5 w-9 mt-2 ml-3">
            <Text
              className="ml-1.5 mt-0.5 text-white"
              style={{fontFamily: 'Kanit-Bold', fontSize: 10}}>
              FITM
            </Text>
          </View>
          <View className="flex flex-row">
            <View className=" mt-3 mr-1">
              <ClockIcon color="#000" size={15} />
            </View>
            <Text
              className="mt-3  mr-3"
              style={{fontFamily: 'Kanit-Bold', fontSize: 11}}>
              1h ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
