import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';
import { useNavigation } from '@react-navigation/native';

const db = SQLite.openDatabase('projectD.db');

export default function AdminScreen({ navigation }) {
  const [shopName, setShopName] = useState('');
  const [shopOwner, setShopOwner] = useState('');
  const [shopType, setShopType] = useState('');

  const handleAddShop = () => {
    if (shopName === '') {
      Alert.alert('Mağaza ismi boş bırakılamaz.');
      return;
    } else if (shopOwner === '') {
      Alert.alert('Mağaza sahibi boş bırakılamaz.');
      return;
    } else if (shopType === '') {
      Alert.alert('Mağaza tipi boş bırakılamaz.');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS shops (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, owner TEXT, type TEXT);'
      );

      tx.executeSql(
        'SELECT * FROM shops WHERE name = ?;',
        [shopName],
        (_, results) => {
          if (results.rows.length > 0) {
            Alert.alert('Bu mağaza ismi zaten kullanımda.');
          } else {
            tx.executeSql(
              'INSERT INTO shops (name, owner, type) VALUES (?, ?, ?);',
              [shopName, shopOwner, shopType],
              (_, results) => {
                console.log('Mağaza başarıyla eklendi!');

                tx.executeSql('SELECT * FROM shops;', [], (_, results) => {
                  console.log('Bütün Mağazalar:', results.rows._array);
                });

                setShopName('');
                setShopOwner('');
                setShopType('');

                Alert.alert('Mağaza ekleme başarılı.');
              },
              (_, error) => {
                console.error('Mağaza eklenirken bir hata oluştu:', error);
              }
            );
          }
        }
      );
    });
  };
  const handleGoBackToLogin = () => {
    navigation.navigate('Login'); 
  };
  const handleDeleteShop = () => {
    if (shopName === '') {
      Alert.alert('Mağaza ismi boş bırakılamaz.');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM shops WHERE name = ?;',
        [shopName],
        (_, results) => {
          if (results.rowsAffected > 0) {
            console.log('Mağaza başarıyla silindi!');

            tx.executeSql('SELECT * FROM shops;', [], (_, results) => {
              console.log('Güncellenmiş Mağaza Listesi:', results.rows._array);
            });

            setShopName('');
            setShopOwner('');
            setShopType('');

            Alert.alert('Mağaza silme başarılı.');
          } else {
            Alert.alert('Bu isme sahip bir mağaza bulunamadı.');
          }
        },
        (_, error) => {
          console.error('Mağaza silinirken bir hata oluştu:', error);
        }
      );
    });
  };
 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBackToLogin} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Mağaza İsmi:</Text>
        <TextInput
          style={styles.input}
          value={shopName}
          onChangeText={(text) => setShopName(text)}
        />
        <Text style={styles.label}>Mağaza Sahibi:</Text>
        <TextInput
          style={styles.input}
          value={shopOwner}
          onChangeText={(text) => setShopOwner(text)}
        />
        <Text style={styles.label}>Mağaza Tipi:</Text>
        <TextInput
          style={styles.input}
          value={shopType}
          onChangeText={(text) => setShopType(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddShop}>
          <Text style={styles.buttonText}>Mağaza Ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteShop}>
          <Text style={styles.buttonText}>Mağaza Sil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  },
  backButton: {
    marginRight: 300,
    marginTop: 20,
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
  formContainer: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#8c52ff',
    padding: 15,
    borderRadius: 19,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#8c52ff',
    padding: 15,
    borderRadius: 19,
    alignItems: 'center',
    marginTop:18,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
