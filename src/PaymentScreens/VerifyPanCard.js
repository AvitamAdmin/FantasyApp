import { TextInput, Text, View, Pressable } from 'react-native'
import React, { useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import UploadPanProof from '../Models/UploadPanProof';

export default function VerifyPanCard(){
  const [modalVisible, setModalVisible] = useState(false);

    return(

      
            
              <>
              <View style={{ width: wp("100%"), justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            width: wp("90%"),
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#808080",
            marginTop: 15,
          }}>
          <TextInput placeholder="Name" style={{ color: "#000" }} />
        </View>
        <View style={{ marginTop: 5, width: wp("90%"), }}>
          <Text style={{ fontSize: hp(1.5), color: "#000" }}>Enter your Full name as on PAN Card</Text>
        </View>


        <View
          style={{
            flexDirection: "row",
            width: wp("90%"),
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#808080",
            marginTop: 10,
          }}>
          <TextInput placeholder="PAN" style={{ color: "#000" }} />
        </View>
        <View style={{ marginTop: 5, width: wp("90%"), }}>
          <Text style={{ fontSize: hp(1.5), color: "#000" }}>Please enter valid PAN number</Text>
        </View>


        <View
          style={{
            flexDirection: "row",
            width: wp("90%"),
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#808080",
            marginTop: 10,
          }}>
          <TextInput placeholder="Date of Birth" style={{ color: "#000" }} />
        </View>
        <View style={{ marginTop: 5, width: wp("90%"), }}>
          <Text style={{ fontSize: hp(1.5), color: "#000" }}>Enter your DOB as on PAN </Text>
        </View>


        <Pressable
          onPress={() => setModalVisible(true)}
          style={{
            flexDirection: "row",
            width: wp("90%"),
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#000",
            marginTop: 10,
            justifyContent: "center",
            padding: 8,
            gap: 10
          }}>
          <FontAwesome name="address-card-o" size={19} color="black" />
          <Text style={{ color: "#000", fontWeight: "600", }}>UPLOAD PAN PROOF</Text>

          <UploadPanProof visible={modalVisible} onClose={() => setModalVisible(false)} />
        </Pressable>

        <View style={{ marginTop: 10, justifyContent: "flex-start", width: wp("90%"), display: "flex" }}>
          <Text style={{
            fontWeight: "bold",
            fontSize: hp(1.6),
            color: "#000",
            marginBottom: 11,
            marginTop: 20
          }}>NOTE:</Text>
          <View style={{ marginLeft: 5, gap: 10 ,}}>
            <Text style={{ fontSize: 12, color: "#595959", marginBottom: 2, fontWeight:"500"}}>
              •   Once linked to an account, your PAN cannot be unlinked
            </Text>
            <Text style={{ fontSize: 12, color: "#595959", marginBottom: 2, fontWeight:"500" }}>
              •   It take max of 24 Hrs to get your PAN verified
            </Text>
          </View>
        </View>
      </View><View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "100%",
          padding: 10,
          position: "absolute",
          bottom: 15,
        }}
      >
          <Pressable

            style={{
              backgroundColor: "#d7d7d7",
              padding: 10,
              width: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: hp(1.5), fontWeight: "bold" }}>
              SUBMIT DETAILS
            </Text>
          </Pressable>
        </View>
      </>
        
   
             
    )
}

