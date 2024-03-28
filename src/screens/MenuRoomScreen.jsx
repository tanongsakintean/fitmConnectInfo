import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import WebView from 'react-native-webview';
import {VideoCard} from '../components/VideoCard';
import {VideoRoom} from '../components/VideoRoom';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const MenuRoomScreen = () => {
  return (
    <ScrollView>
      <View className=" flex  justify-start shadow-md -my-[79px] ">
        <VideoRoom />
      </View>
      <View className=" ">
        <View className="my-3 mt-5">
          <View className=" shadow-md  px-3">
            <SwiperFlatList
              autoplay
              className=" rounded-md"
              autoplayDelay={3}
              autoplayLoop
              index={2}
              height={200}>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/sad/img1.jpg')}
                />
              </View>
            </SwiperFlatList>
          </View>
          <View className=" w-full flex flex-row justify-center items-center ">
            <View className=" w-11/12   bottom-0 absolute flex  flow-row  opacity-90 justify-center items-center bg-[#336ac6] p-3  ">
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-medium',
                }}>
                ห้องพวงแสด
              </Text>
            </View>
          </View>
        </View>

        <View className="my-3 mt-5">
          <View className=" shadow-md  px-3">
            <SwiperFlatList
              autoplay
              className=" rounded-md"
              autoplayDelay={3}
              autoplayLoop
              index={2}
              height={200}>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/kam/img1.jpg')}
                />
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/kam/img2.jpg')}
                />
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/kam/img3.jpg')}
                />
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/kam/img4.jpg')}
                />
              </View>
            </SwiperFlatList>
          </View>
          <View className=" w-full flex flex-row justify-center items-center ">
            <View className=" w-11/12   bottom-0 absolute flex  flow-row  opacity-90 justify-center items-center bg-[#336ac6] p-3  ">
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-medium',
                }}>
                ห้องพวงคราม
              </Text>
            </View>
          </View>
        </View>

        <View className="my-3 mt-5">
          <View className=" shadow-md  px-3">
            <SwiperFlatList
              autoplay
              className=" rounded-md"
              autoplayDelay={3}
              autoplayLoop
              index={2}
              height={200}>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/spark/img1.jpg')}
                />
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/spark/img2.jpg')}
                />
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/spark/img3.jpg')}
                />
              </View>
            </SwiperFlatList>
          </View>
          <View className=" w-full flex flex-row justify-center items-center ">
            <View className=" w-11/12   bottom-0 absolute flex  flow-row  opacity-90 justify-center items-center bg-[#336ac6] p-3  ">
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-medium',
                }}>
                ห้อง Spark
              </Text>
            </View>
          </View>
        </View>

        <View className="my-3 mt-5">
          <View className=" shadow-md  px-3">
            <SwiperFlatList
              autoplay
              className=" rounded-md"
              autoplayDelay={3}
              autoplayLoop
              index={2}
              height={200}>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/nurse/img1.jpg')}
                />
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/nurse/img2.jpg')}
                />
              </View>
            </SwiperFlatList>
          </View>
          <View className=" w-full flex flex-row justify-center items-center ">
            <View className=" w-11/12   bottom-0 absolute flex  flow-row  opacity-90 justify-center items-center bg-[#336ac6] p-3  ">
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-medium',
                }}>
                ห้องพยาบาล
              </Text>
            </View>
          </View>
        </View>

        <View className="my-3 mt-5">
          <View className=" shadow-md  px-3">
            <SwiperFlatList
              autoplay
              className=" rounded-md"
              autoplayDelay={3}
              autoplayLoop
              index={2}
              height={200}>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/b421/img1.jpg')}
                />
              </View>
            </SwiperFlatList>
          </View>
          <View className=" w-full flex flex-row justify-center items-center ">
            <View className=" w-11/12   bottom-0 absolute flex  flow-row  opacity-90 justify-center items-center bg-[#336ac6] p-3  ">
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-medium',
                }}>
                ห้อง B421
              </Text>
            </View>
          </View>
        </View>

        <View className="my-3 mt-5">
          <View className=" shadow-md  px-3">
            <SwiperFlatList
              autoplay
              className=" rounded-md"
              autoplayDelay={3}
              autoplayLoop
              index={2}
              height={200}>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/b420/img1.jpg')}
                />
              </View>
            </SwiperFlatList>
          </View>
          <View className=" w-full flex flex-row justify-center items-center ">
            <View className=" w-11/12   bottom-0 absolute flex  flow-row  opacity-90 justify-center items-center bg-[#336ac6] p-3  ">
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-medium',
                }}>
                ห้อง B420
              </Text>
            </View>
          </View>
        </View>

        <View className="my-3 mt-5">
          <View className=" shadow-md  px-3">
            <SwiperFlatList
              autoplay
              className=" rounded-md"
              autoplayDelay={3}
              autoplayLoop
              index={2}
              height={200}>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/b409/img1.jpeg')}
                />
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/b409/img2.jpeg')}
                />
              </View>
            </SwiperFlatList>
          </View>
          <View className=" w-full flex flex-row justify-center items-center ">
            <View className=" w-11/12   bottom-0 absolute flex  flow-row  opacity-90 justify-center items-center bg-[#336ac6] p-3  ">
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-medium',
                }}>
                ห้อง B409
              </Text>
            </View>
          </View>
        </View>

        <View className="my-3 mt-5">
          <View className=" shadow-md  px-3">
            <SwiperFlatList
              autoplay
              className=" rounded-md"
              autoplayDelay={3}
              autoplayLoop
              index={2}
              height={200}>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/b402A/img1.jpeg')}
                />
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/b402A/img2.jpeg')}
                />
              </View>
            </SwiperFlatList>
          </View>
          <View className=" w-full flex flex-row justify-center items-center ">
            <View className=" w-11/12   bottom-0 absolute flex  flow-row  opacity-90 justify-center items-center bg-[#336ac6] p-3  ">
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-medium',
                }}>
                ห้อง B401A
              </Text>
            </View>
          </View>
        </View>

        <View className="my-3 mt-5 mb-5">
          <View className=" shadow-md  px-3">
            <SwiperFlatList
              autoplay
              className=" rounded-md"
              autoplayDelay={3}
              autoplayLoop
              index={2}
              height={200}>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/b402B/img1.jpeg')}
                />
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../assets/img/room/b402B/img2.jpeg')}
                />
              </View>
            </SwiperFlatList>
          </View>
          <View className=" w-full flex flex-row justify-center items-center ">
            <View className=" w-11/12   bottom-0 absolute flex  flow-row  opacity-90 justify-center items-center bg-[#336ac6] p-3  ">
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-medium',
                }}>
                ห้อง B401B
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 2, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: 51, textAlign: 'center'},
  image: {
    flex: 1,
    width: width,
    height: height,
  },
});

export default MenuRoomScreen;
