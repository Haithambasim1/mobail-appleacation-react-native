import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Button, ScrollView } from "react-native-web";

const Splash = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.LogoContainer}>
        <Image
          source={require("../images/logo (2).png")}
          style={{
            width: 45,
            height: 40,
            top: 22,
            left: 20,
            right: 20,
            color: "#FD5606",
          }}
        />
      </View>
      <View style={styles.TitelContainer}>
        <Text style={styles.titel}>Shopping App</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Sign_up");
        }}
        style={{
          width: 181,
          height: 40,
          borderRadius: 10,
          backgroundColor: "#ffff",
          position: "absolute",
          left: 116,
          right: 117,
          top: 699,
          bottom: 157,
        }}
      >
        <Text
          style={{
            width: 112,
            height: 23,
            top: 8,
            left: 34,
            position: "absolute",
            top: "18%",
            left: "18.78%",
            right: "19.34%",
            bottom: "22.5%",
            fontFamily: "Raleway",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: 23,
            letterSpacing: "0.02rem",
            color: "#FD5606",
          }}
        >
          Get started
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Sign_up");
        }}
      >
        <Image
          source={require("../images/Vector (6).png")}
          style={{
            position: "absolute",
            left: 300,
            top: 760,
            width: 30,
            height: 10,
          }}
        />
      </TouchableOpacity>
      <Button titel="hello" />
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
  LogoContainer: {
    width: 89,
    height: 89,
    top: 303,
    left: 163,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
  },

  TitelContainer: {
    position: "absolute",
    width: 258,
    height: 48,
    top: 414,
    left: 78,
  },
  titel: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 37,
    lineHeight: 43,
    letterSpacing: "0.02rem",
    color: "#fff",
  },
});

export default Splash;
