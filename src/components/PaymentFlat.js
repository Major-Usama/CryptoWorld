import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Switch,
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

export default function PaymentFlat() {
  const [isEnabled, setIsEnabled] = useState();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation();
  const [gallery, useGallery] = useState([
    {
      id: "1",
      title: "VisaCard",
      dots: "123*****",
      number: "6789",
      image: require("../Images/visa.png"),
    },

    {
      id: "2",
      title: "masterCard",
      dots: "123*****",
      number: "6789",
      image: require("../Images/mastercard.png"),
    },

    {
      id: "3",
      title: "Westren",
      dots: "123*****",
      number: "6789",
      image: require("../Images/westren.png"),
    },

    {
      id: "4",
      title: "Paypal",
      dots: "123*****",
      number: "6789dd",
      image: require("../Images/paypal.png"),
    },

    {
      id: "5",
      title: "Paypal",
      dots: "123*****",
      number: "6789",
      image: require("../Images/paypal.png"),
    },

    {
      id: "6",
      title: "Master card",
      dots: "123*****",
      number: "6789",
      image: require("../Images/mastercard.png"),
    },
  ]);

  return (
    <View style={styles.mainWrapper}>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        keyExtractor={(item) => item.id}
        data={gallery}
        style={{ height: hp("65%") }}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
               
            >
              <View style={styles.card}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 70, height: 45 }}
                  />

                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      {item.title}
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {item.dots}{" "}
                      <Text style={{ fontWeight: "normal" }}>
                        {item.number}
                      </Text>
                    </Text>
                  </View>

                  <Switch
                    trackColor={{ false: "#767577", true: "#137383" }}
                    thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
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
  card: {
    width: wp("90%"),
    height: hp("12.5%"),
    backgroundColor: "#ffffff",
    //   borderWidth:1,
    //   borderColor:'#137383',
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    elevation: 5,
    marginBottom:20
  },
});
