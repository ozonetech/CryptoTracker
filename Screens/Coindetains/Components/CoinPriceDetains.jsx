import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "../style";
import crypto from "../../../assets/data/crypto.json";

export default function CoinPriceDetains() {
  const {
    image: { small },
    symbol,
    market_cap,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
    name,
  } = crypto;
  return (
    <View style={styles.coinPrice}>
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.currentPrice}>{current_price.usd.toFixed(2)}</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.priceChange}>
          <AntDesign
            name="caretup"
            size={12}
            color="white"
            style={{ marginRight: 10, alignSelf: "center" }}
          />
          <Text style={{ color: "#fff" }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
