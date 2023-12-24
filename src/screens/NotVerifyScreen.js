import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const calculatedWidth = windowWidth;
const calculatedHeight = (calculatedWidth / 720) * 1080;

export default function NotVerifyScreen() {

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/NotVerify.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.Loginbutton} onPress={() => alert("Giriş Yap butonuna tıklandı")}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignUpbutton} onPress={() => alert("Kaydol butonuna tıklandı")}>
          <Text style={styles.buttonText}>Kayıt ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 4,
    width: calculatedWidth,
    height: calculatedHeight,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 230,
  },
 Loginbutton: {
    backgroundColor: '#8c52ff',
    padding: 10,
    paddingHorizontal: 80,
    borderRadius: 19,
    alignItems: 'center',
    marginBottom: 25,
    marginLeft:10,
    flex: 1, 
  },SignUpbutton: {
    backgroundColor: '#8c52ff',
    padding: 10,
    borderRadius: 19,
    alignItems: 'center',
    marginBottom: 10,
    marginLeft:10,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
