import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from 'react-native-image-picker';
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useSport } from "../SportContext";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = ( ) => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState();
  const [profileimg, setProfileimg] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setProfileimg(result);
    console.log("Result from Image Picker:", result);

    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
      console.log("Image URI is set to:", result.assets[0].uri);
    }
  };

  const { Tier, setTier } = useSport();
  const { ImpactScore } = useSport();

  if (ImpactScore >= 0 && ImpactScore <= 200) {
    setTier("BRONZE");
  }
  if (ImpactScore >= 201 && ImpactScore <= 300) {
    setTier("SILVER");
  }
  if (ImpactScore >= 301 && ImpactScore <= 400) {
    setTier("GOLD");
  }
  if (ImpactScore >= 401 && ImpactScore <= 500) {
    setTier("DIAMOND");
  }
  if (ImpactScore >= 501 && ImpactScore <= 800) {
    setTier("THE STAR");
  }
  if (ImpactScore >= 801 && ImpactScore <= 1000) {
    setTier("LEGEND");
  }





  return (
    <ScrollView>
      <View
      style={{
        width: wp("100%"),
        display: "flex",
        flexDirection: "column",
       
      }}
    >
      <View
        style={{
          width: wp("100%"),
          display: "flex",
          flexDirection: "column",
        }}
      >
        
<View style={{
  backgroundColor:"#B4988A",
  display: "flex",
  flexDirection: "row",
  padding: 15,
  paddingLeft:15,
  
  width: wp('100%'),
  position: "relative", // Parent container set to relative
}}>
  <View style={{width:'30%', paddingTop:30}}>
    <Text style={{color: "#fff",fontSize: hp(2)}}>PROFILE</Text>
  </View>
  
  <Pressable onPress={pickImage}>
    <View style={{
      height: hp(22),
      width: wp(100),
    }}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} />
      ) : (
        <Image source={require("../../assets/profile.png")} 
          style={{width:wp(44),height:hp(25),borderWidth:2,}} 
          resizeMode="contain" 
        />
      )}
    </View>
  </Pressable>
</View>

{/* Positioned element below */}

<View style={{
  position:'absolute',
  top:60
}}> 


<View style={{
        position: 'absolute',
        top: 100,
        left: 15,
        width: wp('93%'),
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 5,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      }}>
  
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      width: wp("85%"),
      display: "flex",
      
    }}>
      <View style={{ flexDirection: "column", gap: 5 ,width: wp("75%"),paddingLeft:20}}>
        <Text style={{ fontSize: hp(2), fontWeight: "bold",color:"#000" }}>SRK</Text>
        <Text style={{ fontSize: hp(2),color:"#000"  }}>Srkkkk</Text>
      </View>
      <View style={{ padding: 8, width: wp("10%") }}>
      <Pressable onPress={() => navigation.navigate("MyinfoAndSettings")}>
        <FontAwesome name="pencil-square-o" size={24} color="#525252" />
      </Pressable>
    </View>
  </View>
