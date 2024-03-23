import {Text, View} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export class CourseScreen extends Component {
  render() {
    return (
      <View>
        <View className=" flex flex-row justify-evenly">
          <View>
            <LinearGradient
              start={{x: -1, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#020024', '#090979', '#00d4ff']}>
              <Text
                className=" text-5xl text-white rounded-md   p-5  "
                style={{fontFamily: 'Kanit-Mediu'}}>
                ITI
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}

export default CourseScreen;
