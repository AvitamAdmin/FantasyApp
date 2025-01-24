import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const playerData = {
    name: "R Gaikwad",
    team: "CSK - BAT",
    selectedBy: "90%",
    totalPoints: 100,
    pointsBreakup: [
      { event: "Event", points: "Points", actual: "Actual" },
      { event: "Playing11/Impact", points: "4", actual: "Announced" },
      { event: "Runs", points: "42", actual: "42" },
      { event: "4's", points: "3", actual: "3" },
      { event: "6's", points: "4", actual: "2" },
      { event: "Strike rate", points: "4", actual: "161.54" },
      { event: "Duck", points: "0", actual: "No" },
      { event: "Run Bonus", points: "2", actual: "30+" },
      { event: "Maiden Over", points: "0", actual: "0" },
      { event: "Wickets", points: "0", actual: "0" },
      { event: "Catches", points: "8", actual: "1" },
      { event: "Stumping", points: "0", actual: "0" },
      { event: "Runout", points: "0", actual: "0" },
      { event: "Runout (Not Direct)", points: "1", actual: "1" },
      { event: "Bonus (LBW/Bowled)", points: "0", actual: "0" },
      { event: "Catch Bonus", points: "0", actual: "0" },
      { event: "Wicket Bonus", points: "0", actual: "0" },
      { event: "Economy Rate", points: "0", actual: "0" },
      { event: "Total", points: "75",  },
    ],
  };
  
const PlayerDetails = () => {
    const navigation = useNavigation();

  const renderHeader = () => (
    <View>
      {/* Player Info */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#333",
          padding: 6,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <Image
          source={require("../../assets/players/ravindra-jadeja.png")}
          style={{
            width: 70,
            height: 70,
            // borderRadius: 30,
            marginRight: 16,
          }}
        />
        <View>
          <Text style={{ color: "#fff", fontSize: hp(2.1), fontWeight: "bold" }}>
            {playerData.name}
          </Text>
          <Text style={{ color: "#ccc", fontSize: hp(1.6) }}>{playerData.team}</Text>
        </View>
      </View>

      {/* Overview */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10    ,
          backgroundColor: "#fff", borderColor:"#ddd", borderWidth:1,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: hp(1.8), color: "#000" }}>Selected By %</Text>
          <Text style={{ fontSize:  hp(2.3), fontWeight: "bold", color: "#000" }}>
            {playerData.selectedBy}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: hp(1.8), color: "#000" }}>Total Points</Text>
          <Text style={{ fontSize: hp(2.3), fontWeight: "bold", color: "#000" }}>
            {playerData.totalPoints}
          </Text>
        </View>
      </View>

      {/* Points Breakup Header */}
      <Text
        style={{
          fontSize: hp(1.7),
          color: "#000",
          padding: 2,
          backgroundColor:"#E2E7FE", borderColor:"#ddd", borderWidth:1,
        }}
      >
        Points Breakup
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      {/* Header */}
      <LinearGradient
        colors={["#3b53bd", "#243373", "#192451", "#020202"]}
        style={{
          height: 80,
          justifyContent: "center",
          paddingHorizontal: 16,
        }}>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
           <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={22} color="#fff" />
          </Pressable>
          <Text
            style={{
              color: "#fff",
              fontSize: hp(2),
              marginLeft: 16,
            }}
          >
            Player Info
          </Text>
        </View>
      </LinearGradient>

      {/* Static Points Breakup */}
     
      <View style={{ paddingHorizontal: 15, paddingTop: 14 }}>
      {renderHeader()}
      {playerData.pointsBreakup.map((item, index) => (
        <ScrollView >
        <View 
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 4.5,
            backgroundColor: "#fff",
            borderColor:"#ddd", borderWidth:1,borderTopWidth:0,
         
          }}>
         
          <Text style={{ flex: 1, textAlign: "left", color: "#333",fontSize: hp(1.5), }}>
            {item.event}
          </Text>
          <Text style={{ flex: 1, textAlign: "center", color: "#333",fontSize: hp(1.6),  }}>
            {item.points}
          </Text>
          <Text style={{ flex: 1, textAlign: "right", color: "#333" ,fontSize: hp(1.5), }}>
            {item.actual}
          </Text>
         
        </View>
        </ScrollView>
      ))}
    </View>
     
     
    </View>
  );
};

export default PlayerDetails;
