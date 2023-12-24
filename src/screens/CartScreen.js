import React, { useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome,AntDesign} from '@expo/vector-icons';
const DATA = [
    { id: '1', name: 'Ürün 1 hakkında bilgilerin yaızldığı yer burasıdır', price: '20 TL' },
    { id: '2', name: 'Ürün 2', price: '30 TL' },
    { id: '3', name: 'Ürün 3', price: '25 TL' },
    { id: '4', name: 'Ürün 4', price: '15 TL' },
    { id: '5', name: 'Ürün 5', price: '40 TL' },
    { id: '6', name: 'Ürün 6', price: '22 TL' },
    { id: '7', name: 'Ürün 7', price: '18 TL' },
    { id: '8', name: 'Ürün 8', price: '35 TL' },
    { id: '9', name: 'Ürün 9', price: '28 TL' },
    { id: '10', name: 'Ürün 10', price: '17 TL' },
    { id: '11', name: 'Ürün 11', price: '27 TL' },
    { id: '12', name: 'Ürün 12', price: '19 TL' },
    // ... Daha fazla ürün
];

const Header_Max_Height = 80;
const Header_Min_Height = 80;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;
const handleTrash = () => {
    alert('trash butonuna tıklandı');
  };

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
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Sepet</Text>
            </View>
        </Animated.View>
    );
};

const ScrollViewScreen = () => {
    const scrollOffsetY = useRef(new Animated.Value(0)).current;

    const handleGoToHome = () => {
        alert('Ana Sayfa butonuna tıklandı');
        // Burada ana sayfaya yönlendirme işlemini gerçekleştirebilirsiniz.
    };

    const handleGoToCart = () => {
        alert('Sepete Git butonuna tıklandı');
        // Burada sepete yönlendirme işlemini gerçekleştirebilirsiniz.
    };

    const handleGoToProfile = () => {
        alert('Profil butonuna tıklandı');
        // Burada profil sayfasına yönlendirme işlemini gerçekleştirebilirsiniz.
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
                contentContainerStyle={{ paddingBottom: 50 }} 

            >
                <DynamicHeader value={scrollOffsetY} />
                <View style={styles.productContainer}>
                    {DATA.map((product) => (
                        <View style={styles.card} key={product.id}>
                            <View style={styles.imageContainer} > 
                                <Image
                                    source={require("../../assets/nike.jpg")}
                                    style={styles.productImage}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <View style={{ flex: 2 }}>
                                    <Text style={styles.productName}>{product.name}</Text>
                                </View>
                                <View style={{ flex: 0.6 }}>
                                    <Text style={styles.productPrice}>{product.price}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.1 }}>
                                <TouchableOpacity style={styles.buttonContainer} disabled={true}>
                                    <View style={styles.customButton}>
                                        <Text style={styles.buttonText}>5</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.trashContainer}>
                                    <TouchableOpacity onPress={handleTrash}>
                                        <FontAwesome name="trash-o" size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
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
    productContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 5,
    },
    card: {
        flexBasis: '85%',
        height: 120,
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 25,
        marginRight: 20,
    },
    subtitle: {
        color: '#181D31',
        fontWeight: 'bold',
    },
    productImage: {
        width: 50,
        height: 50,
        marginRight: 10,

    },
    imageContainer: {
        flex: 0.3,
        marginLeft:15,

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
    textContainer: {
        marginLeft: 0,
        marginTop: 70,
    },
    customButton: {
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
    footerButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default ScrollViewScreen;