</View>
</View>


      <View style={{
        display:'flex',
        flexDirection:'row',
        // position:'absolute',
        paddingTop:30,
       

      }}>
      <View
          style={{ paddingLeft: 17,paddingTop:10,  }}>
          
          <View
            style={{
              width: wp("20%"), 
              borderColor: "#000",
              flexDirection: "row",
              padding: 15,
              borderRadius: 5,
              backgroundColor: "#ffff",
              ...Platform.select({
                ios: {
                  shadowColor: "red",
                  shadowOpacity: 0.8,
                  shadowRadius: 10,
                  shadowOffset: { width: 20, height: 10 },
                },
                android: {
                  elevation: 10,
                },
              }),
            }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: wp("85"),
                display: "flex",
              }}>
              
              <Image source={require("../../assets/ScoreLogo.png")} style={{width:55,height:35,borderWidth:2,}} resizeMode="cover" />
              </View>
               </View>
        </View>

        <View
          style={{paddingLeft:2,paddingTop: 10}}>
          
          <View
            style={{
              width: wp("73%"), 
              borderColor: "#000",
              flexDirection: "row",
              padding: 15,
              borderRadius: 5,
              backgroundColor: "#ffff",
              ...Platform.select({
                ios: {
                  shadowColor: "red",
                  shadowOpacity: 0.8,
                  shadowRadius: 10,
                  shadowOffset: { width: 20, height: 10 },
                },
                android: {
                  elevation: 10,
                },
              }),
            }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent:"center",
                alignItems:'center',
                width: wp("70%"),
                padding:2,
                display: "flex",
              }}>
              
              <Text style={{ fontSize: hp(2),fontWeight: "600",color:"#4D4D4D"}}>Total Impact Score :</Text>
              <View>
                <Text style={{ fontSize: hp(3),fontWeight: "bold",color:"#000" }}>  767</Text>
              </View>
              </View>
               </View>
        </View>
      </View>
       

        <View style={{ paddingTop: 10, paddingLeft: 20, gap: 10 , }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: hp(2),color:"#000"  }}>Tier</Text>
          </View>
          <Pressable onPress={() => navigation.navigate("Tier")}>
            <View
              style={{
                width: wp("93%"),
                borderRadius: 10,
                
                backgroundColor: "#ffff",
                ...Platform.select({
                  ios: {
                    shadowColor: "red",
                    shadowOpacity: 0.8,
                    shadowRadius: 10,
                    shadowOffset: { width: 20, height: 10 },
                  },
                  android: {
                    elevation: 10,
                  },
                }),
                flexDirection: "row",
                padding: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  width: wp("17%"),
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {Tier == "BRONZE" && (
                  <Image
                    source={require("../../assets/Bronze.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
                {Tier == "SILVER" && (
                  <Image
                    source={require("../../assets/Silver.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
                {Tier == "GOLD" && (
                  <Image
                    source={require("../../assets/Gold.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
                {Tier == "DIAMOND" && (
                  <Image
                    source={require("../../assets/Diamond.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
                {Tier == "THE STAR" && (
                  <Image
                    source={require("../../assets/starplace.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
                {Tier == "LEGEND" && (
                  <Image
                    source={require("../../assets/Legend.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  width: wp("67%"),
                }}
              >
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <Text style={{ fontWeight: "bold", fontSize: hp(2) ,color:"#000" }}>
                    {Tier}
                  </Text>
                  <Text style={{ fontSize: hp(1.5),color:"#000"  }}>
                    Tier will be upgraded when you reach 800 Total Impacts
                  </Text>
                  <Progress.Bar
                    progress={0.3}
                    width={243}
                    height={3}
                    borderWidth={0.2}
                    backgroundColor="#ABABAB"
                  />
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            paddingTop: 10,
            paddingLeft: 17,
            gap: 10,
            paddingBottom: 15,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: hp(2),color:"#000"  }}>
              Career Stats
            </Text>
          </View>
          <View
            style={{
              width: wp("94%"),
              borderColor: "#000",
              flexDirection: "row",
              padding: 15,
              borderRadius: 10,
              backgroundColor: "#ffff",
              ...Platform.select({
                ios: {
                  shadowColor: "red",
                  shadowOpacity: 0.8,
                  shadowRadius: 10,
                  shadowOffset: { width: 20, height: 10 },
                },
                android: {
                  elevation: 10,
                },
              }),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: wp("80%"),
                display: "flex",
              }}
            >
              <View style={{ flexDirection: "column", gap: 5 }}>
                <Text style={{ fontSize: hp(1.8) ,color:"#000" }}>Matches</Text>
                <Text style={{ fontWeight: "bold" ,color:"#000" }}>1,666</Text>
              </View>
              <View style={{ flexDirection: "column", gap: 5 }}>
                <Text style={{ fontSize: hp(1.8),color:"#000"   }}>Contests</Text>
                <Text style={{ fontWeight: "bold",color:"#000" }}>2,774</Text>
              </View>
              <View style={{ flexDirection: "column", gap: 5 }}>
                <Text style={{ fontSize: hp(1.8),color:"#000"   }}>Win rate</Text>
                <Text style={{ fontWeight: "bold",color:"#000"  }}>64%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          // paddingBottom: 20,
          flexDirection: "column",
          justifyContent: "center",
          width: wp("100%"),
          alignItems: "center",
          
          
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: wp("93%"),
          }}
        >
          <View style={{ paddingBottom: 6 }}>
            <Text style={{ fontWeight: "bold", fontSize: hp(2),color:"#000"   }}>
              Recently Played
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate("RecentlyPlayed")}>
            <View>
              <Text
                style={{ fontWeight: "bold", fontSize: hp(1.5), color:"#000"  }}
              >
                View all
              </Text>
            </View>
          </Pressable>
        </View>
        

       
        <View style={{  width: wp("95%") }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingRight: 10 }}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            paddingBottom:40  //SCROLLCHANGE 
          }}
        >
          {[1, 2, 3].map((item) => (
            <View
              key={item}
              style={{
                width: wp("80%"),
                flexDirection: "column",
                gap: 3,
                borderRadius: 12,
                backgroundColor: "#fff",
                ...Platform.select({
                  ios: {
                    shadowColor: "red",
                    shadowOpacity: 0.8,
                    shadowRadius: 10,
                    shadowOffset: { width: 20, height: 10 },
                  },
                  android: {
                    elevation: 15,
                  },
                }),
              }}
            >
              <View style={{ 
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: wp("80%"),
                      padding: 7,
                      }}>
                <Text style={{fontSize: hp(1.5),color:"#000" }}>May 07, 2024</Text>
                <Text style={{fontSize: hp(1.5),color:"#000" }}>Cricket</Text>
              </View>
              <View style={{ 
                    flexDirection: "row", 
                    justifyContent: "space-between",
                    gap: 10,
                }}>
              <View style={{ 
                    flexDirection: "row",
                    justifyContent: "center",
                    width: wp("27%"),
                    gap: 8,
                    }}>
                      
              <Image
                  source={require("../../assets/CSK-logo.png")}
                  style={{
                    height: hp(5),
                    width: wp(10),
                   
                }}resizeMode="contain"
                />
                <Text style={{ fontWeight: "bold",paddingTop:10,color:"#000" }}>CSK</Text>
                </View>

                  <View style={{width: wp('26%'),justifyContent:'flex-end',alignItems:'center',padding:12}}>
                <Text style={{fontSize: hp(1.5),color:"#000" }}>Highest Points</Text>
                <Text style={{fontWeight:"800",fontSize: hp(1.6),color:"#000" }}>829(T1)</Text>
                </View>

                <View style={{ 
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    width: wp("40%"),
                    gap: 8,
                    }}>

           <Text style={{ fontWeight: "bold",paddingTop:10,color:"#000" }}>RCB</Text>
                <Image
                  source={require("../../assets/RCBlogo.png")}
                  style={{
                    height: hp(5),
                    width: wp(10),
                    borderRadius: 50,
                 }}
                resizeMode="contain"
                />
               
                </View>
              </View>


              
              <View style={{ 
                flexDirection: "row",
                justifyContent: "space-between",
                width: wp("80%"),
                paddingHorizontal: 5,
                padding:1
                }}>
                <Text style={{fontSize: hp(1.4), width: wp("40%"),color:"#000" }}>
                  Chennai Super Kings 
                </Text>
                <Text style={{fontSize: hp(1.4), width: wp("22%"),color:"#000" }} numberOfLines={1}>
                  Royal Challengers Bangalore 
                </Text>
              </View>

          <View style={{
            flexDirection:'row',
            width: wp("80%"),
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
            backgroundColor: "#D7DEFC",
            padding:4
          }}>
              <View style={{
                  
                    width: wp("51%"),
                    
                    paddingLeft:4
                    }}>
                <Text style={{fontSize: hp(1.4),color:"#000" }}>Teams Created
                  <Text style={{fontWeight:'bold'}}> 1</Text>
                </Text>
                </View>

                  <View style={{ 
                    width: wp("51%"),
                   
                  }}>
                    
                <Text style={{fontWeight:'500', fontSize: hp(1.4),color:"#000" }}>Star Team: 999 points</Text>
                </View>
            </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
        
      </View>
  
    </View>
    </ScrollView>


  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,

    alignItems: "center",
  },
  profilePicContainer: {
    
  },

  imageWrapper: {
    
  },
  iconBackground: {
    position: "absolute",
    bottom: 0,
    right: 0,
    
  },
  profbox: {
    flex: 1,
    display: "flex",
    width: "90%",
    alignItems: "center",
    padding: 70,
    position: "relative",
    top: 20,
    backgroundColor: "#196",

    gap: 30,
    justifyContent: "center",
    flexDirection: "column",
  },
  profileText: {
    flex: 1,
    width: "70%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  followBox: {
    flex: 1,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
  },

  followers: {
    display: "flex",
    flexDirection: "column",
  },
  following: {
    flexDirection: "column",
  },
  cardContainer: {
   
  },
  header: {
   
  },
  matchInfo: {
    
  },
  teamLogo: {
    
  },
  teamText: {
   
  },
  result: {
    justifyContent: "center",
    width: wp("85%"),
    flexDirection: "row",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("80%"),
    paddingHorizontal: 3,
  },
  boldText: {
  
  },
  starTeam: {
    
  },
});