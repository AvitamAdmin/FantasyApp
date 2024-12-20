import {createSlice} from '@reduxjs/toolkit';
import {teamsArray} from '../../jsonData/cskjson';
const initialState = {
  matchShortName: '',
  matchesTeam1Id: '',
  matchesTeam2Id: '',
  playerProfileInfo: [],
  impactPlayerLists: [],
  team1shortform: '',
  team2shortform: '',
  finalPlayerSelected: [],
  teamIdForCount: '',
  team1ShortName: '',
  team2ShortName: '',
  selectedTeam1: [],
  playerId: '',
};


const userSlice = createSlice({
  name: 'fantasy',
  initialState,
  reducers: {
    setMatchShortName: (state, {payload}) => {
      state.matchShortName = [payload];
    },
    setteam1ShortName: (state, {payload}) => {
      state.team1ShortName = [payload];
    },
    setteam2ShortName: (state, {payload}) => {
      state.team2ShortName = [payload];
    },
    setMatchesTeam1Id: (state, {payload}) => {
      state.matchesTeam1Id = payload;
    },
    setMatchesTeam2Id: (state, {payload}) => {
      state.matchesTeam2Id = [payload];
    },
    setplayerId: (state, {payload}) => {
      state.playerId = payload;
    },
    resetFinalPlayerSelected: state => {
      state.finalPlayerSelected = [];
    },
    initializePlayerLists: state => {
      const allPlayers = teamsArray.flatMap(team => team.players);
      state.playerProfileInfo = allPlayers;
      state.impactPlayerLists = allPlayers;
    },
    getteam1shortform: (state, {payload}) => {
      // Clear the impactPlayerSelected array and then add the new impact player
      state.team1shortform = [payload];
    },
    getteam2shortform: (state, {payload}) => {
      // Clear the impactPlayerSelected array and then add the new impact player
      state.team2shortform = [payload];
    },
    getteamIdForCount: (state, {payload}) => {
      // Clear the impactPlayerSelected array and then add the new impact player
      state.teamIdForCount = [payload];
    },
    setfinalPlayerSelected: (state, {payload}) => {
      if (state.finalPlayerSelected.includes(payload)) {
        state.finalPlayerSelected = state.finalPlayerSelected.filter(
          id => id !== payload,
        );
      } else {
        state.finalPlayerSelected.push(payload);
      }
    },


    setselectedTeam1: (state, { payload }) => {
      // Check if the matchesTeam1Id matches the payload
      if (state.matchesTeam1Id === payload) {
        // If playerId already exists, remove it; otherwise, add it
        if (state.selectedTeam1.includes(state.playerId)) {
          state.selectedTeam1 = state.selectedTeam1.filter(
            (id) => id !== state.playerId
          );
        } else {
          state.selectedTeam1.push(state.playerId);
        }
      }
    },
   
  },
});


export const {
  setMatchShortName,
  setMatchesTeam1Id,
  setMatchesTeam2Id,
  resetFinalPlayerSelected,
  initializePlayerLists,
  getteam1shortform,
  getteam2shortform,
  setfinalPlayerSelected,
  getfinalPlayerSelected,
  getteamIdForCount,
  setteam1ShortName,
  setteam2ShortName,
  setplayerId,
  setselectedTeam1,
} = userSlice.actions;
export default userSlice.reducer;