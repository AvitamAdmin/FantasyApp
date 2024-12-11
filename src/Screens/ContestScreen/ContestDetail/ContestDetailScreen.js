import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DetailScreen from './DetailScreen';
import LeaderBoard from './LeaderBoard';

const ContestDetailScreen = () => {
    const Tab = createMaterialTopTabNavigator();

  return (

       <Tab.Navigator>
      <Tab.Screen name="DetailScreen" component={DetailScreen} />
      <Tab.Screen name="LeaderBoard" component={LeaderBoard} />
    </Tab.Navigator>
   
  )
}

export default ContestDetailScreen

const styles = StyleSheet.create({})