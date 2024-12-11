import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CricketLiveMatches from './CricketLiveMatches';
import CricketUpcomingMatches from './CricketUpcomingMatches';
import CricketCompletedMatches from './CricketCompletedMatches';
const CricketMatches = () => {
  const Tab = createMaterialTopTabNavigator();

  console.log("CricketMatches Component displayed");

  return (
    <View style={{ flex: 1 }}>
      <Text>Cricket</Text>
      <Tab.Navigator>
        {console.log("displaying Tab.Navigator")}
        <Tab.Screen name="CricketLiveMatches" component={CricketLiveMatches} />
        <Tab.Screen name="CricketUpcomingMatches" component={CricketUpcomingMatches} />
        <Tab.Screen name="CricketCompletedMatches" component={CricketCompletedMatches} />
      </Tab.Navigator>   
    </View>
  ); 
};



export default CricketMatches

const styles = StyleSheet.create({})