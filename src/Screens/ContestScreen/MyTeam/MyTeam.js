import { Image, Pressable, ScrollView, StyleSheet, Text, View ,Dimensions} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import { Feather } from "@expo/vector-icons";
// import { Octicons } from "@expo/vector-icons";
// import { FontAwesome6 } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MyTeam = () => {
  const navigation = useNavigation();
  
  const screenWidth = Dimensions.get('window').width;

  const isTablet = screenWidth >= 768;
  return (
    <ScrollView>
      <View
      style={{
        display: "flex",
        width: wp("100%"),
        flexDirection: "column",
        height: hp("100%"),
        backgroundColor: "#fff",
      }}
    >
      <ScrollView style={{
        display:"flex",
        flexDirection:"column",
        padding: 10,
      }}>
      <View style={{ display:"flex",flexDirection:"column",gap:15,}}>
      
      <View style={{ display: "flex", width: wp("100%"), flexDirection: "column", }}>
        <View
          style={{
            width: wp("100%"),
            backgroundColor: "#979797",
            borderWidth: 2,
            borderColor: "#fff",
            height: isTablet ? 250 : 220,
            borderRadius: 10,
            position: "relative",
            elevation: 10,
          }}
        >
          <Image
            source={require("../../../../assets/CreateTeamPreview.png")}
            style={{
              width: wp("100%"),
              height: hp("31%"),
              borderRadius: 8,
              opacity: 0.9,
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            display: "flex",
            width: wp("95%"),
            flexDirection: "column",
            padding: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              width: isTablet ? wp('100%') : wp('96%'),
              flexDirection: "row",
              padding: 10,
              justifyContent: "space-between",
              backgroundColor: "#0101013d",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <View
              style={{
                display: "flex",
                width: isTablet ? wp('20%') : wp('26%'),
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#fff" }}>
                Shivam11’s
              </Text>
              <Text style={{ fontWeight: "bold", color: "#fff" }}>T1</Text>
            </View>
            <View
              style={{
                display: "flex",
                width: wp("30%"),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* <Pressable>
                <Octicons name="pencil" size={20} color="#fff" />
              </Pressable>
              <Pressable>
                <FontAwesome6 name="copy" size={20} color="#fff" />
              </Pressable>
              <Pressable>
                <Entypo name="share" size={24} color="#fff" />
              </Pressable> */}
            </View>
          </View>

          <View
            style={{
              display: "flex",
              width: isTablet ? wp('90%') : wp('95%'),
              flexDirection: "row",
              padding: 5,
            }}
          >
            <View
              style={{
                display: "flex",
                width: wp("60%"),
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  width: wp("65%"),
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Image
                    source={require("../../../../assets/MS Dhoni.png")}
                    style={{ height: isTablet ? 100 : 85, 
                      width: isTablet ? 100 : 85  }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 0,
                      width: wp("22%"),
                      backgroundColor: "#fff",
                      borderRadius: 8,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", color: "#000" }}>
                      CSK
                    </Text>
                  </View>
                  <View
                    style={[    
                    {
                        position: "absolute",
                        top: 0,
                        backgroundColor: "#000",
                        borderRadius: 20,
                        paddingLeft: 5,
                        paddingRight: 5,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        padding: 2,
                    },
                    isTablet ? { right: 80 } : { left: 0 } // Conditional styling
                  ]}>

                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: hp(2),
                      }}>
                      C
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Image
                    source={require("../../../../assets/MS Dhoni.png")}
                    style={{ height: isTablet ? 100 : 85, 
                      width: isTablet ? 100 : 85  }}
                  />
                  <View
                    style={[    
                    {
                        position: "absolute",
                        top: 0,
                        backgroundColor: "#000",
                        borderRadius: 20,
                        paddingLeft: 5,
                        paddingRight: 5,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        padding: 2,
                    },
                    isTablet ? { right: 80 } : { left: 0 } // Conditional styling
                  ]}>

                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: hp(1.8)
                      }}>
                      VC
                    </Text>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      bottom: 0,
                      width: wp("22%"),
                      backgroundColor: "#f27",
                      borderRadius: 8,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", color: "#fff" }}>
                      RCB
                    </Text>
                  </View>
                </View>
              </View>

            
            </View>
            <View  style={{
              display: "flex",
              width: wp("35%"),
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: wp("21%")
              }}
            >
              <Image
                source={require("../../../../assets/MS Dhoni.png")}
                style={{ height: isTablet ? 100 : 85, 
                  width: isTablet ? 100 : 85  }}
                />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  backgroundColor: "#000",
                  borderRadius: 20,
                  paddingLeft: 3,
                  paddingRight: 3,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  left: isTablet ? 30 : 0,
                  padding:3
                }}
              >
                <Image
                  source={require("../../../../assets/ImpactPreviewNotSelected.png")}
                  style={{ width: 22, height: 23 }}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: wp("20%"),
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#000" }}>RCB</Text>
              </View>
            </View>
            
            </View>
          </View>

          <View  style={{
              display: "flex",
              width: wp("100%"),
              flexDirection: "row",
              padding: 5,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}>

          <View
                style={{
                  display: "flex",
                  width:  wp("35%"),
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  backgroundColor: "#0101013d",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize:hp(1.6) }}>CSK</Text>
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize:hp(1.6) }}>7</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  width: wp("35%"),
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  backgroundColor: "#0101013d",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize:hp(1.6) }}>RCB</Text>
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize:hp(1.6) }}>4</Text>
              </View>
          </View>

          <View
            style={{
              display: "flex",
              width: wp("100%"),
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize:hp(1.6) }}>WK  2</Text>
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize:hp(1.6) }}>BAT  2</Text>
            <Text style={{ fontWeight: "bold", color: "#fff" , fontSize:hp(1.6)}}>AR  2</Text>
            <Text style={{ fontWeight: "bold", color: "#fff" , fontSize:hp(1.6)}}>BOWL  2</Text>
          </View>
        </View>
      </View>

      
      </View>
      
      </ScrollView>

      <View style={{display: "flex",
        width: wp("100%"),
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
      }}>

       <Pressable onPress={() => navigation.navigate("CreateTeam")}
          style={{display:"flex",flexDirection: 'row',gap:10,width: wp("55%"),backgroundColor:"#3E57C4",padding:9,borderRadius: 20,justifyContent:"center",alignItems:"center"}}>
        {/* <View><Feather name="plus-circle" size={20} color="#fff" /></View> */}
        <Text style={{color:"#fff",alignItems:"center",fontWeight:"bold"}}>
                CREATE A TEAM
        </Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
};

export default MyTeam;

const styles = StyleSheet.create({});


