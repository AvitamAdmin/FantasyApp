import { StyleSheet, Text, View ,  TouchableWithoutFeedback,Pressable} from "react-native";
import React, { useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

const Leaderboard = () => {

    const navigation = useNavigation();
  const [isGreen, setIsGreen] = useState(false);

  const handlePress = () => {
    setIsGreen((prevState) => !prevState); // Toggle the state
  };
  
  return (
    <View
      style={{
        padding: 5,
        display: "flex",
        flexDirection: "column",
        width: wp("100%"),
        backgroundColor: "#fff",
        gap: 15,
        height: hp("100%"),
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 5,
          width:  wp("90%"),
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: wp("45%"),
            gap: 5,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View>
            <Feather name="download" size={21} color="black" />
          </View>
          <View>
            <Text style={{color:"#000", fontSize: hp(1.8) }}>Download all teams</Text>
          </View>
        </View>

        <TouchableWithoutFeedback onPress={handlePress}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: wp("40%"),
            gap: 5,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text style={{ color: isGreen ?  "#19c869" : "#000", fontSize: hp(1.8) }}>
            Compare
          </Text>
          <MaterialCommunityIcons
            name="select-compare"
            size={21}
            color={isGreen ? "#19c869" : "#000"}
          />
        </View>
      </TouchableWithoutFeedback>
  
      </View>
      <View
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "column",
          width:  wp("95%"),
        }}
      >
        <Pressable
                    onPress={()=>navigation.navigate("TeamPreview")}
          style={{
            flexDirection: "row",
            width: wp("90%"),
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: "#d9d9d9",
            paddingBottom: 6,
            
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              paddingLeft: 5,
              width:wp ("30%"),
              // backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold",color:"#000" }}>shivam11s</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <MaterialCommunityIcons
                name="party-popper"
                size={22}
                color="#19c869"
              />
              <Text style={{ color: "#19c869", fontSize: hp(1.6) }}>
                In Wining zone
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              width: wp("20%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#d9d9d9",
                height: 20,
                width: 25,
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", color:"#000"}}>T1</Text>
            </View>
            <View>
              <Text style={{ color:"#000"}}>309</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              paddingRight: 10,
              justifyContent: "flex-end",
              alignItems: "center",
              width: wp("30%"),
            }}
          >
            <AntDesign name="caretup" size={14} color="#19c869" />
            <Text style={{ fontWeight: "bold", color:"#000"}}>#1</Text>
          </View>
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            width: wp("90%"),
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: "#d9d9d9",
            paddingBottom: 6,paddingTop: 5,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              paddingLeft: 5,
              width: wp("30%"),
              // backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold",color:"#000" }}>shivam11s</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <MaterialCommunityIcons
                name="party-popper"
                size={22}
                color="#19c869"
              />
              <Text style={{ color: "#19c869", fontSize: hp(1.6) }}>
                In Wining zone
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              width: wp("20%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#d9d9d9",
                height: 20,
                width: 25,
                borderRadius: 7,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold",color:"#000" }}>T1</Text>
            </View>
            <View>
              <Text style={{color:"#000" }}>309</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              paddingRight: 10,
              justifyContent: "flex-end",
              alignItems: "center",
              width: wp("30%"),
            }}
          >
            <AntDesign name="caretdown" size={14} color="red" />
            <Text style={{ fontWeight: "bold",color:"#000" }}>#2</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: wp("90%"),
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: "#d9d9d9",
            paddingBottom: 6,paddingTop: 5,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              paddingLeft: 10,
              width: wp("30%"),
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold",color:"#000" }}>shivam11s</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <MaterialCommunityIcons
                name="party-popper"
                size={22}
                color="#19c869"
              />
              <Text style={{ color: "#19c869", fontSize: hp(1.6) }}>
                In Wining zone
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              width: wp("20%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#d9d9d9",
                height: 20,
                width: 25,
                borderRadius: 7,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold",color:"#000" }}>T1</Text>
            </View>
            <View>
              <Text style={{color:"#000" }}>309</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              paddingRight: 10,
              justifyContent: "flex-end",
              alignItems: "center",
              width: wp("30%"),
            }}
          >
            <Text  style={{ fontWeight: "bold",color:"#000" }}>-</Text>
            <Text style={{ fontWeight: "bold",color:"#000" }}>#3</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: wp("90%"),
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: "#d9d9d9",
            paddingBottom: 6,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              paddingLeft: 10,
              width: wp("30%"),
              // backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold",color:"#000" }}>shivam11s</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              width: wp("20%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#d9d9d9",
                height: 20,
                width: 25,
                borderRadius: 7,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold",color:"#000" }}>T1</Text>
            </View>
            <View>
              <Text style={{ color:"#000" }}>309</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              paddingRight: 7,
              justifyContent: "flex-end",
              alignItems: "center",
              width: wp("30%"),
            }}
          >
            <View>
              <AntDesign name="caretdown" size={14} color="red" />
            </View>
            <Text style={{ fontWeight: "500", color:"#000"}}>#28,00,000</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: wp("90%"),
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: "#d9d9d9",
            paddingBottom: 6,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              paddingLeft: 10,
              width: wp("30%"),
              // backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold",color:"#000" }}>shivam11s</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              width: wp("20%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#d9d9d9",
                height: 20,
                width: 25,
                borderRadius: 7,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold",color:"#000" }}>T1</Text>
            </View>
            <View>
              <Text style={{ color:"#000" }}>309</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              paddingRight: 7,
              justifyContent: "flex-end",
              alignItems: "center",
              width: wp("30%"),
            }}
          >
            <View>
              <AntDesign name="caretdown" size={14} color="red" />
            </View>
            <Text style={{ fontWeight: "500", color:"#000"}}>#28,00,000</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({});