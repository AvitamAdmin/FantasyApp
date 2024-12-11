import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
// import * as Progress from "react-native-progress";
// import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DetailScreen = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fff" }}>
        {/* Prize pool score show */}
        <View
          style={{
            padding: 10,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View>
            <Text style={{ color: "#4d4d4d" }}>Prize Pool</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "700" }}>₹8 Crores</Text>
          </View>
          <View style={{ paddingTop: 5 }}>
            {/* <Progress.Bar
              progress={0.9}
              width= {365}
              height={3}
              borderWidth={0.2}
              backgroundColor="#ababab"
            /> */}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: wp("90%"),
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ color: "#d62424" ,fontSize: hp(2)}}>23,40,021 Spots left</Text>
            </View>
            <View>
              <Text style={{ color: "#333333" ,fontSize: hp(2)}}>28,89,129 Spots</Text>
            </View>
          </View>
        </View>

        {/* prize pool score in percentage */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: 5,
            backgroundColor: "#ebebeb",
            width: wp("100%"),
            alignItems: "center",
            paddingLeft: 11,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                width: 15,
                height: 15,
                paddingRight: 0.5,
                justifyContent: "center",
                paddingBottom: 0.5,
              }}
            >
              <Text style={{ fontSize: hp(1.3) }}>M</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: hp(1.7) }}>Upto 20</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Ionicons name="trophy-outline" size={15} color="black" /> */}
            </View>
            <View
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: hp(1.7) }}>62%</Text>
            </View>
          </View>
        </View>

        {/* match join spectfic by using amount/ payment */}
        <View
          style={{
            width: wp("100%"),
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 10,
            backgroundColor: "#fff",
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#3e57c4",
              width: wp("90%"),
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 7,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700" ,fontSize: hp(2) }}>JOIN  ₹ 39</Text>
          </Pressable>
        </View>

        {/* Prize breakup and list the prize list vise */}
        <View
          style={{
            padding: 15,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: wp("100%"),
            gap: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: wp("91%"),
            }}
          >
            <Text style={{fontSize: hp(2)}}>Prize Breakup</Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: wp("100%"),
              gap: 5,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: wp("97%"),
                paddingLeft: 30,
                paddingRight: 30,
              }}
            >
              <View>
                <Text style={{ fontWeight: "500", fontSize: hp(2) }}>RANK</Text>
              </View>        
              <View>
                <Text style={{ fontWeight: "500", fontSize: hp(2) }}>WINNINGS</Text>
              </View>
            </View>

            {/* prize pool 1st Rank  */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: wp("100%"),
                paddingLeft: 30,
                paddingRight: 30,
                backgroundColor: "#f1f1f1",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View>
                  <Image
                    source={require("../../../../assets/1stRank.png")}
                    style={{ width: 35, height: 35 }}
                  />
                </View>
                <View>
                  <Text style={{ fontSize: hp(2.5), fontWeight: "600" }}>#1</Text>
                </View>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: hp(3), fontWeight: "500" }}>
                  ₹40 Lakhs
                </Text>
              </View>
            </View>

            {/* prize pool 2nd rank and above */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: wp("100%"),
                gap:5,
                paddingTop: 10,
                borderRadius: 7,
                backgroundColor:"#fff"
              }}
            >
              <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: wp("100%"),
                paddingLeft: 36,
                paddingRight: 36,}}><View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                
                  <Text style={{ fontSize: hp(2.5),fontWeight: "600" }}>#2</Text>
              </View>
              <View style={{}}>
                <Text style={{ fontSize:  hp(2.4), fontWeight: "500" }}>
                  ₹10 Lakhs
                </Text>
              </View>
              </View>

              <View style={{borderWidth:1,
                borderColor:"#e8e8e8",
                backgroundColor:"#e8e8e8",
                width: wp("100%"),
              }}>

              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: wp("100%"),
                gap:5,
                paddingTop: 10,
                borderRadius: 7,
                backgroundColor:"#fff"
              }}
            >
              <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: wp("100%"),
                paddingLeft: 36,
                paddingRight: 36,}}>
                  
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                
                  <Text style={{ fontSize: hp(2.5), fontWeight: "600" }}>#3</Text>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: hp(2.4), fontWeight: "500" }}>
                  ₹10 Lakhs
                </Text>
              </View></View>
              <View style={{borderWidth:1,
                borderColor:"#e8e8e8",
                backgroundColor:"#e8e8e8",
                width: wp("100%"),
              }}>

              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});