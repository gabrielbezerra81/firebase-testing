import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Home";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
