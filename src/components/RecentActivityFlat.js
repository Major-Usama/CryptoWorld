import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  FontAwesome,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';

const eth = [<MaterialCommunityIcons name="transfer-down" size={24} color="tomato" />];
const bit = [<MaterialCommunityIcons name="transfer-up" size={24} color="orange" />];
const lite = [
  <MaterialCommunityIcons name="litecoin" size={24} color="powderblue" />,
];
const via = [<FontAwesome name="viacoin" size={24} color="tomato" />];

export default function RecentActivityFlat() {
  const navigation = useNavigation();
  const [gallery, useGallery] = useState([
    {
      id: "1",
      title: "Recieved",
      subtitle: "Nov 12 ,4pm",
      price: "+ 0.05 BRG",
      marketcap: "6.08%",
      icon: eth,
    },

    {
      id: "2",
      title: "Sent",
      subtitle: 'Nov 13 ,4pm',
      price: "- 0.03 BTC",
      marketcap: "6.08%",
      icon: bit,
    },

    {
      id: "3",
      title: "Recieved",
      subtitle: "Nov 14 ,4pm",
      price: "+ 0.05 BRG",
      marketcap: "6.08%",
      icon: eth,
    },

    {
      id: "4",
      title: "Sent",
      subtitle: "Nov 12 ,4pm",
      price: "- 0.03 BTC",
      marketcap: "6.08%",
      icon: bit,
    },

    {
      id: "5",
      title: "Recieved",
      subtitle: "Nov 14 ,4pm",
      price: "+ 0.05 BRG",
      marketcap: "6.08%",
      icon: eth,
    },

    {
      id: "6",
      title: "Sent",
      subtitle: "Nov 12 ,4pm",
      price: "- 0.03 BTC",
      marketcap: "6.08%",
      icon: bit,
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
            
                  
            <View style={styles.card}>
              <View style={styles.listContainer}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                    backgroundColor: "#19A9C7",
                    elevation: 5,
                  }}
                >
                  {item.icon}
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text style={{ color: "#ffffff", opacity: 0.8 }}>
                    {item.subtitle}
                  </Text>
                </View>
              </View>

              <View style={styles.listContainer}>
              
              <SimpleLineIcons name="graph" size={24} color="powderblue" />
            

                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    {item.price}
                  </Text>
                  <Text style={{ color: "#ffffff", opacity: 0.8 }}>
                    {item.marketcap}
                  </Text>
                </View>
              </View>
            </View>
        
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    height: hp("9%"),
    width: wp("90%"),
    backgroundColor: "#19A9C7",
    borderRadius: 20,
    marginVertical: hp("1%"),
    alignItems: "center",
    flexDirection: "row",
    elevation: 2,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  listContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
