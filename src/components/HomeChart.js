import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  TouchableHighlight,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import RecentActivityFlat from "./RecentActivityFlat";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeChart() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftIcon}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="ios-arrow-back"
            size={22}
            color="#ffffff"
          />
        </View>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 22,
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          BRG / BTC
        </Text>

        <View style={styles.rightIcon}>
          <AntDesign onPress={()=>navigation.navigate('BankDepositScreen')} name="sharealt" size={24} color="#ffffff" />
        </View>
      </View>

      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 44, color: "#ffffff" }}>$108.84</Text>
        <Text style={{ color: "orange", textAlign: "center" }}>
          -$1.64 <Text style={{ color: "#ffffff" }}>(1.49%)</Text>
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ color: "#ffffff" }}> 24h </Text>
          <Text style={{ color: "#ffffff" }}> 1W </Text>
          <Text style={{ color: "#ffffff" }}> 1M </Text>
          <Text style={{ color: "#ffffff" }}> 1Y </Text>
          <Text style={{ color: "#ffffff" }}> 2Y </Text>
        </View>

        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 20} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#137383",
            backgroundGradientFrom: "#19A9C7",
            backgroundGradientTo: "#137383",

            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "6",
              stroke: "orange",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 10,
            alignSelf: "center",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ color: "#ffffff" }}> 13:00 </Text>
          <Text style={{ color: "#ffffff" }}> 14:00 </Text>
          <Text style={{ color: "#ffffff" }}> 15:00 </Text>
          <Text style={{ color: "#ffffff" }}> 16:00 </Text>
          <Text style={{ color: "#ffffff" }}> 17:00 </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 25,
        }}
      >
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.button}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" }}
            >
              BUY
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{ ...styles.button, backgroundColor: "tomato" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" }}>
            SELL
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: 10,
            marginTop: 10,
          }}
        >
          Recent Activity
        </Text>
        <RecentActivityFlat />
      </View>

      {/* Modal */}

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "tomato" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide </Text>
              </TouchableHighlight>

              <View style={{ alignSelf: "flex-start", paddingHorizontal: 25 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  Balance
                </Text>
                <Text
                  style={{
                    fontSize: 34,
                    fontStyle: "italic",
                    opacity: 0.7,
                    color: "#0E0E0E",
                    marginTop: 10,
                    lineHeight: 42,
                  }}
                >
                  $2832.65
                </Text>
              </View>

              <View
                style={{
                  width: wp("90%"),
                  marginTop: 30,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 20,
                  backgroundColor: "#f7f7f7",
                  borderRadius: 20,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      paddingBottom: 20,
                    }}
                  >
                    Ehtereum
                  </Text>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                        backgroundColor: "tomato",
                        elevation: 5,
                      }}
                    >
                      <FontAwesome5 name="ethereum" size={24} color="#ffffff" />
                    </View>

                    <Text
                      style={{
                        marginLeft: 10,
                        fontWeight: "bold",
                        color: "gray",
                      }}
                    >
                      ETH
                    </Text>
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      paddingBottom: 20,
                    }}
                  >
                    $13.990
                  </Text>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>0.782</Text>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontWeight: "bold",
                        color: "gray",
                      }}
                    >
                      ETH
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  width: wp("90%"),
                  borderRadius: 10,
                  marginTop: hp("3%"),
                  padding: 20,
                  borderWidth: 2,
                  borderColor: "#137383",
                }}
              >
                <Text style={{ color: "gray", fontWeight: "bold" }}>
                  Wallet Address
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "gray" }}>camron.johnson@stark.co</Text>
                  <MaterialCommunityIcons
                    name="checkbox-marked-circle"
                    size={24}
                    color="skyblue"
                  />
                </View>
              </View>

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingTop: 20,
                  alignSelf: "flex-start",
                  paddingHorizontal: 20,
                }}
              >
                Purchase Price
              </Text>
              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: wp("100%"),
                }}
              >
                <View
                  style={{
                    width: wp("40%"),
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 25,
                    backgroundColor: "#f7f7f7",
                  }}
                >
                  <Text style={{ fontSize: 23, fontWeight: "bold" }}>
                    0.1254 ETH
                  </Text>
                </View>

                <View
                  style={{
                    width: wp("40%"),
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 25,
                    backgroundColor: "#f7f7f7",
                  }}
                >
                  <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                    0.1254 ETH
                  </Text>
                </View>
              </View>

              <View style={{ marginTop: hp("8%") }}>
                <Text
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: 10,
                    marginBottom: 10,
                    color: "gray",
                  }}
                >
                  Fee = 0.000000012 ETH
                </Text>
                <LinearGradient
                  colors={["#137383", "#19A9C7", "#82ECF9"]}
                  style={{
                    borderRadius: 14,
                    padding: 16,

                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{ width: wp("85%"), alignItems: "center" }}
                    onPress={() => setModalVisible(false)}
                    activeOpacity={0.9}
                  >
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      Buy Now
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
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

  button: {
    width: 150,
    height: 60,
    backgroundColor: "#19A9C7",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    width: "100%",
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignSelf: "center",
    paddingLeft: 20,
  },

  enteredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: hp("3.5%"),
    backgroundColor: "#343851",
  },
  modalView: {
    width: "100%",
    height: "100%",
    marginTop: "20%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "orange",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    bottom: hp("3%"),
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  modalTopText: {
    fontSize: wp("6%"),
    fontWeight: "bold",

    color: "#898EAA",
  },

  recentView: {
    width: wp("90%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: hp("1%"),
  },

  listView: {
    width: wp("90%"),
    height: hp("10%"),
    backgroundColor: "#fff",
    marginTop: hp("3.5%"),
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    borderRadius: 20,
    marginLeft: wp("4%"),
    height: hp("8%"),
    width: wp("15%"),
  },
  dtp: {
    color: "#777B99",
    fontSize: wp("3.5%"),
    fontWeight: "bold",
  },
  bottomText: {
    marginTop: hp("0.8%"),
    color: "#D6D6D8",
    fontSize: wp("3.5%"),
  },
  text1View: {
    width: wp("50%"),
    marginLeft: wp("4%"),
  },
  pdf: {
    color: "#D6D6D8",
  },
  iconRow: {
    flexDirection: "row",
    marginLeft: wp("3%"),
    marginRight: wp("26%"),
  },
});
