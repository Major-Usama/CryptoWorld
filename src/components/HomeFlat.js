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
import {
  FontAwesome,
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const eth = [<FontAwesome5 name="ethereum" size={24} color="white" />];
const bit = [<FontAwesome name="bitcoin" size={24} color="orange" />];
const lite = [
  <MaterialCommunityIcons name="litecoin" size={24} color="powderblue" />,
];
const via = [<FontAwesome name="viacoin" size={24} color="tomato" />];

import * as Animatable from "react-native-animatable";

export default function HomeFlat() {
  const navigation = useNavigation();
  const [gallery, useGallery] = useState([
    {
      id: "1",
      title: "Bitcoin",
      subtitle: "BTC",
      price: "51350.05",
      marketcap: "6.08%",
      icon: eth,
    },

    {
      id: "2",
      title: "Bitcoin",
      subtitle: "BTC",
      price: "51350.05",
      marketcap: "6.08%",
      icon: bit,
    },

    {
      id: "3",
      title: "Bitcoin",
      subtitle: "BTC",
      price: "51350.05",
      marketcap: "6.08%",
      icon: lite,
    },

    {
      id: "4",
      title: "Bitcoin",
      subtitle: "BTC",
      price: "51350.05",
      marketcap: "6.08%",
      icon: via,
    },

    {
      id: "5",
      title: "Bitcoin",
      subtitle: "BTC",
      price: "51350.05",
      marketcap: "6.08%",
      icon: lite,
    },

    {
      id: "6",
      title: "Bitcoin",
      subtitle: "BTC",
      price: "51350.05",
      marketcap: "6.08%",
      icon: bit,
    },
  ]);

  return (
    <Animatable.View animation="fadeInUpBig" style={styles.mainWrapper}>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        keyExtractor={(item, index) => index}
        data={gallery}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("HomePriceClickScreen")}
            >
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
                    <Entypo name="line-graph" size={24} color="black" />
                  </View>

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
            </TouchableWithoutFeedback>
          );
        }}
      />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    marginTop: wp("5%"),
    alignSelf: "center",
    flex: 1,
  },
  card: {
    height: hp("9%"),
    width: wp("90%"),
    backgroundColor: "#19A9C7",
    borderRadius: 20,
    marginVertical: hp("2%"),
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
