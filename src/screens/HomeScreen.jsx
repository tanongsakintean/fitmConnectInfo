import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HeaderHome from '../components/header/HeaderHome';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {commonImages} from '../constant/images';

const categories = [
  'ข่าวประชาสัมพันธ์',
  'ข่าวทุนวิจัย/อบรม',
  'ข่าวจัดซื้อจัดจ้าง',
  'ข่าววิชาการ',
];

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Action');
  return (
    <>
      <HeaderHome />
      <ScrollView>
        <View style={styles.container} className="m-3 bg-red-500">
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={1}
            height={100}
            showPagination>
            <View>
              <Image style={styles.image} source={commonImages.slideImg1} />
              {/* <Text style={styles.text}>1</Text> */}
            </View>
            <View>
              <Image style={styles.image} source={commonImages.slideImg2} />
              {/* <Text style={styles.text}>2</Text> */}
            </View>
            <View>
              <Image style={styles.image} source={commonImages.slideImg3} />
              {/* <Text style={styles.text}>3</Text> */}
            </View>
          </SwiperFlatList>
        </View>

        <View className="mt-3 space-y-2">
          <Text
            style={{color: '#29aff0', fontFamily: 'Kanit-Bold', fontSize: 16}}
            className="ml-3 text-3xl font-bold">
            Latest news
          </Text>
          <View className="pl-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map(cat => {
                if (cat === activeCategory) {
                  return (
                    <TouchableOpacity
                      onPress={() => setActiveCategory(cat)}
                      key={cat}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 px-4 rounded-full mr-2">
                      <Text>{cat}</Text>
                    </TouchableOpacity>
                  );
                } else {
                  return (
                    <TouchableOpacity
                      onPress={() => setActiveCategory(cat)}
                      key={cat}
                      className="bg-blue p-3 px-4 rounded-full mr-2">
                      <Text>{cat}</Text>
                    </TouchableOpacity>
                  );
                }
              })}
            </ScrollView>
          </View>
        </View>

        {/* <View className="flex flex-row">
          <View className="ml-3 justify-center">
            <NewspaperIcon color={'#29aff0'} size={'20'} />
          </View>
          <Text
            className="ml-1"
            style={{
              fontFamily: 'Kanit-Bold',
              fontSize: 16,
            }}>
            Latest news
          </Text>
        </View> */}

        {/* <View className="m-3 rounded-md bg-white shadow-md shadow-gray-700">
          <View className="justify-center">
            <Text className="bg-blue h-2 mr-20 ml-20 rounded-md"></Text>
          </View>
          <SwiperFlatList
            // autoplay
            // autoplayDelay={2}
            // autoplayLoop
            index={1}
            height={50}
            showPagination>
            <View>
              <Text style={styles.text}>1</Text>
            </View>
            <View>
              <Text style={styles.text}>2</Text>
            </View>
            <View>
              <Text style={styles.text}>3</Text>
            </View>
          </SwiperFlatList>
        </View>

        <View className="flex m-3 rounded-md bg-white shadow-md shadow-gray-700">
          <View className="flex-1 h-24 rounded-t-md bg-pink-400">
            <Text className=""></Text>
          </View>
          <View className="flex-1 h-20">
            <Text className="text-center">1</Text>
          </View>
        </View> */}
      </ScrollView>
    </>
  );
};

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: 50, textAlign: 'center'},
  image: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
