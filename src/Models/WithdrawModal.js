import { Modal, Pressable, Text, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const WithdrawModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
            Withdrawal amount
          </Text>
          <Text style={{
            fontSize: hp(3.3),
            color: "#29a329",
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
            ₹100
          </Text>
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 40 }}>🏦</Text>
            </View>
            <Text style={{ fontSize: 18, color: 'black' }}>AXIS BANK</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>xxxxxxxxxxxx9876</Text>
          </View>
          <Pressable style={{
            width: '100%',
            backgroundColor: '#3385ff',
            padding: 10,
            alignItems: 'center',
            borderRadius: 5,
            marginBottom: 10,
          }}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>CONFIRM</Text>
          </Pressable>
          <Pressable style={{
            width: '100%',
            borderWidth: 1,
            borderColor: '#000',
            padding: 10,
            alignItems: 'center',
            borderRadius: 5,
          }} onPress={onClose}>
            <Text style={{ color: '#000', fontWeight: 'bold' }}>EDIT PAYMENT</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default WithdrawModal;
