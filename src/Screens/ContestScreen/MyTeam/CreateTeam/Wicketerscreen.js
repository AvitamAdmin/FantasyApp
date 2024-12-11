import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import {api} from '../../../../envfile/api';
import {useSelector} from 'react-redux';

const Wicketerscreen = () => {
  const [Player, setPlayer] = useState([]); // State to hold player list
  const [error, setError] = useState(''); // State to handle errors
  const [loading, setLoading] = useState(false); // State to handle loading
  const [PlayerRoleId, setPlayerRoleId] = useState([]);
  const [WicketKeeperId, setWicketKeeperId] = useState([]);

  const matchesTeam1Id = useSelector(state => state.fantasy.matchesTeam1Id);
  const matchesTeam2Id = useSelector(state => state.fantasy.matchesTeam2Id);

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

      const response = await axios.post(`${api}/admin/player`, body, {
        headers,
      });
      const filteredPlayers = response.data.playerList.filter(
        item => item.teamId == matchesTeam1Id || item.teamId == matchesTeam2Id,
      );

      setPlayer(filteredPlayers || []);
      const playerRoleId = filteredPlayers.map(item => item.playerRoleId).filter(roleId=> roleId);
      setPlayerRoleId(playerRoleId);
      console.log(playerRoleId,"PlayerRoleID from PLayerList");

      fetchPlayerRole(PlayerRoleId, token);

      // console.log(response.data.playerList,"response from api");
    } catch (err) {
      console.error(err);
      console.error('Error details:', err.message, err.response);
      setError('Error fetching Player List.');
    }
  };

  // fetch playerRole

  // const fetchPlayerRole = async (playerRoleId, token) => {
  //   try {
  //     const body = {page: 0, sizePerPage: 50};
  //     const headers = {Authorization: `Bearer ${token}`};

  //     const response = await axios.post(`${api}/admin/playerRole`, body, {
  //       headers,
  //     });
  //     const filteredPlayerRoles = response.data.playerRoleList.filter(
  //       item =>
  //         item.playerRole == 'Wicket-Keepers' && item.recordId == playerRoleId.includes(item.recordId)
  //     );
  //     const wicketKeeperRecordIds = filteredPlayerRoles.map(
  //       (item) => item.recordId
  //     );
  //     setWicketKeeperId(wicketKeeperRecordIds);
  //     console.log(wicketKeeperRecordIds, 'wicketKeeperRecordIds from playerRoleList');

  //     // console.log(response.data.playerList,"response from api");
  //   } catch (error) {}
  // };

  const fetchPlayerRole = async (playerRoleId, token) => {
    try {
      const body = { page: 0, sizePerPage: 50 };
      const headers = { Authorization: `Bearer ${token}` };
  
      const response = await axios.post(`${api}/admin/playerRole`, body, {
        headers,
      });
  
      // Filter player roles
      const filteredPlayerRoles = response.data.playerRoleList.filter(
        (item) =>
          item.playerRole === 'Wicket-Keepers' &&
          Array.isArray(playerRoleId) &&
          playerRoleId.includes(item.recordId)
      );
  
      // Extract record IDs
      const wicketKeeperRecordIds = filteredPlayerRoles.map(
        (item) => item.recordId
      );
  
      setWicketKeeperId(wicketKeeperRecordIds);
      console.log(wicketKeeperRecordIds, 'wicketKeeperRecordIds from playerRoleList');
    } catch (error) {
      console.error('Error fetching player roles:', error);
    }
  };
  

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : Player.length > 0 ? (
        Player.map((item, index) => (
          <View key={index} style={styles.playerItem}>
            <Text>{item.name}</Text>
          </View>
        ))
      ) : (
        <View>
          <Text>No Players Found</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Wicketerscreen;

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
