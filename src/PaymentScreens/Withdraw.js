import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from "react-native-gesture-handler";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import WithdrawModal from "../../components/Model/WithdrawModal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import WithdrawModal from "../Models/WithdrawModal";

const Withdraw = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
          }}
        >
          <Ionicons name="trophy-outline" size={20} color="black" />
          <Text style={{ color:"#000"}}>
            Your Winnings : <Text style={{ fontWeight: "bold" }}>₹100</Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            backgroundColor: "#fff",
            alignItems: "center",
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#808080",
            marginTop: 10,
          }}
        >
          <Text style={{fontSize:20}}>₹</Text>
          <TextInput placeholder="Enter Amount" />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>Minimum withdrawal amount is ₹100</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold",color:"#000"}}>Choose method to withdraw</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            padding: 10,
            backgroundColor: "#fff",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderRadius: 5,
            borderColor: "#808080",
            marginTop: 10,
          }}
        >
          <View style={{ padding: 10 }}>
            <FontAwesome name="bank" size={20} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "85%",
            }}
          >
            <View style={{ flexDirection: "column", gap: 0 }}>
              <Text style={{ color: "#000" }}>AXIS BANK</Text>
              <Text style={{ color: "#000" }}>xxxx xxxx xxxx 9890</Text>
            </View>
            <Pressable>
              <AntDesign
                name="checkcircleo"
                size={18}
                color="#fff"
                style={{ backgroundColor: "#196", borderRadius: 40 }}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: 25,
            padding: 10,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{ width: "45%", borderBottomWidth: 1, borderColor: "#808080" }}
          ></View>
          <View>
            <Text style={{ fontWeight: "bold" }}>OR</Text>
          </View>
          <View
            style={{ width: "45%", borderBottomWidth: 1, borderColor: "#808080" }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            padding: 10,
            justifyContent: "space-between",
            marginTop: 10,
          }}>

          <View
            style={{
              flexDirection: "row",
              gap: 20,
              width: "70%",
            }}>
          
          <View style={{ width: "20%",}}>
          <Image source={require("../../assets/UPI.png")}
          style={{width:50,height:20}} />
          </View>

           <View style={{ width: "80%",}}>
           <Text  style={{color:"#000",fontWeight:"600"}}>UPI</Text>
           </View>
          </View>

          <View style={{ flexDirection: "row",width: "30%" }}>
            <Pressable style={{ padding: 2 }}>
              <Text style={{color:"#000",textDecorationLine:"underline",fontSize:hp(1.7),fontWeight:"600"}}>Link Account</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            padding: 10,
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              width: "70%",
            }}
          >
            <View style={{width:"20%"}}>
            <FontAwesome name="bank" size={20} color="black" />
            </View>
            <View style={{width:"80%"}}>
            <Text  style={{color:"#000",fontWeight:"600"}} >Bank Account</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row",width: "30%" }}>
          <Pressable style={{ padding: 2 }}>
            <Text style={{color:"#000",textDecorationLine:"underline",fontSize:hp(1.7),fontWeight:"600"}}>Link Account</Text>
          </Pressable>
        </View>
        </View>
      </View>
      <View style={{ width: "100%", padding: 10 }}>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={{
            width: "100%",
            backgroundColor:  "#3385ff",
            padding: 10,
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#fff",fontWeight:"600" }}>WITHDRAW</Text>
        </Pressable>
        <WithdrawModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      </View>
    </View>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  // Add styles here if needed
});