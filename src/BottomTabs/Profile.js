import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ setIsAuthenticated }) => {
  const navigation = useNavigation();

  const logout = async () => {
    try {
      console.log("logout button triggered");
  
      // Clear AsyncStorage
      await AsyncStorage.clear();
  
      // Update authentication state
      setIsAuthenticated(false);
  
      console.log("Logged out and state updated");
  
      // Ensure navigation reset
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginWithEmail" }],
      });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  

  return (
    <View>
      <Pressable onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;



const styles = StyleSheet.create({})