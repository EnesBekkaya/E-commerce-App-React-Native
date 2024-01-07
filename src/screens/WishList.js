import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const data = [
  
  {
    id: '2',
    name: 'Sweatshirt',
    price: '100 TL',
    image: require('../../assets/kapuso.png'),
  },
  {
    id: '1',
    name: 'Bere',
    price: '20 TL',
    image: require('../../assets/bere.png'),
  },
  {
    id: '3',
    name: 'Sweatshirt',
    price: '50 TL',
    image: require('../../assets/kapus.png'),
  },
];

export default function FavoriteScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
    >
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>İstek Listesi</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 85,
    backgroundColor: '#8c52ff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  backButton: {
    marginRight: 300,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
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
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 4,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 8,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
});
