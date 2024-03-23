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
      <View className="mr-4 relative">
        <View className="">
          <Image
            resizeMode="contain"
            source={news.image}
            className="w-56 h-28 bg-white rounded-t-3xl"
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

          <View>
            <View className="flex flex-row justify-between  ">
              <View
                className=" rounded-lg h-5 w-9 ml-3"
                style={{backgroundColor: '#336ac6'}}>
                <Text
                  className="ml-1.5 mt-0.5 text-white"
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
                    fontSize: 10,
                  }}>
                  FITM
                </Text>
              </View>
              <View className="flex flex-row" style={{}}>
                <View className="mr-1">
                  <ClockIcon color="#000" size={15} />
                </View>
                <Text
                  className="mr-3"
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
                    fontSize: 11,
                  }}>
                  {news.date}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
