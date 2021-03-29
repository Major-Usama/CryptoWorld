import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Octicons } from "@expo/vector-icons";
import PaymentFlat from '../components/PaymentFlat'

export default function PaymentMethod({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,

          alignItems: "center",
          paddingHorizontal: 20,
          width: wp("100%"),
          justifyContent: "space-between",
        }}
      >
        <View style={styles.leftIcon}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="ios-arrow-back"
            size={24}
            color="#ffffff"
          />
        </View>

        <Text style={styles.headerText}>Payment Method</Text>

        <View />
      </View>

      <View style={styles.footer}>
    
    <View style={{flexDirection:'row',padding:10,marginTop:20,alignItems:'center',justifyContent:'space-around'}}>
        
        <Text style={{fontWeight:'bold',fontSize:18}}>Credit / Debit  Cards ~</Text>

        <View style={{flexDirection:'row',bottom:hp('1%'),alignItems:'center',width:wp('20%'),justifyContent:'space-between',}}>
            <Text style={{...styles.line,color:'lightgray'}}>__</Text>
            <Text style={styles.line}>____</Text>
            <Text style={{...styles.line,color:'lightgray'}} >___</Text>
        </View>

        </View>


        {/* Flatlist here */}
         
         <View >
        <PaymentFlat />
        <TouchableOpacity onPress={() => navigation.navigate("AddCard")}>
        <View style={styles.addCard}>
        
        <Image  style={{width:65,height:65}} source={require('../Images/cashback.png')}/>
        <Text style={{fontSize:30,fontStyle:'italic'}}>ADD NEW CARD</Text>

        </View>
        </TouchableOpacity>
        </View>


      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#137383",
  },

  headerText: {
    color: "#ffffff",
    fontSize: 22,
    fontStyle: "italic",
    fontWeight: "bold",
  },

  footer: {
    width: wp("100%"),
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  leftIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#137383",
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  line:
  {
      fontWeight:'bold',
      fontSize:18
  },

  addCard:
  {
     
        width:wp('90%'),
       height:hp('12.5%'),
       backgroundColor:'#ffffff',
       borderWidth:3,
       borderColor:'#137383',
       borderRadius:5,
       borderStyle:'dotted',
       marginTop:20,
       alignSelf:'center',
       alignItems:'center',
       justifyContent:'space-evenly',
       flexDirection:'row',
       
       
    },
    
  
});
