import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export const EventCard = ({img, title, id, navigation}) => {
  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('DetailEvent', {
          id,
        })
      }>
      <View className=" mx-5  rounded-3xl bg-white my-4    shadow-md">
        <View className="  flex flex-row   justify-center  items-center  m-0 p-0">
          <Image
            resizeMode="cover"
            className=" w-full rounded-t-3xl"
            style={{
              height: 150,
            }}
            source={img}
          />
        </View>
        <View className=" flex flex-row justify-center items-center pb-3">
          <Text
            className="  p-2"
            style={{
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
              color: '#000',
              fontSize: 13,
            }}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
