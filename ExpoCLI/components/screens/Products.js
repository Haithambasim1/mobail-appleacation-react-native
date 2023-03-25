import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Products = (props) => {
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
          Products
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Product_detailes");
          }}
        >
          <View style={styles.product}>
            <Image
              source={require("../images/product img.png")}
              style={{
                position: "absolute",
                width: 45,
                height: 64,
                top: 9,
                left: 58,
              }}
            />
            <Text
              style={{
                position: "absolute",
                width: 150,
                height: 18,
                top: 77,
                left: 16,
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
                top: 98,
                left: 38,
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
                top: 119,
                left: 38,
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
                top: 119,
                left: 92,
                borderRadius: 0.5,
              }}
            />
            <Text
              style={{
                position: "absolute",
                width: 18,
                height: 14,
                top: 120,
                left: 107,
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
            <View
              style={{
                position: "absolute",
                width: 95,
                height: 23,
                top: 145,
                left: 33,
                backgroundColor: "#FD5606",
                borderRadius: 5,
                borderTopEndRadius: 10,
                borderTopLeftRadius: 10,
              }}
            >
              <Button titel="Buy Now" color="#FD5606" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Product_detailes");
          }}
        >
          <View
            style={{
              position: "absolute",
              width: 161,
              height: 184,
              left: 223,
              top: 122,
              backgroundColor: "#fff",
              borderRadius: 15,
            }}
          >
            <Image
              source={require("../images/product img.png")}
              style={{
                position: "absolute",
                width: 45,
                height: 64,
                top: 9,
                left: 58,
              }}
            />
            <Text
              style={{
                position: "absolute",
                width: 150,
                height: 18,
                top: 77,
                left: 16,
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
                top: 98,
                left: 38,
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
                top: 119,
                left: 38,
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
                top: 119,
                left: 92,
                borderRadius: 0.5,
              }}
            />
            <Text
              style={{
                position: "absolute",
                width: 18,
                height: 14,
                top: 120,
                left: 107,
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
            <View
              style={{
                position: "absolute",
                width: 95,
                height: 23,
                top: 145,
                left: 33,
                backgroundColor: "#FD5606",
                borderRadius: 5,
                borderTopEndRadius: 10,
                borderTopLeftRadius: 10,
              }}
            >
              <Button titel="Buy Now" color="#FD5606" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Product_detailes");
          }}
        >
          <View
            style={{
              position: "absolute",
              width: 161,
              height: 184,
              left: 31,
              top: 330,
              backgroundColor: "#fff",
              borderRadius: 15,
            }}
          >
            <Image
              source={require("../images/product img.png")}
              style={{
                position: "absolute",
                width: 45,
                height: 64,
                top: 9,
                left: 58,
              }}
            />
            <Text
              style={{
                position: "absolute",
                width: 150,
                height: 18,
                top: 77,
                left: 16,
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
                top: 98,
                left: 38,
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
                top: 119,
                left: 38,
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
                top: 119,
                left: 92,
                borderRadius: 0.5,
              }}
            />
            <Text
              style={{
                position: "absolute",
                width: 18,
                height: 14,
                top: 120,
                left: 107,
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
            <View
              style={{
                position: "absolute",
                width: 95,
                height: 23,
                top: 145,
                left: 33,
                backgroundColor: "#FD5606",
                borderRadius: 5,
                borderTopEndRadius: 10,
                borderTopLeftRadius: 10,
              }}
            >
              <Button titel="Buy Now" color="#FD5606" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Product_detailes");
          }}
        >
          <View
            style={{
              position: "absolute",
              width: 161,
              height: 184,
              left: 223,
              top: 330,
              backgroundColor: "#fff",
              borderRadius: 15,
            }}
          >
            <Image
              source={require("../images/product img.png")}
              style={{
                position: "absolute",
                width: 45,
                height: 64,
                top: 9,
                left: 58,
              }}
            />
            <Text
              style={{
                position: "absolute",
                width: 150,
                height: 18,
                top: 77,
                left: 16,
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
                top: 98,
                left: 38,
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
                top: 119,
                left: 38,
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
                top: 119,
                left: 92,
                borderRadius: 0.5,
              }}
            />
            <Text
              style={{
                position: "absolute",
                width: 18,
                height: 14,
                top: 120,
                left: 107,
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
            <View
              style={{
                position: "absolute",
                width: 95,
                height: 23,
                top: 145,
                left: 33,
                backgroundColor: "#FD5606",
                borderRadius: 5,
                borderTopEndRadius: 10,
                borderTopLeftRadius: 10,
              }}
            >
              <Button titel="Buy Now" color="#FD5606" />
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            width: 161,
            height: 184,
            left: 223,
            top: 538,
            backgroundColor: "#fff",
            borderRadius: 15,
          }}
        >
          <Image
            source={require("../images/product img.png")}
            style={{
              position: "absolute",
              width: 45,
              height: 64,
              top: 9,
              left: 58,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 150,
              height: 18,
              top: 77,
              left: 16,
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
              top: 98,
              left: 38,
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
              top: 119,
              left: 38,
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
              top: 119,
              left: 92,
              borderRadius: 0.5,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 18,
              height: 14,
              top: 120,
              left: 107,
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
          <View
            style={{
              position: "absolute",
              width: 95,
              height: 23,
              top: 145,
              left: 33,
              backgroundColor: "#FD5606",
              borderRadius: 5,
              borderTopEndRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <Button titel="Buy Now" color="#FD5606" />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            width: 161,
            height: 184,
            left: 31,
            top: 538,
            backgroundColor: "#fff",
            borderRadius: 15,
          }}
        >
          <Image
            source={require("../images/product img.png")}
            style={{
              position: "absolute",
              width: 45,
              height: 64,
              top: 9,
              left: 58,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 150,
              height: 18,
              top: 77,
              left: 16,
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
              top: 98,
              left: 38,
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
              top: 119,
              left: 38,
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
              top: 119,
              left: 92,
              borderRadius: 0.5,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 18,
              height: 14,
              top: 120,
              left: 107,
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
          <View
            style={{
              position: "absolute",
              width: 95,
              height: 23,
              top: 145,
              left: 33,
              backgroundColor: "#FD5606",
              borderRadius: 5,
              borderTopEndRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <Button titel="Buy Now" color="#FD5606" />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            width: 161,
            height: 184,
            left: 31,
            top: 746,
            backgroundColor: "#fff",
            borderRadius: 15,
          }}
        >
          <Image
            source={require("../images/product img.png")}
            style={{
              position: "absolute",
              width: 45,
              height: 64,
              top: 9,
              left: 58,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 150,
              height: 18,
              top: 77,
              left: 16,
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
              top: 98,
              left: 38,
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
              top: 119,
              left: 38,
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
              top: 119,
              left: 92,
              borderRadius: 0.5,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 18,
              height: 14,
              top: 120,
              left: 107,
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
          <View
            style={{
              position: "absolute",
              width: 95,
              height: 23,
              top: 145,
              left: 33,
              backgroundColor: "#FD5606",
              borderRadius: 5,
              borderTopEndRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <Button titel="Buy Now" color="#FD5606" />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            width: 161,
            height: 184,
            left: 223,
            top: 746,
            backgroundColor: "#fff",
            borderRadius: 15,
          }}
        >
          <Image
            source={require("../images/product img.png")}
            style={{
              position: "absolute",
              width: 45,
              height: 64,
              top: 9,
              left: 58,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 150,
              height: 18,
              top: 77,
              left: 16,
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
              top: 98,
              left: 38,
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
              top: 119,
              left: 38,
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
              top: 119,
              left: 92,
              borderRadius: 0.5,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 18,
              height: 14,
              top: 120,
              left: 107,
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
          <View
            style={{
              position: "absolute",
              width: 95,
              height: 23,
              top: 145,
              left: 33,
              backgroundColor: "#FD5606",
              borderRadius: 5,
              borderTopEndRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <Button titel="Buy Now" color="#FD5606" />
          </View>
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
  product: {
    position: "absolute",
    width: 161,
    height: 184,
    left: 31,
    top: 122,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  barBox: {
    position: "fixed",
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
export default Products;
