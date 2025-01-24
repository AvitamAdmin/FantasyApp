import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image, Pressable, TextInput ,TouchableOpacity} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MyinfoAndSettings = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [imageUri, setImageUri] = useState();
  const [profileimg, setProfileimg] = useState("")
  const navigation = useNavigation();

 

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
     setProfileimg(result)
    console.log("Result from Image Picker:", result);
  
    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);  
      console.log("Image URI is set to:", result.assets[0].uri); 
    }
  };
  

  const logout = async () => {
    console.log("pressed");
    await AsyncStorage.removeItem('userToken');
    navigation.navigate('RegisterPage');
};


  return (
    <ScrollView >
      <View style={styles.innerContainer}>
      <View style={{display:"flex",flexDirection:"row",}}>
      <View style={{marginBottom: 30, width: wp("85%"),alignItems:"center"}}>
      <Text style={{color:"#3e57c4",fontWeight:"bold"}}>
      Edit Profile</Text>
      </View>

      <View>
      <Pressable
      onPress={() => navigation.goBack()}
      >
      <Feather name="x" size={20} color="black" />
      </Pressable>
      </View>
      </View>
        <View style={styles.profilePicContainer}>
        <Pressable onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.profilePic} />
        ) : (
          <FontAwesome5 name="user-circle" size={100} color="gray" />
        )}
        <MaterialIcons name="edit" size={20} color="black" style={styles.editIcon} />
      </Pressable>
      
        </View>
        <View
        style={{
          width: wp("100%"),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom:15,
          gap: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),    
            marginTop: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
              marginTop:20
            }}
          >
          <Text style={{color:"#000"}}>Name</Text>
          </View>
          <View style={styles.searchSection}>
            <FontAwesome5 name="user" size={18} color="black" />
            <TextInput style={styles.input} placeholder="Name" />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
           
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
          <Text style={{color:"#000"}}>User Name</Text>
          </View>
          <View style={styles.searchSection}>
            <Entypo name="star-outlined" size={18} color="black" />
            <TextInput style={styles.input} placeholder="User Name" />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
          <Text style={{color:"#000"}}>Email</Text>
          </View>
          <View style={styles.searchSection}>
            <Fontisto name="email" size={17} color="black" />
            <TextInput style={styles.input} placeholder="Email" />
            <Pressable
            onPress={()=>navigation.navigate("Add New Mail")}
            >
              <MaterialIcons
                name="edit"
                size={18}
                color="black"
                style={{ paddingRight: 15 }}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
          <Text style={{color:"#000"}}>Mobile Number</Text>
          </View>
          <View style={styles.searchSection}>
            <Entypo name="mobile" size={18} color="black" />
            <TextInput style={styles.input} placeholder="Phone Number" />
            <Pressable 
            onPress={()=>navigation.navigate("Add New Number")}>
              <MaterialIcons
                name="edit"
                size={18}
                color="black"
                style={{ paddingRight: 15 }}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
          <Text style={{color:"#000"}}>Gender</Text>
          </View>
          <View style={styles.radioSection}>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="option1"
                status={selectedValue === "option1" ? "checked" : "unchecked"}
                onPress={() => setSelectedValue("option1")}
                color="#007BFF"
              />
              <Text style={styles.radioLabel}>Male</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="option2"
                status={selectedValue === "option2" ? "checked" : "unchecked"}
                onPress={() => setSelectedValue("option2")}
                color="#007BFF"
              />
              <Text style={styles.radioLabel}>Female</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="option3"
                status={selectedValue === "option3" ? "checked" : "unchecked"}
                onPress={() => setSelectedValue("option3")}
                color="#007BFF"
              />
              <Text style={styles.radioLabel}>Others</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
          <Text style={{color:"#000"}}>Address</Text>
          </View>
          <View style={styles.searchSection}>
            <FontAwesome5 name="address-book" size={18} color="#595959" />
            <TextInput style={styles.input} placeholder="Address" />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
          <Text style={{color:"#000"}}>City</Text>
          </View>
          <View style={styles.searchSection}>
            <MaterialCommunityIcons
              name="home-city-outline"
              size={18}
              color="black"
            />
            <TextInput style={styles.input} placeholder="City" />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
          <Text style={{color:"#000"}}>Pincode</Text>
          </View>
          <View style={styles.searchSection}>
            <AntDesign name="pushpino" size={18} color="black" />
            <TextInput style={styles.input} placeholder="Pincode" />
          </View>
        </View>

        <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: wp("90%"),
          
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("100%"),
            justifyContent: "flex-start",
          }}
        >
        <Text style={{color:"#000"}}>State</Text>
        </View>
        <View style={styles.searchSection}>
          <FontAwesome name="map-pin" size={18} color="black" />
          <TextInput style={styles.input} placeholder="State" />
        </View>
      </View>
      <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
          <Text style={{color:"#000"}}>Country</Text>
          </View>
          <View style={styles.searchSection}>
           <FontAwesome name="map-marker" size={18} color="black" />
            <TextInput style={styles.input} placeholder="Country" />
          </View>
        </View>
      
        <TouchableOpacity
        onPress={() => navigation.navigate("Settings")}
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            borderColor:"#595959",
            display:"flex",
            flexDirection:"row",
            borderWidth:1,
            borderRadius:5,
            padding:8
          }}
        > 
        <View style={{width:wp("10%")}}>
        <Feather name="settings" size={18} color="black" />
       
       </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("70%"),
              justifyContent: "center",
            }}
          >
            <Text style={{color:"#000"}}>Permission Settings</Text>
          </View>
          <View>
          <Feather name="chevron-right" size={18} color="black" />
          </View>
          </TouchableOpacity>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            gap:10,
            paddingTop:10
          }}
        >
         <Pressable onPress={logout} // directly reference the function
  style={{
    display: "flex",
    flexDirection: "row",
    width: wp("25%"),
    justifyContent: "center",
    gap: 10,
    alignItems:"center"
  }}
>
  <MaterialIcons name="logout" size={24} color="black" />
  <Text style={{ fontWeight: "bold" , color:"#000"}}>LOG OUT</Text>
</Pressable>

        </View>

        <View
          style={{
            backgroundColor: "#3385ff",
            padding: 5,
            width: wp("40%"),
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Pressable>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
              UPDATE PROFILE
            </Text>
          </Pressable>
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

export default MyinfoAndSettings;

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderColor: "#595959",
    width: wp("90%"),
    padding: 2,
  },

  input: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 0,
    color: "#424242",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: hp(2),
    color: "#333",
  },
  radioSection: {
    
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("90%"),
  },
  container: {
    alignItems: 'center',
    padding: 16,
  },
  profilePicContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  innerContainer: {
    alignItems: 'center',
    padding: 15,
  }
});