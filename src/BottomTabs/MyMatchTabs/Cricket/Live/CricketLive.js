import { Image, Pressable, ScrollView, StyleSheet, Text, View,Dimensions } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Scoreboard from './Scoreboard';
import Stats from './Stats';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MyContest from './MyContest';
import MyTeams from './MyTeam';
import Winning from './Winning';
import Leaderboard from './Leaderboard';




const CricketLive = () => {
    const Tab = createMaterialTopTabNavigator();

    function MyTabs() {
        return (
          <Tab.Navigator
          initialLayout={MyContest}

          // initialRouteName="MyContest"
          screenOptions={{
           tabBarLabelStyle:{
            fontSize:12,
            fontWeight:"700",
            textTransform:"capitalize",
            color:"#000"
           }
          }}>
            
            <Tab.Screen name="My Contest">
        {() => <MyContest show={show} setShow={setShow} />}
      </Tab.Screen>
            <Tab.Screen name="My Teams" component={MyTeams} />
            <Tab.Screen name="Scoreboard" component={Scoreboard} />
            <Tab.Screen name="Stats" component={Stats} />
          </Tab.Navigator>
        );
      }

      function MyTabsWinning() {
        return (
          <Tab.Navigator
          initialLayout={Winning}
          initialRouteName="Winning"
          screenOptions={{
            tabBarLabelStyle:{
              fontSize:12,
              fontWeight:"700",
              textTransform:"capitalize",
              color:"#000"
             }
          }}>
            <Tab.Screen name="Winning" component={Winning} />
            <Tab.Screen name="Leaderboard" component={Leaderboard} />
            <Tab.Screen name="Scoreboard" component={Scoreboard} />
            <Tab.Screen name="Stats" component={Stats} />
          </Tab.Navigator>
        );
      }

      const screenWidth = Dimensions.get('window').width;

      const isTablet = screenWidth >= 768;

      const [show, setShow] = useState(false);
      const navigation = useNavigation();
      const handleBackPress = () => {
        if (show) {
          setShow(false);
          navigation.navigate("CricketLiveMatches");
        } else {
          navigation.goBack();
        }
      };

  return (
    <View style={{height: hp(100),width: wp("100%")}}>
        <View style={{height: isTablet ? hp("30%") : hp("35%"),backgroundColor:"#126",width: wp("100%")}}>
        <LinearGradient
          style={{
            flex: 1,
          }}
          colors={["#3247A0", "#1B2656", "#020202"]}>

       <View style={{display:"flex",width: wp("100%"),flexDirection:"column",gap:20,justifyContent:"space-between",alignItems:"center"}}>
       <View style={{width:wp("95%"),flexDirection:"row",display:"flex",paddingTop:30,justifyContent:"space-between",alignItems:"center"}}>
           <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
           <Pressable onPress={handleBackPress}><Ionicons name="arrow-back" size={24} color="#fff" /></Pressable>
           <Text style={{color:"#fff",fontWeight:"bold",fontSize: hp(2)}}>CSK vs RCB</Text>
           </View>
           <View style={{flexDirection:"row",gap:10}}>
            <View>
            <FontAwesome5 name="question-circle" size={25} color="#fff" />

            </View>
            <View style={{borderWidth:3,borderRadius:17,borderColor:"#fff",padding:2.5,alignItems:"center"}}>
                <Text style={{color:"#fff",fontSize:hp(1),textAlign:"center",fontWeight:"bold",paddingTop:1.5,paddingRight:1}}>PTS</Text>
            </View>
           </View>
        </View>  
        <View style={{flexDirection:"row",width: wp("90%"),display:"flex",justifyContent:"space-between",alignItems:"center"}}>                                                  
           <View style={{flexDirection:"row",gap:5,alignItems:"center",display:"flex"}}>
             <View>
                <Image source={require('../../../../../assets/RCBlogo.png')} style={{height:50,width:50,borderRadius:30}}/>
             </View>
             <View style={{flexDirection:"column",gap:3}}>
                 <Text style={{color:"#fff"}}>RCB</Text>
                 <Text style={{color:"#fff"}}>20/0  (3.3)</Text>
             </View>
            </View>

           <View style={{flexDirection:"row",backgroundColor:"#f00",padding:2,paddingLeft:5,paddingRight:5,justifyContent:"center",display:"flex",alignItems:"center"}}>
            <Text style={{color:"#fff",fontWeight:"700",fontSize:hp(2),letterSpacing:1}}>Live</Text>
           </View>

           <View style={{flexDirection:"row",gap:5,alignItems:"center",display:"flex"}}>
           <View style={{flexDirection:"column",gap:3,justifyContent:"flex-end",alignItems:"flex-end"}}>
                 <Text style={{color:"#fff"}}>CSK</Text>
                 <Text style={{color:"#fff"}}>(20) 179/9</Text>
             </View>
             <View>
                <Image source={require('../../../../../assets/CSK-logo.png')} style={{height:50,width:50,borderRadius:30}}/>
             </View>
            
            </View>
        </View> 

        <View style={{flexDirection:"row",width:wp("90%"),display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <View style={{width: wp("40 %")}}>
                <Text style={{color:'#fff',fontWeight:"bold"}}>V Kohli*</Text>
              </View>
              <View style={{width:wp("20%")}}>
                <Text style={{color:'#fff',fontWeight:"bold"}}>14(9)</Text>
              </View>
              <View style={{flexDirection:"row",gap:5,width:wp("40%")}}>
                <Text style={{color:'#fff',fontWeight:"bold"}}>S Thakur</Text>
                <Text style={{color:'#fff',fontWeight:"bold"}}>0/11</Text>
                <Text style={{color:'#fff',fontWeight:"bold"}}>(0.3)</Text>
              </View>
        </View>
        <View style={{flexDirection:"row",width:wp("90%"),display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <View style={{width:wp("40%")}}>
                <Text style={{color:'#fff',fontWeight:"bold"}}>F du Plessis</Text>
              </View>
              <View style={{width:wp("20%"),justifyContent:"flex-start",display:"flex",flexDirection:"row"}}>
                <Text style={{color:'#fff',fontWeight:"bold"}}>6(13)</Text>
              </View>

              <ScrollView horizontal  
                showsHorizontalScrollIndicator={false}
                style={{display:"flex",flexDirection:"row",gap:5,width:wp("10%"),display:"flex"}}>
             
              <View style={{display:"flex",flexDirection:"row",gap:5,width: wp("70%")}}>
              <View style={{ width: 24  , 
                              height: 25,
                              borderRadius: 15, 
                              borderWidth: 1.5, 
                              borderColor: '#fff', 
                              justifyContent: 'center',
                              alignItems: 'center',
                              }}>
            <Text style={{fontSize: hp(2),fontWeight: 'bold',color: '#fff'}}>1</Text>
            </View>
              <View style={{ width: 24  , 
                              height: 25,
                              borderRadius: 15, 
                              borderWidth: 1.5, 
                              borderColor: '#fff', 
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
              <Text style={{fontSize: hp(2),fontWeight: 'bold',color: '#fff'}}>2</Text>
             </View>
              <View style={{ width: 26, 
                              height: 26,
                              borderRadius: 13, 
                              borderWidth: 1.5, 
                              borderColor: '#f00', 
                              justifyContent: 'center',
                              alignItems: 'center',backgroundColor:"#f00"}}>
              <Text style={{fontSize: hp(1.7),fontWeight: 'bold',color: '#fff'}}>W</Text>
            </View>
        
            <View style={{ width: 27, 
                            height: 26,
                            borderRadius: 15, 
                            borderWidth: 1.5, 
                            borderColor: '#fff', 
                            justifyContent: 'center',
                            alignItems: 'center',}}>
            <Text style={{fontSize: hp(1.5),fontWeight: 'bold',color: '#fff'}}>WD</Text>
            </View>
            <View style={{ width: 36, 
                            height: 26,
                            borderRadius: 15, 
                            borderWidth: 1.5, 
                            borderColor: '#fff', 
                            justifyContent: 'center',
                            alignItems: 'center',}}>
            <Text style={{fontSize: hp(1.3),fontWeight: 'bold',color: '#fff'}}>WD+4</Text>
            </View>
            <View style={{ width: 25  , 
                          height: 25,
                          borderRadius: 15, 
                          borderWidth: 1.5, 
                          borderColor: '#fff', 
                          justifyContent: 'center',
                          alignItems: 'center',
                        backgroundColor:"#fff"}}>
          <Text style={{fontSize: hp(2),fontWeight: 'bold',color: '#000'}}>4</Text>
          </View>
          <View style={{ width: 25  , 
                          height: 25,
                          borderRadius: 15, 
                          borderWidth: 1.5, 
                          borderColor: '#fff', 
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor:"#fff"}}>
          <Text style={{fontSize: hp(2),fontWeight: 'bold',color: '#000'}}>6</Text>
          </View>
          <View style={{ width: 25  , 
                          height: 25,
                          borderRadius: 15, 
                          borderWidth: 1.5, 
                          borderColor: '#fff', 
                          justifyContent: 'center',
                          alignItems: 'center',
                          }}>
              <Text style={{fontSize: hp(1.4),fontWeight: 'bold',color: '#FFF'}}>NB</Text>
              </View>

          
    
    
              </View>
             
              </ScrollView>

             
        </View>
        <View style={{width:wp("90%"),display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"#fff"}}>RCB needs 156 Runs in 99 Balls</Text>
              </View>
        </View>      
        </LinearGradient>
        </View>

        <View style={{height:"65%",width:"100%",flex:1}}>
          {
             show ?  MyTabsWinning()  :MyTabs()
          }
        </View>
      
    </View>
  )
}

export default CricketLive

const styles = StyleSheet.create({

  
})