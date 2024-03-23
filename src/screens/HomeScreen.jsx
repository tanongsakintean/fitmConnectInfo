import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import HeaderHome from '../components/header/HeaderHome';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {commonImages} from '../constant/images';
import {NewsCard} from '../components/NewsCard';
import {NewspaperIcon} from 'react-native-heroicons/solid';
import {FeedNews} from '../data/FeedNews';
import {Categories} from '../data/Categories';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด');
  return (
    <>
      <HeaderHome />
      <ScrollView>
        <View style={styles.container} className="m-3 mb-0">
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={1}
            height={100}
            showPagination>
            <View>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={commonImages.slideImg1}
              />
            </View>
            <View>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={commonImages.slideImg2}
              />
            </View>
            <View>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={commonImages.slideImg3}
              />
            </View>
          </SwiperFlatList>
        </View>

        <View className="mt-3 space-y-2">
          <View className="flex flex-row">
            <View className=" justify-center ml-3">
              <NewspaperIcon color="#336ac6" size={20} />
            </View>
            <Text
              style={{
                color: '#336ac6',
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
                fontSize: 16,
              }}
              className="ml-1 text-3xl font-bold">
              Latest news
            </Text>
          </View>
          <View className="pl-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Categories.map(cat => {
                if (cat === activeCategory) {
                  return (
                    <TouchableOpacity
                      onPress={() => setActiveCategory(cat)}
                      key={cat}
                      style={{backgroundColor: '#336ac6'}}
                      className="p-2.5 px-2 rounded-lg mr-2">
                      <Text
                        style={{
                          ffontFamily:
                            Platform.OS === 'ios' ? '' : 'Kanit-Bold',
                          fontSize: 13,
                        }}
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
                      className="bg-stone-200 p-2.5 px-2 rounded-lg mr-2">
                      <Text
                        style={{
                          fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
                          fontSize: 13,
                        }}
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
              {FeedNews.map((item, index) => {
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
