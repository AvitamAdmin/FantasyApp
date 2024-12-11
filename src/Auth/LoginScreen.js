import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/AntDesign";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginWithEmail = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    const authtoken = AsyncStorage.getItem('jwtToken');
    if(authtoken){
      navigation.navigate("DrawerNavigation");
    }else{
      navigation.navigate("LoginScreen");
    }
  }, []);
  


  const [loading, setLoading] = useState(false);

  const checkEmailAndLogin = async () => {
    if (!email) {
      setErrorMessage("Email is required.");
      return;
    }
  
    setLoading(true); 
    try {
      const response = await axios.post('http://192.168.0.129:8080/admin/email/send-otp', { 
        email: email,
      });
  
      setLoading(false); 
  
      if (response?.data?.success) {
        await AsyncStorage.setItem("email", response.data.email);
        navigation.navigate("OTP", { email: response.data.email });
  
        console.log(response.data.message, "OTP Sent");
        console.log(navigation.getState());

      } else {
       
        setErrorMessage(response.data.message || "Invalid email");
        console.log("Invalid email");
      }
    } catch (error) {
      setLoading(false); 
      setErrorMessage("Failed to send OTP. Please try again.");
      console.error("Error sending OTP:", error.message);
    }
  };
  


  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "android" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* <ImageBackground
            source={require("../../../assets/Login Page 3.png")}
            resizeMode="cover"
            style={styles.backgroundImage}
          > */}
            <View style={styles.container}>
              <Text style={styles.headerText}>LOGIN</Text>

              <Text style={styles.labelText}>Email</Text>

              <View style={styles.inputContainer}>
              
              <AntDesign name="mail" size={24} color="white" />
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholderTextColor="#ababab"
                  placeholder="Enter Email"
                  style={styles.textInput}
                  
                />
              </View>



              {loading ? (
  <ActivityIndicator size="large" color="#fff" />
) : (
  <Pressable onPress={checkEmailAndLogin} style={styles.continueButton}>
    <Text style={styles.continueButtonText}>Continue</Text>
  </Pressable>
)}


              <View style={styles.alternativeLoginContainer}>
                <Pressable onPress={() =>       navigation.navigate("OTP", { email })
}>
                  <Text style={styles.alternativeLoginText}>
                    Login with Mobile Number
                  </Text>
                </Pressable>

                <View style={styles.signupContainer}>
                  <Text style={styles.footerText}>Don't have an account? </Text>
                  <Pressable onPress={() => navigation.navigate("RegisterPage")}>
                    <Text style={styles.signupText}>Sign Up</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          {/* </ImageBackground> */}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginWithEmail;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#394FB2",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  backgroundImage: {
    width: wp("100%"),
    height: hp("100%"),
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: wp(5),
  },
  headerText: {
    fontWeight: "bold",
    fontSize: hp(3),
    color: "#fff",
    textAlign: "center",
    marginBottom: hp(2),
  },
  labelText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: hp(2),
    paddingLeft: wp(1),
    marginBottom: hp(1),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#fff",
    paddingBottom: hp(1),
    marginBottom: hp(2),
  },
  textInput: {
    flex: 1,
    paddingHorizontal: wp(2),
    color: "#fff",
    fontSize: hp(2),
  },
  continueButton: {
    width: wp("90%"),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(1.5),
    backgroundColor: "#3757E2",
    borderRadius: wp(2),
    marginBottom: hp(2),
  },
  continueButtonText: {
    fontWeight: "bold",
    fontSize: hp(2),
    color: "#fff",
  },
  alternativeLoginContainer: {
    alignItems: "center",
  },
  alternativeLoginText: {
    color: "#fff",
    fontSize: hp(1.8),
    marginBottom: hp(1.5),
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp(2),
  },
  footerText: {
    color: "#fff",
  },
  signupText: {
    color: "#fff",
    fontWeight: "bold",
  },
});