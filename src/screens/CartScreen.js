import React, { useRef, useState, useEffect } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { SimpleLineIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import CartEmpty from '../components/CartEmpty';

const Header_Max_Height = 80;
const Header_Min_Height = 80;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const DynamicHeader = ({ value, navigation }) => {
    const animatedHeaderHeight = value.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp',
    });

    
    const animatedHeaderColor = "#8c52ff";

    return (
        <Animated.View
            stickyHeaderIndices={[0]}
            style={[
                styles.header,
                {
                    height: animatedHeaderHeight,
                    backgroundColor: animatedHeaderColor,
                    useNativeDriver: false,
                },
            ]}
            scrollEventThrottle={16}
        >
            <View style={styles.rowContainer}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Sepet</Text>
            </View>
        </Animated.View>
    );
};

const ScrollViewScreen = () => {
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const route = useRoute();
    const [cartItems, setCartItems] = useState(route.params?.cartItems || []); 
    const { product } = route.params;
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(cartItems);
    }, [cartItems]);

    const handleGoToHome = () => {
        navigation.navigate('HomeScreen');
    };

    const handleGoToCart = () => {
        navigation.navigate('CartScreen');
    };

    const handleGoToProfile = () => {
        navigation.navigate('ProfileScreen');
    };

    const handleContinue = () => {
        navigation.navigate('ShippingScreen');
    };

    const totalAmount = products.reduce((total, product) => {
        const productPrice = parseFloat(product.price.replace('TL', '').trim());
        return total + productPrice * product.quantity;
    }, 0);

    const handleTrash = (productId) => {
        const updatedProducts = products.filter(item => item.id !== productId);
    
        setProducts(updatedProducts);
    
        if (updatedProducts.length === 0) {
            navigation.navigate("CartEmpty");
        }
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
                contentContainerStyle={{ paddingBottom: 400 }}
                scrollEventThrottle={16}
            >
                <DynamicHeader value={scrollOffsetY} navigation={navigation} />
                <View style={styles.productContainer}>
                    {products.map((product) => (
                        <View style={styles.card} key={product.id}>
                            <View style={styles.imageContainer} >
                                <Image
                                    source={product.image}
                                    style={styles.productImage}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <View style={{ flex: 2 }}>
                                    <Text style={styles.productName}>{product.name}</Text>
                                </View>
                                <View style={{ flex: 0.6 }}>
                                    <Text style={styles.productPrice}>  {parseFloat(product.price.replace('TL', '').trim()) * product.quantity} TL</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.1 }}>
                                <TouchableOpacity style={styles.buttonContainer} disabled={true}>
                                    <View style={styles.customButton}>
                                        <Text style={styles.buttonText}>{product.quantity}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.trashContainer}>
                                    <TouchableOpacity onPress={() => handleTrash(product.id)}>
                                        <FontAwesome name="trash-o" size={20} color="black" />
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={styles.container}>
                    <View style={styles.blueBox} >
                        <Text style={{ marginLeft: 30, fontSize: 15, fontWeight: 'bold' }}>Sepet Tutarı</Text>
                        <View style={styles.redBox} >
                            <Text style={{ marginLeft: 15, fontSize: 15, fontWeight: 'bold', color: 'white' }}>    {totalAmount.toFixed(2)} TL</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.continuButton}>
                    <TouchableOpacity style={styles.continuButton} onPress={handleContinue}>
                        <View style={{ marginLeft: 60, height: 28, marginTop: 6 }} >
                            <Text style={{ marginLeft: 30, fontSize: 15, fontWeight: 'bold', color: 'white' }}>Devam Et</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity onPress={handleGoToHome} style={styles.footerButton}>
                    <AntDesign name="home" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleGoToCart} style={styles.footerButton}>
                    <AntDesign name="shoppingcart" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleGoToProfile} style={styles.footerButton}>
                    <AntDesign name="user" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
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
        card: {
            width: '45%',
            height: 120,
            backgroundColor: 'white',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
        },

        card: {
            flexBasis: '45%',
            height: 120,
            backgroundColor: 'white',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
        },
        productImage: {
            width: 50,
            height: 50,
            marginRight: 10,
        },
        imageContainer: {
            flex: 0.3,
            marginLeft: 15,
        },
        productName: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 15,
        },
        productPrice: {
            fontSize: 12,
            color: 'green',
            marginTop: 5,
        },
        buttonContainer: {
            backgroundColor: '#8c52ff',
            padding: 10,
            borderRadius: 5,
        },
        buttonText: {
            color: 'white',
            textAlign: 'center',
        },
        trashContainer: {
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.5
        },
        footer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#8c52ff',
            padding: 7,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        footerButton: {
            backgroundColor: '#8c52ff',
            padding: 10,
            borderRadius: 5,
            flex: 1,
            marginHorizontal: 5,
            alignItems: 'center',
        },
        container: {
            flexDirection: 'row',
            height: 90,
            padding: 20,
        },
        blueBox: {
            backgroundColor: 'white',
            flex: 1,
            borderRadius: 19,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        redBox: {
            backgroundColor: '#8c52ff',
            width: 130,
            position: 'absolute',
            right: 0,
            height: '100%',
            borderRadius: 19,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        continuButton: {
            backgroundColor: '#8c52ff',
            flexDirection: 'row',
            padding: 5,
            width: '70%',
            borderRadius: 30,
            alignSelf: 'center',
        },
    });

    export default ScrollViewScreen;
