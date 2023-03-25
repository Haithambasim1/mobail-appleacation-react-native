import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Profaile = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/Vector (6).png")}
        style={{
          position: "absolute",
          left: 33,
          top: 66.5,
          width: 28,
          height: 2.5,
        }}
      />
      <Text
        style={{
          position: "absolute",
          width: 65,
          height: 23,
          left: 175,
          top: 57,
          fontFamily: "Raleway",
          fontStyle: "normal",
          fontSize: 20,
          fontWeight: 700,
          lineHeigt: 23,
          color: "#fff",
        }}
      >
        Profile
      </Text>
      <Image
        source={require("../images/Vector (7).png")}
        style={{
          position: "absolute",
          left: 110,
          top: 183,
          width: 193,
          height: 193,
          right: 112,
        }}
      />
      <Image
        source={require("../images/Vector (8).png")}
        style={{
          position: "absolute",
          left: 171,
          top: 218,
          width: 70,
          height: 70,
          right: 112,
        }}
      />
      <Text
        style={{
          position: "absolute",
          width: 286,
          height: 32,
          left: 80,
          top: 430,
          fontFamily: "Raleway",
          fontStyle: "normal",
          fontSize: 30,
          fontWeight: 700,
          lineHeigt: 35,
          color: "#fff",
        }}
      >
        Haitham Mohasien
      </Text>
      <Text
        style={{
          position: "absolute",
          width: 286,
          height: 32,
          left: 80,
          top: 430,
          fontFamily: "Raleway",
          fontStyle: "normal",
          fontSize: 30,
          fontWeight: 700,
          lineHeigt: 35,
          color: "#fff",
        }}
      >
        <Text
          style={{
            position: "absolute",
            width: 286,
            height: 23,
            left: 14,
            top: 55,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontSize: 18,
            fontWeight: 500,
            lineHeigt: 23,
            color: "#fff",
          }}
        >
          haithamMohasin@gmail.com
        </Text>
      </Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Splash");
        }}
      >
        <View style={styles.btnContainer}>
          <Button title="Log out" color={"#FD5606"} />
        </View>
      </TouchableOpacity>
      <View style={styles.barBox}>
        <Image
          source={require("../images/Vector (2).png")}
          style={{
            position: "absolute",
            width: 25,
            height: 25,
            top: 12,
            left: 43,
            color: "#FD5606",
          }}
        />
        <Image
          source={require("../images/Vector (4).png")}
          style={{
            position: "absolute",
            width: 29,
            height: 25,
            top: 12,
            left: 118,
          }}
        />
        <Image
          source={require("../images/Vector (3).png")}
          style={{
            position: "absolute",
            width: 29,
            height: 25,
            top: 12,
            left: 197,
          }}
        />
        <Image
          source={require("../images/Vector (5).png")}
          style={{
            position: "absolute",
            width: 29,
            height: 25,
            top: 12,
            left: 275,
          }}
        />
        <Image
          source={require("../images/Vector (1).png")}
          style={{
            position: "absolute",
            width: 29,
            height: 25,
            top: 12,
            left: 349,
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    with: "100%",
    height: "100%",
    backgroundColor: "#FD5606",
  },
  btnContainer: {
    position: "absolute",
    width: 181,
    height: 40,
    top: 633,
    left: 114,
    right: 120,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  barBox: {
    position: "absolute",
    width: 410,
    height: 56,
    top: 840,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
});

export default Profaile;
