import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleUpdateProfile = () => {
    if (!username || !email || !password) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun');
      return;
    }

    Alert.alert('Profil güncellendi');
  };

  const handleExit = () => {
    navigation.navigate('Login');
  };

  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Input
        placeholder="Kullanıcı Adı"
        leftIcon={<FontAwesome name="user" size={24} color="#8c52ff" />}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Input
        placeholder="E-posta"
        leftIcon={<Entypo name="mail" size={24} color="#8c52ff" />}
        onChangeText={(text) => setEmail(text)}
        value={email}
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
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Profili Güncelle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleHome}>
        <Text style={styles.buttonText}>Anasayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleExit}>
        <Text style={styles.buttonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  updateButton: {
    backgroundColor: '#8c52ff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
