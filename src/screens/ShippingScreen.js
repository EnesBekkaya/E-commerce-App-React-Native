import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



export default function ShippingScreen() {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('PaymentScreen');

  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={{marginLeft:110}}> 
        <Text style={styles.headerText}> Adres</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} placeholder="Şehir" />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} placeholder="Ülke" />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} placeholder="Posta Kodu" />
        </View>
        <View style={[styles.inputBox, styles.addressInputBox]}>
          <TextInput style={[styles.input, styles.addressInput]} placeholder="Adres" multiline={true} />
        </View>
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
    flexDirection: 'row', // Yatay düzenleme
    justifyContent: 'flex-start', // Başlık sola yaslanacak
    alignItems: 'center', // Başlık ve butonları dikeyde hizalama
    height: 80,
    paddingLeft: 10, // Sol kenardan boşluk bırakma
  },
  backButton: {
    marginRight: 10, // Geri butonunu başlık ile ayırmak için sağa boşluk
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#8c52ff',
    borderRadius: 5,
    marginBottom: 25,
    width: '100%',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
  addressInputBox: {
    height: 100,
  },
  addressInput: {
    height: 80,
  },
  buttonContainer: {
    backgroundColor: '#8c52ff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
    marginLeft:20,
    alignItems: 'center',
    width:'90%'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

