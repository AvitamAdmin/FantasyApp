import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../../envfile/api';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const ContestScreen = ({route}) => {
  const {parentMainContestId, token} = route.params;
  const [contestData, setContestData] = useState([]);
  const [childContestData, setChildContestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  console.log('API Endpoint:', api);
  console.log('parentMainContestId: contest screen', parentMainContestId);

  useEffect(() => {
    const getTokenAndFetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('jwtToken');
        if (token) {
          await fetchContestData(token);
          await fetchChildContestData(token);
        } else {
          console.error('Token not found');
          setError('Authentication token not found.');
        }
      } catch (err) {
        console.error('Error during data fetching:', err);
        setError('Unexpected error occurred.');
      }
    };
    getTokenAndFetchData();
  }, [parentMainContestId]);

  const fetchContestData = async token => {
    try {
      const headers = {Authorization: `Bearer ${token}`};
      const response = await axios.get(`${api}/admin/mainContest/get`, {
        headers,
        params: {parentMainContestId},
      });
      setContestData(response.data.mainContestList || []);
    } catch (error) {
      console.error('Error fetching contest data:', error);
      setError('Error fetching contest data.');
    }
  };

  const fetchChildContestData = async token => {
    try {
      const body = {page: 0, sizePerPage: 50};
      const headers = {Authorization: `Bearer ${token}`};
      const response = await axios.post(`${api}/admin/contest`, body, {
        headers,
        params: {mainContestId: parentMainContestId},
      });
      setChildContestData(response.data.contestList || []);
    } catch (error) {
      console.error('Error fetching child contest data:', error);
      setError('Error fetching child contest data.');
    } finally {
      setLoading(false);
    }
  };

  const getChildContestsByParent = mainContestId => {
    return childContestData.filter(
      child => child.mainContestId === mainContestId,
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        {contestData.length > 0 ? (
          <View
            style={{
              flexDirection: 'row',
              width: wp('100%'),
              backgroundColor: '#fff',
            }}>
            {contestData 
              .filter(item => item.mainContestId === parentMainContestId)
              .map(contest => (
                <View key={contest.mainContestId} style={{gap: 10}}>
                  {/* <Text style={styles.mainContestName}>{contest.mainContestName}</Text>
        {getChildContestsByParent(contest.mainContestId).map((child, index) => (
         <Text> {child.entryFee}</Text>
        ))} */}

                  <View
                    style={{
                      width: wp('90%'),
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginLeft: 15,
                      padding: 5,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>
                      {contest.mainContestName}
                    </Text>
                  </View>
                  {getChildContestsByParent(contest.mainContestId).map(
                    (child, index) => (
                      <View
                        key={index}
                        style={{gap: 10, backgroundColor: '#fff'}}>
                        <View
                          style={{
                            width: wp('100%'),
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Pressable
                            onPress={() => navigation.navigate('ContestDetailScreen')}
                            style={{
                              borderRadius: 5,
                              overflow: 'hidden',
                              width: wp('90%'),
                              backgroundColor: '#f27',
                              flexDirection: 'column',
                              justifyContent: 'space-between',

                              ...Platform.select({
                                ios: {
                                  shadowColor: 'red',
                                  shadowOpacity: 0.8,
                                  shadowRadius: 10,
                                  shadowOffset: {width: 20, height: 10},
                                },
                                android: {
                                  elevation: 10,
                                },
                              }),
                            }}>
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: wp('90%'),
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                paddingBottom: 5,
                                padding: 5,
                              }}>
                              <View
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  width: wp('89%'),
                                  padding: 5,
                                  backgroundColor: '#fff',
                                }}>
                                <View
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: 5,
                                  }}>
                                  <Text style={{fontSize: hp(1.5)}}>
                                    Prize Pool
                                  </Text>
                                  <Text style={{fontWeight: '700'}}>
                                    {child.totalPrice}
                                  </Text>
                                </View>
                                <View
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                  }}>
                                  <View style={{paddingTop: 2}}>
                                    <Image
                                      source={require('../../../assets/1stplace.png')}
                                      style={{width: 30, height: 30}}
                                    />
                                  </View>
                                  <View>
                                    <Text
                                      style={{
                                        fontWeight: 'bold',
                                        fontSize: hp(2.3),
                                      }}>
                                      ₹40 Lakhs
                                    </Text>
                                    <Text
                                      style={{
                                        fontSize: 10,
                                        textAlign: 'center',
                                        fontWeight: '600',
                                        color: '#606060',
                                      }}>
                                      Cash Prize
                                    </Text>
                                  </View>
                                </View>
                                <View
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: 70,
                                    gap: 3,
                                    paddingTop: 3,
                                  }}>
                                  <View
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      width: wp('15%'),
                                      justifyContent: 'flex-end',
                                      alignItems: 'center',
                                    }}>
                                    <Text
                                      style={{opacity: 0.5, fontSize: hp(1.7)}}>
                                      Entry
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      width: wp('16%'),
                                      justifyContent: 'flex-end',
                                      alignItems: 'center',
                                    }}>
                                    <Pressable
                                      style={{
                                        backgroundColor: '#3E57C4',
                                        paddingLeft: 13,
                                        paddingRight: 13,
                                        padding: 3,
                                        borderRadius: 3,
                                      }}>
                                      <Text style={{color: '#fff'}}>
                                        ₹ {child.entryFee}
                                      </Text>
                                    </Pressable>
                                  </View>
                                </View>
                              </View>

                              <View
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'space-between',
                                  gap: 10,
                                  width: wp('87%'),
                                  alignItems: 'center',
                                }}>
                                <View style={{padding: 3}}>
                                  {/* <Progress.Bar
                        progress={0.9}
                        width={wp(80)}
                        height={3}
                        borderWidth={0.2}
                        backgroundColor="#ababab"
                      /> */}
                                </View>
                                <View
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: wp('87%'),
                                    padding: 2,
                                  }}>
                                  <View style={{paddingLeft: 6}}>
                                    <Text
                                      style={{color: 'red', fontSize: hp(1.5)}}>
                                      23,40,021 Spots Left
                                    </Text>
                                  </View>
                                  <View style={{paddingRight: 5}}>
                                    <Text style={{fontSize: hp(1.5)}}>
                                      28,89,129 Spots
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>

                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 10,
                                padding: 5,
                                backgroundColor: '#ebebeb',
                                width: wp('100%'),
                                alignItems: 'center',
                                paddingLeft: 11,
                              }}>
                              <View
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  gap: 5,
                                  justifyContent: 'center',
                                }}>
                                <View
                                  style={{
                                    borderRadius: 10,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    width: 15,
                                    height: 15,
                                    paddingRight: 0.5,
                                    justifyContent: 'center',
                                    paddingBottom: 0.5,
                                  }}>
                                  <Text style={{fontSize: hp(1.3)}}>M</Text>
                                </View>
                                <View
                                  style={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    gap: 5,
                                  }}>
                                  <Text style={{fontSize: hp(1.5)}}>
                                    Upto 20
                                  </Text>
                                </View>
                              </View>
                              <View
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  gap: 5,
                                  justifyContent: 'center',
                                }}>
                                <View
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}>
                                  {/* <Ionicons name="trophy-outline" size={15} color="black" /> */}
                                </View>
                                <View
                                  style={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    gap: 5,
                                  }}>
                                  <Text style={{fontSize: hp(1.5)}}>
                                    {child.winPercentage}%
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </Pressable>
                        </View>
                      </View>
                    ),
                  )}
                </View>
              ))}
          </View>
        ) : (
          <Text style={styles.noData}>No contests found.</Text>
        )}
      </ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          padding: 15,
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ width: wp("45%") }}>
          <Pressable
            onPress={() => navigation.navigate("MYContest")}
            style={{
              backgroundColor: "#000",
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 10,
              width: wp("43%"),
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <View>
              {/* <FontAwesome5 name="ticket-alt" size={20} color="#fff" /> */}
            </View>
            <Text style={{ fontWeight: "400", color: "#fff", fontSize: hp(2) }}>
              MY CONTESTS
            </Text>
            <Text style={{ fontWeight: "600", color: "#fff", fontSize: hp(2) }}>(1)</Text>
          </Pressable>
        </View>
        <View style={{ width: wp("43%")}}>
          <Pressable
            onPress={() => navigation.navigate("MyTeam")}
            style={{
              backgroundColor: "#000",
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 10,
              width: wp("43%"),
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <View>
              <Image
                source={require("../../../assets/Jersey.png")}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text style={{ fontWeight: "400", color: "#fff", fontSize: hp(2) }}>
              MY TEAM
            </Text>
            <Text style={{ fontWeight: "600", color: "#fff", fontSize: hp(2) }}>(1)</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  mainContestName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  childItem: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
  },
  childName: {
    fontSize: 16,
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  noData: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});
