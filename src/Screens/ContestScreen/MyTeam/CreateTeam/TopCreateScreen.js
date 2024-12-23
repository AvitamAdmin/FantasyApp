import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Wicketerscreen from './Wicketerscreen';
import Bowlerscreen from './Bowlerscreen';
import BatManScreen from './BatManScreen';
import Allrounderscreen from './Allrounderscreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const TopCreateScreen = () => {
    const Tab = createMaterialTopTabNavigator();


  return (
    <Tab.Navigator>
      <Tab.Screen name="Wicketer" component={Wicketerscreen} />
      <Tab.Screen name="Bowler" component={Bowlerscreen} />
      <Tab.Screen name="Batsman" component={BatManScreen} />
      <Tab.Screen name="AllRounder" component={Allrounderscreen} />
    </Tab.Navigator>
  )
}


export default TopCreateScreen


const styles = StyleSheet.create({})