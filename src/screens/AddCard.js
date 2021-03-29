// 

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
import { LinearGradient } from "expo-linear-gradient";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input"; // 0.4.1

const styles = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
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
    paddingTop:50
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

  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});


export default class AddCard extends React.Component {
  state = { useLiteCreditCardInput: false };

  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });

  render() {
    return (
      <View style={styles.container}>
        {/* <Switch
          style={s.switch}
          onValueChange={this._setUseLiteCreditCardInput}
          value={this.state.useLiteCreditCardInput} /> */}

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
            onPress={() => this.props.navigation.goBack()}
            name="ios-arrow-back"
            size={24}
            color="#ffffff"
          />
        </View>

        <Text style={styles.headerText}>Add Card</Text>

        <View />
      </View>
      <View style={styles.footer}>

      <LinearGradient
          colors={["#5f0a87", "#a4508b"]}
          style={{
            borderRadius: 14,
            padding: 16,
            marginTop: "10%",
            alignItems: "center",
            marginBottom:20,
            width:wp('80%'),
            alignSelf:'center'
          }}
        >
        
            <TouchableOpacity
              style={{ width: "100%", alignItems: "center", }}
              onPress={() => navigation.navigate("Home")}
              activeOpacity={0.9}
            >
              <Text
                style={{ color: "#ffffff", fontSize: 18, fontWeight: "bold" }}
              >
                {" "}
                Deposit
              </Text>
            </TouchableOpacity>
        
        </LinearGradient>
      <CreditCardInput
              autoFocus
              requiresName
              requiresCVC
            
              cardScale={1.2}
              labelStyle={styles.label}
              inputStyle={styles.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />

      </View>
           
          
        
      </View>
    );
  }
}