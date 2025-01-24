import { Modal, Pressable, Text, View,Image } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const UploadPanProof = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
    <Pressable
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'rgba(7, 7, 7, 0.3)',
            }}
            onPress={onClose}
          >
            <Pressable
              style={{
                width: '100%',
                backgroundColor: 'white',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                padding: 20,
                alignItems: 'center',
                elevation: 5,
              }}
              onPress={() => {}}
            >
              <Text style={{
                fontSize: hp(2),
                color: "#000",
                marginBottom: 10,
                fontWeight:"500"
              }}>
                Upload PAN Proof
              </Text>
               <Image source={require('../../assets/UploadCardImage.png')} style={{width: wp('35%'), height: hp("15%")}} resizeMode='contain'/>
                          
              <View style={{ alignItems: 'center', marginBottom: 20 }}>
                
                <Text  style={{ fontSize: hp(1.5),fontWeight:"bold"}}>Ensure that the image proofs aren't blurred and your <Text style={{color:"#000",fontWeight:"bold"}}>Full Name,PAN,Signature and Photo</Text> must be clear.</Text>
              </View>
              <View  >
              <Pressable style={{
                width: wp('90%'),
              borderColor:"#000",
                padding: 8,
                alignItems: 'center',
                borderRadius: 5,
                marginBottom: 10,
                borderWidth:1,
                flexDirection:"row",
                justifyContent:"center",gap:10
              }}>
            <FontAwesome name="photo" size={18}  />
                <Text style={{  fontWeight: 'bold',fontSize: hp(1.5)  }}>UPLOAD FROM GALLERY</Text>
              </Pressable>
              </View>
              <View  >
              <Pressable style={{
                width: wp('90%'),
              borderColor:"#000",
                padding: 8,
                alignItems: 'center',
                borderRadius: 5,
                marginBottom: 10,
                borderWidth:1,
                flexDirection:"row",
                justifyContent:"center",gap:10
              }}>
            <FontAwesome name="file-text-o" size={18}  />
                <Text style={{  fontWeight: 'bold',fontSize: hp(1.5)  }}>UPLOAD FROM DOCUMENT</Text>
              </Pressable>
              </View>
            </Pressable>
          </Pressable>
    </Modal>
  );
};

export default UploadPanProof;
