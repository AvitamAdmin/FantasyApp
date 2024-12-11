import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { showMessage } from "react-native-flash-message";
import { api } from "../envfile/api";

const OtpScreen = () => {
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
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter OTP</Text>
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
            value={data}
          />
        ))}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#3385ff" style={styles.loader} />
      ) : (
        <Pressable onPress={verifyOtp} style={styles.button}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </Pressable>
      )}

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive the OTP?</Text>
        <Pressable onPress={resendOtp}>
          <Text style={styles.resendButton}>RESEND OTP</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 18,
    borderRadius: 5,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3385ff",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resendContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  resendText: {
    fontSize: 14,
    color: "#666",
  },
  resendButton: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "#3385ff",
  },
  loader: {
    marginVertical: 20,
  },
});

export default OtpScreen;
