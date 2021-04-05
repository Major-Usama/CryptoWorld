import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import WelcomeComponent from "../components/WelcomeComponent";
import * as Animatable from "react-native-animatable";
// import Welcome from "./Welcome";

export default function Welcome({ navigation }) {
  const refRBSheet = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      refRBSheet.current.open();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    navigation.reset({
      index: 0,
      routes: [{ name: "loginscreen" }],
    });
    refRBSheet.current.close();
  }

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUpBig" style={styles.topText}>
        <Text style={styles.io}>3Oi</Text>
        <Text style={styles.welcome}>Welcome</Text>
      </Animatable.View>

      <Animatable.View animation="fadeOutUpBig">
        <RBSheet
          animationType="slide"
          openDuration={100}
          ref={refRBSheet}
          closeOnDragDown={false}
          closeOnPressMask={false}
          closeOnPressBack={false}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            container: {
              backgroundColor: "#19A9C7",
              flex: 1.8,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            },
            draggableIcon: {
              backgroundColor: "#ffffff",
            },
          }}
        >
          <View>
            <Text style={styles.tagLine}>Investing the _________ Way</Text>
          </View>

          <WelcomeComponent />

          <TouchableOpacity onPress={close}>
            <View style={styles.joinNow}>
              <Text style={{ fontSize: 20, color: "#ffffff" }}>Join Now</Text>
            </View>
          </TouchableOpacity>
        </RBSheet>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#137383",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  topText: {
    alignSelf: "center",
    paddingTop: 50,
  },

  io: {
    color: "#ffffff",
    fontSize: 80,
  },

  welcome: {
    color: "#ffffff",
    fontSize: 25,
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19A9C7",
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 10,
  },

  iText: {
    color: "#ffffff",
    fontSize: 16,
  },

  tagLine: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 20,
    paddingTop: 25,
    opacity: 0.7,
  },

  topText: {
    alignSelf: "center",
    padding: 50,
  },

  io: {
    fontSize: 70,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },

  welcome: {
    fontSize: 30,
    color: "#ffffff",
  },
  joinNow: {
    width: "60%",
    height: 40,
    backgroundColor: "#137383",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  exuser: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#ffffff",
    opacity: 0.7,
    alignSelf: "center",
  },
});
