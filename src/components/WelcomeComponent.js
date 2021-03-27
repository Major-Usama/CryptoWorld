import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: { height: "80%" },
  slide1: {
    flex: 0.55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19A9C7",
    margin: 50,
  },
  slide2: {
    flex: 0.55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19A9C7",
    margin: 50,
  },
  slide3: {
    flex: 0.55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19A9C7",
    margin: 50,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  image1: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
});

export default class WelcomeComponent extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        dot={
          <View
            style={{
              backgroundColor: "rgba(0,0,0,.2)",
              width: 8,
              height: 8,
              borderRadius: 4,

              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 70,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#137383",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 70,
            }}
          />
        }
        autoplay={true}
        loop={true}
        
      >
        <View style={styles.slide1}>
          <Image
            style={styles.image1}
            source={require("../../assets/d5.png")}
          />
          <Text style={styles.text}>Comfortable way</Text>
        </View>
        <View style={styles.slide2}>
          <Image
            style={styles.image1}
            source={require("../../assets/d5.png")}
          />
          <Text style={styles.text}>Chic Way</Text>
        </View>
        <View style={styles.slide3}>
          <Image
            style={styles.image1}
            source={require("../../assets/d7.png")}
          />
          <Text style={styles.text}>Savy Way</Text>
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
