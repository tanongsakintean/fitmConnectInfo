import React, {useState} from 'react';
import {View, Text, Image, Platform, TouchableOpacity} from 'react-native';
import {ClockIcon} from 'react-native-heroicons/outline';

export const NewsCard = ({news}) => {
  const [newsData, setNewsData] = useState('');
  return (
    <TouchableOpacity
      onPress={() => {
        setNewsData();
      }}>
      <View className="mr-4 relative bg-white rounded-3xl py-2 ">
        <View className=" flex  flex-row justify-center items-center">
          <Image
            resizeMode="contain"
            source={news.image}
            className="w-56 h-28 "
          />
        </View>
        <View className="w-56 bg-white rounded-b-xl h-20 flex  flex-col justify-around">
          <Text
            numberOfLines={2}
            className="ml-2 mt-1"
            style={{
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
              fontSize: 13,
            }}>
            {news.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
