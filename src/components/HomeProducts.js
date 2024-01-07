  import React, { useRef, useState } from 'react';
  import { Animated, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
  import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/native';

  const DATA = [
    { id: '1', name: 'Nike Air Force', price: '2000 TL', des: "nike air force erkek spor ayakkabı.", image: require("../../assets/nike.jpg") },
    { id: '2', name: 'Nike Bere', price: '300 TL', des: "nike bere.", image: require("../../assets/bere.png") },
    { id: '3', name: 'Nike sweatshirt', price: '1500 TL', des: "nike erkek %100 pamuk sweatshirt.", image: require("../../assets/kapus.png") },
    { id: '4', name: 'Nike sweatshirt', price: '2000 TL', des: "nike erkek %100 pamuk sweatshirt.", image: require("../../assets/kapuso.png") },
    { id: '5', name: 'Nike Bot', price: '3500TL', des: "nike kışlık bot erkek.", image: require("../../assets/ayakkabi.png") },
  ];

  const Header_Max_Height = 80;
  const Header_Min_Height = 80;
  const Scroll_Distance = Header_Max_Height - Header_Min_Height;

  const DynamicHeader = ({ value, navigation, cartItems }) => {
    const animatedHeaderHeight = value.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [Header_Max_Height, Header_Min_Height],
      extrapolate: 'clamp',
    });

    const animatedHeaderColor = "#8c52ff";

    const handleBasketIconPress = () => {
      
      navigation.navigate('CartScreen', { cartItems });
    };

    const handleUserIconPress = () => {
      navigation.navigate('ProfileScreen');
    };

    return (
      <Animated.View
        style={[
          styles.header,
          {
            height: animatedHeaderHeight,
            backgroundColor: animatedHeaderColor,
          },
        ]}
      >
        <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Ara..."
              placeholderTextColor="#ccc"
            />
          </View>
          <TouchableOpacity onPress={handleBasketIconPress}>
            <SimpleLineIcons name="basket" size={24} color="white" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleUserIconPress}>
            <AntDesign name="user" size={24} color="white" style={{ marginRight: 5 }} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  const ScrollViewScreen = () => {
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const [cartItems, setCartItems] = useState([]);

    const groupedData = groupData(DATA, 2);

    const handleSepeteEkle = (product) => {
      const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingProductIndex].quantity += 1;
        setCartItems(updatedCartItems);
      } else {
        setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
      }

      Alert.alert('Ürün sepete eklendi');
    };

    const handleProduct = (product) => {
      navigation.navigate('SingleProductScreen', { product });
    };

    return (
      <View>
        <ScrollView
          stickyHeaderIndices={[0]}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={16}
        >
          <DynamicHeader value={scrollOffsetY} navigation={navigation} cartItems={cartItems} />
          {groupedData.map((group, index) => (
            <View style={styles.rowContainer} key={index}>
              {group.map((val) => (
                <View style={styles.card} key={val.id}>
                  <TouchableOpacity onPress={() => handleProduct(val)} style={{ flex: 1 }}>
                    <View style={{ flex: 1, marginTop: 30 }}>
                      <Image
                        source={val.image}
                        style={styles.productImage}
                        resizeMode="contain"
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={{ marginBottom: 2, alignItems: 'center', flexDirection: 'column', marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#8c52ff', fontSize: 15 }}>{val.name}</Text>
                  </View>
                  <View style={{ marginBottom: 2, alignItems: 'center', flexDirection: 'column', marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#8c52ff', fontSize: 15 }}>{val.price}</Text>
                  </View>
                  <View style={{ flex: 0.4 }}></View>
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => handleSepeteEkle(val)}>
                    <Text style={styles.buttonText}>
                      Sepete Ekle
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  const groupData = (data, groupSize) => {
    const groupedData = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groupedData.push(data.slice(i, i + groupSize));
    }
    return groupedData;
  };

  const styles = StyleSheet.create({
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      left: 0,
      right: 0,
      paddingTop: 25,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    inputContainer: {
      flex: 1,
    },
    searchInput: {
      height: 40,
      width: '90%',
      backgroundColor: '#fff',
      borderRadius: 19,
      paddingLeft: 10,
      borderColor: '#ccc',
      borderWidth: 1,
    },
    icon: {
      marginRight: 40,
    },
    card: {
      flex: 1,
      height: 250,
      width: '48%',
      backgroundColor: 'white',
      marginTop: 60,
      borderWidth: 1,
      marginLeft: 5,
      marginRight: 5,
    },
    productImage: {
      height: '100%',
      width: '100%',
      marginBottom: 1,
    },
    buttonText: {
      marginTop: 10,
      color: 'white',
      marginBottom: 10,
    },
    buttonContainer: {
      backgroundColor: '#8c52ff',
      padding: 4,
      borderRadius: 40,
      alignItems: 'center',
      width: '90%',
      marginLeft: 8,
      marginBottom: 10,
    },
  });

  export default ScrollViewScreen;
