import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SingleProductScreen from './src/screens/SingleProductScreen';
import CartScreen from './src/screens/CartScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CartScreen">
        <Stack.Screen
          name="SingleProduct"
          component={SingleProductScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
