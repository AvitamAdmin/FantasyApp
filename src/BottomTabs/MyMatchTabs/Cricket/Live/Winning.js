import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Winning = () => {
  return (
    <View>
    <View style={{padding:10,width: wp("100%"),}}>
    <Pressable style={{flexDirection:"column",gap:5,padding:10,borderWidth:1,borderColor:"#b3b3b3",borderRadius:8}}>
 <View style={{flexDirection:"row",width: wp("90%"),display:"flex",justifyContent:"space-between"}}>
      <Text>Prize Pool</Text>
      <Text style={{color:"#000"}}>Sports</Text>
      <Text style={{color:"#000"}}>Entry</Text>
 </View>
 <View style={{flexDirection:"row",width: wp("90%"),display:"flex",justifyContent:"space-between"}}>
      <Text style={{fontWeight:"bold",color:"#000"}}>₹8 Crores</Text>
      <Text  style={{color:"#000"}}>28,89,129 posts</Text>
      <Text style={{fontWeight:"bold",color:"#000"}}>₹39</Text>
 </View>
</Pressable>
    </View>


    <View style={{ width: wp("100%"),backgroundColor:"#E4E8FF"}}>
    <View style={{display:"flex", flexDirection:"row",width: wp("95%"),gap:5,}}>
    <View style={{display:"flex", flexDirection:"column",width: wp("40%"),alignItems:"center",}}>
    <MaterialCommunityIcons
                      name="crown"
                      size={30}
                      color="#f19d43"
                      
                    />
                    <Text style={{fontWeight:"bold",color:"#000"}}>#1</Text>
    </View>
   
    <View  style={{display:"flex", alignItems:"center",justifyContent:"center",width: wp("60%"),}}>
    <Text style={{color:"#000",fontWeight:"bold",fontSize: hp(2.5)}}>₹40 Lakhs</Text>
    </View>
    </View>
    </View>

    <View style={{ width: wp("100%"),padding:5}}>
    <View style={{display:"flex", flexDirection:"row",width: wp("95%"),gap:5,justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"#f3f3f3"}}>
    <View  style={{display:"flex", flexDirection:"column",width: wp("37%"),alignItems:"center",}}>
    <Text style={{color:"#000"}}>#2</Text>
    </View>

    <View style={{display:"flex", alignItems:"center",justifyContent:"center",width: wp("50%"),}}>
    <Text style={{color:"#000"}}>₹10 Lakhs</Text>
    </View>
    </View>
    </View>

    <View style={{ width: wp("100%"),padding:5}}>
    <View style={{display:"flex", flexDirection:"row",width: wp("95%"),gap:5,justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"#f3f3f3"}}>
    <View  style={{display:"flex", flexDirection:"column",width: wp("37%"),alignItems:"center",}}>
    <Text style={{color:"#000"}}>#2</Text>
    </View>

    <View style={{display:"flex", alignItems:"center",justifyContent:"center",width: wp("50%"),}}>
    <Text style={{color:"#000"}}>₹10 Lakhs</Text>
    </View>
    </View>
    </View>

    <View style={{ width: wp("100%"),padding:5}}>
    <View style={{display:"flex", flexDirection:"row",width: wp("95%"),gap:5,justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"#f3f3f3"}}>
    <View  style={{display:"flex", flexDirection:"column",width: wp("37%"),alignItems:"center",}}>
    <Text style={{color:"#000"}}>#2</Text>
    </View>

    <View style={{display:"flex", alignItems:"center",justifyContent:"center",width: wp("50%"),}}>
    <Text style={{color:"#000"}}>₹10 Lakhs</Text>
    </View>
    </View>
    </View>
    </View>
  )
}


export default Winning


const styles = StyleSheet.create({})