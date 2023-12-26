import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, FontAwesome5,Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PaymentScreen() {
  const navigation = useNavigation();

  const [selectedIcon, setSelectedIcon] = useState(null);
  const [prevSelectedIndex, setPrevSelectedIndex] = useState(null);

  const handleIconPress = (index) => {
    if (prevSelectedIndex !== null) {
     
      setSelectedIcon(null);
    }

  
    setSelectedIcon(index);
    setPrevSelectedIndex(index);
  };

  const handleButtonPress = () => {
    Alert.alert('Butona Basıldı', 'Butona basıldı alert!');
  };

  return (
     <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={{marginLeft:70}}> 
        <Text style={styles.headerText}>Ödeme Yöntemi</Text>
        </View>
      </View>


      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={[styles.iconBox, { backgroundColor: selectedIcon === 0 ? '#4CAF50' : '#8c52ff' }]}
          onPress={() => handleIconPress(0)}
        >
          <FontAwesome name="credit-card" size={24} color="#fff" />
          <Text style={styles.iconText}>Kredi Kartı</Text>
          {selectedIcon === 0 && <FontAwesome name="check" size={24} color="#fff" />}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconBox, { backgroundColor: selectedIcon === 1 ? '#4CAF50' : '#8c52ff' }]}
          onPress={() => handleIconPress(1)}
        >
          <FontAwesome name="money" size={24} color="#fff" />
          <Text style={styles.iconText}>Nakit</Text>
          {selectedIcon === 1 && <FontAwesome name="check" size={24} color="#fff" />}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconBox, { backgroundColor: selectedIcon === 2 ? '#4CAF50' : '#8c52ff' }]}
          onPress={() => handleIconPress(2)}
        >
          <FontAwesome5 name="bitcoin" size={24} color="#fff" />
          <Text style={styles.iconText}>Crypto</Text>
          {selectedIcon === 2 && <FontAwesome name="check" size={24} color="#fff" />}
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>
          Devam Et
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#8c52ff',
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    height: 80,
    paddingLeft: 10, 
  },
  backButton: {
    marginRight: 10, 
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconContainer: {
    flexDirection: 'column', 
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15, 
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    height: 60,
    width: '100%',
  },
  iconText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#8c52ff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
    marginLeft: 20,
    alignItems: 'center',
    width: '90%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
