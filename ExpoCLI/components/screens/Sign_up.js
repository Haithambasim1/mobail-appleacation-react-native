import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Sign_up(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  var handleSubmitForm = function () {
    let error = { emailError: null, passwordError: null };
    if (!email) {
      error.emailError = "Email Address field is required";
    }
    if (!password) {
      error.passwordError = "Password field is required";
    } else if (password.length < 8) {
      error.passwordError = "Your password needs to be more than 8 characters";
    }
    (error.emailError || error.passwordError) && setErrorMessage(error);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>

      <View style={styles.formField}>
        <Text style={styles.labelField}>Username</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={setEmail}
          placeholder="haitham-Mohasin"
        />
        {errorMessage && errorMessage.emailError && (
          <Text style={styles.errorMessage}>{errorMessage.emailError}</Text>
        )}
      </View>
      <View style={styles.formField}>
        <Text style={styles.labelField}>Email</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={setEmail}
          placeholder="example@gmail.com"
        />
        {errorMessage && errorMessage.emailError && (
          <Text style={styles.errorMessage}>{errorMessage.emailError}</Text>
        )}
      </View>
      <View style={styles.formField}>
        <Text style={styles.labelField}>password</Text>
        <Text style={styles.txt}>Sign up to continue.</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={setPassword}
          placeholder="*******"
        />
        {errorMessage && errorMessage.passwordError && (
          <Text style={styles.errorMessage}>{errorMessage.passwordError}</Text>
        )}
      </View>
      <View style={styles.formField}>
        <Text style={styles.labelFieldLast}>Confirm Password</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={setPassword}
          placeholder="*******"
        />
        {errorMessage && errorMessage.passwordError && (
          <Text style={styles.errorMessage}>{errorMessage.passwordError}</Text>
        )}
      </View>
      <View
        style={{
          marginTop: 130,
          width: "320px",
          position: "absolute",
          left: 50,
          top: 570,
          height: 45,
          borderRadius: 20,
        }}
      >
        {" "}
        <Button
          title="Sign Up"
          onPress={handleSubmitForm}
          color="#FD5606"
        />{" "}
        <Text
          style={{
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 15,
            lineHeight: 18,
            letterSpacing: "0.03rem",
            color: "gray",
            marginTop: 100,
            marginLeft: 30,
            opacity: 0.8,
          }}
        >
          Don’t have an account?{" "}
          <TouchableOpacity
            style={{ color: "#FD5606", letterSpacing: "0.03em" }}
          >
            Sign in
          </TouchableOpacity>{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sign_in");
          }}
        >
          <Image
            source={require("../images/Vector (6).png")}
            style={{
              position: "absolute",
              left: 290,
              top: 0,
              width: 30,
              height: 10,
              backgroundColor: "#000",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
    alignContent: "center",
    padding: 8,
  },
  header: {
    position: "absolute",
    width: 237,
    height: 35,
    left: 88,
    top: 168,
    right: 89,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: "0.03rem",
    color: "#FD5606",
  },
  txt: {
    position: "absolute",
    width: 192,
    height: 23,
    left: 110,
    top: -250,
    right: 112,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 18.5,
    lineHeight: 23,
    letterSpacing: "0.03rem",
    color: "#172331",
    textAlign: "center",
  },
  formContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: 12,
  },
  formField: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    marginTop: "40px",
    padding: 30,
  },
  inputField: {
    position: "absolute",
    with: "100%",
    height: "45px",
    fontSize: "20px",
    backgroundColor: "#fff",
    left: 42,
    top: 10,
    right: 42,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 12,
    fontSize: 14,
    opacity: 0.7,
  },
  labelField: {
    position: "absolute",
    width: 77,
    height: 18,
    left: 42,
    top: -15,
    right: 295,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 15,
    textAlign: "center",
    letterSpacing: "0.03em",
    opacity: 0.7,
    paddingTop: 12,
  },
  labelFieldLast: {
    position: "absolute",
    width: 135,
    height: 36,
    left: 45,
    top: -15,
    right: 295,
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: "0.03em",
    opacity: 0.7,
    paddingTop: 12,
  },
  submitButton: {
    margin: 24,
    textAlign: "center",
    padding: "8px",
    borderRadius: "20px",
    color: "white",
    fontWeigh: "bolder",
    fontSize: "16px",
  },
  messageContainer: {
    backgroundColor: "rgb(255, 203, 203)",
    borderRadius: "16px",
    padding: "10px 16px",
    textAlign: "center",
    marginTop: 25,
  },
  errorMessage: {
    position: "absolute",
    top: 50,
    fontSize: "14px",
    color: "red",
    fontWeigh: "bolder",
    zIndex: 100,
    marginLeft: 30,
    paddingTop: 22,
  },
};
