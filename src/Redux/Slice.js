import { createSlice } from "@reduxjs/toolkit";
import { teamsArray } from "../../jsonData/cskjson";



const initialState = {
  playerProfileInfo: [],
  finalPlayerSelected: [],
  impactPlayerSelected: [],
  impactPlayerLists: [],
  team1shortform: "",
  team2shortform: "",
  matchCountdown: "",
  team1logo: [],
  team2logo: [],
};


const userSlice = createSlice({
  name: "fantasy",
  initialState,
  reducers: {
    initializePlayerLists: (state) => {
      const allPlayers = teamsArray.flatMap((team) => team.players);
      state.playerProfileInfo = allPlayers;
      state.impactPlayerLists = allPlayers;
    },
    getplayerProfileInfo: (state, { payload }) => {
      state.playerProfileInfo = payload;
    },
    getfinalPlayerSelected: (state, { payload }) => {
      if (state.finalPlayerSelected.includes(payload)) {
        state.finalPlayerSelected = state.finalPlayerSelected.filter(
          (id) => id !== payload
        );
      } else {
        state.finalPlayerSelected.push(payload);
      }
    },
    resetFinalPlayerSelected: (state) => {
      state.finalPlayerSelected = [];
    },
    getImpactPlayerLists: (state, { payload }) => {
      const id = payload;
      const findid = state.finalPlayerSelected.find(
        (finalPlayerSelected) => finalPlayerSelected.id !== id
      );
      state.impactPlayerLists = findid;
    },
    getImpactPlayerSelected: (state, { payload }) => {
      // Clear the impactPlayerSelected array and then add the new impact player
      state.impactPlayerSelected = [payload];
    },
    getteam1shortform: (state, { payload }) => {
      // Clear the impactPlayerSelected array and then add the new impact player
      state.team1shortform = [payload];
    },
    getteam2shortform: (state, { payload }) => {
      // Clear the impactPlayerSelected array and then add the new impact player
      state.team2shortform = [payload];
    },
    getMatchCountdown: (state, { payload }) => {
      // Clear the impactPlayerSelected array and then add the new impact player
      state.matchCountdown = [payload];
    },
    getTeam1logo: (state, { payload }) => {
      // Clear the impactPlayerSelected array and then add the new impact player
      state.team1logo = [payload];
    },
    getTeam2logo: (state, { payload }) => {
      // Clear the impactPlayerSelected array and then add the new impact player
      state.team2logo = [payload];
    },
  },
});


export const {
  getplayerProfileInfo,
  getfinalPlayerSelected,
  resetFinalPlayerSelected,
  getImpactPlayerSelected,
  initializePlayerLists,
  getteam1shortform,
  getteam2shortform,
  getMatchCountdown,
  getTeam1logo,
  getTeam2logo,
} = userSlice.actions;


export default userSlice.reducer;