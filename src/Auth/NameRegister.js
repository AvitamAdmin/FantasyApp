import React, {useEffect, useState} from 'react';
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
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Toast from 'react-native-toast-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {api} from '../envfile/api';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ReferAndEarn = () => {
  const navigation = useNavigation();
  const [userName, setuserName] = useState('');
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

  const [loading, setLoading] = useState(false);
  const checkUsernameAndLogin = async () => {
    if (!userName) {
      setErrorMessage('Username is required.');
      return;
    }

    setLoading(true);
    try {
      const email = await AsyncStorage.getItem('email');
      const body = {
        userDtoList: [
          {
            userName: userName,
            email: email,
          },
        ],
      };
      console.log(body, 'body');

      const response = await axios.post(api + '/admin/email/save-userName',body,);
      console.log(response.data, 'response from api');

      setLoading(false);

      if (response.data.success === true) {
        const userName = response.data.username;
        await AsyncStorage.setItem('userName', userName);
        navigation.navigate('DrawerNavigation');
        console.log(navigation.getState());
        console.log(response.data.success, 'Username Registered');
      } else {
        console.log('Invalid username');
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage('Failed to register username. Please try again.');
      console.log(error, 'name register error');
    }
  };  

  return (
    

<SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'andriod' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <LinearGradient
            style={{
              flex: 1,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
            colors={['#020202', '#192451', '#243373', '#3b53bd']}>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'space-between',
              }}
              keyboardShouldPersistTaps="handled">
                <Toast />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: wp('100%'),
                  paddingTop: 50,
                }}>
                <Image
                  source={require('../../assets/LogoFinal.png')}
                  style={{width: wp(53), height: hp(15)}}
                  resizeMode="contain"
                />
              </View>
              
            <View style={styles.container}>
            <Text style={styles.labelText}>Username</Text>

            <View style={styles.inputContainer}>
              <AntDesign name="user" size={24} color="white" />
              <TextInput
                value={userName}
                onChangeText={text => setuserName(text)}
                placeholderTextColor="#ababab"
                placeholder="Enter Username"
                style={styles.textInput}
              />
            </View>

            {loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Pressable
                onPress={checkUsernameAndLogin}
                style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </Pressable>
            )}
          </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Image
                  source={require('../../assets/Final_img.png')}
                  style={{width: wp('100%'), height: hp('36%')}}
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

export default ReferAndEarn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#394FB2',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  backgroundImage: {
    width: wp('100%'),
    height: hp('100%'),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp(5),
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: hp(3),
    color: '#fff',
    textAlign: 'center',
    marginBottom: hp(2),
  },
  labelText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp(2),
    paddingLeft: wp(1),
    marginBottom: hp(1),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingBottom: hp(1),
    marginBottom: hp(2),
  },
  textInput: {
    flex: 1,
    paddingHorizontal: wp(2),
    color: '#fff',
    fontSize: hp(2),
  },
  continueButton: {
    width: wp('90%'),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    backgroundColor: '#3757E2',
    borderRadius: wp(2),
    marginBottom: hp(2),
  },
  continueButtonText: {
    fontWeight: 'bold',
    fontSize: hp(2),
    color: '#fff',
  },
  alternativeLoginContainer: {
    alignItems: 'center',
  },
  alternativeLoginText: {
    color: '#fff',
    fontSize: hp(1.8),
    marginBottom: hp(1.5),
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(2),
  },
  footerText: {
    color: '#fff',
  },
  signupText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});