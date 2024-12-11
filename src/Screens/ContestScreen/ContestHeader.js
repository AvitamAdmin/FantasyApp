import { Pressable, StyleSheet, Text, View ,Dimensions} from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
// import CreateContestPopup from '.././screens/Matche Screens/ContestDetailScreen/CreateContestPopup'; // Adjust the path as necessary
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

const ContestHeader = () => {
    const teamName = useSelector((state)=>state.fantasy.matchShortName);
    console.log("ConstHeader is rendering");
    
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const isTablet = screenWidth >= 768;

  return (
    <View style={{ width:wp('100%')}}>
    <View style={[styles.header , { width: isTablet ? wp('75%') : wp('50%') }]}>
      <View style={[styles.textContainer, { width: isTablet ? wp('75%') : wp('50%') }]}>
        <Text style={styles.mainText}>{teamName}</Text>
        <Text style={styles.subText}>21M 30s left</Text>
      </View>
      <View style={styles.iconContainer}>
        {/* <MaterialCommunityIcons
          name="bell-plus-outline"
          size={24}
          color="#fff"
          onPress={() => setModalVisible(true)}
        /> */}
        <Pressable
          onPress={() => navigation.navigate("ADD CASH")}
          style={styles.addCashButton}
        >
          <Text style={styles.addCashText}>₹100</Text>
          {/* <Ionicons name="wallet-outline" size={24} color="white" /> */}
        </Pressable>
      </View>
      {/* <CreateContestPopup visible={modalVisible} onClose={() => setModalVisible(false)} /> */}
    </View>
    </View>
  );
}

export default ContestHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: 'row',
    padding: 5,
    justifyContent:'space-between',
    
  },
  textContainer: {
    display: "flex",
    flexDirection: 'column',
  },
  mainText: {
    fontWeight: "bold",
    color: '#fff',
    fontSize: hp(2.1),
    
  },
  subText: {
    fontSize:  hp(1.5),
    color: "#fff",
    paddingLeft: 7,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    width: wp("20%"),
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  addCashButton: {
    flexDirection: "row",
    marginRight: 20,
    alignItems: "center",
    borderWidth: 2,
    gap: 10,
    borderRadius: 5,
    borderColor: "#fff",
  },
  addCashText: {
    color: "#fff",
    marginLeft: 5,
  },
});
