import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";

const Catigoreis = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
            width: 105,
            height: 23,
            left: 152,
            top: 57,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontSize: 20,
            fontWeight: 700,
            lineHeigt: 23,
            color: "#fff",
          }}
        >
          Categories
        </Text>
      </View>
      <View style={styles.categories}>
        <Text style={styles.titel}>Electronics</Text>
      </View>
      <View style={styles.categories1}>
        <Text style={styles.titel}>Electronics</Text>
      </View>
      <View style={styles.categories2}>
        <Text style={styles.titel}>Electronics</Text>
      </View>
      <View style={styles.categories3}>
        <Text style={styles.titel}>Electronics</Text>
      </View>
      <View style={styles.categories4}>
        <Text style={styles.titel}>Electronics</Text>
      </View>
      <View style={styles.categories5}>
        <Text style={styles.titel}>Electronics</Text>
      </View>
      <View style={styles.categories6}>
        <Text style={styles.titel}>Electronics</Text>
      </View>
      <View style={styles.categories7}>
        <Text style={styles.titel}>Electronics</Text>
      </View>
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
    backgroundColor: "rgba(254, 142, 89, 0.16)",
  },
  header: {
    position: "absolute",
    width: 414,
    height: 98,
    left: 0,
    top: 0,
    backgroundColor: "#FD5606",
  },
  categories: {
    position: "absolute",
    width: 160,
    height: 165,
    left: 34,
    top: 130,
    right: 220,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  titel: {
    position: "absolute",
    width: 108,
    height: 23,
    left: 26,
    top: 71,
    backgroundColor: "#FFFFFF",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontSize: 20,
    fontWeight: 500,
    lineHeigt: 23,
    letterSpacing: "0.02em",
    color: "#172331",
  },
  categories1: {
    position: "absolute",
    width: 160,
    height: 165,
    left: 223,
    top: 130,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  categories2: {
    position: "absolute",
    width: 160,
    height: 165,
    left: 34,
    top: 327,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  categories3: {
    position: "absolute",
    width: 160,
    height: 165,
    left: 223,
    top: 327,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  categories4: {
    position: "absolute",
    width: 160,
    height: 165,
    left: 34,
    top: 524,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  categories5: {
    position: "absolute",
    width: 160,
    height: 165,
    left: 223,
    top: 524,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  categories6: {
    position: "absolute",
    width: 160,
    height: 165,
    left: 34,
    top: 721,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  categories7: {
    position: "absolute",
    width: 160,
    height: 165,
    left: 223,
    top: 721,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },

  barBox: {
    position: "absolute",
    width: 410,
    height: 56,
    top: 837,
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

export default Catigoreis;
