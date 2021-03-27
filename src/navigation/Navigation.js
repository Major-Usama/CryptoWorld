import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Welcome from "../screens/Welcome";
import SplashVideo from "../screens/SplashVideo";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import HomePriceClickScreen from "../screens/HomePriceClickScreen";
import CurrencyExchange from "../screens/CurrencyExchange";
import ConvertCurrency from "../screens/ConvertCurrency";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashVideo" headerMode="none">
        <Stack.Screen name="splashvideo" component={SplashVideo} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="loginscreen" component={LoginScreen} />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="CurrencyExchange" component={CurrencyExchange} />
        <Stack.Screen name="ConvertCurrency" component={ConvertCurrency} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="HomePriceClickScreen"
          component={HomePriceClickScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
