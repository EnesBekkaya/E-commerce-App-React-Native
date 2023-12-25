import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CartEmpty = () => {
  const handleStartShopping = () => {
    console.log('Alışverişe başla butonuna tıklandı');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Sepet</Text>
      </View>
      <View style={styles.circle}>
        <AntDesign name="shoppingcart" size={55} color="#8c52ff" />
      </View>
      <Text style={styles.emptyText}>Sepet Boş</Text>
      <TouchableOpacity style={styles.startShoppingButton} onPress={handleStartShopping}>
        <Text style={styles.startShoppingButtonText}>Alışverişe Başla</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8c52ff',
  },
  header: {
    position: 'absolute',
    top: 40,
  },
  circle: {
    width: 135,
    height: 135,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  startShoppingButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 19,
    marginTop: 100,
    marginLeft:17,
  },
  startShoppingButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8c52ff',
  },
});

export default CartEmpty;
