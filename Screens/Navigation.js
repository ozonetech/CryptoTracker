import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Coindetains from "./Coindetains";
import Homescreen from "./Coins/Homescreen";
import { StatusBar } from "expo-status-bar";

export default function Navigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer styles={{ height: "100%" }}>
      <Stack.Navigator
        initialRouteName="Homescreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="Coindetains" component={Coindetains}></Stack.Screen>
        <Stack.Screen name="Homescreen" component={Homescreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
