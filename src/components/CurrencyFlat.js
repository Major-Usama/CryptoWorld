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

export default function CurrencyFlat() {
  const navigation = useNavigation();
  const [gallery, useGallery] = useState([

    {

     id: "1",
     country:"Pakistan",
     buy:"1.403",
     Sell:"1.746",
     image:require('../Images/pakistan.png')
      
    },
    
    {

        id: "2",
        country:"United Kingdom",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/united-kingdom.png')
         
       },

       {

        id: "3",
        country:"China",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/china.png')
         
       },

       {

        id: "4",
        country:"Austria",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/austria.png')
         
       },

       {

        id: "5",
        country:"france",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/france.png')
         
       },

       {

        id: "6",
        country:"South Africa",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/south-africa.png')
         
       },

       {

        id: "7",
        country:"Brazil",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/brazil.png')
         
       },


       {

        id: "8",
        country:"Japan",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/japan.png')
         
       },


       {

        id: "9",
        country:"South Korea",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/south-korea.png')
         
       },

       {

        id: "10",
        country:"United States",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/united-states.png')
         
       },


       {

        id: "11",
        country:"South Korea",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/south-korea.png')
         
       },

       {

        id: "12",
        country:"United States",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/united-states.png')
         
       },

       {

        id: "13",
        country:"japan",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/japan.png')
         
       },

       {

        id: "14",
        country:"Brazil",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/brazil.png')
         
       },

       {

        id: "15",
        country:"China",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/china.png')
         
       },

       {

        id: "16",
        country:"France",
        buy:"1.403",
        Sell:"1.746",
        image:require('../Images/france.png')
         
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
              onPress={() => navigation.navigate("ConvertCurrency")}
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
