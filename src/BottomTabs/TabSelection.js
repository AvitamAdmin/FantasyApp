import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSport} from '../SportContext';
import CricketMatches from './MyMatchTabs/Cricket/CricketMatches';
import FootballMatches from './MyMatchTabs/Football/FootballMatches';
import CricketHome from './Home/CricketHome';
import FootballHome from './Home/FootballHome';


const TabSelection = () => {
  const {selectedSport, TabName} = useSport();

  return (
   
     
      <>
        {TabName === 'home' && selectedSport === 'Cricket' ? (
          <CricketHome />
        ) : TabName === 'home' && selectedSport === 'Football' ? (
          <FootballHome />
        ) : TabName === 'matches' && selectedSport === 'Cricket' ? (
          <CricketMatches />
        ) : TabName === 'matches' && selectedSport === 'Football' ? (
          <FootballMatches />
        ) : null}
      </>

    
   
  );
};

export default TabSelection;

const styles = StyleSheet.create({});
 