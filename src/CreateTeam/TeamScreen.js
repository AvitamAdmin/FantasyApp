import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Pressable,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Wicketerscreen from "./Wicketerscreen"; // Adjust the import path
import BatterScreen from "./BatterScreen"; // Adjust the import path
import Allrounderscreen from "./Allrounderscreen"; // Adjust the import path
import Bowlerscreen from "./Bowlerscreen"; // Adjust the import path
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  initializePlayerLists,
  resetFinalPlayerSelected,
} from "../../Redux/Slice";
import { teamsArray } from "../../jsondata/cskjson";

const initialLayout = { width: Dimensions.get("window").width };

const WKRoute = () => (
  <View style={styles.contentContainer}>
    <Wicketerscreen />
    {/* Add your WK-specific content here */}
  </View>
);

const BATRoute = () => (
  <View style={styles.contentContainer}>
    <BatterScreen />
    {/* Add your BAT-specific content here */}
  </View>
);

const ARRoute = () => (
  <View style={styles.contentContainer}>
    <Allrounderscreen />
    {/* Add your AR-specific content here */}
  </View>
);

const BOWLRoute = () => (
  <View style={styles.contentContainer}>
    <Bowlerscreen />
    {/* Add your BOWL-specific content here */}
  </View>
);

const TeamScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "wk", title: "WK" },
    { key: "bat", title: "BAT" },
    { key: "ar", title: "AR" },
    { key: "bowl", title: "BOWL" },
  ]);

  const renderScene = SceneMap({
    wk: WKRoute,
    bat: BATRoute,
    ar: ARRoute,
    bowl: BOWLRoute,
  });

  const navigation = useNavigation();

  const team1shortform = useSelector((state) => state.tasks.team1shortform);
  const team2shortform = useSelector((state) => state.tasks.team2shortform);
  const getTeam1logo = useSelector((state) => state.tasks.team1logo);
  const getTeam2logo = useSelector((state) => state.tasks.team2logo);
  const matchCountdown = useSelector((state) => state.tasks.matchCountdown);

  // Update countdown every second
  const [countdown, setCountdown] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(matchCountdown); // Update countdown state
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [matchCountdown]);

  const totalDots = 11;

  const playercount = useSelector(
    (state) => state.tasks.finalPlayerSelected.length
  );
  const Teamcount = useSelector((state) => state.tasks.finalPlayerSelected);
  const allPlayers = teamsArray.flatMap((team) => team.players);
  const finalPlayerSelected = useSelector(
    (state) => state.tasks.finalPlayerSelected
  );

  const selectedPlayers = allPlayers.filter((player) =>
    finalPlayerSelected.includes(player.id)
  );

  const cskPlayersCount = selectedPlayers.filter(
    (player) => player.team_short_form === "CSK"
  ).length;
  const rcbPlayersCount = selectedPlayers.filter(
    (player) => player.team_short_form === "RCB"
  ).length;

  const dispatch = useDispatch();
  const handleResetSelection = () => {
    dispatch(resetFinalPlayerSelected());
  };

  dispatch(initializePlayerLists());

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        style={{
          height: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        colors={["#3b53bd", "#243373", "#192451", "#020202"]}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            padding: 5,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "40%",
              justifyContent: "space-around",
            }}
          >
            <View style={{ width: "30%" }}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.back}
              >
                <Ionicons name="arrow-back" size={25} color="#fff" />
              </Pressable>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "70%",
              }}
            >
              <View>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  CREATE TEAM 1
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "700", fontSize: 12, color: "#fff" }}
                >
                  {matchCountdown}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              justifyContent: "flex-end",
              alignItems: "center",
              width: "60%",
              paddingRight: 5,
            }}
          >
            <View>
              <FontAwesome5 name="question-circle" size={26} color="#fff" />
            </View>
            <View
              style={{
                borderWidth: 2.5,
                borderColor: "#fff",
                borderRadius: 30,
                fontWeight: "700",
                paddingTop: 4,
                paddingBottom: 4,
                paddingRight: 2,
                paddingLeft: 2,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 10, color: "#fff" }}>
                PTS
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={{ flex: 1 }}>
        {/* Header Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: 5,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#fff",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingTop: 10,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <View>
                  <Image
                    source={{ uri: `${getTeam1logo}` }} // Provide a fallback value if getTeam1logo is undefined or null
                    style={{
                      backgroundColor: "#fff",
                      resizeMode: "contain",
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                    }}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{team1shortform}</Text>
                  <Text style={{ fontWeight: "bold" }}>{cskPlayersCount}</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
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
                  <Text style={{ fontWeight: "bold" }}>{team2shortform}</Text>
                  <Text style={{ fontWeight: "bold" }}>{rcbPlayersCount}</Text>
                </View>
                <View>
                  <Image
                    source={{ uri: `${getTeam2logo}` }} // Provide a fallback value if getTeam1logo is undefined or null
                    style={{
                      backgroundColor: "#fff",
                      resizeMode: "contain",
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <View>
                <Text style={{ fontSize: 14 }}>
                  Maximum 7 Players for one team
                </Text>
              </View>
              <View
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {[...Array(totalDots)].map((_, index) => (
                    <View
                      key={index}
                      style={{
                        width: 22,
                        height: 7,
                        marginHorizontal: 5,
                        backgroundColor:
                          index < playercount ? "#3e57c4" : "#a8b6f4",
                      }}
                    />
                  ))}
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 5,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontWeight: "500" }}>Players</Text>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "500" }}>{playercount}/11</Text>
                  </View>
                </View>
                <View>
                  <Pressable
                    onPress={handleResetSelection}
                    style={{
                      borderWidth: 1,
                      borderColor: "#4d4d4d",
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderRadius: 4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{}}>Reset</Text>
                  </Pressable>
                </View>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginTop: 5,
              }}
            >
              <LinearGradient
                style={{
                  height: 25,
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
                colors={["#7185d8", "#c2cffe"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Entypo name="location-pin" size={24} color="black" />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "500" }}>
                      M.Chinnaswamy Stadium, Bangalore
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>

        {/* Tab View Section */}
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: "blue" }}
              style={{ backgroundColor: "white" }}
              labelStyle={{ color: "black", fontWeight: "bold" }}
            />
          )}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("TeamPreview")}
            style={{
              backgroundColor: "#000",
              width: "45%",
              borderWidth: 1.5,
              borderColor: "#000",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              padding: 7,
              gap: 3,
            }}
          >
            <View style={{}}>
              <AntDesign name="eyeo" size={24} color="#fff" />
            </View>
            <Text
              style={{
                color: "#fff",
                paddingRight: 5,
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              TEAM PREVIEW
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("SelectImpactPlayer")}
            style={{
              backgroundColor: "#3e57c4",
              width: "45%",
              borderWidth: 1.5,
              borderColor: "#fff",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              padding: 7,
              gap: 3,
            }}
          >
            <Text
              style={{
                color: "#fff",
                paddingLeft: 5,
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              NEXT
            </Text>
            <View style={{}}>
              <MaterialIcons name="skip-next" size={24} color="#fff" />
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TeamScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    padding: 10,
  },
});
