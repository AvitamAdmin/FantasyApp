import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Distributed = () => {
    const navigation = useNavigation();
    const [Like, setLike] = useState(false)
    const [Dislike, setDislike] = useState(false)
  
    const handleLike = () =>{
        return(
            <>
            {setLike(!Like)}
            {setDislike(false)}
            </>
        )
    }
    const handleDisLike = () =>{
        return(
            <>
            {setDislike(!Dislike)}
            {setLike(false)}          
            </>
        )
    }
  return (
    <View style={{height: hp("100%"),width: wp("100%")}}>
    <View style={{height: hp("18%"),width: wp("100%"),position:"relative"}}>
  <LinearGradient
  style={{
    flex: 1,
  }}
  colors={["#101632", "#2A3A83", "#374DAD"]}
>
   <View style={{flexDirection:"column",display:"flex",justifyContent:"center",width: wp("100%"),alignItems:"center",paddingTop:40,gap:20}}>
   <View style={{width: wp("90%"),flexDirection:"row",justifyContent:"space-between",display:"flex"}}>
      <Pressable onPress={()=>navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="#fff" />
      </Pressable>
      <View>
        <Text style={{color:"#fff",fontWeight:"bold",fontSize:15}}>Help & Support</Text>
      </View>
      <View>
        
      </View>
  </View>

  <View  style={{width: wp("90%"),flexDirection:"row",justifyContent:"space-between",display:"flex"}}>
        <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
            <Image source={require('../../../../assets/IMPACT11LogoExtended.png')}style={{height:15,width:80}}/>
            <Text style={{fontWeight:"bold",color:"#fff",fontSize:28}}>|</Text>
            <Text style={{fontWeight:"bold",color:"#fff",}}>Help Center</Text>
        </View>
  </View>
   </View>
</LinearGradient>

</View>

<ScrollView>
<View style={{width: wp("100%"),flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",paddingTop:20,gap:15}}>
          <View style={{width: wp("90%"),flexDirection:"column",display:"flex",justifyContent:"center",backgroundColor:"#fff",padding:15,gap:15}}>
            <View style={{flexDirection:"row",gap:5}}>
                <Text style={{fontWeight:"bold",fontSize:hp(2.4),color:"#000"}}>Winnings</Text>
            </View>
            <View style={{flexDirection:"column",gap:40}}>
                 <View style={{flexDirection:"column",gap:15}}>
                    <Text style={{fontWeight:"bold",fontSize:hp(2.3),color:"#000"}}>If there is a tie between user, how will the
                    winning be distributed?</Text>
                    <Text style={{color:"#000"}}>In an event wherein there’s a tie between two or more users, the winnings are distributed between the users equally.</Text>
                    <Text style={{color:"#000"}}>For example,</Text>
                    <Text style={{color:"#000"}}>If the winning amount for Rank 1 is Rs.1000 and Rank 2 is Rs.500 and if two players have a tie at Rank1, total winnings of both 1sr and 2nd Rank will be split equally between two players.</Text>
                    <Text style={{color:"#000"}}>            i.e. (1000+500)/2 = Rs.750, both players will win Rs.750 each.</Text>
                    
                    
                 </View>

                 <View style={{flexDirection:"row",gap:1}}>
                 <Text style={{color:"#000"}}>In case you still need help you may contact us</Text>
                 <Pressable>
                    <Text style={{color:"#374DAD"}}> here.</Text>
                 </Pressable>
                 </View>

                 <View style={{flexDirection:"column",gap:15}}>
                     <Text style={{fontWeight:"bold",fontSize:hp(2.4),color:"#000"}}>Was this article helpful</Text>
                     <View style={{flexDirection:"row",gap:20}}>
                     <Pressable onPress={()=>handleLike()}>
                     {
                        Like ? <AntDesign name="like1" size={24} color="#3E57C4" /> : <AntDesign name="like2" size={24} color="#000" />
                     }
                     </Pressable>
                     <Pressable onPress={()=>handleDisLike()}>
                     {
                        Dislike ? <AntDesign name="dislike1" size={24} color="#3E57C4" /> : <AntDesign name="dislike2" size={24} color="#000" />
                     }
                     </Pressable>
                     </View>
                 </View>
               
            </View>
          </View>
          <View style={{flexDirection:"row",width: wp("90%"),display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                <Text style={{fontWeight:"bold",color:"#000"}}>Can't find what you are looking for?</Text>
          </View>
         <View style={{flexDirection:"row",width:wp("90%"),display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                   <LinearGradient
                   style={{
                     flex: 1,borderRadius:10
                   }}
                   colors={["#101632", "#2A3A83", "#374DAD"]}
                 >
                    <View style={{width:wp("100%"),flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}}>
         
                     <View style={{width:wp("100%"),flexDirection:"row",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                     <View style={{flexDirection:"column",gap:10,alignItems:"center",width:wp("54%"),}}>
         
                         <Text style={{fontWeight:"bold",color:"#fff",fontSize:hp(2.7)}}>We are here to help!</Text>
         
                         <Pressable style={{borderRadius:5,borderColor:"#fff",borderWidth:1,alignItems:"center",flexDirection:"row",justifyContent:"space-around",width: wp(30),padding:5}}>
                              
                           <Image source={require('../../../../assets/WriteToUsLogo.png')} style={{height:hp(3),width: wp(5),}}/>
                           
                           <Text style={{fontWeight:"bold",color:"#fff",fontSize:hp(2),}}>Write to us</Text>
                         </Pressable>
                         
                     </View>
         
                     <View style={{width:wp("42%"),}}>
                     <Image source={require('../../../../assets/WriteToUs.png')} style={{width: wp(34),height: hp(20)}}
                     
                     /> 
                     </View> 
                     </View> 
         
                    </View>
                   </LinearGradient>
                   </View>
</View>
</ScrollView>



</View>
  )
}

export default Distributed

const styles = StyleSheet.create({})