import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Dimensions ,Alert} from 'react-native';
import { Entypo ,FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const calculatedWidth = windowWidth;
const calculatedHeight = (calculatedWidth / 720) * 1080;



export default function RegisterScreen() {
  const navigation = useNavigation();

 const[name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const db = SQLite.openDatabase('projectD.db');

  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, password TEXT NOT NULL);',
      );
  });
  

  const handleLogin = () => {
    navigation.navigate('Login');

  };

  const handleSignUp = () => {
    if (name === "") {
      Alert.alert('İsim alanı boş bırakılamaz');
    } else if (email === "") {
      Alert.alert('E-posta alanı boş bırakılamaz');
    } else if (password === "") {
      Alert.alert('Şifre alanı boş bırakılamaz');
    } else {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM users WHERE email = ?',
          [email],
          (tx, results) => {
            if (results.rows.length > 0) {
              Alert.alert( 'Bu e-posta adresi zaten kullanımda.');
            } else {
              tx.executeSql(
                'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
                [name, email, password],
                (tx, results) => {
                  if (results.rowsAffected > 0) {
                    Alert.alert('Başarılı', 'Kayıt başarıyla tamamlandı.');
                  } else {
                    console.log('Etkilenen satır yok:', results.rowsAffected);
                    console.log('Satırlar:', results.rows);
                    Alert.alert('Hata', 'Kayıt sırasında bir hata oluştu.');
                  }
                },
                (error) => {
                  console.error('SQLite hatası kayıt sırasında:', error);
                  Alert.alert('Hata', 'Kayıt sırasında bir hata oluştu.');
                }
              );
            }
          },
          (error) => {
            console.error('SQLite hatası e-posta kontrolü sırasında:', error);
            Alert.alert('Hata', 'E-posta kontrolü sırasında bir hata oluştu.');
          }
        );
      });
    }
  };
  
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/login.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        
        <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#8c52ff" style={styles.Usericon} />
            <TextInput
              style={styles.input}
              placeholder="İsim Soyisim"
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <Entypo name="mail" size={24} color="#8c52ff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Entypo name={showPassword ? "eye-with-line" : "eye"} size={24} color="#8c52ff" />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Şifre"
              secureTextEntry={!showPassword}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.Loginbutton} onPress={handleLogin}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SignUpbutton} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Kaydol</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 4,
    width: calculatedWidth,
    height: calculatedHeight,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    marginBottom: 80,
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  }, Usericon: {
    marginRight: 17,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#8c52ff',
    borderWidth: 1,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  Loginbutton: {
    backgroundColor: '#8c52ff',
    padding: 10,
    borderRadius: 19,
    alignItems: 'center',
    marginBottom: 10,
    marginLeft:33,
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
