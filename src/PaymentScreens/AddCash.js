import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { useNavigation } from "@react-navigation/core";


if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AddCash = () => {
  const [amount, setAmount] = useState("");
  const [walletDropdown, setWalletDropdown] = useState(false);
  const navigation = useNavigation()
  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };
  const toggleDropdown = () => {
    // Animate the layout changes
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setWalletDropdown(!walletDropdown);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#eaeaea" }}>
     

      <View
        style={{
          backgroundColor: "#3e57c4",
          padding: 10,
          alignItems: "center",
          borderBottomEndRadius: 15,
          borderBottomStartRadius: 15,
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View>
            <Ionicons name="wallet-outline" size={24} color="#fff" />
          </View>
          <View>
            <Text style={{ color: "#FFFFFF", fontSize: hp(2), fontWeight: "600" }}>
              My Balance
            </Text>
          </View>
        </View>
        <Pressable
          onPress={toggleDropdown}
          style={{
            flexDirection: "row",
            gap: 4,   
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: hp(3.4),
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              ₹100
            </Text>
          </View>

          <View>
            {walletDropdown === true ? (
              <Entypo name="chevron-up" size={24} color="#fff" />
            ) : (
              <Entypo name="chevron-down" size={24} color="#fff" />
            )}
          </View>
        </Pressable>
        {walletDropdown && (
          <View style={{ width: "50%" }}>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FFFFFF", fontSize: 14 }}>
                  Amount unutilised :
                </Text>
                <Text style={{ color: "#FFFFFF", fontSize: 14 }}>₹0</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FFFFFF", fontSize: 14 }}>
                  Winnings :
                </Text>
                <Text style={{ color: "#FFFFFF", fontSize: 14 }}>₹0</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FFFFFF", fontSize: 14 }}>
                  Discount :
                </Text>
                <Text style={{ color: "#FFFFFF", fontSize: 14 }}>₹ 0</Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          padding: 10,
          margin: 15,
          marginVertical: 20,
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <View
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: hp(2), marginBottom: 10, fontWeight: "600",color:"#000" }}>
            Add cash
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between", 
              width: "34%",
              borderWidth: 1,
              borderColor: "#00A000",
              borderRadius: 5,
              alignItems: "center",
              // padding: 2,
            }}
          >
            <View style={{ width: "16%", }}>
              <Text style={{ fontSize: 20, fontWeight: "400" ,color:"#000",paddingLeft:5}}>₹</Text>
            </View>
            <TextInput
              style={{
                width: "65%",
                fontSize: hp(2.5),
              }}
              value={amount}
              onChangeText={handleAmountChange}
              keyboardType="numeric"
            />
            <View style={{ width: "23%" }}>
              <Pressable onPress={() => handleAmountChange("")} >
                <AntDesign name="closecircleo" size={17} color="black" />
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100%",
            marginTop: 5,
            gap: 5,
            paddingTop:10,
            paddingBottom:10
          }}
        >
          <View>
            <Text style={{color:"#000"}}>Choose amount:</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              color:"#000"
            }}
          >
            {["200", "300", "500", "1000"].map((option) => (
              <TouchableOpacity
                key={option}
                style={{
                  width: "20%",
                  backgroundColor: "#FFFFFF",
                  padding: 5,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "#000",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
                onPress={() => handleAmountChange(option)}
              >
                <View style={{ width: "15%" }}>
                  <Text style={{ fontSize: 14, fontWeight: "400" }}>₹ </Text>
                </View>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
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
        onPress={()=>navigation.navigate("PAYMENT OPTIONS")}
          style={{
            backgroundColor: "#3e57c4",
            padding: 10,
            width: "100%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            ADD ₹ {amount}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddCash