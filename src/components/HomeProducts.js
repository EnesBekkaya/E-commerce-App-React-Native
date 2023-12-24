import React, { useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const DATA = [
  { id: '1', name: 'Ürün 1', price: '20 TL' },
  { id: '2', name: 'Ürün 2', price: '30 TL' },
  { id: '3', name: 'Ürün 3', price: '25 TL' },
  { id: '4', name: 'Ürün 4', price: '15 TL' },
  { id: '5', name: 'Ürün 5', price: '40 TL' },
  { id: '6', name: 'Ürün 6', price: '22 TL' },
  { id: '7', name: 'Ürün 7', price: '18 TL' },
  { id: '8', name: 'Ürün 8', price: '35 TL' },
  { id: '9', name: 'Ürün 9', price: '28 TL' },
  { id: '10', name: 'Ürün 10', price: '17 TL' },
  { id: '10', name: 'Ürün 10', price: '17 TL' },
  { id: '10', name: 'Ürün 10', price: '17 TL' },
  { id: '10', name: 'Ürün 10', price: '17 TL' },
  { id: '10', name: 'Ürün 10', price: '17 TL' },
  { id: '10', name: 'Ürün 10', price: '17 TL' },
  { id: '10', name: 'Ürün 10', price: '17 TL' },
  { id: '10', name: 'Ürün 10', price: '17 TL' },
  { id: '10', name: 'Ürün 10', price: '17 TL' },
  { id: '10', name: 'Ürün 10', price: '17 TL' },
  { id: '10', name: 'Ürün 10', price: '17 TL' },
];

const Header_Max_Height = 80;
const Header_Min_Height = 80;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const DynamicHeader = ({ value }) => {
  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const animatedHeaderColor = "#8c52ff"
  const handleBasketIconPress = () => {
    alert('Sepet ikonuna tıklandı!');
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
          <SimpleLineIcons name="basket" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const ScrollViewScreen = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const groupedData = groupData(DATA, 2); 

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
      >
        <DynamicHeader value={scrollOffsetY} />
        {groupedData.map((group, index) => (
          <View style={styles.rowContainer} key={index}>
            {group.map((val) => (
              <View style={styles.card} key={val.id}>
                <Text style={styles.subtitle}>({val.id})</Text>
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
    marginRight: 30,
  },
  card: {
    flex: 1,
    height: 350, 
    width: '48%', 
    backgroundColor: 'white',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginLeft:5,
    marginRight:5,
  },
  subtitle: {
    color: '#181D31',
    fontWeight: 'bold',
  },
});

export default ScrollViewScreen;
