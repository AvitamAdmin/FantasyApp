// import React, { useState } from "react";
// import {
//   Image,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View, 
//   ToastAndroid,
//   Linking,
// } from "react-native";
// import Clipboard from '@react-native-clipboard/clipboard';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// // import ReferalInstruction from "../../components/Model/ReferalInstruction";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { Share } from 'react-native';  // Correct import

// const ReferAndEarn = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const url = "https://www.whatsapp.com/";
//   const code = "123QWER";
  
//   const onShare = async () => {
//     try {
//       const result = await Share.share({
//         message: 'Check out this fantasy app! https://yourapp.link',  // Replace with your URL or message
//       });
//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           console.log("Shared with activity type: ", result.activityType);
//         } else {
//           console.log("Shared successfully!");
//         }
//       } else if (result.action === Share.dismissedAction) {
//         console.log("Share dismissed.");
//       }
//     } catch (error) {
//       console.error("Error sharing:", error);
//     }
//   };


//   const shareToWhatsApp = () => {
//     const message = 'Check out this awesome app! https://yourapp.link';
//     const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
    
//     Linking.openURL(whatsappUrl).catch(() => {
//       alert('WhatsApp is not installed on your device.');
//     });
//   };

//   // Function to copy to clipboard
//   const copyToClipboard = () => {
//     Clipboard.setString(code);
//     // Show feedback (for Android only)
//     ToastAndroid.show('Code copied to clipboard!', ToastAndroid.SHORT);
//   };

//   return (
//     <View >
//       <View
//         style={{
//           height: hp("68%"),
//           backgroundColor: "#3385ff",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           alignItems: "center",
//           width: wp("100%"),
//           borderBottomEndRadius: 15,
//           borderBottomStartRadius: 15,
//         }}
//       >
//         <View
//           style={{
//             width: wp("100%"),
//             height: hp("15%"),
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-end",
//             alignItems: "center",
//           }}
//         >
//           <View
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "flex-end",
//               alignItems: "center",
//               width: wp("85%"),
//             }}
//           >
//             <Pressable onPress={() => setModalVisible(true)}>
//               {/* <AntDesign name="questioncircleo" size={24} color="#fff" /> */}
//             </Pressable>
//             {/* <ReferalInstruction
//               visible={modalVisible}
//               onClose={() => setModalVisible(false)}
//             /> */}
//           </View>
//         </View>
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: wp("100%"),
//             // height: hp(72),
//           }}
//         >
//           <View>
//             <Text style={{ fontWeight: "500", fontSize: hp(2.8), color: "#fff" }}>
//               Invite Friends & Earn
//             </Text>
//             <View
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Text style={{ fontWeight: "bold", fontSize: hp(4.3), color: "#fff" }}>
//                 ₹500
//               </Text>
//               <Text
//                 style={{
//                   fontWeight: "500",
//                   fontSize: hp(2),
//                   color: "#fff",
//                   paddingTop: 10,
//                 }}
//               >
//                 /Friends
//               </Text>
//             </View>
//           </View>
//           <View
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               width: wp("100%"),
//               justifyContent: "center",
//               gap: 10,
//               alignItems: "center",
//             }}
//           >
//             <Image
//               source={require("../../../assets/Refer&Earn.png")}
//               resizeMode="contain"
//               style={{ width: wp(70), height: hp(32) }}
//             />
//             <Pressable style={{ flexDirection: "column", gap: 5 }}>
//               <Text style={{ color: "#fff", fontWeight: "bold" }}>
//                 YOUR REFFERAL CODE :
//               </Text>
//               <Pressable
//       onPress={copyToClipboard}
//       style={{
//         flexDirection: "row",
//         gap: 13,
//         alignItems: "center",
//         backgroundColor: "#C8D2FF",
//         padding: 3,
//         borderRadius: 5,
//         width: wp("40%")
//       }}
//     >
//       <Text style={{ fontSize: 21, fontWeight: "bold", alignItems: "center", color:'#000',width: wp("30%"),paddingLeft:10}}>{code}</Text>
//       <FontAwesome6
//         name="copy"
//         size={24}
//         color="black"
//         style={{ opacity: 0.9, width: wp("10%"),justifyContent: "center", }}
//       />
//     </Pressable>
//             </Pressable>
//           </View>

//           <View
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               width: wp("100%"),
//               justifyContent: "space-evenly",
//               padding: 10,
//             }}
//           >
//            <Pressable onPress={shareToWhatsApp} style={styles.button}>
//       <Ionicons name="logo-whatsapp" size={24} color="#fff" />
//       <Text style={styles.buttonText}>INVITE NOW</Text>
//     </Pressable>
//             <Pressable
//               onPress={onShare}
//               style={{
//                 padding: 10,
//                 backgroundColor: "#D4D4D4",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 5,
//                 borderRadius: 5,
//                 width: wp("40%"),
//               }}
//             >
//               <Ionicons name="share-social-outline" size={23} color="black" />
//               <Text style={{color:'#000',fontWeight: 'bold',}}>OTHER OPTIONS</Text>
//             </Pressable>
//           </View>
//         </View>
//       </View>

//       <View
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           width: wp("100%"),
//           height: hp("27%"),
//           justifyContent: "space-around",
//           backgroundColor: "#fff",
//           padding: 5,
//         }}
//       >
//         <Text style={{ fontSize: hp(1.8), fontWeight: "800", textAlign: "center",color:'#000', }}>
//           HOW IT WORKS
//         </Text>

//         <View style={styles.container}>
//       <View style={styles.card}>
//         <Image source={require("../../../assets/Hand_Shake.jpg")} style={styles.image} />
//         <Text style={styles.text}>Invite your friends</Text>
//       </View>

//       <View style={styles.card}>
//         <Image source={require("../../../assets/Friends_Play.jpg")} style={styles.image} />
//         <Text style={styles.text}>Friends join and play</Text>
//       </View>

//       <View style={styles.card}>
//         <Image source={require("../../../assets/cash_wallet.png")} style={styles.image} />
//         <Text style={styles.text}>You earn Rewards</Text>
//       </View>
//     </View>
//       </View>
//     </View>
//   );
// };



// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: wp("100%"),
//   },
//   card: {
//     flexDirection: 'column',
//     width: wp("25%"),
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//   },
//   image: {
//     width: 70,
//     height: 70,
//   },
//   text: {
//     fontSize: hp(1.7),
//     textAlign: 'center',
//     color:'#000',
//   },
//   button: {
//     padding: 10,
//     backgroundColor: '#25D366',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 5,
//     borderRadius: 5,
//     width: wp('40%'),
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default ReferAndEarn;







import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReferAndEarn = () => {
  return (
    <View>
      <Text>ReferAndEarn</Text>
    </View>
  )
}

export default ReferAndEarn

const styles = StyleSheet.create({})