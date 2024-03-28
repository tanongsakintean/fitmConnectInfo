import React, {useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  BackHandler,
  Platform,
} from 'react-native';
import {personImage} from '../constant/images';

const {width} = Dimensions.get('window');
const PersonnalScreen = ({navigation}) => {
  function handleBackButtonClick() {
    navigation.navigate('Home');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View className=" bg-white shadow-md rounded-md  mx-20 mt-5 flex justify-center items-center py-4">
          <View>
            <Image
              resizeMode="contain"
              style={{
                width: width,
                height: 150,
                overflow: 'visible',
              }}
              source={require('../assets/img/persons/1.jpeg')}
            />
            <View className=" flex flex-row  justify-center mt-3">
              <Text
                style={{
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                  fontSize: 10,
                }}
                className="text-black">
                ผศ.ดร.ขนิษฐา นามี
              </Text>
            </View>
            <View className=" flex flex-row  justify-center ">
              <Text
                style={{
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold',
                  fontSize: 13,
                }}
                className=" text-black">
                หัวหน้าภาควิชาฯ
              </Text>
            </View>
            <View className=" flex flex-row  justify-center ">
              <Text
                style={{
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                  fontSize: 10,
                }}
                className="text-black">
                Email : khanista.n
              </Text>
            </View>
            <View className=" flex flex-row  justify-center">
              <Text
                style={{
                  fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                  fontSize: 10,
                }}
                className="text-black">
                @itm.kmutnb.ac.th
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-[#336ac6] my-3 mt-6 p-4 shadow-md flex flex-row justify-center">
          <View>
            <Text
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}
              className=" text-white">
              แขนงวิชาวิทยาการสารสนเทศ
            </Text>
          </View>
        </View>

        <View className="  flex   flex-row w-full my-3 justify-evenly ">
          <View className=" bg-white rounded-md py-5  shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/2.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3  ">
                  ผศ.พีระศักดิ์ เสรีกุลี
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : peerasak.s
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View className=" bg-white shadow-md rounded-md  py-5   flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/3.jpeg')}
                />
              </View>

              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3">
                  ดร.ประดิษฐ์ พิทักษ์เสถียรกุล
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : pradit.p
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="  flex   flex-row w-full my-3 justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/5.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  ผศ.ดร.วันทนี ประจวบศุภกิจ
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : wanthanee.p
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View className=" bg-white shadow-md rounded-md  py-5   flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/9.jpeg')}
                />
              </View>

              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3">
                  ผศ.สุปีติ กุลจันทร์
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : supeeti.k
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="  flex   flex-row w-full my-3 justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className="  flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/21.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  อ.ดร.ศิรินทรา แว่วศรี
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : sirintra.v
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View className=" bg-white shadow-md rounded-md  py-5   flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/22.jpeg')}
                />
              </View>

              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3">
                  อ.ดร.กาญจน์ ณ ศรีธะ
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : karn.n
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="bg-[#336ac6] my-5 mt-6 p-4 shadow-md flex flex-row justify-center">
          <View>
            <Text
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}
              className=" text-white">
              แขนงวิชาเทคโนโลยีเครือข่าย
            </Text>
          </View>
        </View>

        <View className=" my-3  flex   flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/4.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  รศ.ดร.อนิราช มิ่งขวัญ
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : anirach.m
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View className=" bg-white shadow-md rounded-md  py-5   flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/11.jpeg')}
                />
              </View>

              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3">
                  ดร.วัชรชัย คงศิริวัฒนา์
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : watcharachai.k
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="  flex my-3  flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/14.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  ผศ.ดร..สุพาภรณ์ ซิ้มเจริญ
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : supaporn.s
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View className=" bg-white shadow-md rounded-md  py-5   flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/19.jpeg')}
                />
              </View>

              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3">
                  ดร.ศรายุทธ ธเนศสกุลวัฒนา
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : sarayoot.t
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="bg-[#336ac6] my-5 mt-6 p-4 shadow-md flex flex-row justify-center">
          <View>
            <Text
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}
              className=" text-white">
              แขนงวิชาเทคโนโลยีอุตสาหกรรม
            </Text>
          </View>
        </View>

        <View className="  flex my-3   flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/6.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  รศ.ดร.ยุพิน สรรพคุณ
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : yupin.s
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View className=" bg-white shadow-md rounded-md  py-5   flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/7.jpeg')}
                />
              </View>

              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3">
                  ผศ.นิมิต ศรีคำทา
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : nimit.s
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="  flex my-3   flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/17.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  ผศ.นพเก้า ทองใบ
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : nopphagaw.t
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View className=" bg-white shadow-md rounded-md  py-5   flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/20.jpeg')}
                />
              </View>

              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3">
                  ผศ.ดร.นัฎฐพันธ์ นาคพงษ์
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : nuttapun.n
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="bg-[#336ac6] my-5 mt-6 p-4 shadow-md flex flex-row justify-center">
          <View>
            <Text
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}
              className=" text-white">
              แขนงวิชาเทคโนโลยีมัลติมีเดีย
            </Text>
          </View>
        </View>

        <View className="  flex my-3   flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/8.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  ผศ.สมชัย เชียงพงศ์พันธุ์
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : somchai.c
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View className=" bg-white shadow-md rounded-md  py-5   flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/13.jpeg')}
                />
              </View>

              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3">
                  ผศ.อรบุษป์ วุฒิกมลชัย
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : oraboot.w
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="  flex my-3     flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/15.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  ผศ.นพดล บูรณ์กุศล
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : noppadon.b
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View className=" bg-white shadow-md rounded-md  py-5   flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/16.jpeg')}
                />
              </View>

              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3">
                  ผศ.นิติการ นาคเจือทอง
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : nitigan.n
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="  flex  my-3     flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/18.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  ผศ.ดร.บีสุดา ดาวเรือง
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : beesuda.d
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{width: width - 190}}
            className="  rounded-md  my-5   flex flex-row justify-center items-center px-2"></View>
        </View>

        <View className="bg-[#336ac6] my-5 mt-6 p-4 shadow-md flex flex-row justify-center">
          <View>
            <Text
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}
              className=" text-white">
              แขนงวิชาเทคโนโลยีระบบธุรกิจ
            </Text>
          </View>
        </View>

        <View className="  flex  my-3  flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/10.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  ผศ.ดร.พาฝัน ดวงไพศาล
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : pafan.d
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View className=" bg-white shadow-md rounded-md  py-5   flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/12.jpeg')}
                />
              </View>

              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3">
                  ผศ.สิวาลัย จินเจือ
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : siwalai.s
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="bg-[#336ac6] my-5 mt-6 p-4 shadow-md flex flex-row justify-center">
          <View>
            <Text
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}
              className=" text-white">
              ช่างเทคนิค
            </Text>
          </View>
        </View>

        <View className="  flex my-3   flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/23.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  คุณไกรมิตร พงษ์นิยะกูล
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : kaimit.p
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{width: width - 190}}
            className="  rounded-md  my-5   flex flex-row justify-center items-center px-2"></View>
        </View>

        <View className="bg-[#336ac6] my-5 mt-6 p-4 shadow-md flex flex-row justify-center">
          <View>
            <Text
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}
              className=" text-white">
              นักวิชาการคอมพิวเตอร์
            </Text>
          </View>
        </View>

        <View className="  flex my-3   flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/24.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  คุณกฤษณ์ เผือกงาม
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : krit.p
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{width: width - 190}}
            className="  rounded-md  my-5   flex flex-row justify-center items-center px-2"></View>
        </View>

        <View className="bg-[#336ac6] my-5 mt-6 p-4 shadow-md flex flex-row justify-center">
          <View>
            <Text
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}
              className=" text-white">
              เจ้าหน้าที่บริหารงานทั่วไป
            </Text>
          </View>
        </View>

        <View className="  flex my-3  flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/25.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  คุณลัดดา ตั้งเกียรติศิริ
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : ladda.t
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/26.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  คุณอุไรวรรณ วัตรยิ่ง
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : uraiwan.w
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="bg-[#336ac6] my-5 mt-6 p-4 shadow-md flex flex-row justify-center">
          <View>
            <Text
              style={{fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Bold'}}
              className=" text-white">
              วิศวกร
            </Text>
          </View>
        </View>

        <View className="  flex my-3   flex-row w-full justify-evenly">
          <View className=" bg-white rounded-md py-5 shadow-md flex flex-row justify-center items-center mx-2">
            <View>
              <View className=" flex flex-row justify-center items-center">
                <Image
                  resizeMode="contain"
                  style={{
                    width: width - 200,
                    height: 150,
                    overflow: 'visible',
                  }}
                  source={require('../assets/img/persons/27.jpeg')}
                />
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black my-3 ">
                  คุณวิวัช รุ่งสว่าง
                </Text>
              </View>
              <View className=" flex flex-row  justify-center ">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  Email : wivach.r
                </Text>
              </View>
              <View className=" flex flex-row  justify-center">
                <Text
                  style={{
                    fontFamily: Platform.OS === 'ios' ? '' : 'Kanit-Medium',
                    fontSize: 10,
                  }}
                  className="text-black">
                  @itm.kmutnb.ac.th
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{width: width - 190}}
            className="  rounded-md  my-5   flex flex-row justify-center items-center px-2"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonnalScreen;
