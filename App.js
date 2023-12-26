import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SingleProductScreen from './src/screens/SingleProductScreen';
import CartScreen from './src/screens/CartScreen';
import CartEmpty from './src/components/CartEmpty';
import ProfileScreen from './src/screens/ProfileScreen';
import ShippingScreen from './src/screens/ShippingScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import HomeScreen from './src/screens/HomeScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="SingleProduct"
          component={SingleProductScreen}
          options={{ headerShown: false }} 
        />
         <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} 
        />
         <Stack.Screen
          name="SingleProductScreen"
          component={SingleProductScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
         name="Register" 
         component={RegisterScreen} 
         options={{ headerShown: false }}
         />
          <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="CartEmpty"
          component={CartEmpty}
          options={{ headerShown: false }} 
        />
         <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ShippingScreen"
          component={ShippingScreen}
          options={{ headerShown: false }} 
        />
          <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
