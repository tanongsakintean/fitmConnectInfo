import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import HeaderHome from '../components/header/HeaderHome';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={2}
        showPagination>
        <View style={[styles.child, {backgroundColor: 'tomato'}]}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={[styles.child, {backgroundColor: 'thistle'}]}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={[styles.child, {backgroundColor: 'skyblue'}]}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={[styles.child, {backgroundColor: 'teal'}]}>
          <Text style={styles.text}>4</Text>
        </View>
      </SwiperFlatList>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
});

export default HomeScreen;
