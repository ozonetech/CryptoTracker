import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import styles from "./style";
import crypto from "../../assets/data/crypto.json";
import Headerlist from "./Components/Headerlist";
import headerdata from "../../assets/data/Headerdata.json";
import CoinDetainNav from "./Components/CoinDetainNav";
import CoinPriceDetains from "./Components/CoinPriceDetains";
import Charts from "./Components/Charts";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { getCoinDetainedData, getCoinMarketCharts } from "../Services/request";

export default function Coindetains() {
  const {
    image: { small },
    symbol,
    market_cap,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
    name,
  } = crypto;

  const { width: SIZE } = Dimensions.get("window");

  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(current_price.usd.toString());
  const [coindata, setcoindate] = useState(null);
  const [coinMarketData, setMarketData] = useState(null);
  const [Loading, setLoading] = useState(false);

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value) || 0;
    setUsdValue((floatValue * current_price.usd).toString());
  };
  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatvalue = parseFloat(value) || 0;
    setCoinValue((floatvalue / current_price.usd).toString());
  };
  // const {
  //   params: { coinId },
  // } = useRoute();
  // console.log(coinId);

  // const fetchCoinData = async () => {
  //   setLoading(true);
  //   const fetchedCoindata = await getCoinDetainedData(coinId);
  //   const fetchedCoinMarketData = await getCoinMarketCharts(coinId);
  //   setcoindate(fetchedCoindata);
  //   setMarketData(fetchedCoinMarketData);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchCoinData();
  // }, []);

  // if (Loading || !coindata || !coinMarketData) {
  //   return <ActivityIndicator size={"large"} />;
  // }
  return (
    <View style={[styles.coindetainScreen, { flex: 1 }]}>
      <StatusBar style="light"></StatusBar>
      <View style={{ flex: 1, top: 25 }}>
        <CoinDetainNav></CoinDetainNav>
        <View style={{ position: "absolute", top: 60 }}>
          <FlatList
            style={{ zIndex: 1 }}
            horizontal={true}
            data={headerdata}
            renderItem={({ item }) => (
              <Headerlist headerData={item}></Headerlist>
            )}
          ></FlatList>
        </View>
        <CoinPriceDetains></CoinPriceDetains>
        <Charts></Charts>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, margin: 10 }}>
            <Text style={{ color: "white" }}>BTC</Text>
            <KeyboardAvoidingView>
              <TextInput
                style={{
                  borderColor: "white",
                  borderBottomWidth: 2,
                  fontSize: 25,
                  color: "white",
                  padding: 3,
                  fontSize: 20,
                  height: 40,
                  color: "white",
                  overflow: "hidden",
                }}
                value={coinValue}
                keyboardType="numeric"
                onChangeText={changeCoinValue}
              ></TextInput>
            </KeyboardAvoidingView>
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Text style={{ color: "white" }}>USD</Text>
            <TextInput
              style={{
                borderColor: "white",
                borderBottomWidth: 2,
                fontSize: 20,
                color: "white",
                height: 40,
                padding: 3,
              }}
              keyboardType="numeric"
              value={usdValue}
              onChangeText={changeUsdValue}
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
}
