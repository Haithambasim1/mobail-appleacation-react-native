import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "react-native-web";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            position: "absolute",
            width: 58,
            height: 23,
            left: 178,
            top: 57,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontSize: 20,
            fontWeight: 700,
            lineHeigt: 23,
            color: "#fff",
          }}
        >
          Home
        </Text>
      </View>
      <View style={styles.home}>
        <Text style={styles.txt}>Catagories</Text>
        <Text
          style={{
            position: "absolute",
            width: 51,
            height: 18,
            top: 35,
            right: 30,
            left: 333,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 15,
            lineHeight: 18,
            letterSpacing: "0.02rem",
            color: "#FD5606",
          }}
        >
          See all
        </Text>
        <View style={styles.box}>
          <Text style={styles.titel}>Electronics</Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.titel}>Jewelery</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.titel}>Men's Clothing</Text>
        </View>
        <Text
          style={{
            position: "absolute",
            width: 133,
            height: 23,
            top: 217,
            right: 252,
            left: 31,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: 20,
            lineHeight: 18,
            letterSpacing: "0.02rem",
            color: "#000",
          }}
        >
          Top Products
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 51,
            height: 18,
            top: 219,
            right: 30,
            left: 333,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 15,
            lineHeight: 18,
            letterSpacing: "0.02rem",
            color: "#FD5606",
          }}
        >
          See all
        </Text>
        <View style={styles.prodctBox}>
          <Image
            source={require("../images/product img.png")}
            style={{
              position: "absolute",
              width: 45,
              height: 64,
              top: 12,
              left: 21,
            }}
          />
          <View style={styles.prodctdes}>
            <Text style={styles.prodctTitel}>Fjallraven - Foldsack...</Text>
            <Text style={styles.prodctTxt}>Men's Clothing</Text>
            <Text style={styles.price}>109.95$</Text>
            <Image
              source={require("../images/Star 1.png")}
              style={{
                position: "absolute",
                width: 13,
                height: 13,
                top: 23,
                left: 299,
              }}
            />
            <Text
              style={{
                position: "absolute",
                width: 19,
                height: 11,
                top: 24,
                left: 314,
                fontFamily: "Roboto",
                fontSize: "normal",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: 14,
              }}
            >
              3.9
            </Text>
            <View style={styles.btnBox}>
              <Button titel="Buy Now" color="#FD5606" />
            </View>
          </View>
        </View>

        <View style={{ top: 550, left: 32, Color: "#fff" }}>
          <Image
            source={require("../images/product img.png")}
            style={{
              position: "absolute",
              width: 45,
              height: 64,
              top: 12,
              left: 21,
            }}
          />
          <View style={styles.prodctdes}>
            <Text style={styles.prodctTitel}>Fjallraven - Foldsack...</Text>
            <Text style={styles.prodctTxt}>Men's Clothing</Text>
            <Text style={styles.price}>109.95$</Text>
            <Image
              source={require("../images/Star 1.png")}
              style={{
                position: "absolute",
                width: 13,
                height: 13,
                top: 23,
                left: 299,
              }}
            />
            <Text
              style={{
                position: "absolute",
                width: 19,
                height: 11,
                top: 24,
                left: 314,
                fontFamily: "Roboto",
                fontSize: "normal",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: 14,
              }}
            >
              3.9
            </Text>
            <View style={styles.btnBox}>
              <Button titel="Buy Now" color="#FD5606" />
            </View>
          </View>
        </View>
        <View style={{ top: 400, left: 32, Color: "#fff" }}>
          <Image
            source={require("../images/product img.png")}
            style={{
              position: "absolute",
              width: 45,
              height: 64,
              top: 12,
              left: 21,
            }}
          />
          <View style={styles.prodctdes}>
            <Text style={styles.prodctTitel}>Fjallraven - Foldsack...</Text>
            <Text style={styles.prodctTxt}>Men's Clothing</Text>
            <Text style={styles.price}>109.95$</Text>
            <Image
              source={require("../images/Star 1.png")}
              style={{
                position: "absolute",
                width: 13,
                height: 13,
                top: 23,
                left: 299,
              }}
            />
            <Text
              style={{
                position: "absolute",
                width: 19,
                height: 11,
                top: 24,
                left: 314,
                fontFamily: "Roboto",
                fontSize: "normal",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: 14,
              }}
            >
              3.9
            </Text>
            <View style={styles.btnBox}>
              <Button titel="Buy Now" color="#FD5606" />
            </View>
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
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Products");
          }}
        >
          <Image
            source={require("../images/Vector (6).png")}
            style={{
              position: "absolute",
              left: 300,
              top: 700,
              width: 30,
              height: 10,
              backgroundColor: "#FD5606",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    with: "100%",
    height: "100%",
  },
  header: {
    position: "absolute",
    width: 414,
    height: 98,
    left: 0,
    top: 0,
    backgroundColor: "#FD5606",
  },
  home: {
    position: "absolute",
    width: 414,
    height: 798,
    left: 0,
    top: 98,
    backgroundColor: "rgba(254, 142, 89, 0.16)",
  },
  txt: {
    position: "absolute",
    width: 108,
    height: 23,
    top: 33,
    right: 275,
    left: 31,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: "0.02rem",
    color: "#000",
  },
  box: {
    position: "absolute",
    width: 108,
    height: 106,
    top: 78,
    left: 31,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  titel: {
    position: "absolute",
    width: 65,
    height: 14,
    top: 47,
    left: 21,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: "0.02rem",
    color: "#172331",
  },
  box1: {
    position: "absolute",
    width: 108,
    height: 106,
    top: 78,
    left: 153,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  box2: {
    position: "absolute",
    width: 108,
    height: 106,
    top: 78,
    left: 275,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  prodctBox: {
    position: "absolute",
    width: 352,
    height: 89,
    top: 256,
    left: 32,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  btnBox: {
    position: "absolute",
    width: 66.29,
    height: 24,
    top: 47,
    left: 267,
    backgroundColor: "#FD5606",
    borderRadius: 5,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
  },
  prodctTitel: {
    position: "absolute",
    width: 170,
    height: 18,
    top: 17,
    left: 85,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: "0.02rem",
    color: "#000",
  },
  prodctTxt: {
    position: "absolute",
    width: 87,
    height: 14,
    top: 39,
    left: 85,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: "0.02rem",
    color: "#8C8FA5",
  },
  price: {
    position: "absolute",
    width: 46,
    height: 14,
    top: 58,
    left: 85,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: "0.02rem",
    color: "#172331",
  },
  barBox: {
    position: "absolute",
    width: 410,
    height: 56,
    top: 340,
    left: -30,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
});

export default Home;
