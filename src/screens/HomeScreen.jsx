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
import {NewsCard} from '../components/NewsCard';

const categories = [
  'ข่าวประชาสัมพันธ์',
  'ข่าวทุนวิจัย/อบรม',
  'ข่าวจัดซื้อจัดจ้าง',
  'ข่าววิชาการ',
];
const featured = [
  {
    id: 1,
    title: 'Zooba',
    image: require('../assets/img/gys.jpg'),
    downloads: '200k',
    stars: 4,
  },
  {
    id: 2,
    title: 'Subway Surfer',
    image: require('../assets/img/tcas67_1.jpg'),
    downloads: '5M',
    stars: 4,
  },
  {
    id: 3,
    title: 'Free Fire',
    image: require('../assets/img/tcas67_1.jpg'),
    downloads: '100M',
    stars: 3,
  },
  {
    id: 4,
    title: "Alto's Adventure",
    image: require('../assets/img/tcas67_1.jpg'),
    downloads: '20k',
    stars: 4,
  },
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
              <Image
                resizeMode="fit"
                style={styles.image}
                source={commonImages.slideImg1}
              />
            </View>
            <View>
              <Image
                resizeMode="fit"
                style={styles.image}
                source={commonImages.slideImg2}
              />
            </View>
            <View>
              <Image
                resizeMode="fit"
                style={styles.image}
                source={commonImages.slideImg3}
              />
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
                      className="bg-blue p-2.5 px-2 rounded-lg mr-1">
                      <Text
                        style={{fontFamily: 'Kanit-Bold', fontSize: 13}}
                        className="text-white">
                        {cat}
                      </Text>
                    </TouchableOpacity>
                  );
                } else {
                  return (
                    <TouchableOpacity
                      onPress={() => setActiveCategory(cat)}
                      key={cat}
                      className="bg-stone-200 p-2.5 px-2 rounded-lg mr-1">
                      <Text
                        style={{fontFamily: 'Kanit-Bold', fontSize: 13}}
                        className="text-slate-500">
                        {cat}
                      </Text>
                    </TouchableOpacity>
                  );
                }
              })}
            </ScrollView>
          </View>
        </View>

        <View className="mt-5 space-y-2">
          <View className="pl-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {featured.map((item, index) => {
                return <NewsCard key={index} news={item} />;
              })}
            </ScrollView>
          </View>
        </View>
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
