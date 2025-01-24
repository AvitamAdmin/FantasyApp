import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, FontAwesome5, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { getImpactPlayerSelected } from "../../Redux/Slice";

const SelectImpactPlayer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const impactPlayerLists = useSelector((state) => state.tasks.impactPlayerLists);
  const impactPlayerSelected = useSelector((state) => state.tasks.impactPlayerSelected);

  useEffect(() => {
    console.log("Impact players lists", impactPlayerLists);
  }, []);

  return (
    <View>
      <View style={{ height: "43%", backgroundColor: "#DEE4FA" }}>
        <LinearGradient
          style={{
            flex: 1,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
          colors={["#3247A0", "#1B2656", "#020202"]}
        >
          <View
            style={{
              height: "30%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 20,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", gap: 7 }}>
                <Pressable
                  onPress={() => navigation.goBack()}
                  style={styles.back}
                >
                  <Ionicons name="arrow-back" size={24} color="#fff" />
                </Pressable>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    CHOOSE YOUR IMPACT PLAYER
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 12 }}>
                    21M 30S left
                  </Text>
                </View>
              </View>
              <View>
                <FontAwesome5 name="question-circle" size={24} color="#fff" />
              </View>
            </View>
          </View>

          <View
            style={{
              height: "55%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/Logo.png")}
                style={{ height: 40, width: "70%", opacity: 0.2 }}
              />
            </View>
            <View
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: 10
              }}
            >
              <Image
                source={require("../../assets/ImpactArrowUp.png")}
                style={{ height: 27, width: "70%" }}
              />
              {impactPlayerSelected.length > 0 && (
                <Image
                  source={{ uri: impactPlayerSelected[0].image }}
                  style={{ height: "70%", width: "70%", borderWidth: 2, borderColor: "#fff", borderRadius: 10, padding: 5 }}
                />
              )}
              <Image
                source={require("../../assets/ImpactArrowDown.png")}
                style={{ height: 28, width: "70%" }}
              />
            </View>
            <View
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/Logo.png")}
                style={{ height: 40, width: "70%", opacity: 0.2 }}
              />
            </View>
          </View>
          <View
            style={{
              height: "15%",
              width: "100%",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "95%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
                paddingTop: 5,
                paddingBottom: 10,
              }}
            >
              <Ionicons
                name="information-circle-outline"
                size={17}
                color="#fff"
              />
              <Text style={{ color: "#fff", fontSize: 14 }}>
                Impact Player will replace the player with least points in your
                Team
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={{ height: "57%" }}>
        <View
          style={{
            backgroundColor: "#DEE4FA",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "55%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12 }}>Player</Text>
          </View>
          <View style={{ width: "15%" }}>
            <Text style={{ fontSize: 12 }}>Points</Text>
          </View>
          <View style={{ width: "30%" }}>
            <Text style={{ fontSize: 12 }}>Selected by %</Text>
          </View>
        </View>
        <ScrollView>
          {impactPlayerLists.map((item, id) => (
            <Pressable
              key={id}
              onPress={() => {
                dispatch(getImpactPlayerSelected(item));
              }}
              style={{
                width: "100%",
                flexDirection: "row",
                padding: 10,
                borderColor: "#000",
                borderBottomWidth: 1,
                backgroundColor: impactPlayerSelected.includes(item) ? "#ccd6ff" : "#fff",
              }}
            >
              <View
                style={{
                  width: "55%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "30%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      position: "relative",
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      backgroundColor: "grey",
                      borderRadius: 10,
                      bottom: 0,
                      paddingLeft: 3,
                      paddingRight: 5,
                      width: "90%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 10 }}>{item.team_short_form}</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "70%",
                    flexDirection: "column",
                    paddingLeft: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                  <Text style={{ fontSize: 12, color: "blue" }}>
                    Played Last Match
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "15%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={{ width: "100%" }}>
                  <Text style={{ fontWeight: "bold" }}>{item.points}</Text>
                </View>
              </View>
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>20%</Text>
                {impactPlayerSelected.includes(item) ? <AntDesign name="minussquareo" size={24} color="#ffae36" /> : <Feather name="plus-square" size={24} color="#35b367" />}
              </View>
            </Pressable>
          ))}
        </ScrollView>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 10,
            }}
          >
            <Pressable onPress={() => navigation.navigate("TeamPreview")}
              style={{
                backgroundColor: '#000',
                width: '45%',
                borderWidth: 1.5,
                borderColor: '#000',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 7,
                gap: 3
              }}
            >
              <View style={{}}><AntDesign name="eyeo" size={24} color="#fff" /></View>
              <Text style={{ color: '#fff', paddingRight: 5, fontWeight: "bold" }}>TEAM PREVIEW</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("SelectCaptainandVCaptain")}
              style={{
                backgroundColor: '#3e57c4',
                width: '45%',
                borderWidth: 1.5,
                borderColor: '#fff',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 7,
                gap: 3
              }}
            >
              <Text style={{ color: '#fff', paddingLeft: 5, fontWeight: "bold" }}>NEXT</Text>
              <View style={{}}><MaterialIcons name="skip-next" size={24} color="#fff" /></View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectImpactPlayer;

const styles = StyleSheet.create({});
