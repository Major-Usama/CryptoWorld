import React from 'react'
import { StyleSheet, Text, View,Platform,StatusBar, SafeAreaView } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import CryptoFlat from '../components/CryptoFlat';
export default function CryptoExchange() {
    return (
        <SafeAreaView style={styles.container}>
            <Text
          style={styles.headerText}
        >
          Crypto Exchange
        </Text>

        <View style={styles.footer}>
        <Text style={{fontSize:18,fontWeight:'bold',padding:wp('8%')}}>Exhange Rates</Text>
        
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:20,paddingHorizontal:32,justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
            <View />
        <Text style={styles.text}>Coins</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',width:wp('22'),justifyContent:'space-between'}}>
        <Text style={styles.text}>Buy</Text>
        <Text style={{...styles.text,}}>Sell</Text>

        </View>

        </View>

         <CryptoFlat />


        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

container:
{
    flex:1,
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
    backgroundColor: "#137383",

},

headerText:
{
    
        color: "#ffffff",
        fontSize: 24,
        fontStyle: "italic",
        fontWeight: "bold",
        alignSelf:'center',
        marginTop:20
      
},

footer:
{
    width: wp("100%"),
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
},

text:
{
    fontWeight:'bold',
    fontSize:18
}

})
