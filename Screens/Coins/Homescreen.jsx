import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FlatList } from "react-native";
import cryptocurrencies from "../../assets/data/cryptocurrencies.json";
import CoinItem from "./Components/CoinItem";
import headerdata from "../../assets/data/Headerdata.json";
import Headerlist from "../Coindetains/Components/Headerlist.jsx";

export default function Homescreen() {
  const { headertitle } = headerdata;
  const screenHeight = Dimensions.get("screen").height;
  return (
    <SafeAreaView>
      <View style={styles.homeScreenContainer}>
        <View style={{ top: Platform.OS === "ios" ? "1%" : "5%" }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ zIndex: 1 }}
            horizontal={true}
            data={headerdata}
            renderItem={({ item }) => (
              <Headerlist headerData={item}></Headerlist>
            )}
          ></FlatList>
          <FlatList
            data={cryptocurrencies}
            renderItem={({ item }) => <CoinItem marketCoin={item}></CoinItem>}
          ></FlatList>
          <StatusBar style="light" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    backgroundColor: "#121212",
  },
});
