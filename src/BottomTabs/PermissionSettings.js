import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import React, { useState } from "react";
import { Switch } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function PermissionSetting({ visible, onclose }){

    const [Sms , setSms]  = useState(false); 
    const [WhatsApp , setWhatsApp]  = useState(false);
    const [Name , setName]  = useState(false);
    const [Teams , setTeams]  = useState(false);

    const toggle = (state)=>{ 
        setSms(state); 
      }
    const toggle2 = (state)=>{ 
        setWhatsApp(state); 
      }
    const toggle3 = (state)=>{ 
        setName(state); 
      }
    const toggle4 = (state)=>{ 
        setTeams(state); 
      }
    return(
        <View >

{/*  first*/}
        <View style={{display:"flex",flexDirection:"row",width: wp("100%"),padding:15}}>

            <View style={{width: wp("80%")}}>
            <Text style={{color:"#383838", fontWeight:"600"}}>SMS Notification</Text>
            </View>
            <View style={{width: wp("10%")}}>
            <Switch 
            trackColor={{ false: "#c0c0c0", true: "#c0c0c0" }} 
            thumbColor={Sms ? "#3385ff" : "#000"} 
            onValueChange={toggle} 
            value={Sms} 
            />
            </View>
        </View>
       
{/*  second*/}
<View style={{display:"flex",flexDirection:"row",width: wp("100%"),padding:15}}>

<View style={{width: wp("80%")}}>
        <Text style={{color:"#383838", fontWeight:"600"}}>WhatsApp Notification</Text>
        </View>
        <View style={{width: wp("10%")}}>
        <Switch 
        trackColor={{ false: "#c0c0c0", true: "#c0c0c0" }} 
        thumbColor={WhatsApp ? "#3385ff" : "#000"} 
        onValueChange={toggle2} 
        value={WhatsApp} 
        />
        </View>
        </View>

{/*  third*/}
<View style={{display:"flex",flexDirection:"row",width: wp("100%"),padding:15}}>

<View style={{width: wp("80%")}}>
        <Text style={{color:"#383838", fontWeight:"600"}}>Display Full name on Profile</Text>
            <Text style={{fontSize: hp(1.7)}}>Your full name will be visible ro everyone who views your profile</Text>
        </View>
        <View style={{width: wp("10%")}}>
        <Switch 
        trackColor={{ false: "#c0c0c0", true: "#c0c0c0" }} 
        thumbColor={Name ? "#3385ff" : "#000"} 
        onValueChange={toggle3} 
        value={Name} 
        />
        </View>
        </View>
{/*  four*/}
<View style={{display:"flex",flexDirection:"row",width: wp("100%"),padding:15}}>

<View style={{width: wp("80%")}}>
            <Text style={{color:"#383838", fontWeight:"600"}}>Show my Previous teams</Text>
            <Text style={{fontSize: hp(1.7)}}>People who view your profile will be able to see your team for completed matches</Text>
        </View>
        <View style={{width: wp("10%")}}>
        <Switch 
        trackColor={{ false: "#c0c0c0", true: "#c0c0c0" }} 
        thumbColor={Teams ? "#3385ff" : "#000"} 
        onValueChange={toggle4} 
        value={Teams} 
        />
        </View>
        </View>
</View>

    
    )
}