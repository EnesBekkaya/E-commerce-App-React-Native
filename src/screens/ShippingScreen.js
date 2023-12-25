import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function ShippingScreen() {
  const handleButtonPress = () => {
    Alert.alert('Butona Basıldı', 'Butona basıldı alerti!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Adres</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
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

