import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Homescreen from "./Screens/Coins/Homescreen";
import Coindetains from "./Screens/Coindetains";
import Navigation from "./Screens/Navigation";
export default function App() {
  return <Navigation></Navigation>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
});
