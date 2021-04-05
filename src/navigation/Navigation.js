import * as React from "react";

import {
  StyleSheet,
  View,
 
} from "react-native";
import {MaterialCommunityIcons, FontAwesome,Feather,Entypo,MaterialIcons,AntDesign} from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Welcome from "../screens/Welcome";

import SplashVideo from "../screens/SplashVideo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import HomePriceClickScreen from "../screens/HomePriceClickScreen";
import CurrencyExchange from "../screens/CurrencyExchange";
import ConvertCurrency from "../screens/ConvertCurrency";
import CryptoExchange from "../screens/CryptoExchange";
import ConvertCrypto from "../screens/ConvertCrypto";
import BankDepositScreen from "../screens/BankDepositScreen";
import PaymentMethod from "../screens/PaymentMethod";
import AddCard from "../screens/AddCard";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    
      lazy={false}
      tabBarOptions={{
        
        showLabel:false,
        

        tabStyle: {
       
        },
      }}
    >
      
      <Tab.Screen
  
        options={{
          tabBarLabel: "",
          tabBarIcon:
          ({ focused, tintColor })=>{
            if(focused)
            return(<View style={{backgroundColor:'#137383',height:'80%',width:wp(20),elevation:10,borderRadius:40,justifyContent:'center',alignItems:'center'}}>
            <AntDesign name="home" color={'#ffffff'} size={26}/>
            </View>)
            else
            return( <AntDesign name="home" color={tintColor} size={20} />)
          } 
        }}
        name="HomeScreen"
        component={HomeStack}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon:
        ({ focused, tintColor })=>{
          if(focused)
          return(<View style={{backgroundColor:'#137383',height:'80%',width:wp(20),elevation:10,borderRadius:40,justifyContent:'center',alignItems:'center'}}>
             <MaterialCommunityIcons name="currency-usd" size={26} color="white" />
                </View>)
          else
          return(<MaterialCommunityIcons name="currency-usd" size={20} color="#000" />)
        },
        }}
        name="Currency Exchange"
        component={CurrencyCStack}
      />

      <Tab.Screen
        options={{
         

          tabBarLabel: "",
          tabBarIcon:
          ({ focused, tintColor })=>{
            if(focused)
            return(
              <View style={{backgroundColor:'#137383',height:'80%',width:wp(20),borderRadius:40,elevation:10,justifyContent:'center',alignItems:'center'}}>
           <FontAwesome name="bitcoin" size={26} color="#fff" />
            </View>)
            else
            return(<FontAwesome name="bitcoin" size={20} color="black" />)
          } 
        }}
        name="CryptoExchange"
        component={CryptoStack}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon:
        ({ focused, tintColor })=>{
          if(focused)
          return(<View style={{backgroundColor:'#137383',height:'80%',width:wp(20),borderRadius:40,elevation:10,justifyContent:'center',alignItems:'center'}}>
           <MaterialCommunityIcons name="wallet-plus-outline" size={26} color="#fff" /></View>)
          else
          return(<MaterialCommunityIcons name="wallet-plus-outline" size={20} color="black" />)
          
        } 
        }}
        name="BankDepositScreen"
        component={BankDepositStack}
      />

    </Tab.Navigator>
  );
}





const HStack = createStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer independent={true} headerMode>
      <HStack.Navigator headerMode="none" initialRouteName={HomeScreen}>
         <HStack.Screen name="Home" component={HomeScreen} />
        <HStack.Screen name="HomePriceClickScreen" component={HomePriceClickScreen} />
      </HStack.Navigator>
    </NavigationContainer>
  );
}


const CStack = createStackNavigator();

function CurrencyCStack() {
  return (
    <NavigationContainer independent={true} headerMode>
      <CStack.Navigator headerMode="none" initialRouteName={CurrencyExchange}>
      <CStack.Screen name="CurrencyExchange" component={CurrencyExchange} />
        <CStack.Screen name="ConvertCurrency" component={ConvertCurrency} />
      </CStack.Navigator>
    </NavigationContainer>
  );
}


const CRStack = createStackNavigator();

function CryptoStack() {
  return (
    <NavigationContainer independent={true} headerMode>
      <CRStack.Navigator headerMode="none" initialRouteName={CryptoExchange}>
      <CRStack.Screen name="CryptoExchange" component={CryptoExchange} />
        <CRStack.Screen name="ConvertCrypto" component={ConvertCrypto} />
      </CRStack.Navigator>
    </NavigationContainer>
  );
}


const BStack = createStackNavigator();

function BankDepositStack() {
  return (
    <NavigationContainer independent={true} headerMode>
      <BStack.Navigator headerMode="none" initialRouteName={"BankDepositScreen"}>
      <BStack.Screen name="BankDepositScreen" component={BankDepositScreen} />
        <CRStack.Screen name="PaymentMethod" component={PaymentMethod} />
        <CRStack.Screen name="AddCard" component={AddCard} />

      </BStack.Navigator>
    </NavigationContainer>
  );
}







const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode="none" initialRouteName="splashvideo">

      <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="splashvideo" component={SplashVideo} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="loginscreen" component={LoginScreen} />
        <Stack.Screen name="RegistrationScreen"   component={RegistrationScreen} />
       
       
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
