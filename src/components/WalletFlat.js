import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";


const eth = [
  <MaterialCommunityIcons name="sort-ascending" size={20} color="white" />,
];
const bit = [
  <MaterialCommunityIcons name="sort-descending" size={20} color="#ffffff" />,
];
const lite = [
  <MaterialCommunityIcons name="litecoin" size={24} color="powderblue" />,
];
const via = [<FontAwesome name="viacoin" size={24} color="tomato" />];

export default function WalletFlat() {
  const navigation = useNavigation();
  const [gallery, useGallery] = useState([
    {
      id: "1",
      title: "Account",
      subtitle: "Deposit",
      price: "+ 5130.05",
      marketcap: "12 jun,2019",
      icon: eth,
    },

    {
      id: "2",
      title: "Account",
      subtitle: "Withdrawl",
      price: "- 2350.05",
      marketcap: "1 jun, 2020",
      icon: bit,
    },

    {
      id: "3",
      title: "Account",
      subtitle: "Deposit",
      price: "+ 220.05",
      marketcap: "6 feb, 2020",
      icon: eth,
    },

    {
      id: "4",
      title: "Account",
      subtitle: "Withdrawl",
      price: "- 51350.05",
      marketcap: "3 mar,1990",
      icon: bit,
    },

    {
      id: "5",
      title: "Account",
      subtitle: "Deposit",
      price: "+ 1350.05",
      marketcap: "6 jan, 2000",
      icon: eth,
    },

    {
      id: "6",
      title: "Account",
      subtitle: "Withdrwal",
      price: "- 350.05",
      marketcap: "1 jan, 2021",
      icon: bit,
    },
  ]);

  return (
    <View style={styles.mainWrapper}>
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
                    <Text
                      style={{ color: "#ffffff", opacity: 0.8, fontSize: 12 }}
                    >
                      {item.subtitle}
                    </Text>
                  </View>
                </View>

                <View style={styles.listContainer}>
                  <View style={{ marginLeft: 10 }}>
                    {item.subtitle === "Deposit" ? (
                      <Text
                        style={{
                          fontSize: 16,
                          color: "lightgreen",
                          fontWeight: "bold",
                        }}
                      >
                        {item.price}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          fontSize: 16,
                          color: "tomato",
                          fontWeight: "bold",
                        }}
                      >
                        {item.price}
                      </Text>
                    )}

                    <Text
                      style={{ color: "#ffffff", opacity: 0.8, fontSize: 12 }}
                    >
                      {item.marketcap}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
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
    backgroundColor: "#137383",
    borderRadius: 5,
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
