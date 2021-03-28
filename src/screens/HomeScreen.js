import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import HomeFlat from "../components/HomeFlat";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function HomeScreen({navigation}) {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('CurrencyExchange')}>

        <View style={styles.leftIcon}>
          <MaterialIcons name="timeline" size={24} color="white" />
        </View>
        
         </TouchableWithoutFeedback>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 24,
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          Live Prices
        </Text>

        <View style={styles.rightIcon}>
          <MaterialIcons onPress={()=>navigation.navigate('CryptoExchange')} name="notifications-none" size={24} color="white" />
        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View>
              <Text style={{ color: "gray", fontSize: 18 }}>Market Cap</Text>
              <Text style={{ fontSize: 16 }}>$1.6B</Text>
              <Text style={{ color: "#19A9C7", fontSize: 16 }}>~1.92 %</Text>
            </View>

            <View>
              <Text style={{ color: "gray", fontSize: 18 }}>24h volume</Text>
              <Text style={{ fontSize: 16 }}>$192B</Text>
              <Text style={{ color: "#19A9C7", fontSize: 16 }}>~7.9 %</Text>
            </View>

            <View>
              <Text style={{ color: "gray", fontSize: 18 }}>Bitcoin</Text>
              <Text style={{ fontSize: 16 }}>60.9%</Text>
              <Text style={{ color: "#19A9C7", fontSize: 16 }}>~0.45 %</Text>
            </View>
          </View>
        </View>

        <View style={styles.searchBar}>
          <AntDesign name="search1" size={24} color="black" />

          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Search"
            keyboardType="default"
          />
        </View>
        <HomeFlat />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#137383",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
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

  rightIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#137383",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },

  footer: {
    width: wp("100%"),
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  searchBar: {
    width: wp("90"),
    height: hp("6.5%"),
    borderRadius: 20,
    backgroundColor: "#ffffff",
    elevation: 5,
    alignSelf: "center",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    width: wp("90"),
    height: hp("6.5%"),
    marginLeft: 10,
  },
});
