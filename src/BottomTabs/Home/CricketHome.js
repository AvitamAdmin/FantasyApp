import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../../envfile/api';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setMatchShortName,setMatchesTeam1Id,setMatchesTeam2Id} from '../../Redux/Slice';


const CricketHome = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [teams, setTeams] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [error, setError] = useState(null);
 
  const navigation = useNavigation();


  const convertBinaryToBase64 = binaryData => {
    if (!binaryData) return null;
    return Buffer.from(binaryData, 'binary').toString('base64');
  };


  const fetchMatchData = async token => {
    try {
      const body = {page: 0, sizePerPage: 50};
      const headers = {Authorization: `Bearer ${token}`};
      const response = await axios.post(`${api}/admin/matches`, body, {
        headers,
      });
      setData(response.data.matchesDtoList || []);
    } catch (err) {
      console.error(err);
      setError('Error fetching match data.');
    }
  };


  const fetchTournamentData = async token => {
    try {
      const body = {page: 0, sizePerPage: 50};
      const headers = {Authorization: `Bearer ${token}`};
      const response = await axios.post(`${api}/admin/tournament`, body, {
        headers,
      });
      setTournaments(response.data.tournamentList || []);
    } catch (err) {
      console.error(err);
      setError('Error fetching tournament data.');
    }
  };


  const fetchTeamData = async token => {
    try {
      const body = {page: 0, sizePerPage: 50};
      const headers = {Authorization: `Bearer ${token}`};
      const response = await axios.post(`${api}/admin/team`, body, {headers});
      setTeams(response.data.teamList || []);
    } catch (err) {
      console.error(err);
      setError('Error fetching team data.');
    }
  };


  const fetchData = async () => {
    setLoading(true);
    setError(null);


    try {
      const token = await AsyncStorage.getItem('jwtToken');
      await Promise.all([
        fetchMatchData(token),
        fetchTournamentData(token),
        fetchTeamData(token),
      ]);
    } catch (err) {
      console.error(err);
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);


  const getTeamData = teamId => {
    const team = teams.find(t => String(t.recordId) === String(teamId));
    if (!team) return {shortName: 'Unknown Team', logo: null};


    const logo = team.Image?.logo
      ? `data:image/png;base64,${convertBinaryToBase64(team.Image.logo)}`
      : null;
    return {shortName: team.shortName, logo, name: team.name};
  };


  const getTournamentData = tournamentId => {
    const tournament = tournaments.find(
      t => String(t.recordId) === String(tournamentId),
    );
    if (!tournament) return {name: 'Unknown Tournament'};
    return {name: tournament.name};
  };


  const handleMatchNavigate = (parentMainContestId, token) => {
    navigation.navigate('ContestScreen', {parentMainContestId, token});


    console.log(parentMainContestId, 'parentMainContestId: home screen');
  };
  return (
    <View>
      <ScrollView style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}

        {loading ? (<View style={{backgroundColor:"#fff",height:hp("80%"),display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
         <View>
         <ActivityIndicator size="50" color="#0000ff" />
         <Text style={{color:"#000",fontSize:hp(2)}}>Loading...</Text>
         </View>
        </View>):(<View>{data.map((item, index) => {
          const team1Data = getTeamData(item.team1Id);
          const team2Data = getTeamData(item.team2Id);
          const tournament = getTournamentData(item.tournamentId);
          return (
            <View key={index} style={{gap: 10, paddingBottom: 20}}>
              <View
                style={{
                  width: wp('100%'),
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Pressable
                  onPress={() => {
                    handleMatchNavigate(item.parentMainContestId);
                    dispatch(setMatchShortName(item.name));
                    dispatch(setMatchesTeam1Id(item.team1Id));
                    dispatch(setMatchesTeam2Id(item.team2Id));

                  }}
                  style={{
                    borderRadius: 5,
                    overflow: 'hidden',
                    width: wp('95%'),
                    backgroundColor: '#fff',
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
                        elevation: 15,
                      },
                    }),
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: wp('95%'),
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: wp('100%'),
                      }}>
                      <View
                        style={{
                          width: wp('60%'),
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          borderBottomRightRadius: 50,
                          position: 'relative',
                        }}>
                        <Image
                          source={require('../../../assets/Borderradius.png')}
                          style={{height: 22, width: 210}}
                        />
                        <Text
                          style={{
                            fontSize: hp(1.5),
                            padding: 8,
                            color: '#fff',
                            fontWeight: 'bold',
                            position: 'absolute',
                          }}>
                          {tournament.name}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: wp('40%'),
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: 5,
                        }}>
                        <Text
                          style={{
                            fontSize: hp(1.2),
                            color: '#19c869',
                            fontWeight: '900',
                          }}>
                          LINEUPS OUT
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        width: wp('100%'),
                        padding: 10,
                      }}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          width: wp('25%'),
                          gap: 5,
                        }}>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: wp('25%'),
                            gap: 10,
                          }}>
                          <View style={{padding: 2}}>
                            {team1Data.logo ? (
                              <Image
                                source={{uri: team1Data.logo}}
                                style={{
                                  backgroundColor: '#fff',
                                  resizeMode: 'contain',
                                  width: 60,
                                  height: 60,
                                  //borderRadius: 50,
                                }}
                              />
                            ) : (
                              <Text style={{color:"#000"}}>No Logo</Text>
                            )}
                          </View>
                          <View>
                            <Text style={{fontWeight: 'bold',color:"#000"}}>
                              {team1Data.shortName}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                          }}>
                          <View
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              width: 135,
                              justifyContent: 'center',
                            }}>
                            <Text style={{fontSize: hp(1.5),color:"#000"}} numberOfLines={1}>
                              {team1Data.name}
                              {/* Chennai super kings */}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          width: wp('40%'),
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 5,
                        }}>
                        <View style={{backgroundColor: '#E7ECFF', padding: 5}}>
                          <Text
                            style={{
                              fontSize: hp(1.5),
                              color: 'red',
                              textAlign: 'center',
                              fontWeight: 'bold',
                            }}>
                            {new Date(item.startDateAndTime).toLocaleString()}
                          </Text>
                        </View>
                        <View>
                          <Text style={{fontSize: hp(1.5)}}>
                            {new Date(item.endDateAndTime).toLocaleString()}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          width: wp('35%'),
                          gap: 5,
                        }}>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: wp('35%'),
                            gap: 10,
                          }}>
                          <View>
                            <Text style={{fontWeight: 'bold',color:"#000"}}>
                              {team2Data.shortName}
                            </Text>
                          </View>

                          <View>
                            {team2Data.logo ? (
                              <Image source={{uri: team2Data.logo}} />
                            ) : (
                              <Text style={{color:"#000"}}>No Logo</Text>
                            )}
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: wp('100%'),
                          }}>
                          <View
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              width: 135,
                              justifyContent: 'center',
                            }}>
                            <Text style={{fontSize: hp(1.5),color:"#000"}} numberOfLines={1}>
                              {team2Data.name}
                              {/* Chennai super kings */}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        padding: 5,
                        width: wp('95%'),
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTopWidth: 0.5,
                        borderColor: '#cccccc',
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}>
                      <View>
                        <Text style={{fontWeight: 'bold',color:"#000"}}>
                          1 Team 3 Contests
                        </Text>
                      </View>
                      <Pressable
                        onPress={() => setModal(true)}
                        style={{padding: 1, opacity: 0.5}}></Pressable>
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          );
        })}</View>)}

        
      </ScrollView>
    </View>
  );
};

export default CricketHome;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  eventDetails: {
    fontSize: 14,
    color: '#333',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
