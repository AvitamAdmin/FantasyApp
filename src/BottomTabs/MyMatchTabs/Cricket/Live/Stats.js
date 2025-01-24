import { useNavigation } from "@react-navigation/native";
import react from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Stats(){
      const navigation = useNavigation();

    return(
        <ScrollView>
       <View style={{gap:8,width: wp("100%"),flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <View style={{width: wp("95%"),}}>
            <Text style={{paddingTop:5 ,fontSize: hp(1.5),color:"#000"}}> Showing Player stats by Match</Text>
        </View>


        <View style={{width:wp("100%"), flexDirection:'row',justifyContent:'center',backgroundColor:'#d6d6d6',alignItems:'center'}}>
                <View style={{width: wp("38%"), paddingLeft:8}}>
                    <Text style={{color:"#000",fontSize: hp(1.6)}}>Player</Text>
                 </View>
            <View  style={{width: wp("15%")}}>
                <Text style={{color:"#000",fontSize: hp(1.6)}}>Points</Text>
            </View>
            <View style={{width:wp("15%")}}>
                <Text style={{color:"#000", fontSize: hp(1.6)}}>SB%</Text>
                </View>
            <View style={{width:wp("15%")}}>
                <Text style={{color:"#000",fontSize: hp(1.6)}}>C%</Text>
                </View>
            <View style={{width:wp("15%")}}>
                <Text style={{color:"#000",fontSize: hp(1.5)}}>VC%</Text>
                </View>
           
           
            
        </View>

      <Pressable onPress={() => navigation.navigate('PlayerDetails')} >
        <View style={{width: wp("100%"), flexDirection:'row',alignItems:'center', backgroundColor:'#E4E8FF'}}>
            <View style={{flexDirection:'row', width: wp('38%'), }}>
                <Image source={require("../../../../../assets/players/ravindra-jadeja.png")} style={{height:55, width:60}}/>
                <View style={{flexDirection:'column',gap:2,paddingTop:10 }}>
                   <Text style={{fontWeight:'bold',fontSize: hp(1.7),color:"#000"}}>R Gaikwad</Text>
                   <Text style={{fontSize: hp(1.5)}}>CSK - BAT</Text>
                </View>
            </View>
            <View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:8}}>
                <Text style={{fontSize: hp(1.7),color:"#000"}}>
                    100
                </Text>
            </View>

            <View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:5}}>
            <Text style={{fontSize: hp(1.7),color:"#000"}}>
                    90%
                </Text>
            </View>

            <View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:5}}>
            <Text style={{fontSize: hp(1.7),color:"#000"}}>
                   25% 
                </Text>
            </View>

            <View style={{width: wp("17%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:2}}>
            <Text style={{fontSize: hp(1.7),color:"#000"}}>
                    100%
                </Text>
            </View>
        
       </View>
       </Pressable>

       <Pressable onPress={() => navigation.navigate('PlayerDetails')} >
       <View style={{width: wp("100%"), flexDirection:'row',alignItems:'center', backgroundColor:'#E4E8FF'}}>
       <View style={{flexDirection:'row', width: wp('38%'), }}>
           <Image source={require("../../../../../assets/players/ravindra-jadeja.png")} style={{height:55, width:60}}/>
           <View style={{flexDirection:'column',gap:2,paddingTop:10 }}>
              <Text style={{fontWeight:'bold',fontSize: hp(1.7),color:"#000"}}>R Gaikwad</Text>
              <Text style={{fontSize: hp(1.5)}}>CSK - BAT</Text>
           </View>
       </View>
       <View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:8}}>
           <Text style={{fontSize: hp(1.7),color:"#000"}}>
               100
           </Text>
       </View>

       <View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:5}}>
       <Text style={{fontSize: hp(1.7),color:"#000"}}>
               90%
           </Text>
       </View>

       <View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:5}}>
       <Text style={{fontSize: hp(1.7),color:"#000"}}>
              25% 
           </Text>
       </View>

       <View style={{width: wp("17%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:2}}>
       <Text style={{fontSize: hp(1.7),color:"#000"}}>
               100%
           </Text>
       </View>
   
        </View>
        </Pressable>

  <View style={{width: wp("100%"), flexDirection:'row',alignItems:'center'}}>
  <View style={{flexDirection:'row', width: wp('38%'), }}>
      <Image source={require("../../../../../assets/players/ravindra-jadeja.png")} style={{height:55, width:60}}/>
      <View style={{flexDirection:'column',gap:2,paddingTop:10 }}>
         <Text style={{fontWeight:'bold',fontSize: hp(1.7),color:"#000"}}>R Gaikwad</Text>
         <Text style={{fontSize: hp(1.5)}}>CSK - BAT</Text>
      </View>
  </View>
  <View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:8}}>
      <Text style={{fontSize: hp(1.7),color:"#000"}}>
          100
      </Text>
  </View>

  <View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:5}}>
  <Text style={{fontSize: hp(1.7),color:"#000"}}>
          90%
      </Text>
  </View>

  <View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:5}}>
  <Text style={{fontSize: hp(1.7),color:"#000"}}>
         25% 
      </Text>
  </View>

  <View style={{width: wp("17%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:2}}>
  <Text style={{fontSize: hp(1.7),color:"#000"}}>
          100%
      </Text>
  </View>

</View>
<View style={{width: wp("100%"), flexDirection:'row',alignItems:'center', backgroundColor:'#E4E8FF'}}>
<View style={{flexDirection:'row', width: wp('38%'), }}>
    <Image source={require("../../../../../assets/players/ravindra-jadeja.png")} style={{height:55, width:60}}/>
    <View style={{flexDirection:'column',gap:2,paddingTop:10 }}>
       <Text style={{fontWeight:'bold',fontSize: hp(1.7),color:"#000"}}>R Gaikwad</Text>
       <Text style={{fontSize: hp(1.5)}}>CSK - BAT</Text>
    </View>
</View>
<View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:8}}>
    <Text style={{fontSize: hp(1.7),color:"#000"}}>
        100
    </Text>
</View>

<View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:5}}>
<Text style={{fontSize: hp(1.7),color:"#000"}}>
        90%
    </Text>
</View>

<View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:5}}>
<Text style={{fontSize: hp(1.7),color:"#000"}}>
       25% 
    </Text>
</View>

<View style={{width: wp("17%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start", paddingLeft:2}}>
<Text style={{fontSize: hp(1.7),color:"#000"}}>
        100%
    </Text>
</View>

</View>
      
       </View>
       </ScrollView>
    );
}