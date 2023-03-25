import { View, StyleSheet, Image, Text, Button } from "react-native";
import React from "react";

const Product_detailes = (props) => {
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
          width: 250,
          height: 23,
          left: 130,
          top: 56,
          fontFamily: "Raleway",
          fontStyle: "normal",
          fontSize: 20,
          fontWeight: 700,
          lineHeigt: 23,
          color: "#fff",
        }}
      >
        Fjallraven - Foldsac...
      </Text>
      <View style={styles.product}>
        <Image
          source={require("../images/product img.png")}
          style={{
            position: "absolute",
            left: 29,
            top: 16,
            width: 61.5,
            height: 89,
          }}
        />
        <Text
          style={{
            position: "absolute",
            width: 150,
            height: 18,
            top: 23,
            left: 116,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: 18,
            letterSpacing: "0.02rem",
            color: "#000",
          }}
        >
          Fjallraven - Fold...
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 87,
            height: 14,
            top: 54,
            left: 116,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: 14,
            letterSpacing: "0.02rem",
            color: "#8C8FA5",
          }}
        >
          Men's Clothing
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 55,
            height: 14,
            top: 80,
            left: 116,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: 14,
            letterSpacing: "0.02rem",
            color: "#172331",
          }}
        >
          109.95$
        </Text>
        <Image
          source={require("../images/Star 1.png")}
          style={{
            position: "absolute",
            width: 13,
            height: 13,
            left: 13,
            top: 23,
            left: 298,
            borderRadius: 0.5,
          }}
        />
        <Text
          style={{
            position: "absolute",
            width: 18,
            height: 14,
            top: 24,
            left: 318,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: 14,
            letterSpacing: "0.02rem",
            color: "#172331",
          }}
        >
          3.9
        </Text>
      </View>
      <View style={styles.productDiscription}>
        <Text style={styles.productName}>Product Name</Text>

        <Text
          style={{
            position: "absolute",
            width: 355,
            height: 36,
            top: 57,
            left: 37,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 15,
            lineHeight: 18,
            letterSpacing: "0.02rem",
            color: "#8C8FA5",
          }}
        >
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 170,
            height: 18,
            top: 112,
            left: 37,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: 15,
            lineHeight: 18,
            letterSpacing: "0.02rem",
            color: "#8C8FA5",
          }}
        >
          Product Description
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 355,
            height: 330,
            top: 136,
            left: 37,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 15,
            lineHeight: 18,
            letterSpacing: "0.02rem",
            color: "#8C8FA5",
          }}
        >
          Slim-fitting style, contrast raglan long sleeve, three-button henley
          placket, light weight & soft fabric for breathable and comfortable
          wearing. And Solid stitched shirts with round neck made for durability
          and a great fit for casual fashion wear and diehard baseball fans. The
          Henley style round neckline includes a three-button placket.
          Slim-fitting style, contrast raglan long sleeve, three-button henley
          placket, light weight & soft fabric for breathable and comfortable
          wearing. And Solid stitched shirts with round neck made for durability
          and a great fit for casual fashion wear and diehard baseball fans. The
          Henley style round neckline includes a three-button placket.
          Slim-fitting style, contrast raglan long sleeve, three-button henley
          placket, light weight & soft fabric for breathable and comfortable
          wearing.{" "}
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 170,
            height: 18,
            top: 492,
            left: 37,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: 15,
            lineHeight: 18,
            letterSpacing: "0.02rem",
            color: "#8C8FA5",
          }}
        >
          Product Quantity
        </Text>
        <View
          style={{
            position: "absolute",
            width: 170,
            height: 40,
            top: 481,
            left: 217,
            backgroundColor: "rgba(254, 142, 49, 0.5)",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              position: "absolute",
              color: "#fff",
              fontSize: 22,
              width: 44,
              height: 22,
              top: 8,
              left: 85,
              zIndex: 10,
            }}
          >
            0
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            width: 43,
            height: 40,
            top: 481,
            left: 217,
            backgroundColor: "#FD5606",
            borderRadius: 10,
            zIndex: -1,
          }}
        >
          <Text
            style={{
              position: "absolute",
              color: "#fff",
              fontSize: 22,
              width: 44,
              height: 22,
              top: 8,
              left: 15,
              zIndex: 10,
            }}
          >
            -
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            width: 43,
            height: 40,
            top: 481,
            left: 361,
            backgroundColor: "#FD5606",
            borderRadius: 10,
            zIndex: -1,
          }}
        >
          <Text
            style={{
              position: "absolute",
              color: "#fff",
              fontSize: 22,
              width: 44,
              height: 22,
              top: 8,
              left: 15,
              zIndex: 10,
            }}
          >
            +
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 351,
          position: "absolute",
          left: 37,
          top: 811,
          height: 40,
          borderRadius: 10,
          backgroundColor: "#FD5606",
        }}
      >
        {" "}
        <Button
          title="Add to cart"
          color="#FD5606"
          onPress={() => {
            props.navigation.navigate("Cart");
          }}
        />{" "}
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
  product: {
    position: "absolute",
    width: 352,
    height: 123,
    top: 102,
    left: 32,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  productDiscription: {
    position: "absolute",
    width: 415,
    height: 644,
    top: 253,
    backgroundColor: "#fff",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  productName: {
    position: "absolute",
    width: 110,
    height: 18,
    top: 29,
    left: 37,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: "0.02rem",
    color: "#8C8FA5",
  },
});
export default Product_detailes;
