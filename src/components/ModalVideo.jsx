import React from 'react';
import {Alert, Dimensions, Pressable, Text, View} from 'react-native';
import {Modal} from 'react-native';
import {XMarkIcon} from 'react-native-heroicons/outline';
import Video from 'react-native-video';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export const ModalVideo = ({modalVisible, setModalVisible}) => {
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        closeModal();
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View className="bg-white shadow-lg rounded-xl">
          <View
            className="flex flex-row justify-end rounded-t-xl"
            style={{backgroundColor: '#336ac6'}}>
            <Pressable className="rounded-t-lg  p-2" onPress={closeModal}>
              <Text className="text-white">ปิดหน้าต่าง</Text>
            </Pressable>
          </View>

          <View className="w-85">
            <View className="m-3">
              <Video
                source={require('../assets/video/it.mp4')} // Can be a URL or a local file.
                ref={ref => {
                  this.player = ref;
                }}
                resizeMode={'contain'}
                onBuffer={this.onBuffer}
                onError={this.videoError}
                style={{
                  width: width * 0.91,
                  height: height * 0.3,
                }}
              />
            </View>
            {/* <Text>Hello World!</Text> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};
