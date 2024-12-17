import {createSlice} from "@reduxjs/toolkit"
import { teamsArray } from "../../jsonData/cskjson";
const initialState = {
    matchShortName : "",
    matchesTeam1Id : "",
    matchesTeam2Id : "",
    playerProfileInfo: [],
    impactPlayerLists: [],
    team1shortform: "",
    team2shortform: "",
    finalPlayerSelected: [],
    teamIdForCount:"",


   
   



}





const userSlice = createSlice({
    name : "fantasy",
    initialState,
    reducers:{
         setMatchShortName : (state,{payload})=>{
            state.matchShortName = [payload];
         },
         setMatchesTeam1Id : (state,{payload})=>{
            state.matchesTeam1Id = [payload];
         },
         setMatchesTeam2Id : (state,{payload})=>{
            state.matchesTeam2Id = [payload];
         },
         resetFinalPlayerSelected: (state) => {
            state.finalPlayerSelected = [];
          },
          initializePlayerLists: (state) => {
            const allPlayers = teamsArray.flatMap((team) => team.players);
            state.playerProfileInfo = allPlayers;
            state.impactPlayerLists = allPlayers;
          },
          getteam1shortform: (state, { payload }) => {
            // Clear the impactPlayerSelected array and then add the new impact player
            state.team1shortform = [payload];
          },
          getteam2shortform: (state, { payload }) => {
            // Clear the impactPlayerSelected array and then add the new impact player
            state.team2shortform = [payload];
          },
          setteamIdForCount: (state, { payload }) => {
            // Clear the impactPlayerSelected array and then add the new impact player
            state.teamIdForCount = [payload];
          },
          setfinalPlayerSelected: (state, { payload }) => {
            if (state.finalPlayerSelected.includes(payload)) {
              state.finalPlayerSelected = state.finalPlayerSelected.filter(
                (id) => id !== payload
              );
            } else {
              state.finalPlayerSelected.push(payload);
            }
          },
    }
})


export const {setMatchShortName,setMatchesTeam1Id,setMatchesTeam2Id,resetFinalPlayerSelected,initializePlayerLists,  getteam1shortform,
   getteam2shortform,setfinalPlayerSelected,getfinalPlayerSelected,setteamIdForCount}= userSlice.actions;
export default userSlice.reducer;