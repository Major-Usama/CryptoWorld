import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,

} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


import { useNavigation } from "@react-navigation/native";

// const eth = [<FontAwesome5 name="ethereum" size={24} color="white" />];
// const bit = [<FontAwesome name="bitcoin" size={24} color="orange" />];
// const lite = [
//   <MaterialCommunityIcons name="litecoin" size={24} color="powderblue" />,
// ];
// const via = [<FontAwesome name="viacoin" size={24} color="tomato" />];

export default function CryptoFlat() {
  const navigation = useNavigation();
  const [gallery, useGallery] = useState([

    {

     id: "1",
     country:"Bitcoin",
     buy:"1.403",
     Sell:"1.746",
     image:require('../Images/coins/bitcoin.png')
      
    },
    
    {

        id: "2",
        country:"Dash",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/coins/dash.png')
         
       },

       {

        id: "3",
        country:"Aurouracoin",
        buy:"9.403",
        Sell:"6.746",
        image:require('../Images/coins/aurouracoin.png')
         
       },

       {

        id: "4",
        country:"Devcoin",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/coins/devcoin.png')
         
       },

       {

        id: "5",
        country:"Dogecoin",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/coins/dogecoin.png')
         
       },

       {

        id: "6",
        country:"Ethrium",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/coins/etherium.png')
         
       },

       {

        id: "7",
        country:"Litecoin",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/coins/litecoin.png')
         
       },


       {

        id: "8",
        country:"Monero",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/coins/monero.png')
         
       },


       {

        id: "9",
        country:"Peer Coin",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/coins/peercoin.png')
         
       },

       {

        id: "10",
        country:"Ripple",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/coins/ripple.png')
         
       },


       {

        id: "11",
        country:"Z-Cash",
        buy:"7.403",
        Sell:"6.746",
        image:require('../Images/coins/zcash.png')
         
       },

      
       {

        id: "12",
        country:"Ripple",
        buy:"5.403",
        Sell:"4.546",
        image:require('../Images/coins/ripple.png')
         
       },

       {

        id: "13",
        country:"Peer Coin",
        buy:"1.403",
        Sell:"1.846",
        image:require('../Images/coins/peercoin.png')
         
       },

       {

        id: "14",
        country:"Ripple",
        buy:"1.403",
        Sell:"3.746",
        image:require('../Images/coins/ripple.png')
         
       },


       {

        id: "15",
        country:"Z-Cash",
        buy:"1.403",
        Sell:"2.746",
        image:require('../Images/coins/ripple.png')
         
       },


  ]);

  return (
    <View style={styles.mainWrapper}>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        keyExtractor={(item) => item.id}
        data={gallery}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("ConvertCrypto")}
            >
                <View>
              <View style={styles.card}>
                <View style={styles.flagContainer}>
                
                <Image style={{width:40,height:40,borderRadius:20,}} source={item.image}/>
                <Text style={{...styles.text,marginLeft:10,}}>{item.country}</Text>

                 
                </View>

                <View style={styles.priceContainer}>

                <Text style={styles.text}>{item.buy}</Text>
                <Text style={styles.text}>{item.Sell}</Text>

                </View>

               
              </View>
              <View style={{marginTop:10,marginBottom:10,borderTopWidth:2,borderColor:'#f7f7f7',width:wp('90%'),alignSelf:'center'}}/>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

    flagContainer:
    {
        flexDirection:'row',
        alignItems:'center',
       
    },

    priceContainer:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:wp('25')
    },

    card:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },

    text:
    {
        fontWeight:'bold',
        opacity:0.9
    }
  
});
