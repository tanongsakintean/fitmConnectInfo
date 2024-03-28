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
import {EventCard} from '../components/EventCard';
import {NewspaperIcon, MapIcon} from 'react-native-heroicons/solid';
import {FeedNews} from '../data/FeedNews';
import {Categories} from '../data/Categories';
import {event} from '../data/event';

const HomeScreen = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด');
  const filteredNews = FeedNews.filter(
    item =>
      activeCategory === 'ทั้งหมด' ||
      (activeCategory === 'ข่าวประชาสัมพันธ์' && item.group === 1) ||
      (activeCategory === 'ข่าวทุนวิจัย/อบรม' && item.group === 2) ||
      (activeCategory === 'ข่าวจัดซื้อจัดจ้าง' && item.group === 3) ||
      (activeCategory === 'ข่าววิชาการ' && item.group === 4),
  );
  return (
    <>
      <HeaderHome />
      <ScrollView>
        <View style={styles.container} className="m-2 mb-0">
          <SwiperFlatList
            autoplay
            autoplayDelay={3}
            autoplayLoop
            index={2}
            height={101}
            showPagination>
            <View>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={commonImages.slideImg1}
              />
            </View>
            <View>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={commonImages.slideImg2}
              />
            </View>
            <View>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={commonImages.slideImg3}
              />
            </View>
          </SwiperFlatList>
        </View>

        <View className="mt-2 space-y-2">
          <View className="flex flex-row">
            <View className=" justify-center ml-2">
              <NewspaperIcon color="#337ac6" size={20} />
            </View>
            <Text
              style={{
                color: '#337ac6',
                fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
                fontSize: 17,
              }}
              className="ml0 text-3xl font-bold">
              ข่าวล่าสุด
            </Text>
          </View>
          <View className="pl-3">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Categories.map(cat => {
                if (cat === activeCategory) {
                  return (
                    <TouchableOpacity
                      onPress={() => setActiveCategory(cat)}
                      key={cat}
                      style={{backgroundColor: '#337ac6'}}
                      className="p-1.5 px-2 rounded-lg mr-2">
                      <Text
                        style={{
                          fontFamily:
                            Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                          fontSize: 14,
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
                      className="bg-stone-199 p-2.5 px-2 rounded-lg mr-2">
                      <Text
                        style={{
                          fontFamily:
                            Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                          fontSize: 14,
                        }}
                        className="text-slate-499">
                        {cat}
                      </Text>
                    </TouchableOpacity>
                  );
                }
              })}
            </ScrollView>
          </View>
        </View>

        <View className="mt-4 space-y-2">
          <View className="pl-3">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filteredNews.map((item, index) => {
                return <NewsCard key={index} news={item} id={item.id} />;
              })}
            </ScrollView>
          </View>
        </View>
        <View className="flex flex-row mt-5">
          <View className=" justify-center ml-2">
            <MapIcon color="#337ac6" size={20} />
          </View>
          <Text
            style={{
              color: '#337ac6',
              fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
              fontSize: 17,
            }}
            className="ml0 text-3xl font-bold">
            กิจกรรม
          </Text>
        </View>

        <View className=" space-y-4 mb-5">
          <View className="flex flex-row flex-wrap items-center justify-evenly">
            {event.map(item => {
              return (
                <EventCard
                  navigation={navigation}
                  img={item.image}
                  title={item.title}
                  id={item.id}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 2, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: 51, textAlign: 'center'},
  image: {
    flex: 2,
    width: width,
    height: height,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
