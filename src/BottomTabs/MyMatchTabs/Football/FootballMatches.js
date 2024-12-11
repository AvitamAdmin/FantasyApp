import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FootBallLiveMatches from './FootBallLiveMatches';
import FootBallUpcomingMatches from './FootBallUpcomingMatches';
import FootballCompletedMatches from './FootballCompletedMatches';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const FootballMatches = () => {
    const Tab = createMaterialTopTabNavigator();

  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="Live" component={FootBallLiveMatches} />
    //   <Tab.Screen name="Upcoming" component={FootBallUpcomingMatches} />
    //   <Tab.Screen name="Completed" component={FootballCompletedMatches} />
    // </Tab.Navigator>
    <Text>Football</Text>
  )
}

export default FootballMatches

const styles = StyleSheet.create({})