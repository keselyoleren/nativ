import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/components/Home/screens/HomeScreen";
import LoginScreen from "./src/components/Home/screens/LoginScreen";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen
});

export default createAppContainer(AppNavigator);