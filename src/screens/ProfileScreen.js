import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Tabs from '../components/Profile/Tabs';
const HeaderWithUserImage = () => {
  return (
    <>
    <View style={styles.header}>
      
      <View style={styles.userImage}>
       
        <FontAwesome name="user" size={60} color="#8c52ff" />
      </View>

      <Text style={{marginBottom:10,color:'white',fontSize:17,fontWeight:'bold'}}> Kullanıcı Adı</Text>
    </View>

    <Tabs></Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8c52ff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 190, 
  },
  userImage: {
    width: 110, 
    height: 110, 
    marginBottom:10,
    borderRadius: 110, 
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeaderWithUserImage;
