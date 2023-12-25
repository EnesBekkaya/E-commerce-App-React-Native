import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function Profile() {
  const [showPassword, setShowPassword] = useState(false);

  const handleUpdateProfile = () => {
    console.log('Profil güncellendi');
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Kullanıcı Adı"
        leftIcon={<FontAwesome name="user" size={24} color="#8c52ff" />}
      />
      <Input
        placeholder="E-posta"
        leftIcon={<Entypo name="mail" size={24} color="#8c52ff" />}
      />
      <Input
        placeholder="Şifre"
        secureTextEntry={!showPassword}
        leftIcon={
          <Entypo
            name={showPassword ? 'eye-with-line' : 'eye'}
            size={24}
            color="#8c52ff"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Profili Güncelle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  updateButton: {
    backgroundColor: '#8c52ff',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
