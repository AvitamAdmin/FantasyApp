import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Image,
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
} from "react-native";
import axios from "axios";
import AntDesign from 'react-native-vector-icons/AntDesign';
 /**import { OTPWidget } from "@msg91comm/sendotp-react-native"; */  
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const widgetId = "346543686978353039333132";
const tokenAuth = { authToken: "384577TwCDcUNKMXxm6656eba5P1" };

const LoginPhone = () => {
  const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => setKeyboardVisible(true),
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => setKeyboardVisible(false),
      );
  
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, []);
  
    useEffect(() => {
      const authtoken = AsyncStorage.getItem('jwtToken');
      if (authtoken) {
        navigation.navigate('DrawerNavigation');
      } else {
        navigation.navigate('LoginScreen');
      }
    }, []);
  
    const [loading, setLoading] = useState(false);
  
    const checkEmailAndLogin = async () => {
      if (!email) {
        setErrorMessage('Email is required.');
        return;
      }
  
      setLoading(true);
      try {
        const response = await axios.post(
          'http://192.168.0.129:8080/admin/email/send-otp',
          {
            email: email,
          },
        );
  
        setLoading(false);
  
        if (response?.data?.success) {
          await AsyncStorage.setItem('email', response.data.email);
          navigation.navigate('otp', {email: response.data.email});
  
          console.log(response.data.message, 'OTP Sent');
          console.log(navigation.getState());
        } else {
          setErrorMessage(response.data.message || 'Invalid email');
          console.log('Invalid email');
        }
      } catch (error) {
        setLoading(false);
        setErrorMessage('Failed to send OTP. Please try again.');
        console.error('Error sending OTP:', error.message);
      }
    };


  return (
    


    <SafeAreaView style={{ flex: 1 }}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "andriod" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
          colors={["#020202", "#192451", "#243373", "#3b53bd"]}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "space-between",
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: wp("100%"),
                paddingTop: 50,
              }}
            >
              <Image
                source={require("../../assets/LogoFinal.png")}
                style={{ width: wp(53), height: hp(15) }}
                resizeMode="contain"
              />
            </View>
            <View style={{ flex: 1, justifyContent: "center", width: wp("100%") }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: wp("100%"),
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 30,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: hp(2), color: "#fff" }}>
                  LOGIN
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  width: wp("100%"),
                  paddingLeft: 15,
                }}
              >
                <Text
                  style={{
                    padding: 10,
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: hp(2),
                  }}
                >
                  Mobile Number
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: wp("100%"),
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 5,
                  gap: 25,
                  paddingBottom: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: wp("90%"),
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderColor: "#fff",
                    gap: 2,
                  }}
                >
                  <AntDesign name="mobile1" size={24} color="white" />
                  <TextInput
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
                    placeholderTextColor="#ababab"
                    placeholder="Mobilenumber"
                    style={{
                      width: wp("80%"),
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: 5,
                      borderRadius: 7,
                      alignItems: "center",
                      color: "#fff",
                      fontSize: hp(2),
                    }}
                  />
                </View>
                <Pressable
                  onPress={sendOtp}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: wp("90%"),
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    backgroundColor: "#3757E2",
                    borderRadius: 7,
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: hp(2), color: "#fff" }}>
                    Continue
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: wp("100%"),
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  gap: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Pressable onPress={() => navigation.navigate("LoginEmail")}>
                    <Text style={{ fontWeight: "bold", fontSize: hp(1.8), color: "#fff" }}>
                      Login With Email
                    </Text>
                  </Pressable>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={styles.footerText}>Don't have an account?</Text>
                  <Pressable onPress={() => navigation.navigate("RegisterPage")}>
                    <Text style={styles.footerText}> Signup</Text>
                  </Pressable>
                </View>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                source={require("../../assets/Final_img.png")}
                style={{ width: wp("100%"), height: hp("36%") }}
                resizeMode="contain"
              />
            </View>
          </ScrollView>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  footerText: {
    
    fontSize: hp(1.6),
    color: "#fff",
  }
  
});

export default LoginPhone;