import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import {useNavigation} from '@react-navigation/core';
import { showMessage } from "react-native-flash-message";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { api } from "../envfile/api";

const Otp = ({ route }) => {
  const navigation = useNavigation();
   const [otp, setOtp] = useState(new Array(6).fill(""));
   const [loading, setLoading] = useState(false);
   const inputs = useRef([]);

   const [maskedEmail, setMaskedEmail] = useState("");

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const email = await AsyncStorage.getItem("email"); // Await the email
        if (email) {
          setMaskedEmail(maskEmail(email));
        }
      } catch (error) {
        console.error("Error fetching email from AsyncStorage:", error);
      }
    };

    fetchEmail();
  }, []);

  const maskEmail = (email) => {
    const [name, domain] = email.split("@");
    const maskedName = name.slice(0, 3) + "*".repeat(name.length - 3); // First 3 characters and mask the rest
    return `${maskedName}@${domain}`;
  };
   
  // Focus on the next field when user types
  const focusNextField = (index, value) => {
    if (index < otp.length - 1 && value) {
      inputs.current[index + 1].focus();
    }
    if (index === otp.length - 1) {
      inputs.current[index].blur();
    }
    const otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);
  };

  // OTP Verification
  const verifyOtp = async () => {
    const otpString = otp.join("");
  
    if (otpString.length !== 6) {
      showMessage({
        message: "Invalid OTP",
        description: "Please enter all 6 digits.",
        type: "warning",
      });
      return;
    }
  
    setLoading(true);
  
    try {
      const email = await AsyncStorage.getItem("email");
  
      if (!email) {
        throw new Error("Email not found in AsyncStorage");
      }
  
      const body = {
        userDtoList: [
          {
            otp: otpString,
            email: email,
          },
        ],
      };
  
      console.log("Sending OTP validation request:", body);
  
      const response = await axios.post(api + "/admin/email/validate-otp", body);
  
      console.log("Response received:", response.data);
  
      if (response?.data?.success === true) {
        const token = response.data.userDtoList[0]?.token;
  
        if (token) {
          await AsyncStorage.setItem("jwtToken", token);
        }
  
        console.log("Navigating to Nameregister");
        navigation.navigate("Nameregister");
      } else {
        throw new Error("Invalid OTP or response");
      }
    } catch (error) {
      console.error("Verify OTP Error:", error);
      showMessage({
        message: "Verification Failed",
        description: error.message || "Invalid OTP. Please try again.",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };
  
  

   // Resend OTP
   const resendOtp = async () => {
    try {
        const email = await AsyncStorage.getItem("email"); 
        const body = {
          userDtoList: [
            {
              email: email,
            },
          ],
        };
      setLoading(true);
      await axios.post("http://192.168.0.137:8080/admin/email/send-otp", body
       );

      showMessage({
        message: "OTP Resent",
        description: "A new OTP has been sent to your email.",
        type: "success",
      });
    } catch (error) {
      showMessage({
        message: "Error",
        description: "Unable to resend OTP. Please try again.",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  
  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
      navigation.navigate("NameRegister");
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <><View style={styles.headerContainer}>
    <View style={styles.header}>
    {/* Back Icon */}
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackIcon}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>

    {/* Header Content */}
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerTitle}>Almost There!</Text>
      <Text style={styles.headerSubtitle}>Please enter the OTP sent on {maskedEmail}</Text>
    </View>
  </View>
      </View>
      <View style={styles.container}>
              <View style={styles.otpInputContainer}>
                  {otp.map((data, index) => (
                      <TextInput
                          key={index}
                          style={styles.otpInput}
                          keyboardType="numeric"
                          textAlign="center"
                          maxLength={1}
                          ref={(ref) => (inputs.current[index] = ref)}
                          onChangeText={(value) => focusNextField(index, value)}
                          value={data} />
                  ))}
              </View>
              <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Didn't receive the OTP?</Text>
              <Pressable onPress={resendOtp}>
                <Text style={styles.resendButton}>RESEND OTP</Text>
              </Pressable>
            </View>
            <Pressable
  onPress={() => {
    verifyOtp().catch((error) => {
      console.error("Error in OTP verification:", error);
    });
  }}
  style={styles.button}
  disabled={loading} // Disable button while loading
>
  <Text style={styles.buttonText}>{loading ? "Verifying..." : "LET'S PLAY"}</Text>
</Pressable>

          </View>
          </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: 30,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  otpInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  otpInput: {
    width: 40,
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderColor: "#000",
    opacity: 0.5,
    fontSize: 18,
    borderRadius: 5,
    color:"#000",
    backgroundColor:"#EAEAEA"
  },
  resendContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  resendText: {
    opacity: 0.6,
    color: "#000",

  },
  resendButton: {
    fontWeight: "bold",
    marginLeft: 5,
    color: "#000",

  },
  button: {
    padding: 10,
    width: "90%",
    backgroundColor: "#3385ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  headerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"row",
      width:"100%",
      backgroundColor:'#3385ff',
      height: hp(8)
     
    },
    headerTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff',
      justifyContent: "center",
         
    },
    headerSubtitle: {
      fontSize: 12,
      color: '#fff',
      opacity:0.7,    
    },
    header:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection:"row",
     width:"100%",
     paddingLeft:8
    },
    goBackIcon: {
    justifyContent:"flex-start",
    width: wp("10%")
  },
   headerTextContainer: {
    flexDirection: 'column', // Stack title and subtitle vertically
    width: wp("90%")
},
});

export default Otp;