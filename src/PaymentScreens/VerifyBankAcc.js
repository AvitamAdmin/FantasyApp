import { TextInput, Text, View, Pressable } from 'react-native'
import React, { useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UploadBankAcc from '../Models/UploadBanAcc';

export default function VerifyBankAcc(){
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
          <TextInput placeholder="Account Number" style={{ color: "#000" }} />
        </View>
        <View style={{ marginTop: 5, width: wp("90%"), }}>
          <Text style={{ fontSize: hp(1.5), color: "#000" }}>Enter your Bank Account number</Text>
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
          <TextInput placeholder="Retype Account Number" style={{ color: "#000" }} />
        </View>
        <View style={{ marginTop: 5, width: wp("90%"), }}>
          <Text style={{ fontSize: hp(1.5), color: "#000" }}>Confirm your Bank Account number</Text>
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
          <TextInput placeholder="IFSC Code" style={{ color: "#000" }} />
        </View>
        <View style={{ marginTop: 5, width: wp("90%"), }}>
          <Text style={{ fontSize: hp(1.5), color: "#000" }}>Enter 11 digit Bank IFSC Code </Text>
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
          <TextInput placeholder="Bank Name" style={{ color: "#000" }} />
        </View>
        <View style={{ marginTop: 5, width: wp("90%"), }}>
          <Text style={{ fontSize: hp(1.5), color: "#000" }}>Your Bank Name</Text>
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
          <TextInput placeholder="Branch Name" style={{ color: "#000" }} />
        </View>
        <View style={{ marginTop: 5, width: wp("90%"), }}>
          <Text style={{ fontSize: hp(1.5), color: "#000" }}>Your Branch Name</Text>
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
          <TextInput placeholder="State" style={{ color: "#000" }} />
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
          <MaterialCommunityIcons name="bank-outline" size={24} color="black" />
          <Text style={{ color: "#000", fontWeight: "600", }}>UPLOAD BANK PROOF</Text>

          <UploadBankAcc visible={modalVisible} onClose={() => setModalVisible(false)} />
        </Pressable>

        
      </View>
      <View
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

