import React from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';
import {ArrowUpIcon} from 'react-native-heroicons/outline';

export default class Project3_6PDF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 1};
    this.BtnRef = React.createRef();
  }
  render() {
    let project3 = require('./project3-6.pdf');

    return (
      <View style={styles.container}>
        <Pdf
          ref={pdf => {
            this.pdf = pdf;
          }}
          source={
            Platform.OS === 'ios'
              ? project3
              : {
                  uri: 'bundle-assets://project3-6.pdf',
                  cache: true,
                }
          }
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
            if (page > 2) {
              this.BtnRef.current.setNativeProps({
                style: {
                  display: 'flex',
                },
              });
            } else {
              this.BtnRef.current.setNativeProps({
                style: {
                  display: 'none',
                },
              });
            }
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
        <TouchableOpacity
          ref={this.BtnRef}
          style={{display: 'none'}}
          onPress={() => this.pdf.setPage(1)}
          className="bottom-3  right-3 absolute z-20 bg-[#336ac6] p-3 rounded-full shadow-md flex flex-row justify-center items-center">
          <View className=" ">
            <ArrowUpIcon color="white" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width + 20,
    height: Dimensions.get('window').height,
  },
});
