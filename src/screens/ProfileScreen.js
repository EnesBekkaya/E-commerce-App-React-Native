import React, { useState } from 'react';
import { View, StyleSheet,Text,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Tabs from '../components/Profile/Tabs';
import { useNavigation } from '@react-navigation/native';

const HeaderWithUserImage = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigation = useNavigation();

  const handleToggleFavorite = () => {
    navigation.navigate("FavoriteScreen")
  };

  const handleToggleWishlist = () => {
    navigation.navigate("WishList")
  };

  return (
    <>
    <View style={styles.header}>
      
      <View style={styles.userImage}>
       
        <FontAwesome name="user" size={60} color="#8c52ff" />
      </View>

      <Text style={{marginBottom:10,color:'white',fontSize:17,fontWeight:'bold'}}> Kullanıcı Adı</Text>
    
      <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleToggleFavorite}>
            <FontAwesome
              name={isFavorited ? 'heart' : 'heart-o'}
              size={30}
              color={isFavorited ? 'red' : 'black'}
              style={styles.actionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToggleWishlist}>
            <FontAwesome
              name={isWishlisted ? 'star' : 'star-o'}
              size={30}
              color={isWishlisted ? 'yellow' : 'black'}
              style={styles.actionIcon}
            />
          </TouchableOpacity>
        </View>
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default HeaderWithUserImage;
