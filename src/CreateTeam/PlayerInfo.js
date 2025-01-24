import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const PlayerInfo = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const playerid = useSelector((state) => state.tasks.playerProfileInfo);

  return (
    <View style={{ flex: 1, backgroundColor: "#ebebe" }}>
      <LinearGradient
        style={{
          height: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        colors={["#3b53bd", "#243373", "#192451", "#020202"]}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "85%",
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "100%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View>
                <Text
                  style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}
                >
                  Player Info
                </Text>
              </View>
              <Pressable
                onPress={() => {
                  navigation.goBack(), console.log(playerid);
                }}
              >
                <Ionicons name="close" size={24} color="#fff" />
              </Pressable>
            </View>

            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "35%",
                  padding: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Image
                  source={{ uri: playerid.image }}
                  style={{ width: 100, height: 150 }}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: 5,
                    paddingRight: 5,
                    backgroundColor: "#666666",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "70%",
                    borderRadius: 8,
                    position: "absolute",
                    bottom: -14,
                  }}
                >
                  <Text style={{ fontSize: 12, color: playerid.team_short_form === "RCB" ? "#fff" :"#fff",fontWeight:"bold" }}>
                    {playerid.team_short_form}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "65%",
                  display: "flex",
                  gap: 3,
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  height: "70%",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingLeft: 8,
                    color: "#fff",
                  }}
                >
                  {playerid.name}
                </Text>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    color: "#cecece",
                    paddingLeft: 8,
                  }}
                >
                  {playerid.role}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    paddingLeft: 8,
                  }}
                >
                  <View>
                    <Text
                      style={{ fontWeight: "600", fontSize: 14, color: "#fff" }}
                    >
                      Nationality :
                      <Text
                        style={{
                          fontWeight: "500",
                          fontSize: 14,
                          color: "#cecece",
                        }}
                      >
                        {playerid.country} ,
                      </Text>
                    </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        fontWeight: "600",
                        fontSize: 14,
                        color: "#fff",
                        gap: 5,
                      }}
                    >
                      Born :
                      <Text
                        style={{
                          fontWeight: "500",
                          fontSize: 14,
                          color: "#cecece",
                        }}
                      >
                        {playerid.dob}
                      </Text>
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Entypo name="dot-single" size={24} color="#ff8c00" />
                  </View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#ff8c00",
                    }}
                  >
                    Played Last Match
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ padding: 10, gap: 10 }}>
          <View>
            <Text style={{ fontWeight: "bold", color: "#000", fontSize: 16 }}>
              Tour Fantasy Stats
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 10,
              borderWidth: 1.5,
              borderColor: "#c5c5c5",
              borderRadius: 8,
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              <View>
                <Text>Matches played</Text>
              </View>
              <View>
                <Text>{playerid.matches}</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              <View>
                <Text>Points</Text>
              </View>
              <View>
                <Text>{playerid.points}</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              <View>
                <Text>Selected By %</Text>
              </View>
              <View>
                <Text>80%</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView
          style={{
            padding: 10,
            gap: 5,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <View
            style={{
              gap: 5,
              display: "flex",
              flexDirection: "column",
              paddingBottom: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#000", fontSize: 16 }}>
              Matchwise status
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              paddingBottom: 10,
              marginBottom: 10,
              gap: 5,
              borderWidth: 1.5,
              borderColor: "#c5c5c5",
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ padding: 10 }}>
              <Pressable
                onPress={() => setShow(!show)}
                style={{
                  padding: 5,
                  backgroundColor: "#dddddd",
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 3,
                    }}
                  >
                    <View>
                      <Text style={{ fontWeight: "bold", color: "#000" }}>
                        vs RCB
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 10 }}>
                        May 19, 2024 | CSK opt to bowl first
                      </Text>
                    </View>
                  </View>
                </View>
                <Pressable>
                  {show === true ? (
                    <Entypo name="chevron-small-up" size={24} color="black" />
                  ) : (
                    <Entypo name="chevron-small-down" size={24} color="#000" />
                  )}
                </Pressable>
              </Pressable>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <View>
                  <Text style={{ fontSize: 10 }}>Selected By</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>70%</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <View>
                  <Text style={{ fontSize: 10 }}>Points</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>
                    75 <MaterialIcons name="stars" size={18} color="#3e57c4" />
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <View>
                  <Text style={{ fontSize: 10 }}>Credits</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>9</Text>
                </View>
              </View>
            </View>
            {show === true ? (
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 12 }}>Batting points</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, fontWeight: "600" }}>57</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 12 }}>Bowling points</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, fontWeight: "600" }}>0</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 12 }}>Other points</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, fontWeight: "600" }}>18</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontWeight: "600", fontSize: 12 }}>
                    Points Breakup
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 10 }}>Event</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>Points</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>Actual</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 10 }}>Playing11/Impact</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>4</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>Announced</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 10 }}>Runs</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>42</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>42</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 10 }}>4’s</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>3</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>3</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 10 }}>6’s</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>4</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>2</Text>
                  </View>
                </View>
              </View>
            ) : null}
          </View>

          <View
            style={{
              backgroundColor: "#fff",
              paddingBottom: 10,
              gap: 5,
              marginBottom: 10,
              borderWidth: 1.5,
              borderColor: "#c5c5c5",
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ padding: 10 }}>
              <Pressable
                onPress={() => setShow2(!show2)}
                style={{
                  padding: 5,
                  backgroundColor: "#dddddd",
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 3,
                    }}
                  >
                    <View>
                      <Text style={{ fontWeight: "bold", color: "#000" }}>
                        vs RCB
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 10 }}>
                        May 19, 2024 | CSK opt to bowl first
                      </Text>
                    </View>
                  </View>
                </View>
                <Pressable>
                  {show2 === true ? (
                    <Entypo name="chevron-small-up" size={24} color="black" />
                  ) : (
                    <Entypo name="chevron-small-down" size={24} color="#000" />
                  )}
                </Pressable>
              </Pressable>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <View>
                  <Text style={{ fontSize: 10 }}>Selected By</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>70%</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <View>
                  <Text style={{ fontSize: 10 }}>Points</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>
                    75 <MaterialIcons name="stars" size={18} color="#3e57c4" />
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <View>
                  <Text style={{ fontSize: 10 }}>Credits</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>9</Text>
                </View>
              </View>
            </View>
            {show2 === true ? (
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 12 }}>Batting points</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, fontWeight: "600" }}>57</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 12 }}>Bowling points</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, fontWeight: "600" }}>0</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 12 }}>Other points</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, fontWeight: "600" }}>18</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontWeight: "600", fontSize: 12 }}>
                    Points Breakup
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 10 }}>Event</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>Points</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>Actual</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 10 }}>Playing11/Impact</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>4</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>Announced</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 10 }}>Runs</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>42</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>42</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 10 }}>4’s</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>3</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>3</Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 10 }}>6’s</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>4</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>2</Text>
                  </View>
                </View>
              </View>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PlayerInfo;
