import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class CourseScreen extends Component {
  render() {
    return (
      <View>
        <View>
          <View className=" flex flex-row justify-evenly">
            <Text
              className=" text-5xl text-white rounded-md  p-5 "
              style={{fontFamily: 'Kanit-Mediu'}}>
              ITI
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CourseScreen;
