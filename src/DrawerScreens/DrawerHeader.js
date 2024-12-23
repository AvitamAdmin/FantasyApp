import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/core";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DrawerHeader = (props) => {
  const { width: screenWidth } = useWindowDimensions();
  const navigation = useNavigation();
  const isTablet = screenWidth >= 768;
  const imageSize = screenWidth * 0.2;

  const navigateTo = (screen) => navigation.navigate(screen);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        {/* User Profile */}
        <View style={styles.profileContainer}>
          <View style={styles.profileDetails}>
            <Image
              source={require("../../assets/user-profile.png")}
              style={[styles.profileImage, { width: imageSize, height: imageSize, borderRadius: imageSize / 2 }]}
            />
            <View>
              <Text style={styles.profileName}>shivam11s</Text>
              <Text style={styles.profileImpact}>Total Impacts: 767</Text>
            </View>
          </View>
          <Image
            source={require("../../assets/starplace.png")}
            style={styles.starImage}
          />
        </View>

        {/* Wallet Balance */}
        <Pressable
          style={[styles.walletContainer, { width: isTablet ? wp("72%") : wp("82%") }]}
          onPress={() => navigateTo("MyBalance")}
        >
          <View style={[styles.walletHeader, { width: isTablet ? wp("68%") : wp("74%") }]}>
            <View style={styles.walletDetails}>
              <Ionicons name="wallet-outline" size={25} color="black" />
              <Text style={styles.walletText}>My Balance</Text>
            </View>
            <Text style={styles.walletAmount}>₹100</Text>
          </View>
          <View style={[styles.walletActions, { width: isTablet ? wp("70%") : wp("77%") }]}>
            <Pressable
              style={styles.addCashButton}
              onPress={() => navigateTo("ADD CASH")}
            >
              <Text style={styles.addCashText}>+  ADD CASH</Text>
            </Pressable>
            <Pressable
              style={styles.withdrawButton}
              onPress={() => navigateTo("WITHDRAW")}
            >
              <Image
                source={require("../../assets/Withdraw.png")}
                style={styles.withdrawIcon}
              />
              <Text style={styles.withdrawText}>WITHDRAW</Text>
            </Pressable>
          </View>
        </Pressable>
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />
     
      <Text style={styles.versionText}>VERSION 1.22.0</Text>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    width: wp("100%"),
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  profileDetails: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  profileImage: {
    resizeMode: "cover",
  },
  profileName: {
    fontSize: hp(2.5),
    fontWeight: "700",
    color: "#3f58c5",
  },
  profileImpact: {
    fontSize: hp(1.7),
    fontWeight: "500",
    color:'#000'
  },
  starImage: {
    height: hp(11),
    width: wp(17),
  },
  walletContainer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    elevation: 15,
  },
  walletHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  walletDetails: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  walletText: {
    fontSize: hp(2),
    fontWeight: "600",
    color:'#000'
  },
  walletAmount: {
    fontSize: hp(2.6),
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
  walletActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  addCashButton: {
    flexDirection: "row",
    backgroundColor: "#37b469",
    paddingHorizontal: 20,
    padding: 5,
    borderRadius: 4,
    justifyContent: "center",
    
  },
  addCashText: {
    color: "#fff",
    fontWeight: "bold",
    
  },
  withdrawButton: {
    flexDirection: "row",
    backgroundColor: "#37b469",
    paddingHorizontal: 20,
    padding: 5,
    borderRadius: 4,
    justifyContent: "center",
  },
  withdrawIcon: {
    width: 20,
    height: 20,
  },
  withdrawText: {
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 7
  },
  versionText: {
    marginTop: 10,
    fontSize: hp(1.5),   
    color: "gray",
  },
});

export default DrawerHeader;