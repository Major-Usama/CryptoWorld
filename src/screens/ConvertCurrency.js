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
  ScrollView,
} from "react-native";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import SelectPicker from "react-native-form-select-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { LinearGradient } from "expo-linear-gradient";

const options = ["PKR", "Yen", "USD", "CAD", "EUR", "AUD", "NZD", "CHF"];

export default function ConvertCurrency({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [selected, setSelected] = useState();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          paddingHorizontal: 20,
          alignItems: "center",
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

        <Text style={styles.headerText}>Exchange</Text>

        <View />
      </View>

      <View style={styles.footer}>
      <ScrollView>
        <Image
          style={{
            alignSelf: "center",
            width: 300,
            height: 280,
            marginBottom: 30,
          }}
          source={require("../Images/cur.png")}
        />
        
      
              <Text
          style={{
            fontWeight: "bold",
            marginLeft: wp("8%"),
            marginBottom: 10,
            opacity: 0.5,
          }}
        >
          From
        </Text>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <View
            style={{
              width: wp("60%"),
              padding: 12,
              borderWidth: 1,
              borderColor: "lightgray",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Enter Amount"
              keyboardType="numeric"
            />
          </View>

          <View
            style={{
              width: "25%",
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "lightgray",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            <SelectPicker
              style={{ width: 200 }}
              onValueChange={(value) => {
                // Do anything you want with the value.
                // For example, save in state.
                setSelected(value);
              }}
              selected={selected}
            >
              {Object.values(options).map((val, index) => (
                <SelectPicker.Item label={val} value={val} key={val} />
              ))}
            </SelectPicker>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginTop: hp("4%"),
          }}
        >
          <AntDesign name="arrowdown" size={28} color="tomato" />
          <AntDesign name="arrowup" size={28} color="orange" />
        </View>

        <View style={{ marginTop: hp("3%") }}>
          <Text
            style={{
              fontWeight: "bold",
              marginLeft: wp("8%"),
              marginBottom: 10,
              opacity: 0.5,
            }}
          >
            To
          </Text>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <View
              style={{
                width: wp("60%"),
                padding: 12,
                borderWidth: 1,
                borderColor: "lightgray",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber2}
                value={number2}
                placeholder="Enter Amount"
                keyboardType="numeric"
              />
            </View>

            <View
              style={{
                width: "25%",
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "lightgray",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
              <SelectPicker
                style={{ width: 200 }}
                onValueChange={(value) => {
                  // Do anything you want with the value.
                  // For example, save in state.
                  setSelected(value);
                }}
                selected={selected}
              >
                {Object.values(options).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={val} />
                ))}
              </SelectPicker>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingHorizontal: 32,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#000000" }}>
            Currency rate
          </Text>
          <Text style={{ fontWeight: "bold", color: "tomato" }}>
            1 USD = 157.2 PKR
          </Text>
        </View>

        <LinearGradient
          colors={["#137383", "#19A9C7", "#82ECF9"]}
          style={{
            borderRadius: 14,
            padding: 16,
            marginTop: "10%",
            width: wp("90%"),
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginBottom:20
          }}
        >
          <TouchableOpacity
            //   onPress={() => navigation.navigate("Home")}
            activeOpacity={0.9}
          >
            <Text
              style={{ color: "#ffffff", fontSize: 18, fontWeight: "bold" }}
            >
              {" "}
              Convert
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        </ScrollView>

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
    fontSize: 24,
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
    marginTop: 20,
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
});
