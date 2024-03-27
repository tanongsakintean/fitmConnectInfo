import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  BackHandler,
  Platform,
  StyleSheet,
  Linking,
} from 'react-native';
import {personImage} from '../constant/images';
import {event} from '../data/event';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const DetailEventScreen = ({route, navigation}) => {
  const {id} = route.params;
  const [item, setItem] = useState(...event.filter(row => row.id === id));

  function handleBackButtonClick() {
    navigation.navigate('Home');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  });

  return (
    <ScrollView>
      <View className=" m-2 mb-0">
        <View className=" bg-white space-y-2 shadow-md rounded-md  flex flex-row justify-center items-center">
          <SwiperFlatList
            autoplay
            autoplayDelay={3}
            autoplayLoop
            index={0}
            height={250}
            showPagination>
            {item.images.map(row => {
              return (
                <View key={row}>
                  <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={row}
                  />
                </View>
              );
            })}
          </SwiperFlatList>
        </View>
        <View className=" p-3 bg-white">
          <Text
            style={{
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
              fontSize: 13,
            }}>
            {item.title}
          </Text>
        </View>
        <View className=" p-3 bg-white">
          <Text
            style={{
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
              fontSize: 13,
            }}>
            {item.message}
          </Text>
        </View>
        {item.link.length > 4 ? (
          <View className=" p-3 bg-white">
            <Text
              className="text-blue"
              onPress={() => Linking.openURL(item.link)}
              style={{
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                fontSize: 13,
              }}>
              ติดตามลิ้ง
            </Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: 51, textAlign: 'center'},
  image: {
    flex: 1,
    width: width,
    height: height,
  },
});

export default DetailEventScreen;
