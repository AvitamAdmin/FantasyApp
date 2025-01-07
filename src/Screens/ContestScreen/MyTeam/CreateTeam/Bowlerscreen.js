import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import {api} from '../../../../envfile/api';
import {useDispatch, useSelector} from 'react-redux';
import {
  setfinalPlayerSelected,
  getplayerProfileInfo,
  getteamIdForCount,
  setplayerId,
  setselectedTeam1,
  setselectedTeam2,
  setTeamCount,
  setbowlerId,
  setplayerRoleId,
  setselectedPlayerTeamId,
} from './../../../../Redux/Slice';

const Bowlerscreen = () => {
  const [Player, setPlayer] = useState([]); // State to hold player list
  const [error, setError] = useState(''); // State to handle errors
  const [loading, setLoading] = useState(false); // State to handle loading
  const [PlayerRoleId, setPlayerRoleId] = useState([]);
  const [Bowler, setBowler] = useState([]);
  const dispatch = useDispatch();
  const Team1 = useSelector(state => state.fantasy.selectedTeam1);
  const [id, setId] = useState('');

  const matchesTeam1Id = useSelector(state => state.fantasy.matchesTeam1Id);
  const matchesTeam2Id = useSelector(state => state.fantasy.matchesTeam2Id);

  // dispatch(setbowlerId(id));

  useEffect(() => {
    if (id) {
      dispatch(setbowlerId(id));
    }
  }, [id, dispatch]);

  // Fetch data including players

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem('jwtToken');
        if (token) {
          await fetchPlayerList(token);
        } else {
          console.error('token not found');
        }
      } catch (error) {
        setError('Unexpected error occurred.');
      }
    };

    fetchToken();
  }, []);

  // Fetch the player list
  const fetchPlayerList = async token => {
    try {
      const body = {page: 0, sizePerPage: 50};
      const headers = {Authorization: `Bearer ${token}`};

      const response = await axios.post(`${api}/admin/player`, body, {headers});

      // Filter players based on team IDs
      const filteredPlayers = response.data.playerDtoList.filter(
        item => item.teamId == matchesTeam1Id || item.teamId == matchesTeam2Id,
      );

      setPlayer(filteredPlayers || []);

      // Extract playerRoleId and pass directly to fetchPlayerRole
      const playerRoleId = filteredPlayers
        .map(item => item.playerRoleId)
        .filter(Boolean);
      setPlayerRoleId(playerRoleId); // For potential other use cases
      console.log(playerRoleId, 'PlayerRoleID from PlayerList');

      // Directly pass playerRoleId
      await fetchPlayerRole(playerRoleId, token);
    } catch (err) {
      console.error(
        'Error fetching Player List:',
        err.message,
        err.response || '',
      );
      setError('Error fetching Player List fromm bowller.');
    }
  };

  // fetch playerRole

  const fetchPlayerRole = async (playerRoleId, token) => {
    try {
      const body = {page: 0, sizePerPage: 50};
      const headers = {Authorization: `Bearer ${token}`};

      const response = await axios.post(`${api}/admin/playerRole`, body, {
        headers,
      });

      // Filter player roles
      const filteredPlayerRoles = response.data.playerRoleDtoList.filter(
        item =>
          item.playerRole === 'Bowler' &&
          Array.isArray(playerRoleId) &&
          playerRoleId.includes(item.recordId),
        // setBowlerId(item.recordId)
      );

      // bowlerId

      const bowler = response.data.playerRoleDtoList.find(
        item => item.playerRole === 'Bowler',
      );
      if (bowler) {
        setId(bowler.recordId);
      }

      // Extract record IDs
      const BowlerRecordIds = filteredPlayerRoles.map(item => item.recordId);

      setBowler(BowlerRecordIds);

      console.log(BowlerRecordIds, 'BowlerRecordIds from playerRoleList');
    } catch (error) {
      console.error('Error fetching player roles:', error);
    }
  };

  const [selectedPlayers, setSelectedPlayers] = useState({});
  const handleAdd = (playerId, teamID, playerRoleId) => {
    console.log(teamID, 'Dispatching teamID');
    console.log(playerId, 'Dispatching playerId');

    // dispatch(getteamIdForCount(teamID));

    dispatch(setplayerId(playerId));
    dispatch(setplayerRoleId(playerRoleId));
    dispatch(setselectedPlayerTeamId(teamID))
    // dispatch(setselectedTeam1(teamID));
    // dispatch(setselectedTeam2(teamID));
    // setSelectedPlayers(prevState => ({
    //   ...prevState,
    //   [playerId]: !prevState[playerId],
    // }));
    dispatch(setfinalPlayerSelected(playerId));
    // dispatch(setTeamCount(teamID));

    const count1 = Team1.length;
    console.log(count1, 'team 1 count from wicketer screen');
  };

  const selectedPlayer = useSelector(
    state => state.fantasy.finalPlayerSelected,
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : Player.length > 0 ? (
        <ScrollView
          style={{
            backgroundColor: '#fff',
            width: wp('100%'),
            height: hp('100%'),
          }}>
          <View style={{flex: 1, alignItems: 'center', gap: 5}}>
            <View style={{padding: 5}}>
              <Text style={{fontSize: hp(1.7)}}>Pick 1-8 All-rounder</Text>
            </View>
            <View
              style={{
                backgroundColor: '#dee4fa',
                width: wp('100%'),
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: wp('100%'),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: wp('50%'),
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: hp(1.7)}}>Player</Text>
                </View>
                <View
                  style={{
                    width: wp('20%'),
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: hp(1.7)}}>Points</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp('40%'),
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: hp(1.7)}}>Selected By %</Text>
                </View>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center', gap: 10}}>
              {Player.map((item, index) => {
                return item.playerRoleId == Bowler ? (
                  <Pressable
                    onPress={() => {
                      handleAdd(item.recordId, item.teamId, item.playerRoleId),
                        console.log(item.recordId);
                    }}
                    key={index}
                    style={{
                      flexDirection: 'row',
                      width: wp('100%'),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderBottomWidth: 0.5,
                      borderColor: '#ababab',
                      paddingBottom: 10,
                      backgroundColor: selectedPlayer.includes(item.recordId)
                        ? '#ccd6ff'
                        : '#fff',
                      padding: 3,
                    }}>
                    <View
                      style={{flexDirection: 'row', width: wp('48%'), gap: 10}}>
                      <Pressable
                        onPress={() => {
                          navigation.navigate('PlayerInfo');
                          // dispatch(setplayerProfileInfo(player));
                        }}
                        style={{
                          padding: 2,
                          backgroundColor: '#fff',
                          overflow: 'hidden',
                          width: wp('15%'),
                          position: 'relative',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        {/* <Image
                        source={{ uri: player.image }}
                        style={{ width: 50, height: 50, borderRadius: 30 }}
                      /> */}
                        <View
                          style={{
                            paddingLeft: 5,
                            paddingRight: 5,
                            backgroundColor: '#7f7f7f',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: wp('15%'),
                            borderRadius: 8,
                            position: 'absolute',
                            bottom: 0,
                          }}>
                          <Text style={{fontSize: hp(1.7), color: '#fff'}}>
                            {/* {findTeamShortForm(player.id////)} */}
                          </Text>
                        </View>
                      </Pressable>
                      <View
                        style={{
                          width: wp('70%'),
                          justifyContent: 'center',
                          gap: 3,
                        }}>
                        <Text style={{fontSize: hp(1.8), fontWeight: 'bold'}}>
                          {item.name}
                        </Text>
                        <Text style={{fontSize: hp(1.8)}}>
                          Played Last Match
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: wp('20%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {/* <Text style={{ fontWeight: "bold", fontSize: hp(1.8) }}>{player.points}</Text> */}
                    </View>
                    <View
                      style={{
                        width: wp('25%'),
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: wp('17%'),
                          justifyContent: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <Text style={{fontWeight: 'bold', fontSize: hp(1.8)}}>
                          80%
                        </Text>
                      </View>
                      {selectedPlayer.includes(item.recordId) ? (
                        <Text style={{color: 'red'}}>Del</Text>
                      ) : (
                        <Text style={{color: 'green'}}>Add</Text>
                      )}
                    </View>
                  </Pressable>
                ) : null;
              })}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View>
          <Text>No Players Found</Text>
        </View>
      )}
    </View>
  );
};

export default Bowlerscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  playerItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
});