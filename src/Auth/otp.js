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
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { showMessage } from "react-native-flash-message";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { api } from "../envfile/api";

const Otp = ({ route }) => {
  const navigation = useNavigation();
   const [otp, setOtp] = useState(new Array(6).fill(""));
   const [loading, setLoading] = useState(false);
   const inputs = useRef([]);

   
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
      const email = await AsyncStorage.getItem("email"); // Await the value of email

      const body = {
        otp: otpString, // Use the string version of OTP
        email: email,   // Email fetched from AsyncStorage
      };
  
      console.log("Request Body:", body);
  
      const response = await axios.post( api +
        "/admin/email/validate-otp", 
        body
      );
  
      if (response.data.success === true) {
        const token = response.data.token;
        await AsyncStorage.setItem('jwtToken', token); // Save JWT token
        await AsyncStorage.setItem("email",  response.data.email); 
  
        navigation.navigate("Nameregister" );
        console.log(response.data.message, "OTP Sent");
      } else {
        console.log("Invalid email");
  
      }
    } catch (error) {
      showMessage({
        message: "Verification Failed",
        description: "Invalid OTP. Please try again.",
        type: "danger",
      });
      console.log(error,"verify otp error");
      
    } finally {
      setLoading(false);
    }
  };

   // Resend OTP
   const resendOtp = async () => {
    try {
        const email = await AsyncStorage.getItem("email"); 
        const body = {
         
            email: email,   // Email fetched from AsyncStorage
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
      <Text style={styles.headerSubtitle}>Please enter the OTP sent on 9*******19</Text>
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
            <Pressable onPress={verifyOtp} style={styles.button}>
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
  },
  resendContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  resendText: {
    opacity: 0.6,
  },
  resendButton: {
    fontWeight: "bold",
    marginLeft: 5,
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
      justifyContent: 'center',
      flexDirection:"row",
     width:"95%",
    },
    goBackIcon: {
    
    justifyContent:"flex-start",
    width: wp("15%")
  },
   headerTextContainer: {
    flexDirection: 'column', // Stack title and subtitle vertically
   
},
});

export default Otp;