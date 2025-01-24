import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Platform,
  } from "react-native";
  import React from "react";
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  


export default function RecentlyPlayed(){
    return(
        <ScrollView  
        showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>
        
        

        <View style={{ paddingTop:10}}>
      
        <View
          style={{
            flexDirection: 'column',
            gap: 10,
            justifyContent:'center',
            width: wp("100%"),
            alignItems:'center'
          }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <View
              key={item}
              style={{
                width: wp("90%"),
                alignItems:'center',
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
                      width: wp("90%"),
                      padding: 7,
                      
                      }}>
                <Text style={{fontSize: hp(1.5), color:"#000"}}>May 07, 2024</Text>
                <Text style={{fontSize: hp(1.5), color:"#000"}}>Cricket</Text>
              </View>
              <View style={{ 
                    flexDirection: "row", 
                    justifyContent: "space-between",
                    // gap: 10,
                }}>
              <View style={{ 
                    flexDirection: "row",
                    justifyContent: "center",
                    width: wp("29%"),
                    gap: 8,
                    }}>
                      
              <Image
                  source={require("../../assets/CSK-logo.png")}
                  style={{
                    height: hp(5),
                    width: wp(10),
                   
                }}resizeMode="contain"
                />
                <Text style={{ fontWeight: "bold",paddingTop:10, color:"#000"}}>CSK</Text>
                </View>

                  <View style={{width: wp('26%'),justifyContent:'flex-end',alignItems:'center',padding:12}}>
                <Text style={{fontSize: hp(1.5), color:"#000"}}>Highest Points</Text>
                <Text style={{fontWeight:"800",fontSize: hp(1.6), color:"#000"}}>829(T1)</Text>
                </View>

                <View style={{ 
                    flexDirection: "row",
                    justifyContent: "center",
                    width: wp("35%"),
                    gap: 8,
                    }}>

           <Text style={{ fontWeight: "bold",paddingTop:10, color:"#000"}}>RCB</Text>
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
                width: wp("88%"),
                paddingHorizontal: 5,
                padding:1
                }}>
                <Text style={{fontSize: hp(1.4), width: wp("40%"), color:"#000"}}>
                  Chennai Super Kings 
                </Text>
                <Text style={{fontSize: hp(1.4), width: wp("22%"), color:"#000"}} numberOfLines={1}>
                  Royal Challengers Bangalore 
                </Text>
              </View>

          <View style={{
            flexDirection:'row',
            width: wp("90%"),
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
            backgroundColor: "#D7DEFC",
            padding:4
          }}>
              <View style={{
                    width: wp("59%"),
                    paddingLeft:4
                }}>
                <Text style={{fontSize: hp(1.4), color:"#000"}}>Teams Created
                  <Text style={{fontWeight:'bold', color:"#000"}}> 1</Text>
                </Text>
                </View>

                  <View style={{ 
                    width: wp("51%"),
                  }}>
                    
                <Text style={{fontWeight:'500', fontSize: hp(1.4), color:"#000"}}>Star Team: 999 points</Text>
                </View>
            </View>
            </View>
          ))}
        </View>
    
    </View>
    </ScrollView>
    )
}