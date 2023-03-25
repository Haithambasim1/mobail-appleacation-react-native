import { View, StyleSheet, Image, Text, Button } from "react-native";
import React from "react";

const Cart = (props) => {
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
          Cart
        </Text>
      </View>
      <View style={styles.body}>
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
          <Image
            source={require("../images/Vector (9).png")}
            style={{
              position: "absolute",
              left: 327,
              top: 15,
              width: 8,
              height: 8,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 55,
              height: 14,
              top: 55,
              left: 293,
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
          <View
            style={{
              position: "absolute",
              width: 131,
              height: 30,
              top: 81,
              left: 116,
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
                top: 0,
                left: 60,
                zIndex: 10,
              }}
            >
              0
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              width: 33,
              height: 30,
              top: 81,
              left: 116,
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
                top: 0,
                left: 10,
                zIndex: 10,
              }}
            >
              -
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              width: 33,
              height: 30,
              top: 81,
              left: 214,
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
                top: 0,
                left: 10,
                zIndex: 10,
              }}
            >
              +
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            width: 352,
            height: 123,
            top: 161,
            left: 32,
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        >
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
          <Image
            source={require("../images/Vector (9).png")}
            style={{
              position: "absolute",
              left: 327,
              top: 15,
              width: 8,
              height: 8,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 55,
              height: 14,
              top: 55,
              left: 293,
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
          <View
            style={{
              position: "absolute",
              width: 131,
              height: 30,
              top: 81,
              left: 116,
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
                top: 0,
                left: 60,
                zIndex: 10,
              }}
            >
              0
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              width: 33,
              height: 30,
              top: 81,
              left: 116,
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
                top: 0,
                left: 10,
                zIndex: 10,
              }}
            >
              -
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              width: 33,
              height: 30,
              top: 81,
              left: 214,
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
                top: 0,
                left: 10,
                zIndex: 10,
              }}
            >
              +
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            width: 352,
            height: 123,
            top: 298,
            left: 32,
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        >
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
          <Image
            source={require("../images/Vector (9).png")}
            style={{
              position: "absolute",
              left: 327,
              top: 15,
              width: 8,
              height: 8,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 55,
              height: 14,
              top: 55,
              left: 293,
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
          <View
            style={{
              position: "absolute",
              width: 131,
              height: 30,
              top: 81,
              left: 116,
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
                top: 0,
                left: 60,
                zIndex: 10,
              }}
            >
              0
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              width: 33,
              height: 30,
              top: 81,
              left: 116,
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
                top: 0,
                left: 10,
                zIndex: 10,
              }}
            >
              -
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              width: 33,
              height: 30,
              top: 81,
              left: 214,
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
                top: 0,
                left: 10,
                zIndex: 10,
              }}
            >
              +
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            width: 352,
            height: 123,
            top: 435,
            left: 32,
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        >
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
          <Image
            source={require("../images/Vector (9).png")}
            style={{
              position: "absolute",
              left: 327,
              top: 15,
              width: 8,
              height: 8,
            }}
          />
          <Text
            style={{
              position: "absolute",
              width: 55,
              height: 14,
              top: 55,
              left: 293,
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
          <View
            style={{
              position: "absolute",
              width: 131,
              height: 30,
              top: 81,
              left: 116,
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
                top: 0,
                left: 60,
                zIndex: 10,
              }}
            >
              0
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              width: 33,
              height: 30,
              top: 81,
              left: 116,
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
                top: 0,
                left: 10,
                zIndex: 10,
              }}
            >
              -
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              width: 33,
              height: 30,
              top: 81,
              left: 214,
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
                top: 0,
                left: 10,
                zIndex: 10,
              }}
            >
              +
            </Text>
          </View>
        </View>
        <Text
          style={{
            position: "absolute",
            color: "#8C8FA5",
            fontSize: 15,
            width: 80,
            height: 19,
            top: 590,
            left: 32,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          Sub-total
        </Text>
        <Text
          style={{
            position: "absolute",
            color: "#8C8FA5",
            fontSize: 15,
            width: 80,
            height: 19,
            top: 590,
            left: 310,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          1000.99
        </Text>
        <Text
          style={{
            position: "absolute",
            color: "#8C8FA5",
            fontSize: 15,
            width: 80,
            height: 19,
            top: 620,
            left: 32,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          Delevary
        </Text>
        <Text
          style={{
            position: "absolute",
            color: "#8C8FA5",
            fontSize: 15,
            width: 80,
            height: 19,
            top: 620,
            left: 310,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          10.56
        </Text>
        <Text
          style={{
            position: "absolute",
            color: "#FD5606",
            fontSize: 15,
            width: 80,
            height: 19,
            top: 650,
            left: 32,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          Total
        </Text>
        <Text
          style={{
            position: "absolute",
            color: "#FD5606",
            fontSize: 15,
            width: 80,
            height: 19,
            top: 650,
            left: 310,
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          1010.56
        </Text>
      </View>
      <View
        style={{
          width: 351,
          position: "absolute",
          left: 37,
          top: 788,
          height: 40,
          borderRadius: 10,
          backgroundColor: "#FD5606",
        }}
      >
        <Button
          title="Checkout"
          color="#FD5606"
          onPress={() => {
            props.navigation.navigate("Profaile");
          }}
        />{" "}
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
  },
  header: {
    position: "absolute",
    width: 414,
    height: 98,
    left: 0,
    top: 0,
    backgroundColor: "#FD5606",
  },
  body: {
    position: "absolute",
    width: 414,
    height: 798,
    left: 0,
    top: 98,
    backgroundColor: "rgba(254, 142, 89, 0.16)",
  },
  product: {
    position: "absolute",
    width: 352,
    height: 123,
    top: 24,
    left: 32,
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

export default Cart;
