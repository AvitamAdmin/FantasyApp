import { Image, StyleSheet, Text, View,Pressable, } from 'react-native';
import React from 'react';
import Cricket from './Cricket';
import Football from './Football';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createMaterialTopTabNavigator();

function CustomTabBarIcon({ source }) {
  return (
    <Image
      source={source}
      style={styles.tabBarIcon}
    />
  );
}

export default function FantacyPointsSystems({ navigation }) {
  return (
    <>
      <View style={{display:'flex', flexDirection:'column',width:wp("100%"),}} >
                  <LinearGradient
                             colors={['#3A4CD6', '#000000']}
                             start={{ x: 0, y: 0 }}
                             end={{ x: 1, y: 0 }}
                             style={{height: hp('13%')}}>
                         <View style={{ display:'flex', flexDirection:'row',paddingTop:55, paddingLeft:13}}>
                         <View style={{width:wp("10%")}}>
                         <Pressable onPress={() => navigation.goBack()}>
                         <AntDesign name="arrowleft" size={24} color="white" />
                         </Pressable>
                         </View>
                         <View style={{width:wp("50%")}}>
                              <Text style={{fontSize:hp(2.2), color:'#fff',fontWeight:'bold'}} >Fantasy Point System</Text>
                          </View>
                          </View>
                          </LinearGradient>
          </View>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { textTransform: 'capitalize', flexDirection: 'row' },
        }}
      >
        <Tab.Screen
          name="Cricket"
          component={Cricket}
          options={{
            tabBarLabel: () => (
              <View style={styles.tabBarItemContainer}>
                <CustomTabBarIcon source={require("../../assets/cricket-ball.png")} />
                <Text style={styles.tabBarLabel}>Cricket</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Football"
          component={Football}
          options={{
            tabBarLabel: () => (
              <View style={styles.tabBarItemContainer}>
              <FontAwesome name="soccer-ball-o" size={24} color="black" />
                <Text style={styles.tabBarLabel}>Football</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:5
  },
  tabBarIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
     // Add some space between the icon and the label
  },
  tabBarLabel: {
    color: '#000', // You can customize the label color here
  },
});