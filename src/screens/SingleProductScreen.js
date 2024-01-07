import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';





export default function SingleProductScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;

  const handleBasketIconPress = () => {
  };

  const [expanded, setExpanded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [value, setValue] = useState(0);
  const handleToggleDescription = () => {
    setExpanded(!expanded);
  };

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleSepeteEkle = () => {
    Alert.alert("Ürün sepete eklendi.")
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Ara..."
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity onPress={handleBasketIconPress}>
          <SimpleLineIcons name="basket" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <View style={styles.product}>
          <View style={styles.imageContainer}>
            <Image
              source={product.image}
              style={styles.image}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.productName}> {product.name}</Text>
            <Text style={styles.productPrice}>  {product.price}  </Text>
            <View style={styles.actionsContainer}>
              <NumericInput
                value={value}
                totalWidth={80}
                totalHeight={40}
                step={1}
                minValue={0}
                maxValue={10}
                rounded
                textColor='#8c52ff'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#8c52ff'
                leftButtonBackgroundColor='#8c52ff'
              />
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
            <View>
              <TouchableOpacity style={styles.SepeteEkleButton} onPress={handleSepeteEkle}>
                <Text style={styles.buttonText}> Sepete ekle</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.productDescription}>
              {product.des}
            </Text>


          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SepeteEkleButton: {
    backgroundColor: '#8c52ff',
    padding: 15,
    borderRadius: 19,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    paddingHorizontal: '25%',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  header: {
    height: 85,
    backgroundColor: '#8c52ff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    height: 40,
    maxWidth: '70%',
    backgroundColor: '#fff',
    borderRadius: 19,
    paddingLeft: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 15,
    marginRight: 10,
  },
  icon: {
    marginLeft: 0,
    marginTop: 12,
  },
  product: {
    alignItems: 'center',
    marginTop: 70,
  },
  imageContainer: {
    width: '80%',
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
  },
  toggleButton: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 12,
    marginTop: 25,
  },
  descriptionContainer: {
    marginTop: 8,
    borderRadius: 8,


  },
  productDescription: {
    marginLeft: 10,
    marginRight: 10,
    marginTop:20,
    fontSize: 20,
    lineHeight: 24,
    color: '#555',

  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  actionIcon: {
    marginBottom: 10,
  },
  backButton: {
    marginRight: 30,
    marginTop: 20
  }
});
