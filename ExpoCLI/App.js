import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./components/screens/Splash";
import Sign_in from "./components/screens/Sign_in";
import Sign_up from "./components/screens/Sign_up";
import Products from "./components/screens/products";
import Home from "./components/screens/Home";
import Catigoreis from "./components/screens/Catigoreis";
import Profaile from "./components/screens/Profaile";
import Product_detailes from "./components/screens/Product_detailes";
import Cart from "./components/screens/Cart";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Sign_up" component={Sign_up} />
        <Stack.Screen name="Sign_in" component={Sign_in} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Products" component={Products} />

        {<Stack.Screen name="Product_detailes" component={Product_detailes} />}

        <Stack.Screen name="Catigoreis" component={Catigoreis} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Profaile" component={Profaile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
